import React from "react";
import { motion } from "framer-motion";
import coreValuesImg from "../images/61.jpeg";

const CoreValuesUtil = () => {
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
      style={{ padding: "4vw", backgroundColor: "white", margin: "2vw", borderRadius: "20px", display: "flex", flexWrap: "wrap", alignItems: "stretch" }}
    >
      <div style={{ flex: "1 1 40%", padding: "2vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "relative", width: "100%" }}>
          <div style={{ position: "absolute", top: "-15px", left: "-15px", right: "15px", bottom: "15px", border: "4px solid #173A5E", borderRadius: "20px", zIndex: 1 }}></div>
          <img src={coreValuesImg} alt="Core Values" style={{ display: "block", position: "relative", width: "100%", height: "auto", borderRadius: "20px", zIndex: 2, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }} />
        </div>
      </div>

      <div style={{ flex: "1 1 60%", padding: "2vw" }}>
        <h3 style={{ fontFamily: "times new roman", fontStyle: "italic", fontSize: "2vw", color: "#173A5E", marginBottom: "0.5vw" }}>
          What we stand for
        </h3>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", color: "#0A2342", marginBottom: "4vw" }}>
          Core Values
        </h2>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "20px", top: "10px", bottom: "10px", width: "4px", backgroundColor: "#173A5E", borderRadius: "2px" }}></div>

          {[
            {
              title: "We Treat People, Not Teeth",
              desc: "A healthy smile is never just about dentistry. We take the time to understand the person behind every appointment; their concerns, goals, lifestyle, and expectations. Because the best treatment is the one that truly fits the individual."
            },
            {
              title: "Precision is a Form of Respect",
              desc: "Every detail matters. From diagnosis and planning to the final result, we approach our work with meticulous care because our patients trust us with something deeply personal. Precision isn't a feature of our treatment, it's our way of honoring that trust."
            },
            {
              title: "Never Stop Improving",
              desc: "Good enough has never been our standard. We are committed to learning, questioning, refining, and evolving so that our patients benefit from the best of modern dentistry. We constantly strive to provide not just what is common, but what is proven to work better."
            }
          ].map((step, idx) => (
            <motion.div key={idx} variants={itemVariants} style={{ display: "flex", alignItems: "flex-start", marginBottom: "3vw", position: "relative" }}>
              <div style={{ 
                width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "#0A2342", border: "4px solid white", 
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)", display: "flex", justifyContent: "center", alignItems: "center", 
                flexShrink: 0, position: "relative", zIndex: 2 
              }}>
                <span style={{ color: "white", fontFamily: "times new roman", fontWeight: "bold" }}>{idx + 1}</span>
              </div>
              <div style={{ marginLeft: "2vw", backgroundColor: "white", padding: "2vw", borderRadius: "0 20px 20px 20px", boxShadow: "0 8px 20px rgba(0,0,0,0.05)", borderLeft: "4px solid #173A5E", flexGrow: 1 }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", color: "#173A5E", marginBottom: "1vw" }}>{step.title}</h4>
                <p style={{ fontFamily: "times new roman", fontSize: "1.3vw", color: "#0A2342", margin: 0, lineHeight: "1.8" }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CoreValuesUtil;
