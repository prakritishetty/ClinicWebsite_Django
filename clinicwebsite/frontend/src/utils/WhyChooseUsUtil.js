import React from "react";
import { motion } from "framer-motion";
import CountUp from "../components/CountUp";
import TypewriterHeading from "../components/TypewriterHeading";

const WhyChooseUsUtil = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
        margin: "2vw 0"
      }}
    >
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3vw", marginBottom: "3vw" }}>
        <TypewriterHeading text="Why Choose Us?" />
      </h2>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2vw" }}>
        <motion.div variants={itemVariants}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", margin: 0 }}>
            <CountUp to={15} suffix="+" />
          </h3>
          <p style={{ fontFamily: "times new roman", fontSize: "1.5vw" }}>Years of Excellence</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", margin: 0 }}>
            <CountUp to={10000} suffix="+" />
          </h3>
          <p style={{ fontFamily: "times new roman", fontSize: "1.5vw" }}>Happy Smiles Restored</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", margin: 0 }}>
            <CountUp to={100} suffix="+" />
          </h3>
          <p style={{ fontFamily: "times new roman", fontSize: "1.5vw" }}>Implants Placed</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", margin: 0 }}>
            <CountUp to={2} />
          </h3>
          <p style={{ fontFamily: "times new roman", fontSize: "1.5vw" }}>Expert Specialists</p>
        </motion.div>
      </div>

        <motion.div variants={itemVariants} style={{ marginTop: "4vw", width: "90vw", maxWidth: "none", margin: "4vw auto 0 auto" }}>
          <hr style={{ borderTop: "1px solid rgba(255,255,255,0.2)", width: "30%", margin: "0 auto 3vw auto" }} />
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5vw", marginBottom: "2vw", fontStyle: "italic", fontWeight: "300" }}>
          There are easier ways to do dentistry.<br />
          We just haven't found a good reason to use them.
        </h3>
        <p style={{ fontFamily: "times new roman", fontSize: "1.4vw", lineHeight: "1.8", opacity: 0.9 }}>
          Whether it's a routine cleaning or a complex implant procedure, we believe the little things matter. The extra measurements, the extra planning, the extra attention to detail. They may take more effort, but they usually lead to better results.
        </p>
        <p style={{ fontFamily: "times new roman", fontSize: "1.4vw", lineHeight: "1.8", opacity: 1, marginTop: "1vw", fontWeight: "bold", color: "#A0C4FF" }}>
          Because when it comes to your smile, "good enough" rarely is.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WhyChooseUsUtil;
