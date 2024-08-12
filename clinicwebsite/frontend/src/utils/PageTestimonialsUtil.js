import React, { useState, useEffect } from "react";
import {
  Card,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const PageTestimonialsUtil = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

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

        setTestimonials(items);
      } catch (e) {
        console.error("Error retrieving document: ", e);
      }
    };

    fetchPost();
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  return (
    <Card
      className="container-fluid"
      style={{
        height: "90vw",
        
        borderWidth: "0.2vw",
        margin: "0.5vw",
        borderColor: "white",
        backgroundColor: "rgba(0, 28, 40, 0.38)",
      }}
    >
      <div
        style={{
          fontFamily: "Playfair Display",
          fontSize: "2vw",
          color: "white",
        }}
      >
        Here's what our patients have to say:
        <br />
        <div
          style={{
            backgroundColor: "rgba(0, 28, 40, 0.38)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "center",
            height: "40vw",
          }}
        >
          <div
            style={{
              fontFamily: "Playfair Display",
              fontSize: "1.5vw",
              color: "white",
              textAlign: "right",
              padding: "2vw",
              textDecorationColor: "silver",
            }}
          >
            <a
              href="/testimonials"
              style={{ color: "white", textDecorationColor: "silver", fontSize:"1.5vw" }}
            >
              See all testimonials
            </a>
          </div>

          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={testimonials}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {testimonials.map((item) => (
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={item.id}
                style={{ color: "black", fontFamily: "Playfair Display" }}
                className="text-secondary"
              >
                <div
                  style={{
                    height: "60vw",
                    width: "100%",
                    padding: "2vw",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="col-lg-8">
                    <div
                      className="card"
                      style={{
                        backgroundColor: "rgba(0, 28, 40, 0.38)",
                        borderColor: "white",
                        borderWidth: "1px",
                      }}
                    >
                      <p className="post">
                        <span>
                          <img
                            className="quote-img"
                            src="https://i.imgur.com/i06xx2I.png"
                            alt="quote"
                            size = "2vw"
                          />
                        </span>
                        <span
                          className="post-txt"
                          style={{ color: "white" ,fontSize: "1.5vw",}}
                        >
                          {item.headertext}
                          <br />
                          {item.text}
                        </span>
                        <span>
                          <img
                            className="nice-img"
                            src="https://i.imgur.com/l5AkSHd.png"
                            alt="nice"
                            size = "2vw"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="arrow-down"></div>
                    <div
                      style={{
                        fontFamily: "Playfair Display",
                        fontSize: "2vw",
                        color: "white",
                      }}
                    >
                      {item.person}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </div>
      </div>
    </Card>
  );
};

export default PageTestimonialsUtil;
