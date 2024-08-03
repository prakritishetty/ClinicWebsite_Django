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
            backgroundImage: `url(${IMG_6447})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "90vh",
            // opacity:"0.6"
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
            Teeth Aligners!
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
            height: "1400px",
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
              <b>Teeth Aligners</b>
            </p>
            <CardText>
                <img
                  src="https://media1.giphy.com/media/LRa7So1FwjIDmGtBB4/giphy.gif?cid=6c09b952jemwd5wd97roys01quwmi7rx0qztq15upb37y5nf&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
                  alt="Card image cap"
                  style={{ float: "right", height: "300px" }}
                />
                <br></br>
            
            Teeth aligners are a type of orthodontic treatment that are used to
            straighten teeth and improve the alignment of the bite.
            <br></br>
            <br></br>
            Teeth aligners can be used to correct a wide range of orthodontic
            issues, including crowded teeth, misaligned teeth, and improper
            bites. They are a popular alternative to traditional metal braces
            because they are more discreet and easier to care for.
            </CardText>
          </Card>
          <br></br>
          <br></br>

          <Card
            style={{
              padding: 20,
              borderWidth: "1px",
              margin: "5px",
              position: "float",
              backgroundColor: "white",
            }}
          >
            <CardHeader
              style={{
                color: "black",
                fontSize: "35px",
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
                        borderBottom: "1px solid black",
                        borderRight: "1px solid black",
                        padding: "20px",
                        color: "black",
                        fontSize: "25px",
                        fontFamily: "Playfair Display",
                      }}
                    >
                      Traditional Aligners
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid black",
                        padding: "20px",
                        color: "black",
                        fontSize: "25px",
                        fontFamily: "Playfair Display",
                      }}
                    >
                      Invisible Aligners
                    </th>
                  </tr>

                  <tr>
                    <td
                      style={{
                        borderRight: "1px solid black",
                        padding: "20px",
                        color: "black",
                        fontSize: "20px",
                        fontFamily: "Playfair Display",
                      }}
                    >
                      Made of a hard plastic material and are visible when worn
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        color: "black",
                        fontSize: "20px",
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
            <Card style={{ width: "300px", padding: "5px" }}>
              <CardHeader
                style={{
                  color: "black",
                  fontSize: "25px",
                  fontFamily: "Playfair Display",
                  padding: "5px",
                }}
              >
                Initial Consultation
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "15px" }}>
                  Determine if you're a good candidate for aligners
                </CardText>
              </CardBody>
            </Card>
            <FaArrowRight
              style={{ fontSize: "40px", paddingTop: "10px", margin: "20px" }}
            />
            <Card style={{ width: "300px", padding: "5px" }}>
              <CardHeader
                style={{
                  color: "black",
                  fontSize: "25px",
                  fontFamily: "Playfair Display",
                  padding: "5px",
                }}
              >
                Records and Imaging
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "15px" }}>
                  Take dental impressions or 3D scans of your teeth
                </CardText>
              </CardBody>
            </Card>
            <FaArrowRight
              style={{ fontSize: "40px", paddingTop: "10px", margin: "20px" }}
            />
            <Card style={{ width: "300px", padding: "5px" }}>
              <CardHeader
                style={{
                  color: "black",
                  fontSize: "25px",
                  fontFamily: "Playfair Display",
                  padding: "5px",
                }}
              >
                Treatment Planning
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "15px" }}>
                  A series of aligners are designed to gradually move your
                  teeth.
                </CardText>
              </CardBody>
            </Card>
            <FaArrowTurnDown
              style={{ fontSize: "40px", paddingTop: "10px", margin: "20px" }}
            />
            <br></br>
            <br></br>
          </div>
          <div display="flex" style={{ display: "flex" }}>
            <Card style={{ width: "300px", padding: "5px" }}>
              <CardHeader
                style={{
                  color: "black",
                  fontSize: "25px",
                  fontFamily: "Playfair Display",
                  padding: "5px",
                }}
              >
                Wearing your Aligners
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "15px" }}>
                  Wear each set for about 1-2 weeks (as directed). Keep them in
                  for 20-22 hours per day. Remove only for eating, drinking
                  (except water), and oral hygiene.
                </CardText>
              </CardBody>
            </Card>
            <FaArrowRight
              style={{ fontSize: "40px", paddingTop: "10px", margin: "20px" }}
            />
            <Card style={{ width: "300px", padding: "5px" }}>
              <CardHeader
                style={{
                  color: "black",
                  fontSize: "25px",
                  fontFamily: "Playfair Display",
                  padding: "5px",
                }}
              >
                Progress Check-ups
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "15px" }}>
                  Your dentist will monitor your progress and give you the next
                  sets of aligners.
                </CardText>
              </CardBody>
            </Card>
            <FaArrowRight
              style={{ fontSize: "40px", paddingTop: "10px", margin: "20px" }}
            />
            <Card style={{ width: "300px", padding: "5px" }}>
              <CardHeader
                style={{
                  color: "black",
                  fontSize: "25px",
                  fontFamily: "Playfair Display",
                  padding: "5px",
                }}
              >
                Retention
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "15px" }}>
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
