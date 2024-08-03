import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";
import clinic1 from "../images/79.jpeg";
import NavbarUtil from "../utils/NavbarUtil.js";
import PageTestimonialsUtil from "../utils/PageTestimonialsUtil.js";
import FooterUtil from "../utils/FooterUtil.js";
import BeforeAfterUtil from "../utils/BeforeAfterUtils.js";

class App extends Component {
  render() {
    return (
      <div
        style={{
          paddingLeft: "0px",
          marginLeft: "0px",
          backgroundImage: `url(${clinic1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavbarUtil />

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div
          className="p-5 my-6 rounded"
          style={{
            padding: "0px",
            margin: "0px",
            backgroundImage: `url(${clinic1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "90vh",
          }}
        >
          <div
            style={{
              fontFamily: "Playfair Display",
              fontSize: "60px",
              align: "center",
              color: "white",
              backgroundColor: "rgba(0,0,0,.5)",
              width: "450px",
              padding: "10px",
              margin: "10px",
            }}
          >
            {" "}
            General Services!
          </div>
          <Button
            active
            style={{
              padding: "10px",
              margin: "4px",
              borderColor: "white",
              backgroundColor: "black",
            }}
          >
            <div
              style={{
                fontFamily: "Playfair Display",
                fontSize: "35px",
                align: "center",
                color: "white",
              }}
            >
              <a
                href="https://wa.me/919833630985?text=Hello%20Dr%20Sandhya,%20I%27m%20interested%20in%20booking%20an%20appointment%20at%20your%20clinic%0D%0AMy%20name%20is%20:%0D%0AMy%20chief%20complaint%20is:"
                style={{ color: "white" }}
              >
                Book an appointment
              </a>
            </div>
          </Button>
          <div
            style={{
              fontFamily: "Playfair Display",
              fontSize: "30px",
              align: "center",
              color: "white",
              backgroundColor: "rgba(0,0,0,.5)",
              width: "400px",
              padding: "10px",
              margin: "6px",
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
            height: "700px",
            borderWidth: "2px",
            margin: "5px",
            borderColor: "white",
            backgroundColor: "rgba(0, 28, 40, 0.38)",
          }}
        >
          <Card
            style={{
              fontFamily: "Playfair Display",
              fontSize: "30px",
              color: "Black",
              position: "center",
              padding: "20px",
              margin: "10px",
              borderWidth: "2px",
              borderColor: "black",
              fontSize: "25px",
            }}
          >
            <p style={{ fontSize: "40px" }}>
              <b>General Services</b>
            </p>
            At Dr Sandhya's Total Dental Care, we host an array of general
            services for you to choose from:
          </Card>

          <br></br>
          <br></br>
          <br></br>

          <div
            display="flex"
            style={{
              display: "flex",
              padding: "10px",
              marginLeft: "0px",
              paddingLeft: "0px",
            }}
          >
            <Button
              href="/cleaningexams"
              style={{
                padding: "20px",
                borderColor: "white",
                borderRadius: "20px",
              }}
            >
              <Card style={{ width: "300px", padding: "10px" }}>
                <CardHeader
                  style={{
                    color: "black",
                    fontSize: "25px",
                    fontFamily: "Playfair Display",
                    padding: "5px",
                  }}
                >
                  Cleaning and Examinations
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Routine dental care and assessment.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "40px" }}
            />
            <Button
              href="/crowns"
              style={{
                padding: "20px",
                borderColor: "white",
                borderRadius: "20px",
              }}
            >
              <Card style={{ width: "300px", padding: "10px" }}>
                <CardHeader
                  style={{
                    color: "black",
                    fontSize: "25px",
                    fontFamily: "Playfair Display",
                    padding: "5px",
                  }}
                >
                  Crowns
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Protective covers for damaged teeth.
                  </CardText>
                </CardBody>
              </Card>
            </Button>

            <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "40px" }}
            />
            <Button
              href="/extractions"
              style={{
                padding: "20px",
                borderColor: "white",
                borderRadius: "20px",
              }}
            >
              <Card style={{ width: "300px", padding: "10px" }}>
                <CardHeader
                  style={{
                    color: "black",
                    fontSize: "25px",
                    fontFamily: "Playfair Display",
                    padding: "5px",
                  }}
                >
                  Tooth Extractions
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Removal of problematic teeth.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "8px" }}
            />
            <br></br>
            <br></br>
          </div>
          <div
            display="flex"
            style={{
              display: "flex",
              paddingLeft: "-10px",
              marginLeft: "-10px",
            }}
          >
            <Button
              href="/gumtherapy"
              style={{
                padding: "10px",
                borderColor: "white",
                borderRadius: "10px",
              }}
            >
              <Card style={{ width: "275px", padding: "10px" }}>
                <CardHeader
                  style={{
                    color: "black",
                    fontSize: "25px",
                    fontFamily: "Playfair Display",
                    padding: "5px",
                  }}
                >
                  Gum Therapy
                </CardHeader>
                <CardBody style={{ width: "225px" }}>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "13px",
                      width: "225px",
                      whiteSpace: "normal",
                    }}
                  >
                    Treatment for gum health and disease.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "8px" }}
            />
            <Button
              href="/bondingfillings"
              style={{
                padding: "10px",
                borderColor: "white",
                borderRadius: "10px",
              }}
            >
              <Card style={{ width: "280px", padding: "10px" }}>
                <CardHeader
                  style={{
                    color: "black",
                    fontSize: "22px",
                    fontFamily: "Playfair Display",
                    padding: "5px",
                  }}
                >
                  Bondings and White Fillings
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "13px",
                      whiteSpace: "normal",
                    }}
                  >
                    Cosmetic and restorative dental procedures.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "8px" }}
            />
            <Button
              href="/dentures"
              style={{
                padding: "10px",
                borderColor: "white",
                borderRadius: "10px",
              }}
            >
              <Card style={{ width: "250px", padding: "10px" }}>
                <CardHeader
                  style={{
                    color: "black",
                    fontSize: "23px",
                    fontFamily: "Playfair Display",
                    padding: "5px",
                  }}
                >
                  Dentures
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Replacements for missing teeth.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "8px" }}
            />
            <Button
              href="/nightguards"
              style={{
                padding: "10px",
                borderColor: "white",
                borderRadius: "10px",
              }}
            >
              <Card style={{ width: "250px", padding: "10px" }}>
                <CardHeader
                  style={{
                    color: "black",
                    fontSize: "22px",
                    fontFamily: "Playfair Display",
                    padding: "5px",
                  }}
                >
                  Night Guards
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "13px",
                      whiteSpace: "normal",
                    }}
                  >
                    Protective devices worn during sleep.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
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
