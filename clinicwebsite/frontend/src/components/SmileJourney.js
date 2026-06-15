import React from "react";
import { motion } from "framer-motion";

const SmileJourney = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const steps = [
    {
      title: "1. The Virtual or In-Person Consult",
      desc: "Meet with our specialists to discuss your goals, express your concerns, and explore the possibilities for your smile in a completely pressure-free environment."
    },
    {
      title: "2. 3D Digital Smile Design",
      desc: "Using advanced 3D scanning, we map your mouth perfectly. You can actually preview your stunning new smile on a screen before any treatment begins."
    },
    {
      title: "3. The Relaxed Procedure",
      desc: "Experience pain-free dentistry with our advanced sedation options, laser technology, and a calming, spa-like atmosphere designed for your ultimate comfort."
    },
    {
      title: "4. The Reveal",
      desc: "Walk out of our clinic with renewed confidence, fully restored function, and a radiant smile that you'll be proud to show the world."
    }
  ];

  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }} 
      variants={containerVariants}
      style={{ padding: "6vw 4vw", backgroundColor: "#fcfcfc", overflow: "hidden", position: "relative" }}
    >
      <h3 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "3vw", color: "#173A5E", textAlign: "center", marginBottom: "-1vw" }}>
        Your path to confidence
      </h3>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", color: "#0A2342", textAlign: "center", marginBottom: "4vw" }}>
        The Smile Journey
      </h2>

      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
        {/* Vertical Line connecting steps */}
        <div style={{ position: "absolute", left: "20px", top: "10px", bottom: "10px", width: "4px", backgroundColor: "#173A5E", borderRadius: "2px" }}></div>

        {steps.map((step, idx) => (
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
              <p style={{ fontFamily: "times new roman", fontSize: "1.3vw", color: "#0A2342", margin: 0 }}>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SmileJourney;
