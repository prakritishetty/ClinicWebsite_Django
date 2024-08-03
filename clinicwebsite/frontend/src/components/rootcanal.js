import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";
import { FaArrowRight } from "react-icons/fa";
import clinic1 from "../images/79.jpeg";
import IMG_6397 from "../images/IMG_6397.JPG"
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
            backgroundImage: `url(${IMG_6397})`,
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
              width: "700px",
              padding: "10px",
              margin: "10px",
            }}
          >
            {" "}
            Root Canal Treatment!
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
            height: "900px",
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
              <b>Root Canal Treatment</b>
            </p>
            <CardText><img
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjNsYzh1M2ZzMDZhYzE1Y2RqbGx1YWE1NnRvc25mYnZvbmJyYmZ6bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GgPVQRgTjW0Fi/giphy.webp"
                  alt="Card image cap"
                  style={{ float: "right", height: "300px" }}
                />
                <br></br>
            A root canal is a dental procedure that is used to treat a tooth
            that is infected or damaged in the pulp, which is the tissue inside
            the tooth that contains the nerves and blood vessels. The procedure
            involves removing the infected or damaged pulp from inside the tooth
            and then filling and sealing the root canal to prevent further
            infection.
            <br></br>
            <br></br>
            Root canals are often needed when a tooth becomes infected or
            damaged as a result of decay, trauma, or a deep filling. If left
            untreated, an infected or damaged tooth can cause pain, swelling,
            and even abscesses. A root canal can help relieve these symptoms and
            save the tooth from extraction.
            </CardText>
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
                Preparation
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "15px" }}>
                  To perform a root canal, the dentist or endodontist (a dental
                  specialist who performs root canals) will numb the tooth and
                  surrounding area with an anesthetic.
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
                Extracting the Infected Pulp
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "15px" }}>
                  The dentist will then make an opening in the top of the tooth
                  and remove the infected or damaged pulp using special
                  instruments.
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
                Sealing and Restoration
              </CardHeader>
              <CardBody>
                <CardText style={{ color: "black", fontSize: "15px" }}>
                  Once the pulp has been removed, the dentist will clean and
                  shape the root canal and fill it with a special material to
                  seal it. The tooth is then restored with a filling or crown to
                  protect it and restore its function.
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
