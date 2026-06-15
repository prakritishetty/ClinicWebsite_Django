import React from "react";
import { Button } from "reactstrap";
import { motion } from "framer-motion";
import NavbarUtil from "../utils/NavbarUtil.js";
import PageTestimonialsUtil from "../utils/PageTestimonialsUtil.js";
import FooterUtil from "../utils/FooterUtil.js";
import BeforeAfterUtil from "../utils/BeforeAfterUtils.js";

const services = [
  { title: "Cleaning and Examinations", desc: "Routine dental care and assessment.", link: "/cleaningexams" },
  { title: "Crowns", desc: "Protective covers for damaged teeth.", link: "/crowns" },
  { title: "Tooth Extractions", desc: "Removal of problematic teeth.", link: "/extractions" },
  { title: "Gum Therapy", desc: "Treatment for gum health and disease.", link: "/gumtherapy" },
  { title: "Bondings and White Fillings", desc: "Cosmetic and restorative dental procedures.", link: "/bondingfillings" },
  { title: "Dentures", desc: "Replacements for missing teeth.", link: "/dentures" },
  { title: "Night Guards", desc: "Protective devices worn during sleep.", link: "/nightguards" },
];

const General = () => {
  return (
    <div style={{ backgroundColor: "#fcfcfc", minHeight: "100vh", overflowX: "hidden" }}>
      <NavbarUtil />
      <br /><br /><br /><br />
      
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: "100vw", padding: "2vw" }}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "4.5vw", color: "#0A2342", marginBottom: "2vw" }}
        >
          General Services
        </motion.h1>
        <Button style={{ padding: "10px", borderColor: "#173A5E", backgroundColor: "#173A5E", marginBottom: "1vw" }}>
          <a href="https://wa.me/919833630985?text=Hello" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "2vw", fontFamily: "times new roman" }}>
            Book an appointment
          </a>
        </Button>
        <p style={{ fontFamily: "times new roman", fontSize: "1.5vw", color: "#0A2342" }}>OR Call on (+91) 9833630985</p>
      </div>

      <div style={{ padding: "4vw", backgroundColor: "white", margin: "2vw", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5vw", color: "#0A2342", textAlign: "center", marginBottom: "3vw" }}>
          Comprehensive Care for Your Smile
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2vw" }}>
          {services.map((svc, i) => (
            <motion.a 
              href={svc.link} 
              key={i}
              whileHover={{ scale: 1.05, backgroundColor: "#0A2342" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                textDecoration: "none",
                backgroundColor: "#173A5E",
                padding: "3vw",
                borderRadius: "10px",
                color: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 5px 15px rgba(23, 58, 94, 0.2)"
              }}
            >
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", marginBottom: "1vw", color: "#FFFFFF" }}>{svc.title}</h3>
              <p style={{ fontFamily: "times new roman", fontSize: "1.2vw", margin: 0, color: "#FFFFFF" }}>{svc.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>

      <BeforeAfterUtil />
      <br /><br /><br />
      <PageTestimonialsUtil />
      <br /><br /><br />
      <FooterUtil />
    </div>
  );
};

export default General;
