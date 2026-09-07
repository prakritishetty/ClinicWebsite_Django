const { getDb, verify, escapeHtml } = require("./_lib");

const page = (title, body) => `<!doctype html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,500&family=Jost:wght@400&display=swap" rel="stylesheet">
<style>
 body{margin:0;min-height:100vh;display:grid;place-items:center;background:#fff;color:#16233a;
      font-family:"Cormorant Garamond",Georgia,serif;padding:24px}
 .box{max-width:520px;text-align:center}
 h1{font-style:italic;font-weight:500;color:#011f4b;font-size:34px;margin:.2em 0 .5em}
 .eyebrow{font-family:Jost,system-ui,sans-serif;font-size:11px;letter-spacing:.28em;
          text-transform:uppercase;color:#b99247;margin:0}
 p{line-height:1.7;color:#5c6b82}
 blockquote{margin:22px 0;padding:16px 20px;background:#f6f8fb;border-radius:8px;text-align:left}
 button{font-family:Jost,system-ui,sans-serif;font-size:12px;letter-spacing:.2em;text-transform:uppercase;
        padding:14px 30px;border:0;border-radius:4px;background:#011f4b;color:#fff;cursor:pointer}
 a{color:#005b96}
</style></head><body><div class="box">${body}</div></body></html>`;

/**
 * Approve or reject a review from the notification email.
 *
 * GET renders a confirmation page; only POST mutates. Email security scanners
 * routinely follow links in messages, so a GET that published a review would
 * mean reviews approving themselves.
 */
module.exports = async (req, res) => {
  const { id, action, token } = req.method === "POST" ? { ...req.query, ...req.body } : req.query;

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (!id || !["approve", "reject"].includes(action) || !verify(id, action, token)) {
    return res
      .status(400)
      .send(page("Invalid link", `<p class="eyebrow">Error</p><h1>This link isn't valid</h1>
        <p>It may have been altered or has expired. Please use the buttons in the original email.</p>`));
  }

  try {
    const db = getDb();
    const ref = db.collection("testimonials").doc(id);
    const snap = await ref.get();

    if (!snap.exists) {
      return res.status(404).send(page("Not found", `<p class="eyebrow">Error</p><h1>Review not found</h1>`));
    }

    const review = snap.data();

    if (req.method !== "POST") {
      return res.status(200).send(
        page(
          "Confirm",
          `<p class="eyebrow">${action === "approve" ? "Publish this review" : "Reject this review"}</p>
           <h1>${escapeHtml(review.headertext)}</h1>
           <blockquote>${escapeHtml(review.text)}</blockquote>
           <p>&mdash; ${escapeHtml(review.person)}</p>
           <form method="POST">
             <input type="hidden" name="id" value="${escapeHtml(id)}">
             <input type="hidden" name="action" value="${escapeHtml(action)}">
             <input type="hidden" name="token" value="${escapeHtml(token)}">
             <button type="submit">${action === "approve" ? "Yes, publish it" : "Yes, reject it"}</button>
           </form>`
        )
      );
    }

    if (action === "approve") {
      await ref.update({ approved: true, approvedAt: new Date() });
      return res.status(200).send(
        page(
          "Published",
          `<p class="eyebrow">Done</p><h1>Review published</h1>
           <p>It's now live on the testimonials page.</p>
           <p><a href="/testimonials">View testimonials</a></p>`
        )
      );
    }

    await ref.update({ approved: false, rejectedAt: new Date() });
    return res.status(200).send(
      page(
        "Rejected",
        `<p class="eyebrow">Done</p><h1>Review rejected</h1>
         <p>It stays hidden from the website. Nothing was deleted, so you can still find it in Firestore if you change your mind.</p>`
      )
    );
  } catch (err) {
    console.error("review-action failed", err);
    return res.status(500).send(page("Error", `<h1>Something went wrong</h1><p>Please try again.</p>`));
  }
};
