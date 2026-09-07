import React from "react";
import NavbarUtil from "../utils/NavbarUtil.js";
import FooterUtil from "../utils/FooterUtil.js";
import Reveal from "./Reveal.js";
import ToothMark from "./ToothMark.js";
import { CATEGORIES, WHATSAPP } from "../data/services.js";

const COPY = {
  general: "Routine care, done attentively. Most problems are cheaper, smaller and less painful when caught here.",
  cosmetic: "Changes people notice without being able to say what changed.",
  surgical: "Rebuilding what is missing, planned digitally before anything is touched.",
};

/** Short index page for a service category. One screen of choices, then out. */
const CategoryPage = ({ id }) => {
  const cat = CATEGORIES.find((c) => c.id === id);
  if (!cat) return null;

  return (
    <div style={{ background: "var(--paper)" }}>
      <NavbarUtil />

      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        <div className="aurora">
          <span className="aurora__blob aurora__blob--a" />
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
            <p className="eyebrow eyebrow--center">Services</p>
          </Reveal>
          <Reveal i={1}>
            <h1 className="display display--hero" style={{ margin: 0 }}>
              {cat.title}
            </h1>
          </Reveal>
          <Reveal i={2}>
            <p className="lede" style={{ maxWidth: "46ch" }}>
              {COPY[id]}
            </p>
          </Reveal>
          <Reveal i={3}>
            <ToothMark size="clamp(48px, 6vw, 80px)" />
          </Reveal>
        </div>
      </section>

      <section className="section section--warm" style={{ paddingTop: 0 }}>
        <div className="shell-wide">
          <div className="grid grid-3">
            {cat.items.map((item, i) => (
              <Reveal key={item.link + item.name} i={i}>
                <a href={item.link} style={{ display: "block", height: "100%" }}>
                  <article className="card-lux" style={{ height: "100%" }}>
                    <span
                      className="display"
                      style={{ fontSize: "var(--fs-lg)", color: "var(--gold)", lineHeight: 1 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="display display--md" style={{ margin: ".4rem 0 1.2rem" }}>
                      {item.name}
                    </h2>
                    <span className="link-underline">Read more</span>
                  </article>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal style={{ textAlign: "center", marginTop: "clamp(2.5rem, 5vw, 4rem)" }}>
            <a className="btn-lux" href={WHATSAPP}>
              Not sure which? Ask us
            </a>
          </Reveal>
        </div>
      </section>

      <FooterUtil />
    </div>
  );
};

export default CategoryPage;
