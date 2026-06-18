import React from "react";
import { Button, Card, NavLink } from "reactstrap";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

const FooterUtil = () => {
  return (
    <div style={{ backgroundColor: "#173A5E", color: "#FFFFFF", fontFamily: "times new roman" }}>
      {/* Call to Action Banner */}
      <Card
        className="container-fluid"
        style={{
          border: "none",
          backgroundColor: "#0A2342",
          padding: "5vw",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5vw", color: "#FFFFFF", marginBottom: "2vw" }}>
          So what are you waiting for? Smile wide!
        </h2>
        <Button
          style={{
            fontFamily: "times new roman",
            fontSize: "1.5vw",
            padding: "1.2vw 3vw",
            backgroundColor: "#173A5E",
            borderColor: "#FFFFFF",
            borderWidth: "2px",
            borderRadius: "40px",
            margin: "0 auto",
            display: "inline-block",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
          }}
        >
          <a
            href="https://wa.me/919833630985?text=Hello%20Dr%20Sandhya,%20I%27m%20interested%20in%20booking%20an%20appointment"
            style={{ color: "#FFFFFF", textDecoration: "none" }}
          >
            Book your appointment today!
          </a>
        </Button>
      </Card>

      {/* Map and Visit Us Section - At the top as requested */}
      <div style={{ padding: "5vw 4vw", backgroundColor: "#173A5E" }}>
        <div className="row" style={{ alignItems: "center", border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: "20px", padding: "3vw", backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
          <div className="col-md-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.627340847596!2d72.94237301412522!3d19.167783054063854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f7c2d76931%3A0xa2d85150fddd96c8!2sDr%20Sandhya&#39;s%20Total%20Dental%20Care!5e0!3m2!1sen!2sin!4v1670239514055!5m2!1sen!2sin"
              style={{
                width: "100%",
                height: "30vw",
                border: "none",
                borderRadius: "15px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
              }}
              title="Clinic Map"
            ></iframe>
          </div>
          <div className="col-md-4" style={{ paddingLeft: "3vw" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3vw", marginBottom: "1.5vw" }}>Visit Us</h2>
            <hr style={{ borderColor: "rgba(255, 255, 255, 0.3)", borderWidth: "2px" }} />
            <p style={{ fontSize: "1.4vw", lineHeight: "1.8" }}>
              Shop #9, Saidham Complex,<br />
              P.K road, Mulund West<br />
              Mumbai - 400080
            </p>
            <hr style={{ borderColor: "rgba(255, 255, 255, 0.3)" }} />
            <p style={{ fontSize: "1.4vw", lineHeight: "1.8" }}>
              <strong>Mon - Sat:</strong><br />
              10:00 AM to 2:00 PM<br />
              6:00 PM to 9:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Links Footer - Tall 4 columns side by side */}
      <div className="container-fluid" style={{ backgroundColor: "#0A2342", padding: "6vw 4vw" }}>
        <div className="row" style={{ width: "100%", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>

          <div className="col-md-3 mb-5">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2vw", borderBottom: "2px solid rgba(255, 255, 255, 0.2)", paddingBottom: "1vw", marginBottom: "2vw" }}>
              Social
            </h3>
            <div style={{ display: "flex", gap: "1.5vw" }}>
              <BsInstagram size="2.5vw" style={{ cursor: "pointer" }} />
              <AiOutlineLinkedin size="2.5vw" style={{ cursor: "pointer" }} />
            </div>
          </div>

          <div className="col-md-3 mb-5">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2vw", borderBottom: "2px solid rgba(255, 255, 255, 0.2)", paddingBottom: "1vw", marginBottom: "2vw" }}>
              Services
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vw", fontSize: "1.4vw" }}>
              <NavLink href="/#our-services" style={{ color: "#FFFFFF", padding: 0 }}>General Dentistry</NavLink>
              <NavLink href="/#our-services" style={{ color: "#FFFFFF", padding: 0 }}>Cosmetic Dentistry</NavLink>
              <NavLink href="/#our-services" style={{ color: "#FFFFFF", padding: 0 }}>Surgical Procedures</NavLink>
            </div>
          </div>

          <div className="col-md-3 mb-5">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2vw", borderBottom: "2px solid rgba(255, 255, 255, 0.2)", paddingBottom: "1vw", marginBottom: "2vw" }}>
              Our Office
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vw", fontSize: "1.4vw" }}>
              <NavLink href="/" style={{ color: "#FFFFFF", padding: 0 }}>Home</NavLink>
              <NavLink href="/about" style={{ color: "#FFFFFF", padding: 0 }}>About Our Practice</NavLink>
              <NavLink href="/doctorlogin" style={{ color: "#FFFFFF", padding: 0 }}>Doctor Login</NavLink>
            </div>
          </div>

          <div className="col-md-3 mb-5">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2vw", borderBottom: "2px solid rgba(255, 255, 255, 0.2)", paddingBottom: "1vw", marginBottom: "2vw" }}>
              Contact Us
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vw", fontSize: "1.4vw" }}>
              <p style={{ margin: 0 }}>Call (+91) 9833630985</p>
              <p style={{ margin: 0, lineHeight: "1.6" }}>Shop #9, Saidham Complex,<br />P.K road, Mulund West</p>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div
        className="text-center py-4"
        style={{
          backgroundColor: "#173A5E",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          fontSize: "1.2vw",
          color: "rgba(255, 255, 255, 0.6)"
        }}
      >
        © Dr Sandhya's Total Dental Care | Copyright: 2022 | Designed by: Prakriti Shetty
      </div>
    </div>
  );
};

export default FooterUtil;
