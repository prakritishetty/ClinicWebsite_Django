import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { auth } from "../firebase";
import NavbarUtil from "../utils/NavbarUtil.js";
import FooterUtil from "../utils/FooterUtil.js";
import AuthGate, { inputStyle } from "./AuthGate.js";
import Reveal from "./Reveal.js";
import { PHONE } from "../data/services.js";

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

const REASON_PROMPTS = [
  "Toothache or sensitivity",
  "Routine check-up & cleaning",
  "Broken or chipped tooth",
  "Bleeding gums",
  "Missing tooth / implant",
  "Cosmetic - whitening, veneers, smile design",
  "Braces or aligners",
  "Second opinion on a treatment plan",
];

const prettyDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  });
};

const Field = ({ label, children, hint }) => (
  <label style={{ display: "block" }}>
    <span
      style={{
        display: "block",
        fontFamily: "var(--font-ui)",
        fontSize: "var(--fs-micro)",
        letterSpacing: ".2em",
        textTransform: "uppercase",
        color: "var(--muted)",
        marginBottom: ".5rem",
      }}
    >
      {label}
    </span>
    {children}
    {hint && (
      <span
        style={{
          display: "block",
          fontSize: "var(--fs-xs)",
          color: "var(--muted)",
          marginTop: ".4rem",
        }}
      >
        {hint}
      </span>
    )}
  </label>
);

const Chip = ({ active, onClick, children, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    style={{
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-xs)",
      padding: ".55rem 1rem",
      borderRadius: 999,
      border: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.35 : 1,
      color: active ? "#fff" : "var(--ink)",
      background: active ? "var(--ink)" : "transparent",
      boxShadow: active ? "none" : "inset 0 0 0 1px var(--hairline)",
      transition: "all .3s var(--ease)",
    }}
  >
    {children}
  </button>
);

