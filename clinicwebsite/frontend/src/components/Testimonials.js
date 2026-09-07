import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import NavbarUtil from "../utils/NavbarUtil.js";
import FooterUtil from "../utils/FooterUtil.js";
import Reveal from "./Reveal.js";
import ToothMark from "./ToothMark.js";

const Testimonials = () => {
  const [items, setItems] = useState([]);
  const [state, setState] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    getDocs(collection(db, "testimonials"))
      .then((snap) => {
        if (cancelled) return;
        setItems(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setState("ready");
      })
      .catch(() => {
        if (!cancelled) setState("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div style={{ background: "var(--paper)" }}>
      <NavbarUtil />

      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        <div className="aurora">
          <span className="aurora__blob aurora__blob--b" />
        </div>
        <div
          className="shell"
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1rem",
          }}
        >
          <Reveal>
            <p className="eyebrow eyebrow--center">Patient stories</p>
          </Reveal>
          <Reveal i={1}>
            <h1 className="display display--hero" style={{ margin: 0 }}>
              Every review, unedited
            </h1>
          </Reveal>
          <Reveal i={2}>
            <ToothMark size="clamp(46px, 6vw, 78px)" />
          </Reveal>
        </div>
      </section>

      <section className="section section--warm" style={{ paddingTop: 0 }}>
        <div className="shell-wide">
          {state === "loading" && (
            <p className="text-quiet" style={{ textAlign: "center" }}>
              Loading&hellip;
            </p>
          )}

          {state === "error" && (
            <p className="text-quiet" style={{ textAlign: "center" }}>
              We couldn&rsquo;t load the reviews just now. Please try again shortly.
            </p>
          )}

          {state === "ready" && (
            <>
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "var(--fs-micro)",
                  letterSpacing: ".28em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  textAlign: "center",
                  marginBottom: "clamp(2rem, 4vw, 3.5rem)",
                }}
              >
                {items.length} {items.length === 1 ? "review" : "reviews"}
              </p>

              <div
                className="grid"
                style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))" }}
              >
                {items.map((item, i) => (
                  <Reveal key={item.id} i={i % 3}>
                    <figure className="card-lux" style={{ height: "100%", margin: 0 }}>
                      <span className="quote-mark" aria-hidden="true">
                        &ldquo;
                      </span>
                      <blockquote style={{ margin: ".5rem 0 0" }}>
                        <p className="display display--md" style={{ marginBottom: ".7rem" }}>
                          {item.headertext}
                        </p>
                        <p className="post-txt text-quiet" style={{ margin: 0 }}>
                          {item.text}
                        </p>
                      </blockquote>
                      <figcaption
                        style={{
                          marginTop: "1.4rem",
                          fontFamily: "var(--font-ui)",
                          fontSize: "var(--fs-micro)",
                          letterSpacing: ".24em",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                        }}
                      >
                        {item.person}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <FooterUtil />
    </div>
  );
};

export default Testimonials;
