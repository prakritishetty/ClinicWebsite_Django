/**
 * Minimal iCalendar builder. Sending a real invite rather than a plain email
 * means the appointment lands in the patient's and doctors' calendars, and the
 * alarms below give them reminders without us running any reminder job.
 *
 * The UID stays the same for the life of an appointment and SEQUENCE increases
 * on every change, which is what makes a calendar *update* the existing entry
 * instead of adding a duplicate when a booking is moved or lengthened.
 */

const pad = (n) => String(n).padStart(2, "0");

const toIcsUtc = (ms) => {
  const d = new Date(ms);
  return (
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}` +
    `T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`
  );
};

/** RFC 5545 escaping for TEXT values. */
const esc = (s) =>
  String(s ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");

/** Content lines must not exceed 75 octets; continuations start with a space. */
const fold = (line) => {
  if (line.length <= 74) return line;
  const parts = [line.slice(0, 74)];
  let rest = line.slice(74);
  while (rest.length > 73) {
    parts.push(" " + rest.slice(0, 73));
    rest = rest.slice(73);
  }
  if (rest) parts.push(" " + rest);
  return parts.join("\r\n");
};

const buildIcs = ({
  uid,
  sequence = 0,
  method = "REQUEST",
  startMs,
  endMs,
  summary,
  description,
  location,
  organizerName,
  organizerEmail,
  attendees = [],
  alarms = [],
  cancelled = false,
}) => {
  // Google assumes the organizer already has the event on their calendar, so an
  // address must never appear as both organizer and attendee - it silently stops
  // the invite being added for that person.
  const guests = attendees
    .filter(Boolean)
    .filter((a) => a.email && a.email.toLowerCase() !== String(organizerEmail).toLowerCase());

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Dr Sandhya's Total Dental Care//Appointments//EN",
    "CALSCALE:GREGORIAN",
    `METHOD:${method}`,
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `SEQUENCE:${sequence}`,
    `DTSTAMP:${toIcsUtc(Date.now())}`,
    `DTSTART:${toIcsUtc(startMs)}`,
    `DTEND:${toIcsUtc(endMs)}`,
    `SUMMARY:${esc(summary)}`,
    `DESCRIPTION:${esc(description)}`,
    `LOCATION:${esc(location)}`,
    `STATUS:${cancelled ? "CANCELLED" : "CONFIRMED"}`,
    `ORGANIZER;CN=${esc(organizerName)}:mailto:${organizerEmail}`,
    ...guests.map(
      (a) =>
        `ATTENDEE;CN=${esc(a.name || a.email)};ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:mailto:${a.email}`
    ),
  ];

  if (!cancelled) {
    for (const alarm of alarms) {
      lines.push(
        "BEGIN:VALARM",
        `TRIGGER;VALUE=DATE-TIME:${toIcsUtc(alarm.triggerMs)}`,
        "ACTION:DISPLAY",
        `DESCRIPTION:${esc(alarm.description)}`,
        "END:VALARM"
      );
    }
  }

  lines.push("END:VEVENT", "END:VCALENDAR");
  return lines.map(fold).join("\r\n");
};

module.exports = { buildIcs, toIcsUtc };
