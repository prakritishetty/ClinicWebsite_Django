import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";
import clinic1 from "../images/79.jpeg";
import IMG_6412 from "../images/IMG_6412.JPG"
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
            backgroundImage: `url(${IMG_6412})`,
            backgroundPosition: "center ",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            minHeight: "140vh",
            overflowX:"auto"
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
            Smile Makeover!
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

        <Card
          class="container-fluid"
          style={{
            // height: "1400px",
            borderWidth: "0.2vw",
            // margin: "0.",
            borderColor: "white",
            backgroundColor: "rgba(0, 28, 40, 0.38)",
          }}
        >
          <Card
            style={{
              fontFamily: "Playfair Display",
              fontSize: "1.9vw",
              color: "Black",
              position: "center",
              padding: "1vw",
              margin: "0.5vw",
              borderWidth: "0.2vw",
              borderColor: "black",
              // fontSize: "25px",
            }}
          >
            <p style={{ fontSize: "2.5vw" }}>
              <b>Smile Makeover</b>
            </p>
            A smile makeover is a comprehensive dental treatment plan that is
            designed to improve the appearance of the smile. It can involve a
            variety of procedures, such as teeth whitening, veneers, braces, and
            gum contouring, depending on the specific goals and needs of the
            patient.
          </Card>
          <br></br>
          <br></br>

          <Card
             style={{
              padding: "1vw",
              borderWidth: "0.2vw",
              margin: "0.5vw",
              position: "float",
              backgroundColor: "white",
            }}
          >
            <CardHeader
              style={{
                color: "black",
                fontSize: "2.5vw",
                fontFamily: "Playfair Display",
              }}
            >
              Ask yourself if a smile makeover is for you
            </CardHeader>
            <CardBody>
              <CardText style={{ color: "black", fontSize: "1.75vw" }}>
                Smile makeovers are often sought by people who are unhappy with
                the appearance of their teeth or smile. They may have issues
                such as stained, chipped, crooked, or misshapen teeth, or they
                may simply want to improve the overall aesthetics of their
                smile. A smile makeover can help address these concerns and
                improve the overall appearance of the teeth and smile.
                <br></br>
                <br></br>
                <b>Treatment Plan</b>
                <br></br>
                To determine the best treatment plan for a smile makeover, the
                dental professional will perform a thorough examination of the
                teeth and mouth, including taking x-rays and making impressions
                of the teeth. The dental professional will then work with the
                patient to create a customized treatment plan that is tailored
                to the patient's specific goals and needs.
                <br></br>
                <br></br>
                Overall, a smile makeover can be a highly effective way to
                improve the appearance of the teeth and smile and boost
                self-confidence. If you are considering a smile makeover, it is
                important to consult with a dental professional to determine the
                best treatment options for you.
              </CardText>
            </CardBody>
          </Card>

          <br></br>
          <br></br>
          <br></br>
        </Card>

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
