import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqUtil = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} style={{ padding: "4vw", width: "90vw", maxWidth: "none", margin: "0 auto" }}>
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
  );
};

export default FaqUtil;
