import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../components/Reveal.js";

const FaqUtil = ({ faqs, title = "Questions, answered" }) => {
  const [open, setOpen] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="section">
      <div className="shell" style={{ maxWidth: "min(860px, 90vw)" }}>
        <Reveal>
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">FAQ</p>
            <h2 className="display display--xl">{title}</h2>
          </div>
        </Reveal>

        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={faq.q} i={i}>
              <div className="faq-row" data-open={isOpen}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {faq.q}
                  <span className="faq-sign" aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="faq-a__inner">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default FaqUtil;
