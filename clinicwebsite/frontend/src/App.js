import React, { Component } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { CardText, Card, CardBody } from "reactstrap";
import { styled } from "@mui/material/styles";
import { TfiCheckBox } from "react-icons/tfi";
import { FaTooth } from "react-icons/fa";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";

import cleaningteeth from "./images/cleaningteeth.jpg";
import implant from "./images/implant.jpg"
import cosmetic from "./images/cosmetic.png"
import removeWM_clinic1 from "./images/79.jpeg";
import coreValuesImg from "./images/61.jpeg";
import NavbarUtil from "./utils/NavbarUtil.js";
import PageTestimonialsUtil from "./utils/PageTestimonialsUtil.js";
import HeaderImageUtil from "./utils/HeaderImageUtil.js";
import FooterUtil from "./utils/FooterUtil.js";
import BeforeAfterUtil from "./utils/BeforeAfterUtils.js";
import CoreValuesUtil from "./utils/CoreValuesUtil.js";
import WhyChooseUsUtil from "./utils/WhyChooseUsUtil.js";
import TypewriterHeading from "./components/TypewriterHeading";
import ComfortTech from "./components/ComfortTech";
import FaqUtil from "./utils/FaqUtil.js";
//Janice fernandes

const images = [
  {
    ID: 1,
    link: "/general-dentistry",
    url: `${cleaningteeth}`,
    title: "General Dentistry",
    desc: "Keeping your teeth and gums healthy for the long run.",
    items: [
      { name: "Dental Check-ups & Consultations", link: "/checkups" },
      { name: "Professional Cleaning (Scaling & Polishing)", link: "/cleaning" },
      { name: "Fillings (Tooth-Coloured Restorations)", link: "/fillings" },
      { name: "Root Canal Treatment", link: "/root-canal" },
      { name: "Crowns & Bridges", link: "/crowns-bridges" },
      { name: "Complete and Partial Dentures", link: "/dentures" },
      { name: "Treatment of Tooth Sensitivity", link: "/sensitivity" },
      { name: "Treatment of temporomandibular joint disorders", link: "/tmj-treatment" },
      { name: "Fluoride Therapy", link: "/fluoride-therapy" },
      { name: "Night Guards / Mouth Guards", link: "/mouth-guards" },
      { name: "Management of Gum Disease", link: "/gum-disease" },
      { name: "Emergency Dental Care", link: "/emergency" },
      { name: "Pediatric Dental Care", link: "/pediatric" }
    ]
  },
  {
    ID: 2,
    link: "/cosmetic-dentistry",
    url: `${cosmetic}`,
    title: "Cosmetic Dentistry",
    desc: "Enhancing the appearance of your smile while maintaining function.",
    items: [
      { name: "Teeth Whitening", link: "/teeth-whitening" },
      { name: "Smile Designing", link: "/smile-designing" },
      { name: "Veneers", link: "/veneers" },
      { name: "Tooth-Coloured Fillings", link: "/tooth-colored-fillings" },
      { name: "Gum Contouring", link: "/gum-contouring" },
      { name: "Diastema (Gap) Closure", link: "/gap-closure" },
      { name: "Aesthetic Crowns", link: "/aesthetic-crowns" },
      { name: "Clear Aligners / Invisible Braces", link: "/clear-aligners" }
    ]
  },
  {
    ID: 3,
    link: "/surgical-implant-dentistry",
    url: `${implant}`,
    title: "Surgical & Implant Dentistry",
    desc: "Advanced procedures focused on restoring health, function, and missing teeth.",
    items: [
      { name: "Dental Implants", link: "/dental-implants" },
      { name: "Full Mouth Implant Rehabilitation", link: "/full-mouth-rehab" },
      { name: "Tooth Extractions", link: "/extractions" },
      { name: "Surgical Wisdom Tooth Removal", link: "/wisdom-tooth-removal" },
      { name: "Bone Grafting", link: "/bone-grafting" },
      { name: "Sinus Lift Procedures", link: "/sinus-lift" },
      { name: "Soft Tissue Grafting", link: "/soft-tissue-grafting" },
      { name: "Implant Site Development", link: "/implant-site-development" },
      { name: "Exposure of Impacted Teeth", link: "/impacted-teeth" },
      { name: "Apicoectomy (Root-End Surgery)", link: "/apicoectomy" },
      { name: "Oral Biopsies", link: "/oral-biopsies" },
      { name: "Pre-Prosthetic Surgery", link: "/pre-prosthetic-surgery" }
    ]
  },
];


