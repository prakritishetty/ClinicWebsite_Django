import React from "react";
import CompareSlider from "../components/CompareSlider.js";
import Reveal from "../components/Reveal.js";

/*
 * Clinical photography is on hold - every pane below is the shared placeholder.
 * The original asset for each pane is recorded in `beforeNote` / `afterNote`
 * so the real images can be dropped straight back in.
 * All three use one aspect ratio (4:3) so the row never goes ragged.
 */
const CASES = [
  {
    title: "Porcelain veneers",
    desc: "Ultra-thin shells, colour matched, bonded in two visits.",
    beforeNote: "src/images/veneerspreop.JPG",
    afterNote: "src/images/veneerspostop.JPG",
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
              beforeNote={c.beforeNote}
              afterNote={c.afterNote}
            />
            <h3 className="display display--md" style={{ margin: "1.1rem 0 .25rem" }}>
              {c.title}
            </h3>
            <p className="text-quiet" style={{ margin: 0, fontSize: "var(--fs-sm)" }}>
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
