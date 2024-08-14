import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";
import { TfiCheckBox } from "react-icons/tfi";
import clinic1 from "../images/79.jpeg";
import cosmetic from "../images/cosmetic.png"
import IMG_6402 from "../images/26copy.jpeg"
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
            Crowns!
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

        {/* <Card
          class="container-fluid"
          style={{
            height: "1300px",
            borderWidth: "2px",
            margin: "5px",
            borderColor: "white",
            backgroundColor: "rgba(0, 28, 40, 0.38)",
          }}
        > */}
          <Card
            style={{
              fontFamily: "Playfair Display",
              fontSize: "1.75vw",
              color: "Black",
              position: "center",
              padding: "2vw",
              // margin: "1vw",
              borderWidth: "0.2vw",
              borderColor: "black",
            }}
          >
            <p style={{ fontSize: "2.5vw", fontFamily:"Playfair Display" }}>
              <b>Tooth Crowns</b>
            </p>
            A tooth crown, also known as a dental crown, is a type of dental
            restoration that covers or encases the entire visible surface of a
            tooth. <br></br>Crowns are typically used to restore the function
            and appearance of teeth that have been damaged or are decayed to the
            point where a filling is no longer sufficient. Crowns can also be
            used to improve the appearance of a tooth by changing its shape or
            color.
          </Card>
          <br></br>
          <br></br>

          <Card
            style={{
              fontFamily: "Playfair Display",
              fontSize: "1.75vw",
              color: "Black",
              position: "center",
              padding: "2vw",
              // margin: "1vw",
              borderWidth: "0.2vw",
              borderColor: "black",
              // fontSize: "25px",
            }}
          >
            <CardHeader
              style={{
                color: "black",
                fontSize: "2.5vw",
                fontFamily: "Playfair Display",
              }}
            >
              Our Approach to Dental Crowns
            </CardHeader>
            <CardBody>
              <CardText>
              <div className="row" style={{
            fontFamily: "Playfair Display",
            fontSize: "1.25vw",
            color: "black",
            // backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "10px",
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
                  Tooth Preparation
                </h1>
                <h3 style={{ color: "black", fontSize: "1.75vw" }}>
                  The dentist first prepares the tooth by removing any decay or
                  damage and shaping the surface to ensure a good fit for the
                  crown.
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
                  Impression
                </h1>
                <h3 style={{ color: "black", fontSize: "1.75vw" }}>
                  Next, an impression of the tooth is taken and used to create a
                  custom-made crown, just for you!
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
                  Final step: Cementation
                </h1>
                <h3 style={{ color: "black", fontSize: "1.75vw" }}>
                  The crown is then cemented onto the prepared tooth.
                </h3>
                </div>
                <div className="col-md-3" >

                <img
                  src={cosmetic}
                  alt="Card image cap"
                  style={{  height: "30vw", width:"30vw" }}
                />
                <br></br>
                </div>
                </div>
              </CardText>
            </CardBody>
          </Card>

          <br></br>
          <br></br>

          <Card
            style={{
              padding: "1vw",
              borderWidth: "0.2vw",
              // margin: "0.",
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
              Decision: Which Crown Material to Choose?
            </CardHeader>
            <CardBody>
              <CardText>
                <br></br>
                <h3 style={{ fontSize: "1.9vw", color:"black", fontFamily:"Playfair Display" }}>
                  At Dr Sandhya's Total Care, we help you make an informed
                  choice between the different choice of material available for
                  your crown.
                </h3>
                <br></br>
                <br></br>
                <p style={{ color: "black", fontSize: "1.8vw" }}>
                  There are several types of crowns available, including
                  porcelain, ceramic, and gold crowns.
                  <ul>
                    <li>
                      Porcelain and ceramic crowns are popular because they
                      closely match the color and translucency of natural teeth,
                      but they may be more prone to chipping or breaking than
                      gold crowns.
                    </li>
                    <li>
                      Gold crowns are more durable but are less natural-looking.
                    </li>
                  </ul>
                </p>
              </CardText>
            </CardBody>
          </Card>
        {/* </Card> */}

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
