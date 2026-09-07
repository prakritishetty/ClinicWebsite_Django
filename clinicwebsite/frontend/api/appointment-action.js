const { getDb, verify, recipients, escapeHtml, mailer, mailFrom } = require("./_lib");
const {
  SLOT_MINUTES,
  isValidDate,
  isRealSlot,
  isTooSoon,
  slotsForDate,
  bookableDates,
  slotKey,
  followingSlots,
  formatSlot,
} = require("./_schedule");

const page = (title, body) => `<!doctype html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,500&family=Jost:wght@400&display=swap" rel="stylesheet">
<style>
 body{margin:0;min-height:100vh;display:grid;place-items:center;background:#fff;color:#16233a;
      font-family:"Cormorant Garamond",Georgia,serif;padding:24px}
 .box{max-width:560px;width:100%;text-align:center}
 h1{font-style:italic;font-weight:500;color:#011f4b;font-size:32px;margin:.2em 0 .5em}
 .eyebrow{font-family:Jost,system-ui,sans-serif;font-size:11px;letter-spacing:.28em;
          text-transform:uppercase;color:#b99247;margin:0}
 p{line-height:1.7;color:#5c6b82}
 .card{background:#f6f8fb;border-radius:8px;padding:16px 20px;margin:20px 0;text-align:left}
 .note{background:#fdf6e7;border-radius:8px;padding:14px 18px;margin:20px 0;color:#6b5524;text-align:left}
 label{display:block;text-align:left;font-family:Jost,system-ui,sans-serif;font-size:12px;
       letter-spacing:.16em;text-transform:uppercase;color:#5c6b82;margin:14px 0 6px}
 select,button{font-family:Jost,system-ui,sans-serif;font-size:14px;padding:12px;border-radius:4px}
 select{width:100%;border:1px solid #d7dce4;background:#fff}
 button{margin-top:20px;font-size:12px;letter-spacing:.2em;text-transform:uppercase;
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

/** Frees the slot and any extra slots a longer appointment was holding. */
const releaseHolds = async (db, id) => {
  const held = await db.collection("appointments").where("heldBy", "==", id).get();
  await Promise.all(held.docs.map((d) => d.ref.delete()));
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

    // Somebody already dealt with it.
    if (appt.status !== "pending" && req.method !== "POST") {
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
               <label for="d">Appointment length</label>
               <select id="d" name="durationMinutes">
                 <option value="30">30 minutes</option>
                 <option value="60">60 minutes</option>
                 <option value="90">90 minutes</option>
               </select>
               <button type="submit">Confirm appointment</button>
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
             <p>The slot will be freed. Please message the patient on WhatsApp to explain.</p>
             <form method="POST">${hidden}<button type="submit">Decline this request</button></form>`
          )
        );
      }

      const dates = bookableDates();
      return res.status(200).send(
        page(
          "Change time",
          `<p class="eyebrow">Move appointment</p><h1>${escapeHtml(when(appt))}</h1>
           ${summary(appt)}
           ${appt.reschedulePreference ? `<div class="note"><b>Patient's stated preference:</b><br>${escapeHtml(appt.reschedulePreference)}</div>` : ""}
           <form method="POST">${hidden}
             <label for="nd">New date</label>
             <select id="nd" name="newDate">
               ${dates.map((d) => `<option value="${d}"${d === appt.date ? " selected" : ""}>${escapeHtml(formatSlot(d, "00:00").replace(" at 00:00", ""))}</option>`).join("")}
             </select>
             <label for="nt">New time</label>
             <select id="nt" name="newTime">
               ${slotsForDate(appt.date).map((t) => `<option value="${t}"${t === appt.time ? " selected" : ""}>${t}</option>`).join("")}
             </select>
             <button type="submit">Move appointment</button>
           </form>
           <p style="font-size:13px">If the new slot is taken you'll be told and nothing will change.</p>`
        )
      );
    }

    // ---- POST: apply the change ----

    if (action === "cancel") {
      await db.collection("appointmentsArchive").add({
        ...appt,
        status: "cancelled",
        decidedBy: actor,
        decidedAt: new Date(),
      });
      await releaseHolds(db, id);
      await ref.delete();

      return res.status(200).send(
        page(
          "Declined",
          `<p class="eyebrow">Done</p><h1>Request declined</h1>
           <p>The slot is free again. Nothing was sent to the patient automatically &mdash;
              please message them on WhatsApp.</p>`
        )
      );
    }

    if (action === "confirm") {
      const duration = [30, 60, 90].includes(Number(params.durationMinutes))
        ? Number(params.durationMinutes)
        : SLOT_MINUTES;

      const extra = followingSlots(appt.date, appt.time, duration);
      if (extra === null) {
        return res.status(409).send(
          page(
            "Too long",
            `<p class="eyebrow">Not possible</p><h1>That length doesn't fit</h1>
             <p>A ${duration}-minute appointment would run past the end of that session.</p>`
          )
        );
      }

      const clashes = [];
      for (const t of extra) {
        const d = await db.collection("appointments").doc(slotKey(appt.date, t)).get();
        if (d.exists) clashes.push(t);
      }
      if (clashes.length) {
        return res.status(409).send(
          page(
            "Slot clash",
            `<p class="eyebrow">Not possible</p><h1>${escapeHtml(clashes.join(", "))} already booked</h1>
             <p>Nothing was changed. Confirm at 30 minutes, or move the other appointment first.</p>`
          )
        );
      }

      await releaseHolds(db, id);
      await Promise.all(
        extra.map((t) =>
          db.collection("appointments").doc(slotKey(appt.date, t)).set({
            status: "held",
            heldBy: id,
            date: appt.date,
            time: t,
          })
        )
      );
      await ref.update({
        status: "confirmed",
        durationMinutes: duration,
        decidedBy: actor,
        decidedAt: new Date(),
      });

      const updated = { ...appt, durationMinutes: duration };
      if (appt.patient?.email) {
        await mailer()
          .sendMail({
            from: mailFrom(),
            to: appt.patient.email,
            subject: `Your appointment is confirmed - ${when(updated)}`,
            html: `<div style="max-width:560px;margin:0 auto;font-family:Georgia,serif;color:#16233a">
                 <p style="font:400 11px/1 Segoe UI,system-ui,sans-serif;letter-spacing:.28em;text-transform:uppercase;color:#b99247">Confirmed</p>
                 <h2 style="font-style:italic;font-weight:500;color:#011f4b">${escapeHtml(when(updated))}</h2>
                 <p style="line-height:1.7">We look forward to seeing you. To change anything, message us on
                   <a href="https://wa.me/919833630985" style="color:#005b96">WhatsApp</a>.</p>
                 <p style="font-size:14px;color:#5c6b82">Shop #9, Saidham Complex, P.K. Road, Mulund West, Mumbai 400080</p>
               </div>`,
          })
          .catch(() => {});
      }

      return res.status(200).send(
        page(
          "Confirmed",
          `<p class="eyebrow">Done</p><h1>Appointment confirmed</h1>
           <p>${escapeHtml(when(updated))}</p>
           <p>The patient has been emailed a confirmation.</p>`
        )
      );
    }

    // ---- reschedule ----
    const { newDate, newTime } = params;
    if (!isValidDate(newDate) || !isRealSlot(newDate, newTime)) {
      return res.status(400).send(
        page("Invalid", `<h1>That isn't a valid slot</h1><p>Nothing was changed.</p>`)
      );
    }
    if (isTooSoon(newDate, newTime)) {
      return res.status(400).send(
        page("Too soon", `<h1>That slot is in the past</h1><p>Nothing was changed.</p>`)
      );
    }

    const newId = slotKey(newDate, newTime);
    if (newId !== id) {
      const moved = {
        ...appt,
        date: newDate,
        time: newTime,
        durationMinutes: SLOT_MINUTES,
        status: "confirmed",
        decidedBy: actor,
        decidedAt: new Date(),
        rescheduledFrom: `${appt.date} ${appt.time}`,
      };

      try {
        await db.collection("appointments").doc(newId).create(moved);
      } catch (err) {
        if (err.code === 6 || /already exists/i.test(err.message || "")) {
          return res.status(409).send(
            page(
              "Taken",
              `<p class="eyebrow">Not possible</p><h1>That slot is already booked</h1>
               <p>Nothing was changed. Please pick a different time.</p>`
            )
          );
        }
        throw err;
      }

      await releaseHolds(db, id);
      await ref.delete();

      if (appt.patient?.email) {
        await mailer()
          .sendMail({
            from: mailFrom(),
            to: appt.patient.email,
            subject: `Your appointment has been moved - ${when(moved)}`,
            html: `<div style="max-width:560px;margin:0 auto;font-family:Georgia,serif;color:#16233a">
                 <p style="font:400 11px/1 Segoe UI,system-ui,sans-serif;letter-spacing:.28em;text-transform:uppercase;color:#b99247">Rescheduled</p>
                 <h2 style="font-style:italic;font-weight:500;color:#011f4b">${escapeHtml(when(moved))}</h2>
                 <p style="line-height:1.7">Your appointment has been moved to the time above. If that doesn't suit,
                   message us on <a href="https://wa.me/919833630985" style="color:#005b96">WhatsApp</a>.</p>
               </div>`,
          })
          .catch(() => {});
      }

      return res.status(200).send(
        page(
          "Moved",
          `<p class="eyebrow">Done</p><h1>Appointment moved</h1>
           <p>${escapeHtml(when(moved))}</p><p>The patient has been emailed.</p>`
        )
      );
    }

    await ref.update({ status: "confirmed", decidedBy: actor, decidedAt: new Date() });
    return res.status(200).send(
      page("Confirmed", `<p class="eyebrow">Done</p><h1>Appointment confirmed</h1><p>${escapeHtml(when(appt))}</p>`)
    );
  } catch (err) {
    console.error("appointment-action failed", err);
    return res.status(500).send(page("Error", `<h1>Something went wrong</h1><p>Please try again.</p>`));
  }
};
