import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import AuthGate, { inputStyle } from "./AuthGate.js";
import { GOOGLE_WRITE_REVIEW_URL } from "../data/services.js";
import Reveal from "./Reveal.js";

const ReviewForm = ({ user }) => {
  const [headertext, setHeadertext] = useState("");
  const [text, setText] = useState("");
  const [person, setPerson] = useState(user.displayName || "");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);

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
    // Google has no API for writing a review - it has to be typed into their own
    // page - so the most we can do is hand the patient their words on the clipboard.
    const copyReview = async () => {
      try {
        await navigator.clipboard.writeText([headertext, text].filter(Boolean).join("\n\n"));
        setCopied(true);
      } catch {
        setCopied(false);
      }
    };

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

        <hr className="rule" style={{ margin: "2rem 0 1.5rem" }} />

        <p className="eyebrow eyebrow--center">One more thing, if you have a minute</p>
        <p className="text-quiet" style={{ maxWidth: "46ch", margin: "0 auto 1.5rem" }}>
          A review on Google helps other people in Mulund find us. Copy what you just wrote and
          paste it over there.
        </p>
        <div
          style={{ display: "flex", gap: ".8rem", flexWrap: "wrap", justifyContent: "center" }}
        >
          <button type="button" className="btn-lux btn-lux--ghost" onClick={copyReview}>
            {copied ? "Copied" : "Copy my review"}
          </button>
          <a
            className="btn-lux"
            href={GOOGLE_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Review us on Google
          </a>
        </div>
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
