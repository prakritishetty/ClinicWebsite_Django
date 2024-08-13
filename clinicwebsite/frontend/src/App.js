import React, { Component } from "react";
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
  backgroundColor: theme.palette.common.black,
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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openServices: false,
    };
  }

  onMouseEnterServices = () => {
    this.setState({ openServices: true });
  };
  onMouseLeaveServices = () => {
    this.setState({ openServices: false });
  };

  render() {
    return (
      <div
      style={{
        marginRight: "0",
        marginLeft: "0",
        paddingRight: "0",
        paddingLeft: "0",
        backgroundImage: `url(${removeWM_clinic1})`,
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

        <Card 
        // className="p-3 m-2"
          // style={{
          //   padding: "2vw",
          //   borderWidth: "0.2vw",
          //   margin: "2vw",
          //   position: "float",
          //   backgroundColor: "white",
          // }}

          style={{
            // padding: "2vw",
            borderWidth: "0.2vw",
            margin: "2vw",
            backgroundColor: "white",
            // display: "flex", // Enables Flexbox
            // alignItems: "center", // Vertical centering
            // justifyContent: "center", // Horizontal centering (if needed)
            // minHeight: "40vw", // Ensure card has a minimum height
          }}
        >
          <CardBody>
            <CardText >
              <img
                src={`${removeWM_clinic1}`}
                alt="Card image cap"
                className="float-md-right mb-3 mb-md-0"
                style={{ float: "right", width: '30vw', height: '25vw' }}
              />
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <TfiCheckBox size="3vw" color="black" />
              <h1 
                style={{
                  fontFamily: "Playfair Display",
                  fontSize: "2vw",
                  display: "inline",
                  color: "black",
                  // backgroundColor: "rgba(0,28,40,0.6)", // Adjusted for better visibility
                  padding: "1vw",
                  // margin: "10px",
                }}
              >
                On time, every time
              </h1>
              <h3 style={{
                  fontFamily: "Playfair Display",
                  fontSize: "1.5vw",
                  // display: "inline",
                  color: "black",
                  // backgroundColor: "rgba(0,28,40,0.6)", // Adjusted for better visibility
                  padding: "1vw",
                  // margin: "10px",
                }}>
                Appointments always start on time. We know how packed your
                schedule is.
              </h3>
              <br></br>
              <TfiCheckBox size="3vw" color="black" />{" "}
              <h1
                style={{
                  fontFamily: "Playfair Display",
                  fontSize: "2vw",
                  display: "inline",
                  color: "black",
                  // backgroundColor: "rgba(0,28,40,0.6)", // Adjusted for better visibility
                  padding: "1vw",
                  // margin: "10px",
                }}
              >
                Quality First
              </h1>
              <h3 style={{
                  fontFamily: "Playfair Display",
                  fontSize: "1.5vw",
                  // display: "inline",
                  color: "black",
                  // backgroundColor: "rgba(0,28,40,0.6)", // Adjusted for better visibility
                  padding: "1vw",
                  // margin: "10px",
                }}>
                Rest assured, we encourage the use of only the finest materials
                available.
              </h3>
              <br></br>
              <TfiCheckBox size="3vw" color="black" />{" "}
              <h1
                style={{
                  fontFamily: "Playfair Display",
                  fontSize: "2vw",
                  display: "inline",
                  color: "black",
                  // backgroundColor: "rgba(0,28,40,0.6)", // Adjusted for better visibility
                  padding: "1vw",
                  // margin: "10px",
                }}
              >
                Transparent Pricing
              </h1>
              <h3 style={{
                  fontFamily: "Playfair Display",
                  fontSize: "1.5vw",
                  // display: "inline",
                  color: "black",
                  // backgroundColor: "rgba(0,28,40,0.6)", // Adjusted for better visibility
                  padding: "1vw",
                  // margin: "10px",
                }}>
                We accept a wide variety of payment methods for hassle-free
                payment
              </h3>
            </CardText>
          </CardBody>
        </Card>

        <br></br>
        <br></br>

        <Card
  className="container-fluid"
  style={{
    borderWidth: "0.2vw",
    // margin: "2vw",
    borderColor: "black",
    padding: "1.5vw",
  }}
>
  <h2
    style={{
      fontFamily: "Playfair Display",
      fontSize: "40px",
      color: "Black",
      marginBottom: "20px",
    }}
  >
    Our Services
  </h2>
  
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      justifyContent: "center",
    }}
  >
    {images.map((image) => (
      <div
        key={image.title}
        style={{
          position: "relative",
          height: "200px",
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        <img
          src={image.url}
          alt={image.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href={image.link} style={{ textDecoration: "none" }}>
            <h3
              style={{
                color: "white",
                fontSize: "24px",
                textAlign: "center",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              {image.title}
            </h3>
          </a>
        </div>
      </div>
    ))}
  </div>
</Card>



        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <PageTestimonialsUtil />

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <FooterUtil />
      </div>
    );
  }
}

export default App;
