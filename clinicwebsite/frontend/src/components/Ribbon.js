import React from "react";
import { motion } from "framer-motion";

/** Slow, whisper-quiet marquee used as a section divider. */
const Ribbon = ({ words, duration = 42 }) => {
  const run = [...words, ...words];

  return (
    <div className="ribbon">
      <motion.div
        className="ribbon__track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
      >
        {run.map((w, i) => (
          <span className="ribbon__word" key={`${w}-${i}`}>
            {w}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Ribbon;
