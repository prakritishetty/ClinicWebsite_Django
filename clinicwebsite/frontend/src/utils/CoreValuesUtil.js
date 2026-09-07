import React from "react";
import Placeholder from "../components/Placeholder.js";
import Reveal from "../components/Reveal.js";

const VALUES = [
  {
    title: "We treat people, not teeth",
    desc: "The best treatment is the one that fits the person sitting in the chair.",
  },
  {
    title: "Precision is a form of respect",
    desc: "Every detail matters, because you trusted us with something personal.",
  },
  {
    title: "Never stop improving",
    desc: "Not what is common. What is proven to work better.",
  },
];

const CoreValuesUtil = () => (
  <section className="section">
    <div className="shell grid grid-2" style={{ alignItems: "center" }}>
      <Reveal>
        {/* PHOTO: was src/images/61.jpeg (core values) */}
        <Placeholder ratio="1 / 1" label="Practice" note="src/images/61.jpeg" />
      </Reveal>

      <div>
        <Reveal>
          <p className="eyebrow">What we stand for</p>
          <h2 className="display display--xl" style={{ margin: ".5rem 0 2rem" }}>
            Core values
          </h2>
        </Reveal>

        {VALUES.map((v, i) => (
          <Reveal key={v.title} i={i + 1}>
            <div style={{ paddingBlock: "clamp(1rem, 1.8vw, 1.5rem)" }}>
              <h3 className="display display--md">{v.title}</h3>
              <p className="text-quiet" style={{ margin: ".25rem 0 0", fontSize: "var(--fs-base)" }}>
                {v.desc}
              </p>
            </div>
            {i < VALUES.length - 1 && <hr className="rule" />}
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default CoreValuesUtil;
