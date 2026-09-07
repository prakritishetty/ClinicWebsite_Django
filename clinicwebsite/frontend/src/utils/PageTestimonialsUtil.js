import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Reveal from "../components/Reveal.js";

const FALLBACK = [
  {
    id: "f1",
    headertext: "Painless, start to finish",
    text: "I had put off a root canal for two years. It was over before I realised it had started.",
    person: "Ananya R.",
  },
  {
    id: "f2",
    headertext: "They explained everything",
    text: "For the first time I understood what was being done to my teeth and why. No pressure, no upselling.",
    person: "Rohit M.",
  },
  {
    id: "f3",
    headertext: "Worth the travel",
    text: "We drive across the city for our appointments. The care and the finish are simply not the same elsewhere.",
    person: "Meera & Sunil K.",
  },
];

const PageTestimonialsUtil = ({ bare = false }) => {
  const [items, setItems] = useState(FALLBACK);
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    let cancelled = false;

    getDocs(collection(db, "testimonials"))
      .then((snap) => {
        if (cancelled) return;
        const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        if (data.length) setItems(data);
      })
      .catch(() => {
        /* Firestore unreachable - the curated fallback quotes stay in place. */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % items.length);
    }, 8000);
    return () => clearInterval(t);
  }, [items.length]);

  const go = (step) => {
    setDir(step);
    setIndex((i) => (i + step + items.length) % items.length);
  };

  const current = items[index];

  const body = (
    <div className="shell" style={{ maxWidth: "min(900px, 90vw)", textAlign: "center" }}>
      <Reveal>
        <div className="section-head section-head--center">
          <p className="eyebrow eyebrow--center">Patient stories</p>
          <h2 className="display display--xl">In their words</h2>
        </div>
      </Reveal>

      <span className="quote-mark" aria-hidden="true">
        &ldquo;
      </span>

      <div style={{ position: "relative", minHeight: "clamp(200px, 26vw, 280px)", marginTop: "1rem" }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.blockquote
            key={current.id ?? index}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: dir * -40, filter: "blur(6px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ margin: 0 }}
          >
            <p
              className="display display--lg"
              style={{ margin: "0 0 1.2rem", color: "var(--ink)", lineHeight: 1.25 }}
            >
              {current.headertext}
            </p>
            <p className="lede" style={{ maxWidth: "56ch", margin: "0 auto" }}>
              {current.text}
            </p>
            <footer
              style={{
                marginTop: "1.8rem",
                fontFamily: "var(--font-ui)",
                fontSize: "var(--fs-micro)",
                letterSpacing: ".28em",
                textTransform: "uppercase",
                color: "var(--gold)",
              }}
            >
              {current.person}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.6rem",
          marginTop: "1rem",
        }}
      >
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="nav-link"
          style={{ letterSpacing: 0 }}
        >
          &larr;
        </button>

        <div style={{ display: "flex", gap: ".55rem", alignItems: "center" }}>
          {items.length > 7 ? (
            // Firestore returns dozens of reviews - a dot per review is unreadable.
            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "var(--fs-micro)",
                letterSpacing: ".24em",
                color: "var(--muted)",
              }}
            >
              {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
          ) : (
            items.map((it, i) => (
              <button
                key={it.id ?? i}
                type="button"
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                style={{
                  width: i === index ? 22 : 6,
                  height: 2,
                  border: 0,
                  padding: 0,
                  cursor: "pointer",
                  background: i === index ? "var(--gold)" : "var(--hairline)",
                  transition: "width .5s var(--ease), background .5s var(--ease)",
                }}
              />
            ))
          )}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="nav-link"
          style={{ letterSpacing: 0 }}
        >
          &rarr;
        </button>
      </div>

      {!bare && (
        <div style={{ marginTop: "2.5rem" }}>
          <a className="link-underline" href="/testimonials">
            Read every review
          </a>
        </div>
      )}
    </div>
  );

  // White + gold, as requested - this section deliberately stays light.
  return bare ? body : <section className="section">{body}</section>;
};

export default PageTestimonialsUtil;
