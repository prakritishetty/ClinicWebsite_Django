import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Reveal from "./Reveal";

const STEPS = [
  { t: "Listen", d: "We start with your story, not your x-rays." },
  { t: "Diagnose", d: "Digital scans and imaging - nothing guessed." },
  { t: "Plan", d: "One clear plan, priced and paced with you." },
  { t: "Treat", d: "Unhurried, gentle, done properly the first time." },
  { t: "Follow through", d: "We stay with the result, not just the appointment." },
];

/** Vertical journey rail whose gold line fills as the section scrolls past. */
const SmileJourney = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 90,
    damping: 26,
  });

  return (
    <div className="journey" ref={ref}>
      <div className="journey__rail" />
      <motion.div className="journey__fill" style={{ scaleY }} />
      {STEPS.map((s, i) => (
        <Reveal key={s.t} i={i} className="journey__step">
          <span className="journey__dot">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="display display--md" style={{ marginBottom: ".2em" }}>
              {s.t}
            </h3>
            <p className="text-quiet" style={{ margin: 0, fontSize: "var(--fs-base)" }}>
              {s.d}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default SmileJourney;
