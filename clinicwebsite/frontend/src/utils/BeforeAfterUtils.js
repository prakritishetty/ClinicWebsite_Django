import React from "react";
import CompareSlider from "../components/CompareSlider.js";
import Reveal from "../components/Reveal.js";
import {
  COMPOSITE_AFTER,
  COMPOSITE_BEFORE,
  FMR_AFTER,
  FMR_BEFORE,
  SMILE_DESIGN_AFTER,
  SMILE_DESIGN_BEFORE,
  VENEERS_AFTER,
  VENEERS_BEFORE,
} from "../data/photos.js";

const CASES = [
  {
    title: "Porcelain veneers",
    desc: "Ultra-thin shells, colour matched, bonded in two visits.",
    beforeSrc: VENEERS_BEFORE,
    afterSrc: VENEERS_AFTER,
  },
  {
    title: "Smile design",
    desc: "Shape, length and proportion planned together, then rebuilt as one.",
    beforeSrc: SMILE_DESIGN_BEFORE,
    afterSrc: SMILE_DESIGN_AFTER,
  },
  {
    title: "Full mouth rehabilitation",
    desc: "Worn, crowded teeth restored across both arches to a settled bite.",
    beforeSrc: FMR_BEFORE,
    afterSrc: FMR_AFTER,
  },
  {
    title: "Composite restoration",
    desc: "Sculpted in a single sitting. No metal, no visible margin.",
    beforeSrc: COMPOSITE_BEFORE,
    afterSrc: COMPOSITE_AFTER,
  },
];

// Intraoral photography is much wider than it is tall; 4/3 cropped the corners
// of every smile off. These sit between 1.7 and 3.0, so 2/1 loses the least.
const RATIO = "2 / 1";

const BeforeAfterUtil = ({ bare = false }) => {
  const body = (
    <div className="shell-wide">
      {!bare && (
        <Reveal>
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Drag to reveal</p>
            <h2 className="display display--xl">Clinical transformations</h2>
          </div>
        </Reveal>
      )}

      <div className="grid grid-3">
        {CASES.map((c, i) => (
          <Reveal key={c.title} i={i}>
            <CompareSlider
              ratio={RATIO}
              beforeSrc={c.beforeSrc}
              afterSrc={c.afterSrc}
              beforeNote={c.beforeNote}
              afterNote={c.afterNote}
            />
            <h3 className="display display--md" style={{ margin: "1.1rem 0 .25rem" }}>
              {c.title}
            </h3>
            <p className="text-quiet" style={{ margin: 0, fontSize: "var(--fs-base)" }}>
              {c.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );

  return bare ? body : <section className="section section--warm">{body}</section>;
};

export default BeforeAfterUtil;
