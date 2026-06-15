import React, { Component } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { CardText, Card, CardBody } from "reactstrap";
import { styled } from "@mui/material/styles";
import { TfiCheckBox } from "react-icons/tfi";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";

import cleaningteeth from "./images/cleaningteeth.jpg";
import implant from "./images/implant.jpg"
import cosmetic from "./images/cosmetic.png"
import removeWM_clinic1 from "./images/79.jpeg";
import NavbarUtil from "./utils/NavbarUtil.js";
import PageTestimonialsUtil from "./utils/PageTestimonialsUtil.js";
import HeaderImageUtil from "./utils/HeaderImageUtil.js";
import FooterUtil from "./utils/FooterUtil.js";
import CountUp from "./components/CountUp";
import TypewriterHeading from "./components/TypewriterHeading";
import SmileJourney from "./components/SmileJourney";
import ComfortTech from "./components/ComfortTech";
//Janice fernandes

const images = [
  {
    ID: 1,
    link: "/general",
    url: `${cleaningteeth}`,
    title: "GENERAL",
    width: "400px",
  },
  {
    ID: 2,
    link: "/cosmetic",
    url: `${cosmetic}`,
    title: "COSMETIC",
    width: "400px",
  },
  {
    ID: 3,
    link: "/surgical",
    url: `${implant}`,
    title: "SURGICAL",
    width: "400px",
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

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <Card
          style={{
            borderWidth: "0.2vw",
            margin: "2vw",
            backgroundColor: "white",
          }}
        >
          <CardBody>
            <CardText>
              <div className="row">
                <div className="col-md-8">
                  <motion.div variants={itemVariants}>
                    <TfiCheckBox size="3vw" color="#0A2342" />
                    <h1
                      style={{
                        fontFamily: "times new roman",
                        fontSize: "1.5vw",
                        display: "inline",
                        color: "#0A2342",
                        padding: "1vw",
                      }}
                    >
                      On time, every time
                    </h1>
                    <h3
                      style={{
                        fontFamily: "times new roman",
                        fontSize: "1.125vw",
                        color: "#0A2342",
                        padding: "1vw",
                      }}
                    >
                      Appointments always start on time. We know how packed your
                      schedule is.
                    </h3>
                  </motion.div>
                  <br></br>
                  <motion.div variants={itemVariants}>
                    <TfiCheckBox size="3vw" color="#0A2342" />{" "}
                    <h1
                      style={{
                        fontFamily: "times new roman",
                        fontSize: "1.5vw",
                        display: "inline",
                        color: "#0A2342",
                        padding: "1vw",
                      }}
                    >
                      Quality First
                    </h1>
                    <h3
                      style={{
                        fontFamily: "times new roman",
                        fontSize: "1.125vw",
                        color: "#0A2342",
                        padding: "1vw",
                      }}
                    >
                      Rest assured, we encourage the use of only the finest materials
                      available.
                    </h3>
                  </motion.div>
                  <br></br>
                  <motion.div variants={itemVariants}>
                    <TfiCheckBox size="3vw" color="#0A2342" />{" "}
                    <h1
                      style={{
                        fontFamily: "times new roman",
                        fontSize: "1.5vw",
                        display: "inline",
                        color: "#0A2342",
                        padding: "1vw",
                      }}
                    >
                      Transparent Pricing
                    </h1>
                    <h3
                      style={{
                        fontFamily: "times new roman",
                        fontSize: "1.125vw",
                        color: "#0A2342",
                        padding: "1vw",
                      }}
                    >
                      We accept a wide variety of payment methods for hassle-free
                      payment
                    </h3>
                  </motion.div>
                </div>
                <div className="col-md-3">
                  {/* User requested to comment out photos
                  {/* <img
                    src={`${removeWM_clinic1}`}
                    alt="Card image cap"
                    style={{ width: '30vw', height: '25vw' }}
                  /> */}
                  */}
                </div>
              </div>
            </CardText>
          </CardBody>
        </Card>
      </motion.div>

      <br></br>
      <br></br>

      {/* STATS SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        style={{
          backgroundColor: "#173A5E",
          padding: "5vw",
          color: "white",
          textAlign: "center",
          margin: "2vw 0"
        }}
      >
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3vw", marginBottom: "3vw" }}>
          <TypewriterHeading text="Why Choose Us?" />
        </h2>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2vw" }}>
          <motion.div variants={itemVariants}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", margin: 0 }}>
              <CountUp to={15} suffix="+" />
            </h3>
            <p style={{ fontFamily: "times new roman", fontSize: "1.5vw" }}>Years of Excellence</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", margin: 0 }}>
              <CountUp to={10000} suffix="+" />
            </h3>
            <p style={{ fontFamily: "times new roman", fontSize: "1.5vw" }}>Happy Smiles Restored</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", margin: 0 }}>
              <CountUp to={500} suffix="+" />
            </h3>
            <p style={{ fontFamily: "times new roman", fontSize: "1.5vw" }}>Implants Placed</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", margin: 0 }}>
              <CountUp to={2} />
            </h3>
            <p style={{ fontFamily: "times new roman", fontSize: "1.5vw" }}>Expert Specialists</p>
          </motion.div>
        </div>
      </motion.div>

      <br></br>
      <br></br>

      <motion.div
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
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "3vw",
              justifyContent: "center",
              padding: "0 2vw"
            }}
          >
            {images.map((image, index) => (
              <motion.div
                variants={itemVariants}
                key={image.title}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)" }}
                style={{
                  position: "relative",
                  height: "250px",
                  overflow: "hidden",
                  borderRadius: "15px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  border: "2px solid rgba(255, 255, 255, 0.1)"
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
            ))}
          </div>
        </Card>
      </motion.div>

      <SmileJourney />
      <ComfortTech />

      <br></br>
      <br></br>

      <PageTestimonialsUtil />

      <br></br>
      <br></br>

      {/* FAQ SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        style={{ padding: "4vw", backgroundColor: "white", margin: "2vw" }}
      >
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3vw", color: "#0A2342", textAlign: "center", marginBottom: "3vw" }}>Frequently Asked Questions</h2>
        
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1vw" }}>
          {[
            { q: "What should I expect during my first visit?", a: "Your first visit involves a comprehensive oral examination, x-rays if necessary, and a consultation to discuss your dental health goals." },
            { q: "Do you accept dental insurance?", a: "We accept most major dental insurance plans. Please contact our office to verify your specific coverage." },
            { q: "How often should I get a dental checkup?", a: "We recommend a routine checkup and cleaning every 6 months to maintain optimal oral health." },
            { q: "Do you offer emergency dental services?", a: "Yes, we handle dental emergencies. If you are experiencing severe pain or trauma, call us immediately." }
          ].map((faq, i) => (
            <motion.div variants={itemVariants} key={i} style={{ borderBottom: "1px solid #ccc", paddingBottom: "1vw" }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", color: "#173A5E", fontSize: "1.5vw", marginBottom: "0.5vw" }}>{faq.q}</h4>
              <p style={{ fontFamily: "times new roman", color: "#0A2342", fontSize: "1.2vw" }}>{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <br></br>
      <br></br>

      <FooterUtil />
    </div>
  );
};

export default App;
