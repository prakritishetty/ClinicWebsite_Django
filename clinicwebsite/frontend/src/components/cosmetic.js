import React from "react";
import { Button } from "reactstrap";
import { motion } from "framer-motion";
import NavbarUtil from "../utils/NavbarUtil.js";
import PageTestimonialsUtil from "../utils/PageTestimonialsUtil.js";
import FooterUtil from "../utils/FooterUtil.js";
import BeforeAfterUtil from "../utils/BeforeAfterUtils.js";

const services = [
  { title: "Teeth Aligners", desc: "Invisible braces for straightening teeth.", link: "/invisalign" },
  { title: "Teeth Whitening", desc: "Procedure to brighten and lighten tooth color.", link: "/whitening" },
  { title: "Bonding", desc: "Applying tooth-colored resin to repair or improve tooth appearance.", link: "/bondingfillings" },
  { title: "Veneers", desc: "Thin shells placed over teeth to enhance aesthetics.", link: "/veneers" },
  { title: "Gummy Smile Reduction", desc: "Procedure to reduce excess gum visibility when smiling.", link: "/gummysmilereduction" },
  { title: "Smile Makeover", desc: "Comprehensive cosmetic dental treatment plan.", link: "/smilemakeover" },
  { title: "Full Mouth Rehabilitation", desc: "Complete restoration of oral health and function.", link: "/fullmouthrehab" },
];

const Cosmetic = () => {
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
          Cosmetic Services
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
          Enhance Your Smile's Beauty
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

export default Cosmetic;
