import React from "react";
import Placeholder from "./Placeholder.js";
import Reveal from "./Reveal.js";

const TECH = [
  {
    title: "Laser dentistry",
    desc: "Soft-tissue work without the drill, and healing measured in days.",
    note: "src/images/IMG_6440.JPG",
  },
  {
    title: "3D intraoral scanning",
    desc: "Digital impressions in seconds. No trays, no gagging, better fits.",
    note: "src/images/IMG_6445.JPG",
  },
  {
    title: "Quiet chairs",
    desc: "Headphones, a blanket, and as many pauses as you need.",
    note: "src/images/Blue chair.JPG",
  },
];

const ComfortTech = () => (
  <section className="section section--ink on-dark" style={{ overflow: "hidden" }}>
    <div className="aurora">
      <span className="aurora__blob aurora__blob--b" />
    </div>

    <div className="shell-wide" style={{ position: "relative", zIndex: 1 }}>
      <Reveal>
        <div className="section-head section-head--center">
          <p className="eyebrow eyebrow--light eyebrow--center">Uncompromising care</p>
          <h2 className="display display--xl" style={{ color: "#fff" }}>
            Technology &amp; comfort
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-3">
        {TECH.map((t, i) => (
          <Reveal key={t.title} i={i}>
            <article className="card-lux card-lux--glass" style={{ height: "100%" }}>
              {/* PHOTO: see note on each placeholder for the original asset */}
              <Placeholder ratio="16 / 10" label="Photo" note={t.note} dark />
              <h3
                className="display display--md"
                style={{ color: "#fff", margin: "1.2rem 0 .3rem" }}
              >
                {t.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "var(--fs-sm)",
                  color: "rgba(255,255,255,.7)",
                }}
              >
                {t.desc}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ComfortTech;
