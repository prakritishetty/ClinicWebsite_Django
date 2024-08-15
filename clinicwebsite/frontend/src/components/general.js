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
           backgroundImage: `url(${clinic1})`,
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
            General Services!
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
              <b>General Services</b>
            </p>
            At Dr Sandhya's Total Dental Care, we host an array of general
            services for you to choose from:
          </Card>

          <br></br>
          <br></br>
          <br></br>

          {/* <div
            display="flex"
            style={{
              display: "flex",
              padding: "1vw",
              marginLeft: "0vw",
              paddingLeft: "0vw",
            }}
          > */}
          <div className="row" style={{
            fontFamily: "Playfair Display",
            fontSize: "1.9vw",
            color: "black",
            // backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "0.75vw",
            // margin: "10px",
          }}>
          <div className="col-md-4" >
            <Button
            // className="container-fluid"
              href="/cleaningexams"
              style={{
                padding: "0.2vw",
                borderColor: "white",
                borderRadius: "1vw",
              }}
            >
              <Card >
                <CardHeader
                  style={{
                    color: "black",
                    fontSize: "1.75vw",
                    fontFamily: "Playfair Display",
                    padding: "0.5vw",
                  }}
                >
                  Cleaning and Examinations
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{ 
                      color: "black",
                      fontSize: "1.3vw",
                      whiteSpace: "normal",
                    }}
                  >
                    Routine dental care and assessment.
                  </CardText>
                </CardBody>
              </Card>
            

            </Button>
            </div>
            
            <div className="col-md-4" >
            {/* <div
              style={{ fontSize: "40px", paddingTop: "10px", margin: "40px" }}
            /> */}
            <Button
            // className="container-fluid"
              href="/crowns"
              style={{
                padding: "0.2vw",
                borderColor: "white",
                borderRadius: "1vw",
              }}
            >
              <Card >
                <CardHeader
                  style={{
                    color: "black",
                    fontSize: "1.75vw",
                    fontFamily: "Playfair Display",
                    padding: "0.5vw",
                  }}
                >
                  Crowns
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{ 
                      color: "black",
                      fontSize: "1.3vw",
                      whiteSpace: "normal",
                    }}
                  >
                    Protective covers for damaged teeth.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            </div>

            <div className="col-md-4" >
            <Button
            // className="container-fluid"
              href="/extractions"
              style={{
                padding: "0.2vw",
                borderColor: "white",
                borderRadius: "1vw",
              }}
            >
              <Card >
                <CardHeader
                  style={{
                    color: "black",
                    fontSize: "1.75vw",
                    fontFamily: "Playfair Display",
                    padding: "0.5vw",
                  }}
                >
                  Tooth Extractions
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{ 
                      color: "black",
                      fontSize: "1.3vw",
                      whiteSpace: "normal",
                    }}
                  >
                    Removal of problematic teeth.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            </div>
            <br/> <br/>

            <div className="row" style={{
            fontFamily: "Playfair Display",
            fontSize: "1.9vw",
            color: "black",
            // backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "0.75vw",
            // margin: "10px",
          }}>
            <div className="col-md-4" >
            <Button
            // className="container-fluid"
              href="/gumtherapy"
              style={{
                padding: "0.2vw",
                borderColor: "white",
                borderRadius: "1vw",
              }}
            >
              <Card >
                <CardHeader
                  style={{
                    color: "black",
                    fontSize: "1.75vw",
                    fontFamily: "Playfair Display",
                    padding: "0.5vw",
                  }}
                >
                  Gum Therapy
                </CardHeader>
                <CardBody >
                  <CardText
                    style={{ 
                      color: "black",
                      fontSize: "1.3vw",
                      whiteSpace: "normal",
                    }}
                  >
                    Treatment for gum health and disease.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            </div>
            <div className="col-md-4" >
            <Button
            // className="container-fluid"
              href="/bondingfillings"
              style={{
                padding: "0.2vw",
                borderColor: "white",
                borderRadius: "1vw",
              }}
            >
              <Card >
                <CardHeader
                  style={{
                    color: "black",
                    fontSize: "1.75vw",
                    fontFamily: "Playfair Display",
                    padding: "0.5vw",
                  }}
                >
                  Bondings and White Fillings
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{ 
                      color: "black",
                      fontSize: "1.3vw",
                      whiteSpace: "normal",
                    }}
                  >
                    Cosmetic and restorative dental procedures.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            </div>
            <div className="col-md-4" >
            <Button
            // className="container-fluid"
              href="/dentures"
              style={{
                padding: "0.2vw",
                borderColor: "white",
                borderRadius: "1vw",
              }}
            >
              <Card >
                <CardHeader
                  style={{
                    color: "black",
                    fontSize: "1.75vw",
                    fontFamily: "Playfair Display",
                    padding: "0.5vw",
                  }}
                >
                  Dentures
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{ 
                      color: "black",
                      fontSize: "1.3vw",
                      whiteSpace: "normal",
                    }}
                  >
                    Replacements for missing teeth.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            </div>
            </div>


            <div className="row" style={{
            fontFamily: "Playfair Display",
            fontSize: "1.9vw",
            color: "black",
            // backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "0.75vw",
            // margin: "10px",
          }}>



            <div className="col-md-4" >
            <Button
            // className="container-fluid"
              href="/nightguards"
              style={{
                padding: "0.2vw",
                borderColor: "white",
                borderRadius: "1vw",
              }}
            >
              <Card >
                <CardHeader
                  style={{
                    color: "black",
                    fontSize: "1.75vw",
                    fontFamily: "Playfair Display",
                    padding: "0.5vw",
                  }}
                >
                  Night Guards
                </CardHeader>
                <CardBody>
                  <CardText
                    style={{ 
                      color: "black",
                      fontSize: "1.3vw",
                      whiteSpace: "normal",
                    }}
                  >
                    Protective devices worn during sleep.
                  </CardText>
                </CardBody>
              </Card>
            </Button>
            </div>
            </div>

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
