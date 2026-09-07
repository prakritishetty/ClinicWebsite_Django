import React from "react";
import CountUp from "../components/CountUp.js";
import Reveal from "../components/Reveal.js";

const STATS = [
  { to: 30, suffix: "+", label: "Years in practice" },
  { to: 10000, suffix: "+", label: "Smiles restored" },
  { to: 100, suffix: "+", label: "Implants placed" },
  { to: 2, suffix: "", label: "Specialists" },
];

const WhyChooseUsUtil = () => (
  <section className="section section--ink on-dark" style={{ overflow: "hidden" }}>
    <div className="shell">
      <Reveal>
        <div className="section-head section-head--center">
          <p className="eyebrow eyebrow--light eyebrow--center">Why choose us</p>
          <h2 className="display display--xl" style={{ color: "#fff" }}>
            There are easier ways to do dentistry
          </h2>
          <p className="lede" style={{ maxWidth: "48ch" }}>
            We just haven&rsquo;t found a good reason to use them.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-4" style={{ textAlign: "center" }}>
        {STATS.map((s, i) => (
          <Reveal key={s.label} i={i}>
            <div className="stat-value" style={{ color: "#fff" }}>
              <CountUp to={s.to} suffix={s.suffix} />
            </div>
            <div className="stat-label">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsUtil;
