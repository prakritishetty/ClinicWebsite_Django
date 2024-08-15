import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import clinic1 from "../images/79.jpeg";
import IMG_6429 from "../images/IMG_6413.JPG"
import NavbarUtil from "../utils/NavbarUtil.js";
import PageTestimonialsUtil from "../utils/PageTestimonialsUtil.js";
import FooterUtil from "../utils/FooterUtil.js";
import BeforeAfterUtil from "../utils/BeforeAfterUtils.js";

class App extends Component {
  render() {
    return (
      <div
      style={{
        marginRight: "0",
        marginLeft: "0",
        paddingRight: "0",
        paddingLeft: "0",
        backgroundImage: `url(${clinic1})`,
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

        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            padding: "0px",
            margin: "0px",
            backgroundImage: `url(${IMG_6429})`,
            backgroundPosition: "center ",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            minHeight: "140vh",
          }}
        >
          <div
            className="text-center"
            style={{
              fontFamily: "Playfair Display",
              fontSize: "6vw",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "100vw",
              padding: "10px",
              margin: "2vw",
            }}
          >
            {" "}
            Bondings and White Fillings!
          </div>
          <Button
            active
            className="my-2"
            style={{
              padding: "0.5vw",
             //  marginleft:"200vw",
              borderColor: "white",
              backgroundColor: "black",
            }}
          >
            <div
              className="text-center"
              style={{
                fontFamily: "Playfair Display",
                fontSize: "3vw",
                color: "white",
              }}
            >
              <a
                href="https://wa.me/919833630985?text=Hello%20Dr%20Sandhya,%20I%27m%20interested%20in%20booking%20an%20appointment%20at%20your%20clinic%0D%0AMy%20name%20is%20:%0D%0AMy%20chief%20complaint%20is:"
                style={{ color: "white", textDecoration: "none" }}
              >
                Book an appointment
              </a>
            </div>
          </Button>
          <div
             style={{
              fontFamily: "Playfair Display",
              fontSize: "2.5vw",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "35vw",
              padding: "1vw",
              margin: "0.6vw",
            }}
          >
            {" "}
            OR Call on (+91) 9833630985{" "}
          </div>
        </div>
        <br></br>
        <br></br>

        <br></br>
        <br></br>

        <br></br>
        <br></br>

        {/* <Navbar
          style={{
            backgroundColor: "rgba(0, 28, 40, 0.38)",
            padding: "20px",
            marginLeft: "0px",
            paddingLeft: "0px",
            height: "800px",
          }}
        >
          <Nav className="ms-auto">
            <NavItem style={{ padding: "30px" }}> */}
            <div className="row">
            <div className="col-md-5" style={{margin:"4vw", padding:"2vw"}} >
              <Card
                style={{
                  fontSize: "1.5vw",
                  margin: "0.5vw",
                  // width: "",
                  padding: "1vw",
                }}
              >
                <CardHeader
                  style={{
                    fontSize: "1.5vw",
                    // width: "400px",
                    color: "black",
                    padding: "1vw",
                    align: "center",
                  }}
                >
                  <b>Bonding</b>
                </CardHeader>

                <CardBody
                   style={{ 
                    // width: "400px", 
                    fontSize: "1.5vw", color: "black" }}
                >
                  Bonding is a cosmetic dental procedure in which a{" "}
                  <b>tooth-colored composite resin</b> is applied to the surface
                  of a tooth and then hardened with a special light. <br></br>
                  <br></br>The resin is shaped and polished to match the
                  surrounding teeth, and is used to repair chips, cracks, and
                  gaps in the teeth. <br></br>
                  <br></br>Bonding can also be used to{" "}
                  <b>change the shape or color</b> of the teeth, or to{" "}
                  <b>protect</b> the roots of teeth that have been exposed due
                  to receding gums.
                </CardBody>
              
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </Card>
              </div>
            {/* </NavItem>

            <NavItem style={{ padding: "30px" }}> */}
            <div className="col-md-5" style={{margin:"4vw", padding:"2vw"}} >
              <Card
                style={{
                  fontSize: "1.5vw",
                  margin: "0.5vw",
                  // width: "",
                  padding: "1vw",
                }}
              >
                <CardHeader
                  style={{
                    fontSize: "1.5vw",
                    // width: "400px",
                    color: "black",
                    padding: "1vw",
                    align: "center",
                  }}
                >
                  <b>White Fillings</b>
                </CardHeader>

                <CardBody
                  style={{ 
                    // width: "400px", 
                    fontSize: "1.5vw", color: "black" }}
                >
                  <br></br>
                  White fillings, also known as composite fillings, are used to{" "}
                  <b>fill cavities</b> in the teeth. <br></br>
                  <br></br>They are made from a{" "}
                  <b>mixture of fine glass or quartz particles and a resin</b>,
                  and are designed to match the color of the surrounding teeth.
                  <br></br>
                  <br></br> White fillings are an alternative to traditional
                  silver amalgam fillings, and are often preferred because they
                  are more aesthetically pleasing and blend in with the natural
                  color of the teeth.
                </CardBody>
              </Card>
              </div>
              </div>
            {/* </NavItem>
          </Nav>
        </Navbar> */}

        <br></br>
        <br></br>

        <br></br>
        <br></br>

        <BeforeAfterUtil />

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
