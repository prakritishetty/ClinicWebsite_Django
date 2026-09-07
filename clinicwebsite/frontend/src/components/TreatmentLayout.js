import React from "react";
import NavbarUtil from "../utils/NavbarUtil.js";
import FooterUtil from "../utils/FooterUtil.js";
import FaqUtil from "../utils/FaqUtil.js";
import Placeholder from "./Placeholder.js";
import Reveal from "./Reveal.js";
import { WHATSAPP } from "../data/services.js";

/**
 * Compact layout shared by every treatment page.
 * Deliberately short: hero, what we offer, when to consider, FAQ, footer.
 * No background photography, no repeated transformations / testimonials blocks -
 * those live on the home and About pages so service pages stay one quick read.
 */
const TreatmentLayout = ({
  title,
  cursiveAccent = "Treatment",
  intro,
  offerings = [],
  whenToConsider = [],
  faqs = [],
  photoNote,
}) => (
  <div style={{ background: "var(--paper)" }}>
    <NavbarUtil />

    {/* Hero */}
    <section className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="aurora">
        <span className="aurora__blob aurora__blob--a" />
      </div>

      <div
        className="shell grid grid-2"
        style={{ position: "relative", zIndex: 1, alignItems: "center" }}
      >
        <Reveal>
          <p className="eyebrow">{cursiveAccent}</p>
          <h1 className="display display--xl" style={{ margin: ".5rem 0 1.2rem" }}>
            {title}
          </h1>
          <p className="lede" style={{ maxWidth: "44ch" }}>
            {intro}
          </p>
          <div style={{ marginTop: "2rem" }}>
            <a className="btn-lux" href={WHATSAPP}>
              Book a consultation
            </a>
          </div>
        </Reveal>

        <Reveal i={1}>
          {/* PHOTO: placeholder until clinical photography is supplied */}
          <Placeholder ratio="4 / 3" label="Treatment" note={photoNote || "to be supplied"} />
        </Reveal>
      </div>
    </section>

    {/* What we offer */}
    {offerings.length > 0 && (
      <section className="section section--warm">
        <div className="shell-wide">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">What this includes</p>
            </div>
          </Reveal>

          <div className="grid grid-3">
            {offerings.map((offer, i) => (
              <Reveal key={offer.title} i={i}>
                <article className="card-lux" style={{ height: "100%" }}>
                  <span
                    className="display"
                    style={{ fontSize: "var(--fs-lg)", color: "var(--gold)", lineHeight: 1 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display display--md" style={{ margin: ".4rem 0 .5rem" }}>
                    {offer.title}
                  </h3>
                  <p className="text-quiet" style={{ margin: 0, fontSize: "var(--fs-sm)" }}>
                    {offer.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* When to consider */}
    {whenToConsider.length > 0 && (
      <section className="section">
        <div className="shell grid grid-2" style={{ alignItems: "start" }}>
          <Reveal>
            <p className="eyebrow">Worth a conversation if</p>
            <h2 className="display display--lg" style={{ marginTop: ".5rem" }}>
              Any of this sounds familiar
            </h2>
          </Reveal>

          <div>
            {whenToConsider.map((item, i) => (
              <Reveal key={item} i={i}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "1rem",
                    alignItems: "baseline",
                    paddingBlock: "clamp(.7rem, 1.3vw, 1.05rem)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "var(--gold)",
                      transform: "translateY(-.35em)",
                    }}
                  />
                  <span style={{ fontSize: "var(--fs-base)" }}>{item}</span>
                </div>
                {i < whenToConsider.length - 1 && <hr className="rule" style={{ opacity: 0.3 }} />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    )}

    <FaqUtil faqs={faqs} />

    <FooterUtil />
  </div>
);

export default TreatmentLayout;
