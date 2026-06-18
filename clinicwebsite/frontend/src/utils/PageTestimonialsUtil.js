import React, { useState, useEffect } from "react";
import { Card } from "reactstrap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TypewriterHeading from "../components/TypewriterHeading";

const PageTestimonialsUtil = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const items = newData.map((testimonial, i) => ({
          id: i + 3,
          headertext: testimonial.headertext,
          text: testimonial.text,
          person: testimonial.person,
        }));

        // Provide fallback data if firebase is empty or fails
        if (items.length === 0) {
          setTestimonials([
            { id: 1, headertext: "Amazing Experience", text: "Dr. Sandhya is the best! Very painless and professional.", person: "John Doe" },
            { id: 2, headertext: "Highly Recommended", text: "I finally have the smile I always wanted. Thank you so much.", person: "Jane Smith" },
            { id: 3, headertext: "Exceptional Care", text: "The clinic staff is incredibly welcoming and the treatment was perfect.", person: "Mike Johnson" },
          ]);
        } else {
          setTestimonials(items);
        }
      } catch (e) {
        console.error("Error retrieving document: ", e);
        // Fallback data
        setTestimonials([
          { id: 1, headertext: "Amazing Experience", text: "Dr. Sandhya is the best! Very painless and professional.", person: "John Doe" },
          { id: 2, headertext: "Highly Recommended", text: "I finally have the smile I always wanted. Thank you so much.", person: "Jane Smith" },
          { id: 3, headertext: "Exceptional Care", text: "The clinic staff is incredibly welcoming and the treatment was perfect.", person: "Mike Johnson" },
        ]);
      }
    };

    fetchPost();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  if (testimonials.length === 0) return null;

  return (
    <Card
      className="container-fluid"
      style={{
        border: "none",
        backgroundColor: "#0A2342",
        padding: "5vw 2vw",
        color: "white",
        textAlign: "center",
        overflow: "hidden"
      }}
    >
      <h3 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "3.5vw", color: "#FFFFFF", marginBottom: "-0.5vw" }}>
        Patient Stories
      </h3>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", marginBottom: "3vw" }}>
        <TypewriterHeading text="What Our Patients Say" />
      </h2>

      <div style={{ position: "relative", minHeight: "calc(400px + 30vw)", height: "auto", padding: "10vw 0", display: "flex", justifyContent: "center", alignItems: "center", perspective: "1000px" }}>

        <button
          onClick={handlePrev}
          style={{ position: "absolute", left: "5vw", zIndex: 20, background: "transparent", border: "none", color: "white", cursor: "pointer" }}
        >
          <FaChevronLeft size="3vw" />
        </button>

        <AnimatePresence mode="popLayout">
          {testimonials.map((item, index) => {
            let offset = index - currentIndex;
            // Handle wrap around for smooth infinite carousel feel
            if (offset < -1) offset += testimonials.length;
            if (offset > 1) offset -= testimonials.length;

            if (Math.abs(offset) > 1) return null; // Only show center, left, right

            let x = 0;
            let rotateY = 0;
            let scale = 1;
            let zIndex = 10;
            let opacity = 1;

            if (offset === -1) {
              x = "-60%";
              rotateY = 30;
              scale = 0.8;
              zIndex = 5;
              opacity = 0.5;
            } else if (offset === 1) {
              x = "60%";
              rotateY = -30;
              scale = 0.8;
              zIndex = 5;
              opacity = 0.5;
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: offset > 0 ? "100%" : "-100%", rotateY: offset > 0 ? -45 : 45 }}
                animate={{ opacity, x, rotateY, scale, zIndex }}
                exit={{ opacity: 0, x: offset < 0 ? "-100%" : "100%", rotateY: offset < 0 ? 45 : -45 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  width: "50vw",
                  minWidth: "300px",
                  maxWidth: "none",
                  height: "auto",
                  backgroundColor: "#173A5E",
                  border: "2px solid #FFFFFF",
                  borderRadius: "15px",
                  padding: "4vw",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  transformStyle: "preserve-3d"
                }}
              >
                <div style={{ transform: "translateZ(30px)" }}>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2vw", color: "#FFFFFF", marginBottom: "1.5vw" }}>
                    "{item.headertext}"
                  </h4>
                  <p style={{ fontFamily: "times new roman", fontSize: "1.2vw", color: "#FFFFFF", marginBottom: "2vw" }}>
                    {item.text}
                  </p>
                  <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "2.5vw", color: "#FFFFFF", margin: 0, textAlign: "right" }}>
                    - {item.person}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        <button
          onClick={handleNext}
          style={{ position: "absolute", right: "5vw", zIndex: 20, background: "transparent", border: "none", color: "white", cursor: "pointer" }}
        >
          <FaChevronRight size="3vw" />
        </button>

      </div>

      <div style={{ marginTop: "2vw" }}>
        <a href="/testimonials" style={{ color: "#FFFFFF", textDecoration: "underline", fontSize: "1.2vw", fontFamily: "times new roman" }}>
          View all testimonials
        </a>
      </div>
    </Card>
  );
};

export default PageTestimonialsUtil;
