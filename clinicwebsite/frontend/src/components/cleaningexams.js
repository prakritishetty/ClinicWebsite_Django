import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";
import { TfiCheckBox } from "react-icons/tfi";
import clinic1 from "../images/79.jpeg";
import IMG_6412 from "../images/IMG_6412.JPG"
import cleaningteeth from "../images/cleaningteeth.jpg"
import NavbarUtil from "../utils/NavbarUtil";
import BeforeAfterUtil from "../utils/BeforeAfterUtils";
import FooterUtil from "../utils/FooterUtil";
import PageTestimonialsUtil from "../utils/PageTestimonialsUtil";

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
            Tooth Cleaning and Examination!
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
            // height: "900px",
            borderWidth: "0.2vw",
            // margin: "0.5vw",
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
              <b>Tooth Cleaning and Examinations</b>
            </p>
            Tooth cleaning and examination are important parts of maintaining
            good oral hygiene and overall health. Tooth cleaning involves the
            removal of plaque and tartar, which are sticky films of bacteria
            that form on the teeth and can cause tooth decay and gum disease.
            Plaque can be removed by brushing and flossing, while tartar can
            only be removed by a dental professional
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
              Our Approach to Teeth Cleaning
            </CardHeader>
            <CardBody>
              <CardText>
                <img
                  src={cleaningteeth}
                  alt="Card image cap"
                  style={{ float: "right", height: "300px" }}
                />
                <br></br>
                <TfiCheckBox size={50} color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    display: "inline",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  Examination
                </h1>
                <h3 style={{ color: "black" }}>
                  The dentist will examine your teeth and gums for any signs of
                  problems, such as tooth decay, gum disease, or oral cancer.
                </h3>
                <br></br>
                <TfiCheckBox size={50} color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    display: "inline",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  A stitch in time saves nine
                </h1>
                <h3 style={{ color: "black" }}>
                  It's generally recommended to have your teeth cleaned and
                  examined by a dentist at least twice a year, or more
                  frequently if you have gum disease or other oral health
                  issues.
                </h3>
                <br></br>
                <TfiCheckBox size={50} color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    display: "inline",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  Self-Care
                </h1>
                <h3 style={{ color: "black" }}>
                  In addition to regular cleanings and exams, it's important to
                  brush and floss your teeth daily to remove plaque and prevent
                  tooth decay and gum disease. Using fluoride toothpaste and
                  mouthwash can also help to strengthen your teeth!
                </h3>
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
