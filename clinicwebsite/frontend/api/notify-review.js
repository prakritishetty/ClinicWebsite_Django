const nodemailer = require("nodemailer");
const { getDb, sign, recipients, escapeHtml, siteUrl } = require("./_lib");

/**
 * Emails Dr. Sandhya and Dr. Pratiksha when a new review is submitted, with
 * one-click Approve / Reject links. Called by the site right after the review
 * is written to Firestore.
 */
module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { docId } = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    if (!docId) return res.status(400).json({ error: "docId required" });

    const db = getDb();
    const ref = db.collection("testimonials").doc(docId);
    const snap = await ref.get();

    if (!snap.exists) return res.status(404).json({ error: "Not found" });

    const review = snap.data();

    // Only ever notify once per review, and only for pending ones. Without this
    // the endpoint could be replayed to flood the doctors' inboxes.
    if (review.approved !== false || review.notifiedAt) {
      return res.status(200).json({ ok: true, skipped: true });
    }

    const to = recipients();
    if (!to.length) return res.status(500).json({ error: "REVIEW_NOTIFY_TO is not set" });

    const base = siteUrl(req);
    const link = (action, who) =>
      `${base}/api/review-action?id=${encodeURIComponent(docId)}&action=${action}&who=${who}&token=${sign(
        docId,
        action,
        who
      )}`;

    const button = (href, label, bg) =>
      `<a href="${href}" style="display:inline-block;padding:12px 26px;margin-right:10px;background:${bg};color:#fff;text-decoration:none;border-radius:4px;font:500 13px/1 Segoe UI,system-ui,sans-serif;letter-spacing:.12em;text-transform:uppercase">${label}</a>`;

    const html = (who) => `
      <div style="max-width:560px;margin:0 auto;font-family:Georgia,serif;color:#16233a">
        <p style="font:400 11px/1 Segoe UI,system-ui,sans-serif;letter-spacing:.28em;text-transform:uppercase;color:#b99247">New review awaiting approval</p>
        <h2 style="font-family:Georgia,serif;font-style:italic;font-weight:500;color:#011f4b;margin:.4em 0">${escapeHtml(
          review.headertext
        )}</h2>
        <p style="line-height:1.7;white-space:pre-wrap">${escapeHtml(review.text)}</p>
        <p style="color:#5c6b82;font-size:14px">&mdash; ${escapeHtml(review.person)}</p>
        <hr style="border:0;border-top:1px solid #e6e9ee;margin:24px 0">
        <p style="font-size:14px;color:#5c6b82">This review is <b>not visible</b> on the website yet.</p>
        ${button(link("approve", who), "Publish", "#03396c")}
        ${button(link("reject", who), "Reject", "#8a8f98")}
        <p style="margin-top:20px;font-size:13px;color:#98a1ae">This was sent to both doctors. Whoever decides first settles it &mdash; the other will simply be shown what was decided.</p>
        <p style="margin-top:16px;font-size:12px;color:#98a1ae">Sent automatically by Dr Sandhya&rsquo;s Total Dental Care website.</p>
      </div>`;

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    // One email each rather than a single message to both, so each link can
    // carry the recipient's identity and we can record who decided.
    await Promise.all(
      to.map((address, who) =>
        transport.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: address,
          subject: `New review from ${review.person || "a patient"} - approval needed`,
          html: html(who),
        })
      )
    );

    await ref.update({ notifiedAt: new Date() });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("notify-review failed", err);
    return res.status(500).json({ error: "Could not send notification" });
  }
};
