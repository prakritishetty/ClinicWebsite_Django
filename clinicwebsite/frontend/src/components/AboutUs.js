import React from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import NavbarUtil from "../utils/NavbarUtil.js";
import FooterUtil from "../utils/FooterUtil.js";
import BeforeAfterUtil from "../utils/BeforeAfterUtils.js";
import PageTestimonialsUtil from "../utils/PageTestimonialsUtil.js";
import Placeholder from "./Placeholder.js";
import Reveal from "./Reveal.js";
import ToothMark from "./ToothMark.js";

const TABS = [
  { id: "practice", label: "The Practice" },
  { id: "sandhya", label: "Dr. Sandhya Shetty" },
  { id: "pratiksha", label: "Dr. Pratiksha Shetty" },
  { id: "transformations", label: "Transformations" },
  { id: "testimonials", label: "Testimonials" },
];

const fade = {
  initial: { opacity: 0, y: 18, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -12, filter: "blur(6px)" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const Doctor = ({ name, creds, photoNote, atAGlance, children }) => (
  <div className="shell grid grid-2" style={{ alignItems: "start" }}>
    <Reveal style={{ position: "relative" }}>
      {/* PHOTO: original portrait recorded in the placeholder note below */}
      <Placeholder ratio="3 / 4" label="Portrait" note={photoNote} />
      <ToothMark
        size="clamp(52px, 6vw, 88px)"
        style={{
          position: "absolute",
          right: "-3%",
          bottom: "-4%",
          background: "var(--paper)",
          borderRadius: "50%",
          padding: "clamp(.7rem, 1.2vw, 1.1rem)",
          boxShadow: "var(--shadow-soft)",
        }}
      />
    </Reveal>

    <Reveal i={1}>
      <p className="eyebrow">{creds}</p>
      <h2 className="display display--xl" style={{ margin: ".5rem 0 1.5rem" }}>
        {name}
      </h2>
      <div className="prose">{children}</div>

      <hr className="rule" style={{ margin: "2rem 0 1.5rem" }} />

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: ".55rem" }}>
        {atAGlance.map((row) => (
          <li
            key={row.k}
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(90px, 8rem) 1fr",
              gap: "1rem",
              alignItems: "baseline",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "var(--fs-micro)",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "var(--gold)",
              }}
            >
              {row.k}
            </span>
            <span style={{ fontSize: "var(--fs-sm)" }}>{row.v}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  </div>
);

const AboutUs = () => {
  const [params, setParams] = useSearchParams();
  const requested = params.get("tab");
  const active = TABS.some((t) => t.id === requested) ? requested : "practice";

  const select = (id) => setParams(id === "practice" ? {} : { tab: id }, { replace: true });

  return (
    <div style={{ background: "var(--paper)" }}>
      <NavbarUtil />

      <div className="section section--tight">
        <div className="shell-wide">
          <div className="tabs" role="tablist">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                className="tab"
                data-active={active === t.id}
                aria-selected={active === t.id}
                onClick={() => select(t.id)}
              >
                {t.label}
                {active === t.id && (
                  <motion.span className="tab__ink" layoutId="tab-ink" transition={{ duration: 0.4 }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={active} {...fade} className="section" style={{ paddingTop: 0 }}>
          {active === "practice" && (
            <div className="shell" style={{ maxWidth: "min(820px, 90vw)" }}>
              <Reveal>
                <div className="section-head section-head--center">
                  <p className="eyebrow eyebrow--center">Est. 1994 &middot; Mulund West</p>
                  <h2 className="display display--xl">Where experience meets compassion</h2>
                </div>
              </Reveal>
              <Reveal i={1}>
                <p className="prose">
                  Welcome to our practice &mdash; where experience, precision and compassion come
                  together to create confident smiles. Founded and led by <b>Dr. Sandhya Shetty
                  (BDS, Gold Medalist)</b>, our practice has been a trusted name in dental care for
                  over 15 years. Known for her gentle touch, ethical practice and ability to explain
                  treatments with clarity and care, Dr. Sandhya has earned the trust and respect of a
                  wide patient base. Joining her is <b>Dr. Pratiksha Shetty (BDS, MDS
                  Prosthodontics)</b>, who brings advanced expertise in smile designing, veneers,
                  implants, full-mouth rehabilitation, TMJ disorders, crowns, bridges and dentures.
                  With academic excellence backed by national conference presentations and
                  peer-reviewed publications, she combines artistry with evidence-based dentistry.
                  Together, we are committed to providing personalized, comfortable and high-quality
                  dental care for every smile by coalescing need-based and want-based dentistry.
                </p>
              </Reveal>
              <Reveal i={2} style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
                <ToothMark size="clamp(60px, 7vw, 100px)" />
              </Reveal>
            </div>
          )}

          {active === "sandhya" && (
            <Doctor
              name="Dr. Sandhya Shetty"
              creds="BDS &middot; Gold Medalist"
              photoNote="src/images/amma.JPG"
              atAGlance={[
                { k: "Degree", v: "Bachelor of Dental Surgery, Government Dental College, Aurangabad (1994)" },
                { k: "Honour", v: "Gold Medal, Marathwada University" },
                { k: "Experience", v: "25+ years of clinical practice" },
                { k: "Focus", v: "Cosmetic fillings, root canal treatment, extractions, diagnosis" },
              ]}
            >
              <p>
                Dr. Sandhya Shetty (BDS, Gold Medalist) completed her Bachelor of Dental Surgery from
                Government Dental College, Aurangabad, in 1994, earning the Gold Medal from Marathwada
                University for her outstanding academic performance. With over 25 years of clinical
                experience, she has honed her expertise in a wide range of dental procedures,
                including cosmetic fillings, root canal treatments and extractions.
              </p>
              <p>
                Renowned for her in-depth understanding of oral anatomy and exceptional diagnostic
                skills, Dr. Shetty ensures each patient receives accurate, personalized care. Her
                gentle technique and ability to explain the treatment plan in a methodical way have
                made her a trusted and beloved dentist. She is deeply committed to recommending the
                most suitable and ethical treatment approach for every patient, ensuring long-term
                oral health and comfort.
              </p>
            </Doctor>
          )}

          {active === "pratiksha" && (
            <Doctor
              name="Dr. Pratiksha Shetty"
              creds="BDS &middot; MDS Prosthodontics and Crown &amp; Bridge"
              photoNote="src/images/IMG_6469.JPG"
              atAGlance={[
                { k: "Degree", v: "BDS, Nair Hospital Dental College, Mumbai (2022)" },
                { k: "Speciality", v: "MDS Prosthodontics & Crown and Bridge, Government Dental College & Hospital, Mumbai" },
                { k: "Academic", v: "National conference presentations; peer-reviewed publications" },
                { k: "Focus", v: "Implants, full-mouth rehabilitation, veneers, digital and maxillofacial prosthodontics" },
              ]}
            >
              <p>
                Dr. Pratiksha Shetty (BDS, MDS Prosthodontics and Crown &amp; Bridge) is a skilled and
                passionate prosthodontist dedicated to restoring smiles with precision and artistry.
                She completed her BDS from Nair Hospital Dental College, Mumbai (2022) and pursued her
                MDS in Prosthodontics and Crown &amp; Bridge from Government Dental College &amp;
                Hospital, Mumbai, where she gained advanced training in comprehensive oral
                rehabilitation.
              </p>
              <p>
                Dr. Pratiksha has delivered presentations at national conferences and published
                research in peer-reviewed journals, reflecting her commitment to academic excellence.
                Her clinical expertise spans implants, full-mouth rehabilitation, veneers, digital
                dentistry and maxillofacial prosthodontics, with a special focus on restoring missing
                oral and facial structures to enhance both function and aesthetics. She integrates
                complete digital workflows into her practice to ensure comfort, accuracy and superior
                results, helping every patient regain not just their smile, but also their confidence.
              </p>
            </Doctor>
          )}

          {active === "transformations" && <BeforeAfterUtil bare />}

          {active === "testimonials" && <PageTestimonialsUtil bare />}
        </motion.div>
      </AnimatePresence>

      <FooterUtil />
    </div>
  );
};

export default AboutUs;
