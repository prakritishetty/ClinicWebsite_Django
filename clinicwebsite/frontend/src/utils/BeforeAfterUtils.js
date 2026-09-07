import React from "react";
import CompareSlider from "../components/CompareSlider.js";
import Reveal from "../components/Reveal.js";
import { VENEERS_AFTER, VENEERS_BEFORE } from "../data/photos.js";

/*
 * Only the veneers case has photography so far; the other two still use the
 * shared placeholder, with the original asset recorded in the note so it can be
 * dropped straight in. All three share one aspect ratio so the row stays even.
 */
const CASES = [
  {
    title: "Porcelain veneers",
    desc: "Ultra-thin shells, colour matched, bonded in two visits.",
    beforeSrc: VENEERS_BEFORE,
    afterSrc: VENEERS_AFTER,
  },
  {
    title: "Cleft palate, missing tooth",
    desc: "Prosthetic rehabilitation restoring speech, chewing and symmetry.",
    beforeNote: "src/images/cleftpalatemissingtoothpreop.jpg",
    afterNote: "src/images/cleftpalatemissingtoothpostop.jpg",
  },
  {
    title: "Composite restoration",
    desc: "Sculpted in a single sitting. No metal, no visible margin.",
    beforeNote: "src/images/compositrestorationpreop.JPG",
    afterNote: "src/images/compositerestorationpostop.JPG",
  },
];

const RATIO = "4 / 3";

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
