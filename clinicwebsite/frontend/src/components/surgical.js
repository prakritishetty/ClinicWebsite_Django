import React from "react";
import { Button } from "reactstrap";
import { motion } from "framer-motion";
import NavbarUtil from "../utils/NavbarUtil.js";
import PageTestimonialsUtil from "../utils/PageTestimonialsUtil.js";
import FooterUtil from "../utils/FooterUtil.js";
import BeforeAfterUtil from "../utils/BeforeAfterUtils.js";

const services = [
  { title: "Implants", desc: "Artificial tooth roots to support replacement teeth.", link: "/implants" },
  { title: "Extractions", desc: "Removal of teeth from their sockets.", link: "/extractions" },
  { title: "Root Canals", desc: "Treatment to save an infected or damaged tooth's interior.", link: "/rootcanals" },
  { title: "Bone Graft", desc: "Adding bone material to jaw to support implants or improve structure.", link: "/bonegraft" },
  { title: "Implant-supported Dentures", desc: "Dentures anchored by dental implants for stability.", link: "/implantsupporteddentures" },
  { title: "Bridges", desc: "Fixed prosthetics to replace one or more missing teeth.", link: "/bridges" },
  { title: "Over Dentures", desc: "Removable dentures that fit over remaining natural teeth or implants.", link: "/overdentures" },
  { title: "Same Day Implants", desc: "Dental implants placed and restored in a single appointment.", link: "/samedayimplants" },
];

const Surgical = () => {
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
          Surgical Services
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
          Expert Surgical Care
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

export default Surgical;
