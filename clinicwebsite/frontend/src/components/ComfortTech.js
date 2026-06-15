import React from "react";
import { motion } from "framer-motion";

const ComfortTech = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }} 
      variants={containerVariants}
      style={{ 
        padding: "8vw 4vw", 
        backgroundColor: "#0A2342", 
        position: "relative",
        clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
        color: "white"
      }}
    >
      <h3 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "3vw", color: "#FFFFFF", textAlign: "center", marginBottom: "-0.5vw" }}>
        Uncompromising care
      </h3>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", textAlign: "center", marginBottom: "4vw" }}>
        Technology & Comfort
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3vw", maxWidth: "1200px", margin: "0 auto", padding: "0 2vw" }}>
        
        {/* Tech 1 */}
        <motion.div variants={itemVariants} whileHover={{ y: -10 }} style={{ backgroundColor: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "30px 0 30px 0", padding: "3vw" }}>
          <div style={{ width: "100%", height: "150px", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "15px", marginBottom: "2vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <span style={{ fontFamily: "times new roman", color: "#888" }}>[ Video/Photo Placeholder: Laser Dentistry ]</span>
          </div>
          <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", marginBottom: "1vw" }}>Laser Dentistry</h4>
          <p style={{ fontFamily: "times new roman", fontSize: "1.2vw", color: "#E0E0E0", lineHeight: "1.6" }}>Experience pain-free treatments with our advanced soft-tissue lasers. Say goodbye to the drill and hello to rapid, comfortable healing.</p>
        </motion.div>

        {/* Tech 2 */}
        <motion.div variants={itemVariants} whileHover={{ y: -10 }} style={{ backgroundColor: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "30px 0 30px 0", padding: "3vw" }}>
          <div style={{ width: "100%", height: "150px", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "15px", marginBottom: "2vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <span style={{ fontFamily: "times new roman", color: "#888" }}>[ Video/Photo Placeholder: 3D Scanner ]</span>
          </div>
          <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", marginBottom: "1vw" }}>3D Intraoral Scanning</h4>
          <p style={{ fontFamily: "times new roman", fontSize: "1.2vw", color: "#E0E0E0", lineHeight: "1.6" }}>No more messy impression goop. We take highly precise digital impressions of your teeth in seconds, ensuring perfect fits for crowns and aligners.</p>
        </motion.div>

        {/* Tech 3 */}
        <motion.div variants={itemVariants} whileHover={{ y: -10 }} style={{ backgroundColor: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "30px 0 30px 0", padding: "3vw" }}>
          <div style={{ width: "100%", height: "150px", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "15px", marginBottom: "2vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <span style={{ fontFamily: "times new roman", color: "#888" }}>[ Video/Photo Placeholder: Spa Room ]</span>
          </div>
          <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", marginBottom: "1vw" }}>Spa-Like Comforts</h4>
          <p style={{ fontFamily: "times new roman", fontSize: "1.2vw", color: "#E0E0E0", lineHeight: "1.6" }}>Your anxiety melts away here. Enjoy noise-canceling headphones, soothing ambient music, and sedation options for ultimate relaxation.</p>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ComfortTech;
