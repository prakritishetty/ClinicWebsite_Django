import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";
import { TfiCheckBox } from "react-icons/tfi";
import clinic1 from "../images/79.jpeg";
import IMG_6441 from "../images/15copy.jpeg";
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
            backgroundImage: `url(${IMG_6441})`,
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
            Implants!
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
              <b>Implants</b>
            </p>
            Tooth implants are a type of dental restoration that involves the
            placement of a metal post or frame into the jawbone to serve as a
            replacement for the root of a missing tooth. <br></br>The post or
            frame is usually made of titanium or a titanium alloy, which is
            biocompatible and can integrate with the bone tissue over time. Once
            the implant has integrated with the bone, a crown or other type of
            artificial tooth can be attached to the top of the implant.
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
              Benefits of Implants
            </CardHeader>
            <CardBody>
              <CardText>
              <div className="row" style={{
            fontFamily: "Playfair Display",
            fontSize: "1.9vw",
            color: "black",
            // backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "1vw",
            // margin: "10px",
          }}>
          <div className="col-md-8" >
                
                <TfiCheckBox size="3vw" color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    display: "inline",
                    fontSize: "1.9vw",
                    color: "black",
                  }}
                >
                  Aesthetics
                </h1>
                <h3 style={{ color: "black", fontSize:"1.75vw" }}>
                  They can help restore the appearance and function of the
                  missing tooth, allowing you to eat and speak normally.
                </h3>
                <br></br>
                <TfiCheckBox size="3vw" color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    display: "inline",
                    fontSize: "1.9vw",
                    color: "black",
                  }}
                >
                  Structure
                </h1>
                <h3 style={{ color: "black", fontSize:'1.75vw' }}>
                  They also help maintain the structure of the jawbone and
                  prevent tooth shifting, which can occur when a tooth is
                  missing.
                </h3>
                <br></br>
                <br></br>
                <h3 style={{ color: "black", fontSize:"1.75vw" }}>
                  Overall, tooth implants are a safe and effective way to
                  replace missing teeth and can help restore the appearance and
                  function of your mouth. If you are considering a tooth
                  implant, it is important to consult with a dental professional
                  to determine if this treatment option is right for you.
                </h3>
                </div>
                <div className="col-md-3">
                <img
                  src="https://teethq.com/wp-content/uploads/2021/03/dental-implant-3.gif"
                  alt="Card image cap"
                  style={{ height: "30vw", width:'30vw' }}
                />
                </div>
                </div>
              </CardText>
            </CardBody>
          </Card>
        </Card>

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
