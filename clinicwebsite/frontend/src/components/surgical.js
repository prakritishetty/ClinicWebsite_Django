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
              fontSize: "6vw",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "100vw",
              padding: "10px",
              margin: "10px",
            }}
          >
            {" "}
            Surgical Services!
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
            height: "1000px",
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
              <b>Surgical Services</b>
            </p>
            At Dr Sandhya's Total Dental Care, we host an array of surgical
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
              href="/implants"
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
                  Implants
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Artificial tooth roots to support replacement teeth.
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
                  Extractions
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Removal of teeth from their sockets.
                  </CardText>
                </CardBody>
              </Card>
            </Button>

            <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "40px" }}
            />
            <Button
              href="/rootcanal"
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
                  Root Canals
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Treatment to save an infected or damaged tooth's interior.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
          </div>

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
              href="/bonegraft"
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
                  Bone Graft
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Adding bone material to jaw to support implants or improve
                    structure.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "40px" }}
            />
            <Button
              href="/implantsupporteddentures"
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
                  Implant-supported Dentures
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Dentures anchored by dental implants for stability.
                  </CardText>
                </CardBody>
              </Card>
            </Button>

            <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "40px" }}
            />
            <Button
              href="/bridges"
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
                  Bridges
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Fixed prosthetics to replace one or more missing teeth.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
          </div>

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
              href="/overdentures"
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
                  Over Dentures{" "}
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Removable dentures that fit over remaining natural teeth or
                    implants.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "40px" }}
            />
            <Button
              href="/samedayimplants"
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
                  Same Day Implants
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{
                      color: "black",
                      fontSize: "15px",
                      whiteSpace: "normal",
                    }}
                  >
                    Dental implants placed and restored in a single appointment.
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
