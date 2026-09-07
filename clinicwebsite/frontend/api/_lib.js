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
 * Verifies the caller's Firebase ID token. Booking carries health data, so the
 * server must establish who is calling rather than trusting anything the
 * browser sends in the body.
 */
const requireUser = async (req) => {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return null;

  getDb(); // ensures the admin app is initialised
  try {
    return await require("firebase-admin").auth().verifyIdToken(token);
  } catch {
    return null;
  }
};

/** Nodemailer transport built from the SMTP_* environment variables. */
const mailer = () =>
  require("nodemailer").createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

const mailFrom = () => process.env.SMTP_FROM || process.env.SMTP_USER;

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

module.exports = {
  getDb,
  requireUser,
  mailer,
  mailFrom,
  sign,
  verify,
  recipients,
  escapeHtml,
  siteUrl,
};
