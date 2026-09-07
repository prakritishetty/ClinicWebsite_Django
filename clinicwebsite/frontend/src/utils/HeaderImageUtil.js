import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PhotoShuffle from "../components/PhotoShuffle.js";
import ToothMark from "../components/ToothMark.js";
import { BOOKING_URL, PHONE } from "../data/services.js";
import { CLINIC_PHOTOS } from "../data/photos.js";

const LINE_1 = "Dentistry";
const LINE_2 = "done properly.";

const word = {
  hidden: { opacity: 0, y: "0.4em", filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const HeaderImageUtil = () => {
  const { scrollYProgress } = useScroll();
  const artY = useTransform(scrollYProgress, [0, 0.3], [0, -70]);
  const typeY = useTransform(scrollYProgress, [0, 0.3], [0, 40]);

  return (
    <section
      className="section"
      style={{
        position: "relative",
        minHeight: "min(88vh, 900px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div className="aurora">
        <span className="aurora__blob aurora__blob--a" />
        <span className="aurora__blob aurora__blob--b" />
      </div>

      <div
        className="shell grid grid-2"
        style={{ position: "relative", zIndex: 1, alignItems: "center", rowGap: "clamp(2rem,5vw,4rem)" }}
      >
        <motion.div style={{ y: typeY }}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            Mulund West &middot; 20+ years of expertise
          </motion.p>

          <motion.h1
            className="display display--hero"
            style={{ margin: "0.6rem 0 1.4rem" }}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12, delayChildren: 0.25 }}
          >
            {[LINE_1, LINE_2].map((line, li) => (
              <span key={line} style={{ display: "block" }}>
                {line.split(" ").map((w, i) => (
                  <motion.span
                    key={`${w}-${i}`}
                    variants={word}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      display: "inline-block",
                      marginRight: "0.24em",
                      color: li === 1 ? "var(--blue)" : undefined,
                    }}
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="lede"
            style={{ maxWidth: "36ch" }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.9 }}
          >
            Two dentists, one chair at a time. Gentle, unhurried and measured to the
            tenth of a millimetre.
          </motion.p>

          <motion.div
            style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem", marginTop: "2rem" }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.9 }}
          >
            <a className="btn-lux" href={BOOKING_URL}>
              Book an appointment
            </a>
            <a className="btn-lux btn-lux--ghost" href="tel:+919833630985">
              {PHONE}
            </a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: artY, position: "relative" }}>
          <PhotoShuffle
            photos={CLINIC_PHOTOS}
            ratio="4 / 5"
            alt="Dr Sandhya's Total Dental Care, Mulund West"
          />
          <ToothMark
            size="clamp(70px, 9vw, 130px)"
            style={{
              position: "absolute",
              right: "-4%",
              bottom: "-5%",
              background: "var(--paper)",
              borderRadius: "50%",
              padding: "clamp(.8rem, 1.4vw, 1.4rem)",
              boxShadow: "var(--shadow-soft)",
            }}
          />
        </motion.div>
      </div>

      <motion.span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          bottom: "clamp(1rem, 3vw, 2.5rem)",
          translate: "-50% 0",
          width: 1,
          height: "clamp(28px, 4vw, 52px)",
          background: "linear-gradient(180deg, var(--gold), transparent)",
        }}
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
      />
    </section>
  );
};

export default HeaderImageUtil;
