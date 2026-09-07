import React from "react";
import { motion } from "framer-motion";

/** Scroll-triggered reveal. `as` lets it render any element; `i` staggers siblings. */
const Reveal = ({
  children,
  i = 0,
  y = 26,
  blur = true,
  once = true,
  duration = 0.85,
  ...rest
}) => (
  <motion.div
    initial={{ opacity: 0, y, filter: blur ? "blur(6px)" : "none" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once, margin: "-12% 0px" }}
    transition={{ duration, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default Reveal;
