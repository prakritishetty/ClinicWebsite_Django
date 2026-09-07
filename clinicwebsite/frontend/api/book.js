const {
  getDb,
  requireUser,
  mailer,
  mailFrom,
  sign,
  recipients,
  escapeHtml,
  siteUrl,
} = require("./_lib");
const {
  SLOT_MINUTES,
  isValidDate,
  isRealSlot,
  isTooSoon,
  isBeyondHorizon,
  slotKey,
  formatSlot,
} = require("./_schedule");

const MEDICAL_FLAGS = [
  "Diabetes",
  "High blood pressure",
  "Heart condition",
  "Asthma",
  "Thyroid",
  "Bleeding disorder",
  "Pregnancy",
  "Allergy to medicines",
  "On blood thinners",
  "None of these",
];

const PAYMENT_METHODS = ["Cash", "UPI", "Card", "Insurance / reimbursement"];

const str = (v, max) => String(v ?? "").trim().slice(0, max);

const waLink = (phone, text) => {
  const digits = String(phone || "").replace(/\D/g, "");
  const withCode = digits.length === 10 ? `91${digits}` : digits;
  return `https://wa.me/${withCode}?text=${encodeURIComponent(text)}`;
};

const row = (label, value) =>
  value
    ? `<tr><td style="padding:6px 14px 6px 0;color:#5c6b82;vertical-align:top;white-space:nowrap">${label}</td>
         <td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
    : "";

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const user = await requireUser(req);
  if (!user) return res.status(401).json({ error: "Please sign in first." });

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const { date, time } = body;

    if (!isValidDate(date) || !isRealSlot(date, time)) {
      return res.status(400).json({ error: "That is not a valid appointment slot." });
    }
    if (isTooSoon(date, time)) {
      return res.status(400).json({ error: "That slot is too soon. Please choose a later one." });
    }
    if (isBeyondHorizon(date)) {
      return res.status(400).json({ error: "That date is too far ahead." });
    }

    const forSomeoneElse = body.bookingFor === "other";
    const appointment = {
      patient: {
        name: str(body.patientName, 80),
        phone: str(body.patientPhone, 20),
        email: str(body.patientEmail, 120),
        age: str(body.patientAge, 3),
      },
      bookedBy: forSomeoneElse
        ? {
            name: str(body.bookerName, 80),
            phone: str(body.bookerPhone, 20),
            email: str(body.bookerEmail, 120),
            relationship: str(body.relationship, 60),
          }
        : null,
      reason: str(body.reason, 600),
      medicalFlags: Array.isArray(body.medicalFlags)
        ? body.medicalFlags.filter((f) => MEDICAL_FLAGS.includes(f))
        : [],
      medicalNotes: str(body.medicalNotes, 800),
      reschedulePreference: str(body.reschedulePreference, 300),
      paymentMethod: PAYMENT_METHODS.includes(body.paymentMethod) ? body.paymentMethod : "",
      consent: body.consent === true,
    };

    if (!appointment.patient.name || !appointment.patient.phone || !appointment.reason) {
      return res.status(400).json({ error: "Name, phone and reason for visit are required." });
    }
    if (!appointment.consent) {
      return res.status(400).json({ error: "Please agree to the consent notice to continue." });
    }

    const db = getDb();
    const settings = await db.collection("settings").doc("schedule").get();
    const blocked = (settings.exists && settings.data().blockedDates) || [];
    if (blocked.includes(date)) {
      return res.status(409).json({ error: "The clinic is closed that day. Please pick another." });
    }

    const id = slotKey(date, time);
    const record = {
      ...appointment,
      date,
      time,
      durationMinutes: SLOT_MINUTES,
      status: "pending",
      uid: user.uid,
      accountEmail: user.email || "",
      createdAt: new Date(),
    };

    // .create() rejects if the document already exists, which makes the slot
    // itself the lock - two people submitting the same slot cannot both win.
    try {
      await db.collection("appointments").doc(id).create(record);
    } catch (err) {
      if (err.code === 6 || /already exists/i.test(err.message || "")) {
        return res
          .status(409)
          .json({ error: "Sorry, that slot was just taken. Please choose another." });
      }
      throw err;
    }

    const base = siteUrl(req);
    const to = recipients();
    const when = formatSlot(date, time, SLOT_MINUTES);

    const link = (action, who) =>
      `${base}/api/appointment-action?id=${encodeURIComponent(id)}&action=${action}&who=${who}&token=${sign(
        id,
        action,
        who
      )}`;

    const button = (href, label, bg) =>
      `<a href="${href}" style="display:inline-block;padding:12px 24px;margin:0 8px 8px 0;background:${bg};color:#fff;text-decoration:none;border-radius:4px;font:500 13px/1 Segoe UI,system-ui,sans-serif;letter-spacing:.12em;text-transform:uppercase">${label}</a>`;

    const details = `<table style="border-collapse:collapse;font-size:15px">
        ${row("Patient", appointment.patient.name)}
        ${row("Age", appointment.patient.age)}
        ${row("Phone", appointment.patient.phone)}
        ${row("Email", appointment.patient.email)}
        ${appointment.bookedBy ? row("Booked by", `${appointment.bookedBy.name} (${appointment.bookedBy.relationship || "n/a"}) - ${appointment.bookedBy.phone}`) : ""}
        ${row("Reason", appointment.reason)}
        ${row("Medical", [appointment.medicalFlags.join(", "), appointment.medicalNotes].filter(Boolean).join(" - "))}
        ${row("If rescheduling", appointment.reschedulePreference)}
        ${row("Payment", appointment.paymentMethod)}
      </table>`;

    const doctorHtml = (who) => `
      <div style="max-width:600px;margin:0 auto;font-family:Georgia,serif;color:#16233a">
        <p style="font:400 11px/1 Segoe UI,system-ui,sans-serif;letter-spacing:.28em;text-transform:uppercase;color:#b99247">New appointment request</p>
        <h2 style="font-family:Georgia,serif;font-style:italic;font-weight:500;color:#011f4b;margin:.3em 0">${escapeHtml(when)}</h2>
        ${details}
        <hr style="border:0;border-top:1px solid #e6e9ee;margin:22px 0">
        <p style="font-size:14px;color:#5c6b82">The patient has been told this is a <b>request awaiting your confirmation</b>. The slot is held meanwhile.</p>
        ${button(link("confirm", who), "Confirm", "#03396c")}
        ${button(link("reschedule", who), "Change time", "#5c6b82")}
        ${button(link("cancel", who), "Decline", "#8a8f98")}
        <p style="margin-top:18px">
          <a href="${waLink(appointment.patient.phone, `Hello ${appointment.patient.name}, regarding your appointment request for ${when} at Dr Sandhya's Total Dental Care`)}"
             style="color:#005b96;font-size:14px">Message the patient on WhatsApp</a>
        </p>
        <p style="margin-top:18px;font-size:12px;color:#98a1ae">Sent to both doctors. Whoever acts first settles it.</p>
      </div>`;

    const patientHtml = `
      <div style="max-width:560px;margin:0 auto;font-family:Georgia,serif;color:#16233a">
        <p style="font:400 11px/1 Segoe UI,system-ui,sans-serif;letter-spacing:.28em;text-transform:uppercase;color:#b99247">Request received</p>
        <h2 style="font-family:Georgia,serif;font-style:italic;font-weight:500;color:#011f4b;margin:.3em 0">${escapeHtml(when)}</h2>
        <p style="line-height:1.7">Thank you, ${escapeHtml(appointment.patient.name)}. This is a <b>request</b>, not a confirmed appointment yet &mdash; one of our doctors will review it and confirm shortly.</p>
        <p style="line-height:1.7">To change or cancel, please message us on WhatsApp:
          <a href="https://wa.me/919833630985" style="color:#005b96">+91 98336 30985</a>.</p>
        <hr style="border:0;border-top:1px solid #e6e9ee;margin:22px 0">
        <p style="font-size:14px;color:#5c6b82">Shop #9, Saidham Complex, P.K. Road, Mulund West, Mumbai 400080</p>
      </div>`;

    const transport = mailer();
    const mail = [
      ...to.map((address, who) =>
        transport.sendMail({
          from: mailFrom(),
          to: address,
          subject: `Appointment request - ${appointment.patient.name} - ${when}`,
          html: doctorHtml(who),
        })
      ),
    ];

    if (appointment.patient.email) {
      mail.push(
        transport.sendMail({
          from: mailFrom(),
          to: appointment.patient.email,
          subject: `We received your appointment request - ${when}`,
          html: patientHtml,
        })
      );
    }

    // The appointment is saved; a mail failure must not tell the patient it wasn't.
    await Promise.allSettled(mail);

    return res.status(200).json({ ok: true, when });
  } catch (err) {
    console.error("book failed", err);
    return res.status(500).json({ error: "Could not complete the booking. Please try again." });
  }
};

module.exports.MEDICAL_FLAGS = MEDICAL_FLAGS;
module.exports.PAYMENT_METHODS = PAYMENT_METHODS;
