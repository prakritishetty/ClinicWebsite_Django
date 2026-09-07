const { getDb, verify, recipients, escapeHtml, mailer, mailFrom } = require("./_lib");
const { buildIcs } = require("./_calendar");
const {
  SLOT_MINUTES,
  isValidDate,
  isRealSlot,
  isTooSoon,
  slotsForDate,
  bookableDates,
  slotInstant,
  slotKey,
  followingSlots,
  formatSlot,
} = require("./_schedule");

const CLINIC = "Shop #9, Saidham Complex, P.K. Road, Mulund West, Mumbai 400080";
const DURATIONS = [30, 60, 90];

const MEAL_ADVICE = {
  "": "",
  eat: "Please eat a normal meal before you come.",
  light: "Please have something light before you come, not a heavy meal.",
  empty: "Please come on an empty stomach - do not eat for 2 hours before.",
  after: "You will not be able to eat for about 2 hours after this appointment.",
};

const page = (title, body) => `<!doctype html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,500&family=Jost:wght@400&display=swap" rel="stylesheet">
<style>
 *{box-sizing:border-box}
 body{margin:0;min-height:100vh;display:grid;place-items:center;background:#fff;color:#16233a;
      font-family:"Cormorant Garamond",Georgia,serif;padding:24px}
 .box{max-width:560px;width:100%;text-align:center}
 h1{font-style:italic;font-weight:500;color:#011f4b;font-size:30px;margin:.2em 0 .5em}
 .eyebrow{font-family:Jost,system-ui,sans-serif;font-size:11px;letter-spacing:.28em;
          text-transform:uppercase;color:#b99247;margin:0}
 p{line-height:1.7;color:#3b4757}
 .card{background:#f6f8fb;border-radius:8px;padding:16px 20px;margin:20px 0;text-align:left}
 .note{background:#fdf6e7;border-radius:8px;padding:14px 18px;margin:20px 0;color:#6b5524;text-align:left}
 label{display:block;text-align:left;font-family:Jost,system-ui,sans-serif;font-size:12px;
       letter-spacing:.16em;text-transform:uppercase;color:#3b4757;margin:16px 0 6px}
 select,textarea,button{font-family:Jost,system-ui,sans-serif;font-size:14px;padding:12px;
       border-radius:4px;width:100%}
 select,textarea{border:1px solid #d7dce4;background:#fff}
 textarea{min-height:80px;resize:vertical}
 button{margin-top:22px;font-size:12px;letter-spacing:.2em;text-transform:uppercase;
        padding:14px 30px;border:0;background:#011f4b;color:#fff;cursor:pointer}
 a{color:#005b96}
</style></head><body><div class="box">${body}</div></body></html>`;

const VERB = { confirm: "confirmed", cancel: "declined", reschedule: "rescheduled" };

const when = (a) => formatSlot(a.date, a.time, a.durationMinutes);

const summary = (a) => `<div class="card">
   <b>${escapeHtml(a.patient?.name || "")}</b>${a.patient?.age ? `, ${escapeHtml(a.patient.age)}` : ""}<br>
   ${escapeHtml(a.patient?.phone || "")}<br><br>
   ${escapeHtml(a.reason || "")}
 </div>`;

const durationField = (selected) => `<label for="d">Appointment length</label>
   <select id="d" name="durationMinutes">
     ${DURATIONS.map((m) => `<option value="${m}"${m === selected ? " selected" : ""}>${m} minutes</option>`).join("")}
   </select>`;

const instructionFields = (a) => `<label for="meal">Eating instructions for the patient</label>
   <select id="meal" name="mealAdvice">
     <option value="">No special instructions</option>
     <option value="eat"${a.mealAdvice === "eat" ? " selected" : ""}>Eat a normal meal before coming</option>
     <option value="light"${a.mealAdvice === "light" ? " selected" : ""}>Something light before coming</option>
     <option value="empty"${a.mealAdvice === "empty" ? " selected" : ""}>Come on an empty stomach</option>
     <option value="after"${a.mealAdvice === "after" ? " selected" : ""}>Cannot eat for ~2 hours afterwards</option>
   </select>
   <label for="ins">Anything else the patient should know</label>
   <textarea id="ins" name="instructions" placeholder="Bring previous x-rays, allow extra time, someone should accompany you...">${escapeHtml(a.instructions || "")}</textarea>`;

