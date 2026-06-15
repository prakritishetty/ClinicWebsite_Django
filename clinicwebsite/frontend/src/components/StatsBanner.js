import React from "react";
import { motion } from "framer-motion";
import CountUp from "./CountUp";

const StatsBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      style={{
        backgroundColor: "#173A5E",
        padding: "5vw",
        color: "white",
        textAlign: "center",
        margin: "4vw 0",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Subtle geometric background texture */}
      <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, opacity: 0.05, pointerEvents: "none" }}>
        <defs>
          <pattern id="dot-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#FFFFFF" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>

      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3vw", marginBottom: "3vw", position: "relative", zIndex: 2 }}>
        Why Choose Us?
      </h2>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2vw", position: "relative", zIndex: 2 }}>
        <motion.div variants={itemVariants}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", margin: 0 }}>
            <CountUp to={15} suffix="+" />
          </h3>
          <p style={{ fontFamily: "times new roman", fontSize: "1.5vw", color: "#E0E0E0" }}>Years of Excellence</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", margin: 0 }}>
            <CountUp to={10000} suffix="+" />
          </h3>
          <p style={{ fontFamily: "times new roman", fontSize: "1.5vw", color: "#E0E0E0" }}>Happy Smiles Restored</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", margin: 0 }}>
            <CountUp to={500} suffix="+" />
          </h3>
          <p style={{ fontFamily: "times new roman", fontSize: "1.5vw", color: "#E0E0E0" }}>Implants Placed</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", margin: 0 }}>
            <CountUp to={2} />
          </h3>
          <p style={{ fontFamily: "times new roman", fontSize: "1.5vw", color: "#E0E0E0" }}>Expert Specialists</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatsBanner;
