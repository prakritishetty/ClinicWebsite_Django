import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  RecaptchaVerifier,
  isSignInWithEmailLink,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signInWithPhoneNumber,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "../firebase";
import Reveal from "./Reveal.js";

const EMAIL_KEY = "reviewEmailForSignIn";

const friendlyError = (err) => {
  switch (err?.code) {
    case "auth/operation-not-allowed":
      return "That sign-in method isn't switched on for this site yet. Please try another one.";
    case "auth/unauthorized-domain":
      return "This domain isn't authorised for sign-in yet. Please try again later.";
    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      return "Sign-in was cancelled.";
    case "auth/invalid-phone-number":
      return "That phone number doesn't look right. Include the country code, e.g. +91.";
    case "auth/invalid-verification-code":
      return "That code didn't match. Please check and try again.";
    case "auth/too-many-requests":
      return "Too many attempts. Please wait a few minutes and try again.";
    case "permission-denied":
      return "We couldn't save that. The review database is not accepting posts right now.";
    default:
      return err?.message || "Something went wrong. Please try again.";
  }
};

const SubmitTestimonial = () => {
  const [user, setUser] = useState(null);
  const [method, setMethod] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [emailSent, setEmailSent] = useState(false);

  const [headertext, setHeadertext] = useState("");
  const [text, setText] = useState("");
  const [person, setPerson] = useState("");

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);

  const recaptchaRef = useRef(null);
  const verifierRef = useRef(null);

  useEffect(
    () =>
      onAuthStateChanged(auth, (u) => {
        setUser(u);
        if (u) setPerson((p) => p || u.displayName || "");
      }),
    []
  );

  // Completes a passwordless email-link sign-in when the user follows the link back.
  useEffect(() => {
    if (!isSignInWithEmailLink(auth, window.location.href)) return;
    const stored = window.localStorage.getItem(EMAIL_KEY) || window.prompt("Confirm your email");
    if (!stored) return;
    signInWithEmailLink(auth, stored, window.location.href)
      .then(() => {
        window.localStorage.removeItem(EMAIL_KEY);
        window.history.replaceState({}, "", window.location.pathname);
      })
      .catch((e) => setError(friendlyError(e)));
  }, []);

  const run = async (fn) => {
    setBusy(true);
    setError(null);
    try {
      await fn();
    } catch (e) {
      setError(friendlyError(e));
    } finally {
      setBusy(false);
    }
  };

  const withGoogle = () => run(() => signInWithPopup(auth, googleProvider));

  const withEmail = (e) => {
    e.preventDefault();
    return run(async () => {
      await sendSignInLinkToEmail(auth, email, {
        url: `${window.location.origin}/testimonials`,
        handleCodeInApp: true,
      });
      window.localStorage.setItem(EMAIL_KEY, email);
      setEmailSent(true);
    });
  };

  const sendOtp = (e) => {
    e.preventDefault();
    return run(async () => {
      if (!verifierRef.current) {
        verifierRef.current = new RecaptchaVerifier(auth, recaptchaRef.current, {
          size: "invisible",
        });
      }
      setConfirmation(await signInWithPhoneNumber(auth, phone, verifierRef.current));
    });
  };

  const confirmOtp = (e) => {
    e.preventDefault();
    return run(() => confirmation.confirm(otp));
  };

  const submit = (e) => {
    e.preventDefault();
    return run(async () => {
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
    });
  };

  const field = {
    width: "100%",
    padding: ".85rem 1rem",
    border: 0,
    borderRadius: "var(--radius)",
    background: "var(--paper)",
    boxShadow: "inset 0 0 0 1px var(--hairline)",
    fontFamily: "var(--font-body)",
    fontSize: "var(--fs-base)",
    color: "var(--text)",
  };

  return (
    <section className="section" id="write-a-review">
      <div className="shell" style={{ maxWidth: "min(680px, 90vw)" }}>
        <Reveal>
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Were you a patient?</p>
            <h2 className="display display--xl">Share your experience</h2>
            <p className="lede" style={{ maxWidth: "46ch" }}>
              Sign in once so we know you&rsquo;re real, then tell us how it went.
            </p>
          </div>
        </Reveal>

        <div ref={recaptchaRef} />

        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ textAlign: "center" }}
            >
              <p className="display display--lg">Thank you.</p>
              <p className="lede">
                Your review has been sent to the practice and will appear here once it&rsquo;s
                approved.
              </p>
            </motion.div>
          ) : user ? (
            <motion.form
              key="form"
              onSubmit={submit}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ display: "grid", gap: "1rem" }}
            >
              <input
                style={field}
                value={person}
                onChange={(e) => setPerson(e.target.value)}
                placeholder="Your name"
                maxLength={80}
              />
              <input
                style={field}
                value={headertext}
                onChange={(e) => setHeadertext(e.target.value)}
                placeholder="A short headline, e.g. Painless root canal"
                maxLength={90}
                required
              />
              <textarea
                style={{ ...field, minHeight: "9rem", resize: "vertical" }}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What was your experience like?"
                minLength={20}
                maxLength={1200}
                required
              />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <button className="btn-lux" type="submit" disabled={busy}>
                  {busy ? "Sending…" : "Submit review"}
                </button>
                <button
                  type="button"
                  className="link-underline"
                  style={{ background: "none", border: 0, cursor: "pointer" }}
                  onClick={() => signOut(auth)}
                >
                  Signed in as {user.displayName || user.email || user.phoneNumber} · Sign out
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="auth"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ display: "grid", gap: "1rem", justifyItems: "center" }}
            >
              {!method && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".8rem", justifyContent: "center" }}>
                  <button className="btn-lux" onClick={withGoogle} disabled={busy}>
                    Continue with Google
                  </button>
                  <button className="btn-lux btn-lux--ghost" onClick={() => setMethod("phone")}>
                    Use phone number
                  </button>
                  <button className="btn-lux btn-lux--ghost" onClick={() => setMethod("email")}>
                    Use email
                  </button>
                </div>
              )}

              {method === "email" &&
                (emailSent ? (
                  <p className="lede" style={{ textAlign: "center" }}>
                    Check your inbox — we sent a sign-in link to {email}.
                  </p>
                ) : (
                  <form onSubmit={withEmail} style={{ display: "grid", gap: ".8rem", width: "min(420px, 90vw)" }}>
                    <input
                      style={field}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                    />
                    <button className="btn-lux" type="submit" disabled={busy}>
                      {busy ? "Sending…" : "Email me a sign-in link"}
                    </button>
                  </form>
                ))}

              {method === "phone" && (
                <form
                  onSubmit={confirmation ? confirmOtp : sendOtp}
                  style={{ display: "grid", gap: ".8rem", width: "min(420px, 90vw)" }}
                >
                  {confirmation ? (
                    <input
                      style={field}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="6-digit code"
                      inputMode="numeric"
                      required
                    />
                  ) : (
                    <input
                      style={field}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98336 30985"
                      required
                    />
                  )}
                  <button className="btn-lux" type="submit" disabled={busy}>
                    {busy ? "Please wait…" : confirmation ? "Verify code" : "Send code"}
                  </button>
                </form>
              )}

              {method && (
                <button
                  type="button"
                  className="link-underline"
                  style={{ background: "none", border: 0, cursor: "pointer" }}
                  onClick={() => {
                    setMethod(null);
                    setConfirmation(null);
                    setEmailSent(false);
                    setError(null);
                  }}
                >
                  Back
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {error && (
          <p style={{ marginTop: "1.2rem", textAlign: "center", color: "#a3341f", fontSize: "var(--fs-sm)" }}>
            {error}
          </p>
        )}
      </div>
    </section>
  );
};

export default SubmitTestimonial;