/** Frees the slot and any extra slots a longer appointment was holding. */
const releaseHolds = async (db, id) => {
  const held = await db.collection("appointments").where("heldBy", "==", id).get();
  await Promise.all(held.docs.map((d) => d.ref.delete()));
};

const patientNotes = (a) =>
  [MEAL_ADVICE[a.mealAdvice] || "", a.instructions || ""].filter(Boolean).join("\n");

/** Sends the calendar invite to the patient and both doctors. */
const sendInvite = async (appt, id, { cancelled = false } = {}) => {
  const startMs = slotInstant(appt.date, appt.time);
  const endMs = startMs + (appt.durationMinutes || SLOT_MINUTES) * 60000;
  const notes = patientNotes(appt);

  const ics = buildIcs({
    uid: `appt-${id.replace(/[^\w-]/g, "")}@drsandhyadental`,
    sequence: appt.sequence || 0,
    method: cancelled ? "CANCEL" : "REQUEST",
    startMs,
    endMs,
    summary: cancelled
      ? "Cancelled - Dental appointment"
      : `Dental appointment - ${appt.patient?.name || "Patient"}`,
    description:
      (appt.reason ? `Reason: ${appt.reason}\n` : "") +
      (notes ? `\n${notes}\n` : "") +
      "\nTo change anything, message us on WhatsApp: +91 98336 30985",
    location: CLINIC,
    organizerName: "Dr Sandhya's Total Dental Care",
    organizerEmail: mailFrom(),
    attendees: [
      appt.patient?.email ? { name: appt.patient.name, email: appt.patient.email } : null,
      ...recipients().map((email) => ({ email })),
    ],
    cancelled,
  });

  const html = `<div style="max-width:560px;margin:0 auto;font-family:Georgia,serif;color:#16233a">
      <p style="font:400 11px/1 Segoe UI,system-ui,sans-serif;letter-spacing:.28em;text-transform:uppercase;color:#b99247">${cancelled ? "Cancelled" : "Confirmed"}</p>
      <h2 style="font-style:italic;font-weight:500;color:#011f4b">${escapeHtml(when(appt))}</h2>
      ${cancelled ? "<p>This appointment has been cancelled.</p>" : ""}
      ${notes ? `<div style="background:#fdf6e7;border-radius:8px;padding:14px 18px;margin:18px 0;color:#6b5524;white-space:pre-wrap">${escapeHtml(notes)}</div>` : ""}
      ${cancelled ? "" : `<p style="line-height:1.7">The invite attached will add this to your calendar and remind you the day before.</p>`}
      <p style="line-height:1.7">To change anything, message us on
        <a href="https://wa.me/919833630985" style="color:#005b96">WhatsApp</a>.</p>
      <p style="font-size:14px;color:#3b4757">${escapeHtml(CLINIC)}</p>
    </div>`;

  const to = [appt.patient?.email, ...recipients()].filter(Boolean);
  if (!to.length) return;

  await mailer()
    .sendMail({
      from: mailFrom(),
      to,
      subject: `${cancelled ? "Cancelled" : "Confirmed"}: dental appointment - ${when(appt)}`,
      html,
      icalEvent: {
        method: cancelled ? "CANCEL" : "REQUEST",
        filename: "appointment.ics",
        content: ics,
      },
    })
    .catch((e) => console.error("invite send failed", e));
};

