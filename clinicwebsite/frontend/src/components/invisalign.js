import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";
import { FaArrowTurnDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import clinic1 from "../images/79.jpeg";
import IMG_6447 from "../images/55copy.jpeg"
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
            backgroundImage: `url(${IMG_6447})`,
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
            Teeth Aligners!
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
              <b>Teeth Aligners</b>
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
               
            
            Teeth aligners are a type of orthodontic treatment that are used to
            straighten teeth and improve the alignment of the bite.
            <br></br>
            <br></br>
            Teeth aligners can be used to correct a wide range of orthodontic
            issues, including crowded teeth, misaligned teeth, and improper
            bites. They are a popular alternative to traditional metal braces
            because they are more discreet and easier to care for.
            </div>
            <div className="col-md-3" >
            <img
                  src="https://media1.giphy.com/media/LRa7So1FwjIDmGtBB4/giphy.gif?cid=6c09b952jemwd5wd97roys01quwmi7rx0qztq15upb37y5nf&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
                  alt="Card image cap"
                  style={{ height: "30vw", width:"30vw" }}
                />
                </div></div>
            </CardText>
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
              Treatment and Prerequisites
            </CardHeader>
            <CardBody>
              <CardText>
                <br></br>
                <table>
                  <tr>
                    <th
                     style={{
                      borderBottom: "0.2vw solid black",
                      borderRight: "0.2vw solid black",
                      padding: "1vw",
                      color: "black",
                      fontSize: "2.5vw",
                      fontFamily: "Playfair Display",
                    }}
                    >
                      Traditional Aligners
                    </th>
                    <th
                      style={{
                        borderBottom: "0.2vw solid black",
                        padding: "1vw",
                        color: "black",
                        fontSize: "2.5vw",
                        fontFamily: "Playfair Display",
                      }}
                    >
                      Invisible Aligners
                    </th>
                  </tr>

                  <tr>
                    <td
                      style={{
                        borderRight: "0.2vw solid black",
                        padding: "1vw",
                        color: "black",
                        fontSize: "1.9vw",
                        fontFamily: "Playfair Display",
                      }}
                    >
                      Made of a hard plastic material and are visible when worn
                    </td>
                    <td
                      style={{
                        padding: "1vw",
                        color: "black",
                        fontSize: "1.9vw",
                        fontFamily: "Playfair Display",
                      }}
                    >
                      Made of a clear, flexible plastic material and are nearly
                      invisible when worn.
                    </td>
                  </tr>
                </table>
                <br></br>
                <br></br>

                <br></br>
              </CardText>
            </CardBody>
          </Card>

          <br></br>
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
                Initial Consultation
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "1.5vw" }}>
                  Determine if you're a good candidate for aligners
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
                Records and Imaging
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "1.5vw" }}>
                  Take dental impressions or 3D scans of your teeth
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
                Treatment Planning
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "1.5vw" }}>
                  A series of aligners are designed to gradually move your
                  teeth.
                </CardText>
              </CardBody>
            </Card>
            <FaArrowTurnDown
              style={{ fontSize: "2vw", paddingTop: "0.3vw", margin: "0.8vw" }}
            />
            <br></br>
            <br></br>
          </div>
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
                Wearing your Aligners
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "1.5vw" }}>
                  Wear each set for about 1-2 weeks (as directed). Keep them in
                  for 20-22 hours per day. Remove only for eating, drinking
                  (except water), and oral hygiene.
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
                Progress Check-ups
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "1.5vw" }}>
                  Your dentist will monitor your progress and give you the next
                  sets of aligners.
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
                Retention
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "1.5vw" }}>
                  Follow instructions on wearing retainers (often full-time at
                  first, then nightly)
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
