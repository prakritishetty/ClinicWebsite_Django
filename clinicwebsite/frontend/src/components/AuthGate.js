import React, { useEffect, useState } from "react";
import {
  isSignInWithEmailLink,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

const EMAIL_KEY = "authGateEmail";

export const friendlyAuthError = (err) => {
  switch (err?.code) {
    case "auth/operation-not-allowed":
      return "That sign-in method isn't switched on for this site yet.";
    case "auth/unauthorized-domain":
    case "auth/unauthorized-continue-uri":
      return "This site isn't authorised for sign-in yet. Please try again shortly.";
    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      return "Sign-in was cancelled.";
    case "auth/too-many-requests":
      return "Too many attempts. Please wait a few minutes.";
    default:
      return err?.message || "Something went wrong. Please try again.";
  }
};

export const inputStyle = {
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

/** Renders children(user) once signed in, otherwise the sign-in choices. */
const AuthGate = ({ prompt, children }) => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState(null);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  useEffect(
    () =>
      onAuthStateChanged(auth, (u) => {
        setUser(u);
        setReady(true);
      }),
    []
  );

  useEffect(() => {
    if (!isSignInWithEmailLink(auth, window.location.href)) return;
    const stored = window.localStorage.getItem(EMAIL_KEY) || window.prompt("Confirm your email");
    if (!stored) return;
    signInWithEmailLink(auth, stored, window.location.href)
      .then(() => {
        window.localStorage.removeItem(EMAIL_KEY);
        window.history.replaceState({}, "", window.location.pathname);
      })
      .catch((e) => setError(friendlyAuthError(e)));
  }, []);

  const run = async (fn) => {
    setBusy(true);
    setError(null);
    try {
      await fn();
    } catch (e) {
      setError(friendlyAuthError(e));
    } finally {
      setBusy(false);
    }
  };

  if (!ready) return null;

  if (user) {
    return (
      <>
        {children(user)}
        <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button
            type="button"
            className="link-underline"
            style={{ background: "none", border: 0, cursor: "pointer" }}
            onClick={() => signOut(auth)}
          >
            Signed in as {user.displayName || user.email} · Sign out
          </button>
        </p>
      </>
    );
  }

  return (
    <div style={{ display: "grid", gap: "1rem", justifyItems: "center" }}>
      {prompt && (
        <p className="lede" style={{ maxWidth: "46ch", textAlign: "center" }}>
          {prompt}
        </p>
      )}

      {!mode && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".8rem", justifyContent: "center" }}>
          <button
            className="btn-lux"
            disabled={busy}
            onClick={() => run(() => signInWithPopup(auth, googleProvider))}
          >
            Continue with Google
          </button>
          <button className="btn-lux btn-lux--ghost" onClick={() => setMode("email")}>
            Use email instead
          </button>
        </div>
      )}

      {mode === "email" &&
        (sent ? (
          <p className="lede" style={{ textAlign: "center" }}>
            Check your inbox — we sent a sign-in link to {email}.
          </p>
        ) : (
          <form
            style={{ display: "grid", gap: ".8rem", width: "min(420px, 90vw)" }}
            onSubmit={(e) => {
              e.preventDefault();
              run(async () => {
                await sendSignInLinkToEmail(auth, email, {
                  url: window.location.origin + window.location.pathname,
                  handleCodeInApp: true,
                });
                window.localStorage.setItem(EMAIL_KEY, email);
                setSent(true);
              });
            }}
          >
            <input
              style={inputStyle}
              type="email"
              required
              value={email}
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn-lux" type="submit" disabled={busy}>
              {busy ? "Sending…" : "Email me a sign-in link"}
            </button>
          </form>
        ))}

      {mode && (
        <button
          type="button"
          className="link-underline"
          style={{ background: "none", border: 0, cursor: "pointer" }}
          onClick={() => {
            setMode(null);
            setSent(false);
            setError(null);
          }}
        >
          Back
        </button>
      )}

      {error && (
        <p style={{ color: "#a3341f", fontSize: "var(--fs-sm)", textAlign: "center" }}>{error}</p>
      )}
    </div>
  );
};

export default AuthGate;
