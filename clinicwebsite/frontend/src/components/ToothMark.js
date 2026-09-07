import React from "react";
import { motion } from "framer-motion";

const TOOTH =
  "M50 8 C30 8 14 20 14 42 C14 62 22 78 27 100 C30 114 34 122 40 122 C46 122 47 112 50 100 C53 112 54 122 60 122 C66 122 70 114 73 100 C78 78 86 62 86 42 C86 20 70 8 50 8 Z";

const SHINE = "M34 30 C30 38 30 48 33 58";

/** Line-art tooth that draws itself in. Used instead of stock photography. */
const ToothMark = ({ size = 160, stroke = "var(--gold)", delay = 0.2, style }) => (
  <motion.svg
    viewBox="0 0 100 130"
    style={{ width: size, height: "auto", overflow: "visible", ...style }}
    fill="none"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-10%" }}
    aria-hidden="true"
  >
    <motion.path
      d={TOOTH}
      stroke={stroke}
      strokeWidth="0.9"
      strokeLinecap="round"
      variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
      transition={{ duration: 2.4, delay, ease: [0.22, 1, 0.36, 1] }}
    />
    <motion.path
      d={SHINE}
      stroke={stroke}
      strokeWidth="0.9"
      strokeLinecap="round"
      variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 0.55 } }}
      transition={{ duration: 1.1, delay: delay + 1.3, ease: [0.22, 1, 0.36, 1] }}
    />
  </motion.svg>
);

export default ToothMark;
