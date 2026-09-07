const crypto = require("crypto");

/**
 * Shared helpers for the review-approval endpoints.
 * Runs server-side on Vercel only - none of this reaches the browser bundle.
 */

let adminApp = null;

const getDb = () => {
  const admin = require("firebase-admin");

  if (!adminApp) {
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!raw) throw new Error("FIREBASE_SERVICE_ACCOUNT is not set");

    // Accept either raw JSON or base64-encoded JSON, since pasting multi-line
    // JSON into a dashboard env var is error-prone.
    const json = raw.trim().startsWith("{")
      ? raw
      : Buffer.from(raw, "base64").toString("utf8");

    adminApp = admin.apps.length
      ? admin.app()
      : admin.initializeApp({ credential: admin.credential.cert(JSON.parse(json)) });
  }

  return require("firebase-admin").firestore();
};

/**
 * Approval links are per-recipient: `who` is the recipient's index in
 * REVIEW_NOTIFY_TO, so we can record which doctor decided without putting
 * their email address in a URL. It is signed too, so the index cannot be
 * edited to impersonate the other doctor.
 */
const recipients = () =>
  (process.env.REVIEW_NOTIFY_TO || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

const sign = (docId, action, who) => {
  const secret = process.env.REVIEW_ACTION_SECRET;
  if (!secret) throw new Error("REVIEW_ACTION_SECRET is not set");
  return crypto
    .createHmac("sha256", secret)
    .update(`${docId}:${action}:${who}`)
    .digest("hex");
};

const verify = (docId, action, who, token) => {
  if (!token) return false;
  const expected = Buffer.from(sign(docId, action, who));
  const given = Buffer.from(String(token));
  return expected.length === given.length && crypto.timingSafeEqual(expected, given);
};

/** Review text is user-supplied, so it must never be interpolated raw into HTML. */
const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const siteUrl = (req) => {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, "");
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  return `https://${host}`;
};

module.exports = { getDb, sign, verify, recipients, escapeHtml, siteUrl };
