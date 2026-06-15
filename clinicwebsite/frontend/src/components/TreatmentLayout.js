import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "reactstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import NavbarUtil from "../utils/NavbarUtil.js";
import PageTestimonialsUtil from "../utils/PageTestimonialsUtil.js";
import FooterUtil from "../utils/FooterUtil.js";
import BeforeAfterUtil from "../utils/BeforeAfterUtils.js";
import TypewriterHeading from "./TypewriterHeading.js";
import StatsBanner from "./StatsBanner.js";

const TreatmentLayout = ({ 
  title, 
  cursiveAccent = "Experience exceptional care", 
  intro, 
  offerings = [], 
  whenToConsider = [], 
  faqs = [] 
}) => {
  const [openFaq, setOpenFaq] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div style={{ backgroundColor: "#fcfcfc", minHeight: "100vh", overflowX: "hidden" }}>
      <NavbarUtil />
      <br /><br /><br /><br />
      
      {/* Hero Section */}
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: "100vw", padding: "6vw 2vw", backgroundColor: "#fcfcfc" }}>
        <h3 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "4vw", color: "#173A5E", marginBottom: "-1vw" }}>
          {cursiveAccent}
        </h3>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "5vw", color: "#0A2342", marginBottom: "2vw" }}>
          <TypewriterHeading text={title} />
        </h1>
        <Button style={{ padding: "12px 30px", backgroundColor: "#173A5E", border: "none", borderRadius: "0 20px 0 20px", marginBottom: "1vw", transition: "all 0.3s ease", boxShadow: "0 5px 15px rgba(23,58,94,0.3)" }}>
          <a href="https://wa.me/919833630985?text=Hello" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "1.5vw", fontFamily: "times new roman" }}>
            Book a Consultation
          </a>
        </Button>
      </div>

      {/* Intro Section - Asymmetrical Diamond Soft Shape */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
        style={{ 
          padding: "5vw 4vw", 
          backgroundColor: "#173A5E", 
          color: "#FFFFFF", 
          textAlign: "center", 
          margin: "0 2vw 4vw 2vw", 
          borderRadius: "0 60px 0 60px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, opacity: 0.05, pointerEvents: "none" }}>
          <defs>
            <pattern id="waves" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 30 Q15 0 30 30 T60 30" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
        <motion.p variants={itemVariants} style={{ fontFamily: "times new roman", fontSize: "1.6vw", maxWidth: "900px", margin: "0 auto", lineHeight: "1.8", position: "relative", zIndex: 2 }}>
          {intro}
        </motion.p>
      </motion.div>

      {/* Offerings Glassmorphism Grid */}
      {offerings.length > 0 && (
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} 
          style={{ 
            padding: "6vw 2vw", 
            backgroundColor: "#0A2342", 
            position: "relative",
            clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)"
          }}
        >
          <motion.h2 variants={itemVariants} style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5vw", color: "#FFFFFF", textAlign: "center", marginBottom: "4vw", position: "relative", zIndex: 2 }}>
            What Our Clinic Offers
          </motion.h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3vw", padding: "0 6vw", position: "relative", zIndex: 2 }}>
            {offerings.map((offer, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                whileHover={{ scale: 1.05, rotate: 1 }} 
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.1)", 
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  padding: "3vw", 
                  borderRadius: "20px 0 20px 0", 
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
                }}
              >
                <h4 style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF", marginBottom: "1.5vw", fontSize: "1.8vw" }}>{offer.title}</h4>
                <p style={{ fontFamily: "times new roman", color: "#E0E0E0", fontSize: "1.3vw", lineHeight: "1.6" }}>{offer.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* When to Consider - Overlapping Offset Cards */}
      {whenToConsider.length > 0 && (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} style={{ padding: "6vw 2vw", margin: "2vw 0" }}>
          <motion.h2 variants={itemVariants} style={{ fontFamily: "'Playfair Display', serif", fontSize: "3vw", color: "#173A5E", textAlign: "center", marginBottom: "4vw" }}>
            When to Consider This Treatment
          </motion.h2>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2vw", maxWidth: "1200px", margin: "0 auto" }}>
            {whenToConsider.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                whileHover={{ y: -10 }}
                style={{ 
                  flex: "1 1 250px", 
                  backgroundColor: "#FFFFFF",
                  borderLeft: "6px solid #173A5E",
                  padding: "2vw",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                  borderRadius: "0 15px 15px 0"
                }}
              >
                <p style={{ fontFamily: "times new roman", fontSize: "1.4vw", color: "#0A2342", margin: 0, fontWeight: "500", lineHeight: "1.5" }}>{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Stats Banner */}
      <StatsBanner />

      {/* FAQs */}
      {faqs.length > 0 && (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} style={{ padding: "4vw", maxWidth: "900px", margin: "0 auto" }}>
          <motion.h2 variants={itemVariants} style={{ fontFamily: "'Playfair Display', serif", fontSize: "3vw", color: "#0A2342", textAlign: "center", marginBottom: "3vw" }}>
            Frequently Asked Questions
          </motion.h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vw" }}>
            {faqs.map((faq, idx) => (
              <motion.div key={idx} variants={itemVariants} style={{ border: "1px solid rgba(23, 58, 94, 0.2)", borderRadius: "0 20px 0 20px", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>
                <div 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ padding: "2vw", backgroundColor: openFaq === idx ? "#173A5E" : "white", color: openFaq === idx ? "white" : "#0A2342", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", transition: "all 0.3s ease" }}
                >
                  <h4 style={{ fontFamily: "'Playfair Display', serif", margin: 0, fontSize: "1.6vw" }}>{faq.q}</h4>
                  {openFaq === idx ? <FaChevronUp size="1.5vw" /> : <FaChevronDown size="1.5vw" />}
                </div>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ backgroundColor: "#f9f9f9" }}>
                      <div style={{ padding: "2vw", fontFamily: "times new roman", fontSize: "1.3vw", color: "#0A2342", borderTop: "1px solid rgba(23, 58, 94, 0.1)" }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <BeforeAfterUtil />
      <br /><br />
      <PageTestimonialsUtil />
      <br /><br />
      <FooterUtil />
    </div>
  );
};

export default TreatmentLayout;
