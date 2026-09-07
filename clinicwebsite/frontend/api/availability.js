const { getDb } = require("./_lib");
const {
  slotsForDate,
  bookableDates,
  isTooSoon,
  isValidDate,
  isBeyondHorizon,
  slotKey,
} = require("./_schedule");

/**
 * Which slots are free on a given date.
 *
 * Appointments hold chief complaint and medical history, so the browser is never
 * allowed to read that collection. This endpoint returns times and a boolean and
 * nothing else - no names, no reasons, no contact details.
 *
 * Blocked dates come from settings/schedule { blockedDates: ["2026-11-01", ...] },
 * edited by hand in the Firestore console.
 */
module.exports = async (req, res) => {
  const { date } = req.query || {};

  if (!isValidDate(date) || isBeyondHorizon(date)) {
    return res.status(400).json({ error: "Invalid date" });
  }

  try {
    const db = getDb();

    const settings = await db.collection("settings").doc("schedule").get();
    const blocked = (settings.exists && settings.data().blockedDates) || [];
    if (blocked.includes(date)) {
      return res.status(200).json({ date, closed: true, slots: [] });
    }

    const times = slotsForDate(date);
    if (!times.length) return res.status(200).json({ date, closed: true, slots: [] });

    const taken = new Set();
    await Promise.all(
      times.map(async (t) => {
        const doc = await db.collection("appointments").doc(slotKey(date, t)).get();
        if (doc.exists) taken.add(t);
      })
    );

    return res.status(200).json({
      date,
      closed: false,
      slots: times.map((time) => ({
        time,
        available: !taken.has(time) && !isTooSoon(date, time),
      })),
    });
  } catch (err) {
    console.error("availability failed", err);
    return res.status(500).json({ error: "Could not load availability" });
  }
};

module.exports.bookableDates = bookableDates;