const BookingForm = () => {
  const [dates, setDates] = useState([]);
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [time, setTime] = useState("");

  const [bookingFor, setBookingFor] = useState("self");
  const [form, setForm] = useState({
    patientName: "",
    patientPhone: "",
    patientEmail: "",
    patientAge: "",
    bookerName: "",
    bookerPhone: "",
    bookerEmail: "",
    relationship: "",
    reason: "",
    medicalNotes: "",
    reschedulePreference: "",
    paymentMethod: "",
  });
  const [medicalFlags, setMedicalFlags] = useState([]);
  const [consent, setConsent] = useState(false);

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // The server owns the schedule, so the list of dates comes from it too.
  useEffect(() => {
    const today = new Date();
    const out = [];
    for (let i = 0; i < 45; i++) {
      const d = new Date(today.getTime() + i * 86400000);
      if (d.getDay() === 0) continue;
      out.push(d.toISOString().slice(0, 10));
    }
    setDates(out);
    setDate(out[0]);
  }, []);

  const loadSlots = useCallback(async (forDate) => {
    setLoadingSlots(true);
    setTime("");
    try {
      const r = await fetch(`/api/availability?date=${forDate}`);
      const data = await r.json();
      setSlots(data.closed ? [] : data.slots || []);
    } catch {
      setSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  }, []);

  useEffect(() => {
    if (date) loadSlots(date);
  }, [date, loadSlots]);

  const toggleFlag = (flag) =>
    setMedicalFlags((prev) => {
      if (flag === "None of these") return prev.includes(flag) ? [] : [flag];
      const next = prev.filter((f) => f !== "None of these");
      return next.includes(flag) ? next.filter((f) => f !== flag) : [...next, flag];
    });

  const submit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!time) return setError("Please choose a time slot.");
    if (!consent) return setError("Please tick the consent box to continue.");

    setBusy(true);
    try {
      const token = await auth.currentUser.getIdToken();
      const r = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...form, date, time, bookingFor, medicalFlags, consent }),
      });
      const data = await r.json();

      if (!r.ok) {
        setError(data.error || "Could not book that slot.");
        if (r.status === 409) loadSlots(date); // someone else took it
        return;
      }
      setDone(data.when);
    } catch {
      setError("Could not reach the clinic's booking system. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  if (done) {
    return (
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center" }}>
        <p className="display display--lg">Request sent.</p>
        <p className="lede" style={{ maxWidth: "48ch", margin: "1rem auto" }}>
          We&rsquo;ve asked for <b>{done}</b>. A doctor will review and confirm it &mdash; you&rsquo;ll
          get an email once they do.
        </p>
        <p className="text-quiet" style={{ fontSize: "var(--fs-sm)" }}>
          To change anything, message us on WhatsApp at {PHONE}.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: "grid", gap: "2.5rem" }}>
      {/* Date + slot */}
      <div>
        <Field label="Choose a day">
          <div style={{ display: "flex", gap: ".5rem", overflowX: "auto", paddingBottom: ".5rem" }}>
            {dates.map((d) => (
              <Chip key={d} active={d === date} onClick={() => setDate(d)}>
                {prettyDate(d)}
              </Chip>
            ))}
          </div>
        </Field>

        <div style={{ marginTop: "1.5rem" }}>
          <Field label="Choose a time" hint="Each appointment is 30 minutes. Mon–Sat, 10:00–14:00 and 18:00–21:00.">
            {loadingSlots ? (
              <p className="text-quiet">Checking availability…</p>
            ) : slots.length === 0 ? (
              <p className="text-quiet">The clinic is closed on this day. Please pick another.</p>
            ) : (
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
                {slots.map((s) => (
                  <Chip
                    key={s.time}
                    active={s.time === time}
                    disabled={!s.available}
                    onClick={() => setTime(s.time)}
                  >
                    {s.time}
                  </Chip>
                ))}
              </div>
            )}
          </Field>
        </div>
      </div>

      <hr className="rule" />

      {/* Who */}
      <Field label="Who is this appointment for?">
        <div style={{ display: "flex", gap: ".5rem" }}>
          <Chip active={bookingFor === "self"} onClick={() => setBookingFor("self")}>
            Myself
          </Chip>
          <Chip active={bookingFor === "other"} onClick={() => setBookingFor("other")}>
            Someone else
          </Chip>
        </div>
      </Field>

      <div style={{ display: "grid", gap: "1.2rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))" }}>
        <Field label="Patient's name">
          <input style={inputStyle} required value={form.patientName} onChange={set("patientName")} />
        </Field>
        <Field label="Patient's age">
          <input style={inputStyle} inputMode="numeric" value={form.patientAge} onChange={set("patientAge")} />
        </Field>
        <Field label="Phone">
          <input style={inputStyle} required inputMode="tel" value={form.patientPhone} onChange={set("patientPhone")} />
        </Field>
        <Field label="Email">
          <input style={inputStyle} type="email" value={form.patientEmail} onChange={set("patientEmail")} />
        </Field>
      </div>

      {bookingFor === "other" && (
        <div style={{ display: "grid", gap: "1.2rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))" }}>
          <Field label="Your name">
            <input style={inputStyle} required value={form.bookerName} onChange={set("bookerName")} />
          </Field>
          <Field label="Your relationship to patient">
            <input style={inputStyle} placeholder="Parent, spouse, child…" value={form.relationship} onChange={set("relationship")} />
          </Field>
          <Field label="Your phone">
            <input style={inputStyle} required inputMode="tel" value={form.bookerPhone} onChange={set("bookerPhone")} />
          </Field>
          <Field label="Your email">
            <input style={inputStyle} type="email" value={form.bookerEmail} onChange={set("bookerEmail")} />
          </Field>
        </div>
      )}

      <hr className="rule" />

      {/* Reason */}
      <Field label="Reason for visit" hint="Tap a suggestion or write your own.">
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: ".8rem" }}>
          {REASON_PROMPTS.map((p) => (
            <Chip key={p} active={form.reason === p} onClick={() => setForm((f) => ({ ...f, reason: p }))}>
              {p}
            </Chip>
          ))}
        </div>
        <textarea
          style={{ ...inputStyle, minHeight: "6rem", resize: "vertical" }}
          required
          value={form.reason}
          onChange={set("reason")}
          placeholder="Tell us what's bothering you, and since when."
        />
      </Field>

      <Field label="Medical history" hint="Tick anything that applies. This helps us treat you safely.">
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: ".8rem" }}>
          {MEDICAL_FLAGS.map((f) => (
            <Chip key={f} active={medicalFlags.includes(f)} onClick={() => toggleFlag(f)}>
              {f}
            </Chip>
          ))}
        </div>
        <textarea
          style={{ ...inputStyle, minHeight: "5rem", resize: "vertical" }}
          value={form.medicalNotes}
          onChange={set("medicalNotes")}
          placeholder="Medicines you take, past surgeries, anything else we should know."
        />
      </Field>

      <div style={{ display: "grid", gap: "1.2rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))" }}>
        <Field label="If we need to reschedule" hint="Days or times that suit you best.">
          <input
            style={inputStyle}
            value={form.reschedulePreference}
            onChange={set("reschedulePreference")}
            placeholder="e.g. weekday evenings, or Saturday morning"
          />
        </Field>
        <Field label="How will you pay?" hint="Payment is taken at the clinic, not online.">
          <select style={inputStyle} value={form.paymentMethod} onChange={set("paymentMethod")}>
            <option value="">Select…</option>
            {PAYMENT_METHODS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <label style={{ display: "flex", gap: ".8rem", alignItems: "flex-start", fontSize: "var(--fs-sm)", color: "var(--muted)" }}>
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ marginTop: ".3rem" }} />
        <span>
          I agree that Dr Sandhya&rsquo;s Total Dental Care may store the health information above in
          order to provide dental care. It will not be shared with anyone else.
        </span>
      </label>

      <div style={{ textAlign: "center" }}>
        <button className="btn-lux" type="submit" disabled={busy || !time}>
          {busy ? "Sending…" : "Request this appointment"}
        </button>
        <p className="text-quiet" style={{ fontSize: "var(--fs-xs)", marginTop: "1rem" }}>
          This is a request. A doctor will review and confirm it by email. Any changes after that are
          arranged over WhatsApp.
        </p>
        {error && <p style={{ color: "#a3341f", fontSize: "var(--fs-sm)", marginTop: "1rem" }}>{error}</p>}
      </div>
    </form>
  );
};

const BookAppointment = () => (
  <div style={{ background: "var(--paper)" }}>
    <NavbarUtil />

    <section className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="aurora">
        <span className="aurora__blob aurora__blob--a" />
      </div>
      <div className="shell" style={{ position: "relative", zIndex: 1, maxWidth: "min(760px, 90vw)" }}>
        <Reveal>
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Appointments</p>
            <h1 className="display display--hero">Book a visit</h1>
          </div>
        </Reveal>

        <Reveal i={1}>
          <AuthGate prompt="Please sign in first so we know the booking is genuine. It takes one tap.">
            {() => <BookingForm />}
          </AuthGate>
        </Reveal>
      </div>
    </section>

    <FooterUtil />
  </div>
);

export default BookAppointment;
