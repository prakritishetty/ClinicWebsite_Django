import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";
import { FaArrowRight } from "react-icons/fa";
import clinic1 from "../images/79.jpeg";
import IMG_6402 from "../images/IMG_6402.JPG"
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
            backgroundImage: `url(${IMG_6402})`,
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
            Veneers!
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
              fontSize: "2.5vw",
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
              <b>Veneers</b>
            </p>
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
                
                
            
            Veneers are thin, custom-made shells of porcelain or composite
            material that are designed to cover the front surface of the teeth.
            <br></br>
            <br></br>They are often used to improve the appearance of the teeth
            and smile and can be used to address a variety of cosmetic concerns,
            such as stained, chipped, crooked, or misshapen teeth.
            <br></br>
            <br></br>Veneers are generally easy to care for and can be
            maintained with regular brushing and flossing. They are durable and
            can last for many years with proper care. However, they are not
            indestructible and can be damaged by biting on hard objects or
            grinding the teeth.

            </div>
            <div className="col-md-3" >
            <img
                  src="https://media.tenor.com/RjQU1lX-hsIAAAAM/teeth-dentures.gif"
                  alt="Card image cap"
                  style={{height: "30vw", width:'30vw' }}
                />
                </div>
                </div>
            </CardText>
          </Card>
          <br></br>
          <br></br>

          <div display="flex" style={{ display: "flex" }}>
            <Card style={{ width: "30vw", padding: "1vw" }}>
              <CardHeader
                style={{
                  color: "black",
                  fontSize: "1.9vw",
                  fontFamily: "Playfair Display",
                  padding: "1vw",
                }}
              >
                Tooth Preparation
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "1.5vw" }}>
                  To place veneers, the dental professional will first prepare
                  the teeth by removing a small amount of enamel from the front
                  surface of the teeth.
                </CardText>
              </CardBody>
            </Card>
            <FaArrowRight
             style={{ fontSize: "2vw", paddingTop: "0.3vw", margin: "0.8vw" }}
            />
            <Card style={{ width: "20vw", padding: "1vw" }}>
              <CardHeader
                style={{
                  color: "black",
                  fontSize: "1.9vw",
                  fontFamily: "Playfair Display",
                  padding: "1vw",
                }}
              >
                Dental Impressions
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "1.5vw" }}>
                  The dental professional will then take impressions of the
                  teeth and use them to create custom-made veneers.
                </CardText>
              </CardBody>
            </Card>
            <FaArrowRight
              style={{ fontSize: "2vw", paddingTop: "0.3vw", margin: "0.8vw" }}
            />
            <Card style={{ width: "30vw", padding: "1vw" }}>
              <CardHeader
                style={{
                  color: "black",
                  fontSize: "1.9vw",
                  fontFamily: "Playfair Display",
                  padding: "1vw",
                }}
              >
                Alignment and Delivery
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "1.5vw" }}>
                  Once the veneers are ready, the dental professional will place
                  them on the teeth and make any necessary adjustments to ensure
                  a proper fit.
                </CardText>
              </CardBody>
            </Card>
          </div>
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
