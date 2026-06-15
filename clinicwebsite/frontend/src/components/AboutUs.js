import React from "react";
import { motion } from "framer-motion";
import NavbarUtil from "../utils/NavbarUtil.js";
import PageTestimonialsUtil from "../utils/PageTestimonialsUtil.js";
import FooterUtil from "../utils/FooterUtil.js";
import BeforeAfterUtil from "../utils/BeforeAfterUtils.js";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div style={{ backgroundColor: "#fcfcfc", minHeight: "100vh", overflowX: "hidden" }}>
      <NavbarUtil />
      <br /><br /><br /><br />

      {/* Hero Section */}
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: "100vw", padding: "6vw 2vw" }}>
        <h3 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "4vw", color: "#173A5E", marginBottom: "-1vw" }}>
          Behind the smiles
        </h3>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "5vw", color: "#0A2342", marginBottom: "2vw" }}
        >
          About Our Practice
        </motion.h1>
      </div>

      {/* Intro Section - Offset Layout */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "4vw", position: "relative" }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4vw" }}>
          <motion.div variants={itemVariants} style={{ flex: "1 1 500px", position: "relative" }}>
             <div style={{ width: "100%", height: "400px", backgroundColor: "#0A2342", borderRadius: "0 60px 0 60px", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                <span style={{ fontFamily: "times new roman", color: "#888" }}>[ Video Placeholder: Clinic Tour / Welcome ]</span>
             </div>
             <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "150px", height: "150px", backgroundColor: "#173A5E", borderRadius: "50%", zIndex: -1, opacity: 0.5 }}></div>
          </motion.div>
          <motion.div variants={itemVariants} style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3vw", color: "#173A5E", marginBottom: "2vw" }}>Where Experience Meets Compassion</h2>
            <p style={{ fontFamily: "times new roman", fontSize: "1.4vw", color: "#0A2342", lineHeight: "1.8" }}>
              Welcome to our practice - where experience, precision, and compassion come together to create confident smiles. Founded and led by <b>Dr. Sandhya Shetty</b> and <b>Dr. Pratiksha Shetty</b>, our practice has been a trusted name in dental care for over 15 years.
            </p>
            <p style={{ fontFamily: "times new roman", fontSize: "1.4vw", color: "#0A2342", lineHeight: "1.8" }}>
              Known for our ethical practice and ability to explain treatments with clarity and care, we are committed to providing personalized, comfortable and high-quality dental care for every smile.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Dr. Sandhya Section */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
        style={{ padding: "8vw 4vw", backgroundColor: "#173A5E", color: "white", marginTop: "4vw", position: "relative", clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 95%)" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap-reverse", alignItems: "center", gap: "4vw" }}>
          <motion.div variants={itemVariants} style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5vw", marginBottom: "1vw" }}>Dr(Mrs.) Sandhya Shetty</h2>
            <h3 style={{ fontFamily: "times new roman", fontSize: "1.5vw", color: "#A0C4FF", marginBottom: "2vw", fontStyle: "italic" }}>B.D.S., Gold Medalist</h3>
            <p style={{ fontFamily: "times new roman", fontSize: "1.3vw", lineHeight: "1.8", color: "#E0E0E0" }}>
              With over 25 years of clinical experience, Dr. Sandhya has honed her expertise in a wide range of dental procedures. Renowned for her in-depth understanding of oral anatomy and exceptional diagnostic skills, she ensures each patient receives accurate, personalized care. Her gentle technique and ethical treatment approach have made her a deeply trusted and beloved dentist in the community.
            </p>
            <div style={{ marginTop: "3vw", padding: "2vw", backgroundColor: "rgba(255,255,255,0.05)", borderLeft: "4px solid #A0C4FF" }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", marginBottom: "1vw" }}>Wall of Excellence</h4>
              <div style={{ display: "flex", gap: "1vw", flexWrap: "wrap" }}>
                <div style={{ width: "120px", height: "80px", backgroundColor: "rgba(0,0,0,0.3)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px" }}><span style={{ fontSize: "0.8vw", color: "#888", textAlign: "center" }}>[ Gold Medal Cert Placeholder ]</span></div>
                <div style={{ width: "120px", height: "80px", backgroundColor: "rgba(0,0,0,0.3)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px" }}><span style={{ fontSize: "0.8vw", color: "#888", textAlign: "center" }}>[ Degree Cert Placeholder ]</span></div>
                <div style={{ width: "120px", height: "80px", backgroundColor: "rgba(0,0,0,0.3)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px" }}><span style={{ fontSize: "0.8vw", color: "#888", textAlign: "center" }}>[ Award Placeholder ]</span></div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
             <div style={{ width: "80%", aspectRatio: "3/4", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "20px 0 20px 0", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid rgba(255,255,255,0.2)" }}>
                <span style={{ fontFamily: "times new roman", color: "#E0E0E0" }}>[ Photo Placeholder: Dr. Sandhya ]</span>
             </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Dr. Pratiksha Section */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
        style={{ maxWidth: "1200px", margin: "8vw auto 4vw auto", padding: "0 4vw" }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4vw" }}>
          <motion.div variants={itemVariants} style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
             <div style={{ width: "80%", aspectRatio: "3/4", backgroundColor: "#E0E0E0", borderRadius: "0 20px 0 20px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                <span style={{ fontFamily: "times new roman", color: "#888" }}>[ Photo Placeholder: Dr. Pratiksha ]</span>
             </div>
          </motion.div>
          <motion.div variants={itemVariants} style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5vw", color: "#173A5E", marginBottom: "1vw" }}>Dr. Pratiksha Shetty</h2>
            <h3 style={{ fontFamily: "times new roman", fontSize: "1.5vw", color: "#0A2342", marginBottom: "2vw", fontStyle: "italic" }}>B.D.S., M.D.S. Prosthodontics</h3>
            <p style={{ fontFamily: "times new roman", fontSize: "1.3vw", lineHeight: "1.8", color: "#0A2342" }}>
              A skilled and passionate prosthodontist, Dr. Pratiksha integrates complete digital workflows into her practice to ensure comfort, accuracy, and superior results. Her clinical expertise spans implants, full-mouth rehabilitation, veneers, and maxillofacial prosthodontics.
            </p>
            <div style={{ marginTop: "3vw", padding: "2vw", backgroundColor: "white", borderLeft: "4px solid #173A5E", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", color: "#173A5E", marginBottom: "1vw" }}>Research & Innovation</h4>
              <p style={{ fontFamily: "times new roman", fontSize: "1.1vw", color: "#555", fontStyle: "italic", marginBottom: "1vw" }}>Dedicated to academic excellence and advancing dental science.</p>
              <ul style={{ fontFamily: "times new roman", fontSize: "1.2vw", color: "#0A2342", paddingLeft: "1.5vw" }}>
                <li style={{ marginBottom: "0.5vw" }}>[ Journal Placeholder: Title of published paper 1 ]</li>
                <li style={{ marginBottom: "0.5vw" }}>[ Journal Placeholder: Title of published paper 2 ]</li>
                <li>[ Conference Placeholder: Presentation at National Conference ]</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <BeforeAfterUtil />
      <br /><br /><br />
      <PageTestimonialsUtil />
      <br /><br /><br />
      <FooterUtil />
    </div>
  );
};

export default AboutUs;
