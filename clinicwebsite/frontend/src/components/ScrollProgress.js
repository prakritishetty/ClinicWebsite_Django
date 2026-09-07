import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/** Gold hairline that tracks reading progress across the whole page. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
};

export default ScrollProgress;
