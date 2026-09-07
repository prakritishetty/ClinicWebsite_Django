/**
 * Clinic schedule. Server-side only, so the browser never has to agree with the
 * server about what a valid slot is - it just renders what /api/availability says.
 *
 * India has no DST, so IST is a fixed +5:30. Shifting the epoch by that and then
 * reading the UTC components gives exact IST wall-clock time without a date library.
 */

const IST_OFFSET_MIN = 330;
const SLOT_MINUTES = 30;
const HORIZON_DAYS = 60;
const MIN_LEAD_MINUTES = 120;

// [startHour, startMinute, endHour, endMinute] - end is exclusive of the last slot's finish.
const SESSIONS = [
  [10, 0, 14, 0],
  [18, 0, 21, 0],
];

const CLOSED_WEEKDAYS = [0]; // Sunday

const pad = (n) => String(n).padStart(2, "0");

/** IST wall-clock "now", readable via the getUTC* accessors. */
const istNow = () => new Date(Date.now() + IST_OFFSET_MIN * 60000);

const todayIso = () => {
  const d = istNow();
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
};

/** True UTC instant for an IST date + time. */
const slotInstant = (dateIso, time) => {
  const [y, m, d] = dateIso.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  return Date.UTC(y, m - 1, d, hh, mm) - IST_OFFSET_MIN * 60000;
};

const isValidDate = (dateIso) => /^\d{4}-\d{2}-\d{2}$/.test(dateIso || "");

const weekdayOf = (dateIso) => {
  const [y, m, d] = dateIso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
};

/** Every slot the clinic could theoretically offer on a given date. */
const slotsForDate = (dateIso) => {
  if (!isValidDate(dateIso) || CLOSED_WEEKDAYS.includes(weekdayOf(dateIso))) return [];

  const out = [];
  for (const [sh, sm, eh, em] of SESSIONS) {
    for (let t = sh * 60 + sm; t + SLOT_MINUTES <= eh * 60 + em; t += SLOT_MINUTES) {
      out.push(`${pad(Math.floor(t / 60))}:${pad(t % 60)}`);
    }
  }
  return out;
};

/** Dates the patient is allowed to pick, skipping closed weekdays. */
const bookableDates = () => {
  const out = [];
  const start = istNow();
  for (let i = 0; i <= HORIZON_DAYS; i++) {
    const d = new Date(start.getTime() + i * 86400000);
    const iso = `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
    if (!CLOSED_WEEKDAYS.includes(weekdayOf(iso))) out.push(iso);
  }
  return out;
};

/** Too soon, or beyond the booking horizon. */
const isTooSoon = (dateIso, time) =>
  slotInstant(dateIso, time) < Date.now() + MIN_LEAD_MINUTES * 60000;

const isBeyondHorizon = (dateIso) =>
  slotInstant(dateIso, "00:00") > Date.now() + HORIZON_DAYS * 86400000;

const slotKey = (dateIso, time) => `${dateIso}T${time}`;

const isRealSlot = (dateIso, time) => slotsForDate(dateIso).includes(time);

/**
 * Extra slots consumed when an appointment runs longer than one slot.
 * Returns null if the appointment would run past the end of that session.
 */
const followingSlots = (dateIso, time, durationMinutes) => {
  const needed = Math.ceil(durationMinutes / SLOT_MINUTES) - 1;
  if (needed <= 0) return [];

  const times = slotsForDate(dateIso);
  const start = times.indexOf(time);
  if (start < 0) return null;

  const out = [];
  for (let i = 1; i <= needed; i++) {
    const next = times[start + i];
    if (!next) return null;
    // Slots either side of the lunch break are adjacent in the array but hours
    // apart in reality, so an appointment cannot span them.
    const [ph, pm] = times[start + i - 1].split(":").map(Number);
    const [nh, nm] = next.split(":").map(Number);
    if (nh * 60 + nm - (ph * 60 + pm) !== SLOT_MINUTES) return null;
    out.push(next);
  }
  return out;
};

const formatSlot = (dateIso, time, duration) => {
  const [y, m, d] = dateIso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  const nice = date.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  return `${nice} at ${time}${duration ? ` (${duration} min)` : ""}`;
};

module.exports = {
  SLOT_MINUTES,
  HORIZON_DAYS,
  MIN_LEAD_MINUTES,
  SESSIONS,
  istNow,
  todayIso,
  slotInstant,
  isValidDate,
  slotsForDate,
  bookableDates,
  isTooSoon,
  isBeyondHorizon,
  slotKey,
  isRealSlot,
  followingSlots,
  formatSlot,
};