const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 300, // Default height
  width: '100%', // Full width by default
  [theme.breakpoints.down("sm")]: {
    height: 200, // Adjust height for small screens
  },
  [theme.breakpoints.up("md")]: {
    width: 'calc(33.333% - 10px)', // Adjust width for medium and larger screens
  },
  margin: '5px', // Margin between items
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "#fafafa",
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const App = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      style={{
        marginRight: "0",
        marginLeft: "0",
        paddingRight: "0",
        paddingLeft: "0",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <NavbarUtil />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <HeaderImageUtil />

      <br></br>
      <br></br>

      <CoreValuesUtil />

      <br></br>
      <br></br>

      {/* STATS SECTION */}
      <WhyChooseUsUtil />

      <br></br>
      <br></br>

      <motion.div
        id="our-services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        style={{ padding: "4vw 2vw" }}
      >
        <Card
          className="container-fluid"
          style={{
            border: "none",
            backgroundColor: "#173A5E",
            padding: "4vw 2vw",
            borderRadius: "20px"
          }}
        >
          <motion.h2
            variants={itemVariants}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.5vw",
              color: "#FFFFFF",
              marginBottom: "3vw",
              textAlign: "center"
            }}
          >
            <TypewriterHeading text="Our Services" />
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3vw",
              justifyContent: "center",
              padding: "0 2vw"
            }}
          >
            {images.map((image, index) => (
              <motion.div
                variants={itemVariants}
                key={image.title}
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)" }}
                  style={{
                    position: "relative",
                    height: "120px",
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "15px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                    border: "2px solid rgba(255, 255, 255, 0.1)",
                    marginBottom: "1vw"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "#0A2342",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <a href={image.link} style={{ textDecoration: "none", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <h3
                        style={{
                          color: "#FFFFFF",
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "2vw",
                          textAlign: "center",
                          margin: 0
                        }}
                      >
                        {image.title}
                      </h3>
                    </a>
                  </div>
                </motion.div>
                <p style={{ fontFamily: "times new roman", fontStyle: "italic", fontSize: "1.2vw", color: "#A0C4FF", textAlign: "center", marginBottom: "1.5vw" }}>
                  {image.desc}
                </p>

                <div style={{ position: "relative", paddingLeft: "1vw", marginTop: "1vw", width: "100%" }}>
                  <div style={{ position: "absolute", left: "1.5vw", top: "5px", bottom: "5px", width: "2px", backgroundColor: "rgba(255,255,255,0.2)" }}></div>
                  {image.items.map((item, idx) => (
                    <div key={idx} style={{ position: "relative", paddingLeft: "2vw", marginBottom: "1vw", display: "flex", alignItems: "center" }}>
                      <div style={{ position: "absolute", left: "0.2vw", top: "50%", transform: "translateY(-50%)", width: "8px", height: "8px", backgroundColor: "#A0C4FF", borderRadius: "50%", zIndex: 2, boxShadow: "0 0 5px #A0C4FF" }}></div>
                      <a
                        href={item.link}
                        style={{
                          color: "#FFFFFF",
                          fontSize: "1.1vw",
                          fontFamily: "times new roman",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5vw"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = "#A0C4FF";
                          e.target.style.transform = "translateX(5px)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = "#FFFFFF";
                          e.target.style.transform = "translateX(0px)";
                        }}
                      >
                        <FaTooth size="1vw" color="#A0C4FF" />
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      <BeforeAfterUtil />
      <br></br>
      <br></br>

      <PageTestimonialsUtil />

      <br></br>
      <br></br>

      {/* FAQ SECTION */}
      <FaqUtil faqs={[
        { q: "What should I expect during my first visit?", a: "Your first visit involves a comprehensive oral examination, x-rays if necessary, and a consultation to discuss your dental health goals." },
        { q: "How often should I get a dental checkup?", a: "We recommend a routine checkup and cleaning every 6 months to maintain optimal oral health." },
        { q: "Do you offer emergency dental services?", a: "Yes, we handle dental emergencies. If you are experiencing severe pain or trauma, call us immediately." }
      ]} />

      <br></br>
      <br></br>

      <FooterUtil />
    </div>
  );
};

export default App;