module.exports = async (req, res) => {
  const params = req.method === "POST" ? { ...req.query, ...req.body } : req.query;
  const { id, action, who, token } = params;

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (!id || !["confirm", "cancel", "reschedule"].includes(action) || !verify(id, action, who, token)) {
    return res.status(400).send(
      page("Invalid link", `<p class="eyebrow">Error</p><h1>This link isn't valid</h1>
        <p>Please use the buttons in the original email.</p>`)
    );
  }

  const actor = recipients()[Number(who)] || "a doctor";
  const db = getDb();
  const ref = db.collection("appointments").doc(id);

  try {
    const snap = await ref.get();
    if (!snap.exists) {
      return res.status(404).send(
        page("Not found", `<p class="eyebrow">Gone</p><h1>This appointment is no longer here</h1>
          <p>It may already have been declined or moved.</p>`)
      );
    }

    const appt = snap.data();
    const hidden = `<input type="hidden" name="id" value="${escapeHtml(id)}">
       <input type="hidden" name="action" value="${escapeHtml(action)}">
       <input type="hidden" name="who" value="${escapeHtml(who)}">
       <input type="hidden" name="token" value="${escapeHtml(token)}">`;

    // First decision wins; the second doctor is shown what happened.
    if (appt.status !== "pending" && req.method !== "POST" && action !== "reschedule") {
      return res.status(200).send(
        page(
          "Already handled",
          `<p class="eyebrow">Already handled</p><h1>${escapeHtml(when(appt))}</h1>
           ${summary(appt)}
           <div class="note"><b>${escapeHtml(appt.decidedBy || "The other doctor")}</b> already
             ${escapeHtml(VERB[appt.status] || appt.status)} this request.</div>
           <form method="POST">${hidden}<button type="submit">Apply my change anyway</button></form>`
        )
      );
    }

    if (req.method !== "POST") {
      if (action === "confirm") {
        return res.status(200).send(
          page(
            "Confirm",
            `<p class="eyebrow">Confirm appointment</p><h1>${escapeHtml(when(appt))}</h1>
             ${summary(appt)}
             <form method="POST">${hidden}
               ${durationField(appt.durationMinutes || SLOT_MINUTES)}
               ${instructionFields(appt)}
               <button type="submit">Confirm and send invite</button>
             </form>`
          )
        );
      }

      if (action === "cancel") {
        return res.status(200).send(
          page(
            "Decline",
            `<p class="eyebrow">Decline request</p><h1>${escapeHtml(when(appt))}</h1>
             ${summary(appt)}
             <p>The slot will be freed and the patient told it is cancelled.</p>
             <form method="POST">${hidden}<button type="submit">Decline this request</button></form>`
          )
        );
      }

      const dates = bookableDates();
      return res.status(200).send(
        page(
          "Change appointment",
          `<p class="eyebrow">Change appointment</p><h1>${escapeHtml(when(appt))}</h1>
           ${summary(appt)}
           ${appt.reschedulePreference ? `<div class="note"><b>Patient's stated preference:</b><br>${escapeHtml(appt.reschedulePreference)}</div>` : ""}
           <form method="POST">${hidden}
             <label for="nd">Date</label>
             <select id="nd" name="newDate">
               ${dates.map((d) => `<option value="${d}"${d === appt.date ? " selected" : ""}>${escapeHtml(formatSlot(d, "00:00").replace(" at 00:00", ""))}</option>`).join("")}
             </select>
             <label for="nt">Time</label>
             <select id="nt" name="newTime">
               ${slotsForDate(appt.date).map((t) => `<option value="${t}"${t === appt.time ? " selected" : ""}>${t}</option>`).join("")}
             </select>
             ${durationField(appt.durationMinutes || SLOT_MINUTES)}
             ${instructionFields(appt)}
             <button type="submit">Save and send updated invite</button>
           </form>
           <p style="font-size:13px">If the new slot is taken you'll be told and nothing will change.</p>`
        )
      );
    }

    // ---------- POST ----------
    const mealAdvice = Object.keys(MEAL_ADVICE).includes(params.mealAdvice) ? params.mealAdvice : "";
    const instructions = String(params.instructions || "").trim().slice(0, 600);
    const nextSeq = (appt.sequence || 0) + 1;

    if (action === "cancel") {
      const wasConfirmed = appt.status === "confirmed";
      await db.collection("appointmentsArchive").add({
        ...appt,
        status: "cancelled",
        decidedBy: actor,
        decidedAt: new Date(),
      });
      await releaseHolds(db, id);
      await ref.delete();

      // Only worth a calendar cancellation if an invite was ever sent.
      if (wasConfirmed) {
        await sendInvite({ ...appt, sequence: nextSeq }, id, { cancelled: true });
      }

      return res.status(200).send(
        page(
          "Declined",
          `<p class="eyebrow">Done</p><h1>Request declined</h1>
           <p>The slot is free again${wasConfirmed ? " and a cancellation has been sent" : ""}.
              Please message the patient on WhatsApp to explain.</p>`
        )
      );
    }

    const duration = DURATIONS.includes(Number(params.durationMinutes))
      ? Number(params.durationMinutes)
      : SLOT_MINUTES;

    const targetDate = action === "reschedule" ? params.newDate : appt.date;
    const targetTime = action === "reschedule" ? params.newTime : appt.time;

    if (action === "reschedule") {
      if (!isValidDate(targetDate) || !isRealSlot(targetDate, targetTime)) {
        return res.status(400).send(
          page("Invalid", `<h1>That isn't a valid slot</h1><p>Nothing was changed.</p>`)
        );
      }
      if (isTooSoon(targetDate, targetTime)) {
        return res.status(400).send(
          page("Too soon", `<h1>That slot is in the past</h1><p>Nothing was changed.</p>`)
        );
      }
    }

    const extra = followingSlots(targetDate, targetTime, duration);
    if (extra === null) {
      return res.status(409).send(
        page(
          "Too long",
          `<p class="eyebrow">Not possible</p><h1>That length doesn't fit</h1>
           <p>A ${duration}-minute appointment would run past the end of that session.
              Nothing was changed.</p>`
        )
      );
    }

    const newId = slotKey(targetDate, targetTime);
    const moving = newId !== id;

    // Any slot this appointment needs, other than ones it already holds itself.
    const needed = [...(moving ? [newId] : []), ...extra.map((t) => slotKey(targetDate, t))];
    for (const key of needed) {
      const d = await db.collection("appointments").doc(key).get();
      if (d.exists && d.data().heldBy !== id && key !== id) {
        return res.status(409).send(
          page(
            "Slot clash",
            `<p class="eyebrow">Not possible</p><h1>That time is already booked</h1>
             <p>Nothing was changed. Try a different time or a shorter appointment.</p>`
          )
        );
      }
    }

    const updated = {
      ...appt,
      date: targetDate,
      time: targetTime,
      durationMinutes: duration,
      status: "confirmed",
      mealAdvice,
      instructions,
      sequence: nextSeq,
      decidedBy: actor,
      decidedAt: new Date(),
      ...(moving ? { rescheduledFrom: `${appt.date} ${appt.time}` } : {}),
    };

    await releaseHolds(db, id);

    if (moving) {
      await db.collection("appointments").doc(newId).set(updated);
      await ref.delete();
    } else {
      await ref.set(updated);
    }

    await Promise.all(
      extra.map((t) =>
        db.collection("appointments").doc(slotKey(targetDate, t)).set({
          status: "held",
          heldBy: moving ? newId : id,
          date: targetDate,
          time: t,
        })
      )
    );

    await sendInvite(updated, moving ? newId : id);

    return res.status(200).send(
      page(
        "Done",
        `<p class="eyebrow">Done</p><h1>Appointment ${moving ? "moved" : "confirmed"}</h1>
         <p>${escapeHtml(when(updated))}</p>
         <p>A calendar invite has been sent to the patient and to both of you.</p>`
      )
    );
  } catch (err) {
    console.error("appointment-action failed", err);
    return res.status(500).send(page("Error", `<h1>Something went wrong</h1><p>Please try again.</p>`));
  }
};
