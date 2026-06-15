import React from "react";
import { Button } from "reactstrap";
import clinic1 from "../images/79.jpeg";
import { motion } from "framer-motion";

const HeaderImageUtil = () => {
  const text = "Exceptional dental care for all ages";
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        padding: "0px",
        margin: "0px",
        backgroundColor: "#173A5E",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "90vh",
      }}
    >
      <motion.div
        className="text-center"
        variants={container}
        initial="hidden"
        animate="visible"
        style={{
          fontFamily: "times new roman",
          fontSize: "4.5vw",
          color: "#FFFFFF",
          backgroundColor: "transparent",
          width: "100vw",
          padding: "10px",
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span variants={child} key={index}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Button
          className="my-2"
          style={{
            padding: "10px",
            borderColor: "#0A2342",
            backgroundColor: "#0A2342",
          }}
        >
          <div
            className="text-center"
            style={{
              fontFamily: "times new roman",
              fontSize: "3vw",
            }}
          >
            <a
              href="https://wa.me/919833630985?text=Hello%20Dr%20Sandhya,%20I%27m%20interested%20in%20booking%20an%20appointment%20at%20your%20clinic%0D%0AMy%20name%20is%20:%0D%0AMy%20chief%20complaint%20is:"
              style={{ color: "#FFFFFF", textDecoration: "none" }}
            >
              Book an appointment
            </a>
          </div>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="text-center"
        style={{
          fontFamily: "times new roman",
          fontSize: "2.25vw",
          color: "#FFFFFF",
          backgroundColor: "transparent",
          width: "60vw",
          padding: "10px",
          margin: "6px",
        }}
      >
        OR Call on (+91) 9833630985
      </motion.div>
    </div>
  );
};

export default HeaderImageUtil;
