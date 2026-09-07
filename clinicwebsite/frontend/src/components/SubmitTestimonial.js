import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import AuthGate, { inputStyle } from "./AuthGate.js";
import Reveal from "./Reveal.js";

const ReviewForm = ({ user }) => {
  const [headertext, setHeadertext] = useState("");
  const [text, setText] = useState("");
  const [person, setPerson] = useState(user.displayName || "");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const ref = await addDoc(collection(db, "testimonials"), {
        headertext: headertext.trim(),
        text: text.trim(),
        person: person.trim() || "Anonymous",
        uid: user.uid,
        // Held back until the practice approves it - nothing goes live unreviewed.
        approved: false,
        createdAt: serverTimestamp(),
      });

      // Emails the doctors an approve/reject link. The review is already saved,
      // so a mail failure must not surface as a submission failure.
      fetch("/api/notify-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ docId: ref.id }),
      }).catch(() => {});

      setDone(true);
    } catch (err) {
      setError(
        err?.code === "permission-denied"
          ? "We couldn't save that. The review database is not accepting posts right now."
          : "Something went wrong. Please try again."
      );
    } finally {
      setBusy(false);
    }
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: "center" }}
      >
        <p className="display display--lg">Thank you.</p>
        <p className="lede">
          Your review has been sent to the practice and will appear here once it&rsquo;s approved.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: "grid", gap: "1rem", minWidth: 0 }}>
      <input
        style={inputStyle}
        value={person}
        onChange={(e) => setPerson(e.target.value)}
        placeholder="Your name"
        maxLength={80}
      />
      <input
        style={inputStyle}
        value={headertext}
        onChange={(e) => setHeadertext(e.target.value)}
        placeholder="A short headline, e.g. Painless root canal"
        maxLength={90}
        required
      />
      <textarea
        style={{ ...inputStyle, minHeight: "9rem", resize: "vertical" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What was your experience like?"
        minLength={20}
        maxLength={1200}
        required
      />
      <div style={{ textAlign: "center" }}>
        <button className="btn-lux" type="submit" disabled={busy}>
          {busy ? "Sending…" : "Submit review"}
        </button>
        {error && (
          <p style={{ color: "#a3341f", fontSize: "var(--fs-sm)", marginTop: "1rem" }}>{error}</p>
        )}
      </div>
    </form>
  );
};

const SubmitTestimonial = () => (
  <section className="section" id="write-a-review">
    <div className="shell" style={{ maxWidth: "min(680px, 90vw)" }}>
      <Reveal>
        <div className="section-head section-head--center">
          <p className="eyebrow eyebrow--center">Were you a patient?</p>
          <h2 className="display display--xl">Share your experience</h2>
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <AuthGate prompt="Sign in once so we know you're real, then tell us how it went.">
          {(user) => <ReviewForm user={user} />}
        </AuthGate>
      </AnimatePresence>
    </div>
  </section>
);

export default SubmitTestimonial;
