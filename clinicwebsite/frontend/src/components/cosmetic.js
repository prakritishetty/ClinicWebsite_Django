import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";

import clinic1 from "../images/79.jpeg";
import NavbarUtil from "../utils/NavbarUtil";
import BeforeAfterUtil from "../utils/BeforeAfterUtils";
import PageTestimonialsUtil from "../utils/PageTestimonialsUtil";
import FooterUtil from "../utils/FooterUtil";

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
              fontSize: "6vw",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "100vw",
              padding: "10px",
              margin: "10px",
            }}
          >
            {" "}
            Cosmetic Services!
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
              fontSize: "3vw",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "60vw",
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
            At Dr Sandhya's Total Dental Care, we host an array of cosmetic
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
              href="/invisalign"
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
                  Teeth Aligners
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Invisible braces for straightening teeth.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "40px" }}
            />
            <Button
              href="/whitening"
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
                  Teeth Whitening
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Procedure to brighten and lighten tooth color.
                  </CardText>
                </CardBody>
              </Card>
            </Button>

            <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "40px" }}
            />
            <Button
              href="/bondingfillings"
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
                  Bonding
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Applying tooth-colored resin to repair or improve tooth
                    appearance.
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
              href="/veneers"
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
                  Veneers
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
                    Thin shells placed over teeth to enhance aesthetics.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "8px" }}
            />
            <Button
              href="/gummysmilereduction"
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
                  Gummy Smile Reduction
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "13px",
                      whiteSpace: "normal",
                    }}
                  >
                    Procedure to reduce excess gum visibility when smiling.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "8px" }}
            />
            <Button
              href="/smilemakeover"
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
                  Smile Makeover
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Comprehensive cosmetic dental treatment plan.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "8px" }}
            />
            <Button
              href="/fullmouthrehab"
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
                  Full Mouth Rehabilitation
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "13px",
                      whiteSpace: "normal",
                    }}
                  >
                    Complete restoration of oral health and function.
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
