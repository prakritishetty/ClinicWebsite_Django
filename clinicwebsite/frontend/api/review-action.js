const { getDb, verify, recipients, escapeHtml } = require("./_lib");

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
 .note{background:#fdf6e7;border-radius:8px;padding:14px 18px;margin:22px 0;color:#6b5524}
 button{font-family:Jost,system-ui,sans-serif;font-size:12px;letter-spacing:.2em;text-transform:uppercase;
        padding:14px 30px;border:0;border-radius:4px;background:#011f4b;color:#fff;cursor:pointer}
 a{color:#005b96}
</style></head><body><div class="box">${body}</div></body></html>`;

const VERB = { approve: "published", reject: "rejected" };

const when = (value) => {
  const d = value && typeof value.toDate === "function" ? value.toDate() : value;
  return d
    ? new Date(d).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })
    : "earlier";
};

/**
 * Approve or reject a review from the notification email.
 *
 * GET only renders a confirmation page; mutation happens on POST. Mail security
 * scanners routinely follow links, so a mutating GET would let reviews approve
 * themselves.
 *
 * Both doctors get their own link, so the decision runs inside a transaction:
 * the first decision settles it and the second doctor is shown what was already
 * decided instead of silently overwriting it.
 */
module.exports = async (req, res) => {
  const params = req.method === "POST" ? { ...req.query, ...req.body } : req.query;
  const { id, action, who, token, override } = params;

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (!id || !["approve", "reject"].includes(action) || !verify(id, action, who, token)) {
    return res.status(400).send(
      page(
        "Invalid link",
        `<p class="eyebrow">Error</p><h1>This link isn't valid</h1>
         <p>It may have been altered or has expired. Please use the buttons in the original email.</p>`
      )
    );
  }

  const actor = recipients()[Number(who)] || "a doctor";

  try {
    const db = getDb();
    const ref = db.collection("testimonials").doc(id);

    const outcome = await db.runTransaction(async (tx) => {
      const snap = await tx.get(ref);
      if (!snap.exists) return { state: "missing" };

      const review = snap.data();
      const prior = review.decision;

      if (req.method !== "POST") {
        return { state: prior && prior !== action ? "conflict" : "confirm", review };
      }
      if (prior === action) return { state: "already-same", review };
      if (prior && !override) return { state: "conflict", review };

      tx.update(ref, {
        approved: action === "approve",
        decision: action,
        decidedAt: new Date(),
        decidedBy: actor,
      });
      return { state: "done", review };
    });

    const { state, review } = outcome;

    if (state === "missing") {
      return res
        .status(404)
        .send(page("Not found", `<p class="eyebrow">Error</p><h1>Review not found</h1>`));
    }

    const quote = `<h1>${escapeHtml(review.headertext)}</h1>
       <blockquote>${escapeHtml(review.text)}</blockquote>
       <p>&mdash; ${escapeHtml(review.person)}</p>`;

    const form = (label, extra = "") =>
      `<form method="POST">
         <input type="hidden" name="id" value="${escapeHtml(id)}">
         <input type="hidden" name="action" value="${escapeHtml(action)}">
         <input type="hidden" name="who" value="${escapeHtml(who)}">
         <input type="hidden" name="token" value="${escapeHtml(token)}">
         ${extra}
         <button type="submit">${label}</button>
       </form>`;

    if (state === "confirm") {
      return res.status(200).send(
        page(
          "Confirm",
          `<p class="eyebrow">${action === "approve" ? "Publish this review" : "Reject this review"}</p>
           ${quote}
           ${form(action === "approve" ? "Yes, publish it" : "Yes, reject it")}`
        )
      );
    }

    if (state === "conflict") {
      return res.status(200).send(
        page(
          "Already decided",
          `<p class="eyebrow">Already decided</p>
           ${quote}
           <div class="note"><b>${escapeHtml(review.decidedBy || "The other doctor")}</b> already
             ${VERB[review.decision]} this review on ${escapeHtml(when(review.decidedAt))}.</div>
           <p>Nothing has been changed. You can override that decision if you disagree.</p>
           ${form(
             action === "approve" ? "Publish it anyway" : "Reject it anyway",
             '<input type="hidden" name="override" value="1">'
           )}`
        )
      );
    }

    if (state === "already-same") {
      return res.status(200).send(
        page(
          "Already done",
          `<p class="eyebrow">No change needed</p>
           <h1>Already ${VERB[action]}</h1>
           <p><b>${escapeHtml(review.decidedBy || "The other doctor")}</b> ${VERB[action]} this review
              on ${escapeHtml(when(review.decidedAt))}.</p>
           ${action === "approve" ? '<p><a href="/testimonials">View testimonials</a></p>' : ""}`
        )
      );
    }

    return res.status(200).send(
      action === "approve"
        ? page(
            "Published",
            `<p class="eyebrow">Done</p><h1>Review published</h1>
             <p>It's now live on the testimonials page.</p>
             <p><a href="/testimonials">View testimonials</a></p>`
          )
        : page(
            "Rejected",
            `<p class="eyebrow">Done</p><h1>Review rejected</h1>
             <p>It stays hidden from the website. Nothing was deleted, so you can still find it in
                Firestore if you change your mind.</p>`
          )
    );
  } catch (err) {
    console.error("review-action failed", err);
    return res
      .status(500)
      .send(page("Error", `<h1>Something went wrong</h1><p>Please try again.</p>`));
  }
};
