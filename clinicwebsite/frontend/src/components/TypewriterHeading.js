import React from "react";
import { motion } from "framer-motion";

const TypewriterHeading = ({ text, style, delay = 0 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      style={{ display: "inline-block", ...style }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={childVariants} style={{ display: "inline-block", whiteSpace: "pre" }}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypewriterHeading;
