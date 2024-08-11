import React, { Component } from "react";
import { Button, CardHeader, CardText, Card, CardBody } from "reactstrap";
import { TfiCheckBox } from "react-icons/tfi";

import clinic1 from "../images/79.jpeg";
import IMG_6445 from "../images/IMG_6445.JPG"
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
            backgroundImage: `url(${IMG_6445})`,
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
            Bone Grafts!
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
              <b>Bone Grafts</b>
            </p>
            A tooth bone graft is a surgical procedure in which bone tissue is
            added to the jawbone in order to repair or rebuild it. This type of
            procedure may be necessary if the jawbone has been damaged or has
            deteriorated due to periodontal disease, trauma, or tooth loss.
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
              Need for Tooth Bone Grafts
            </CardHeader>
            <CardBody>
              <CardText>
              
              <img
                  src="https://i.makeagif.com/media/11-28-2021/mp-izn.gif"
                  alt="Card image cap"
                  style={{ float: "right", height: "300px" }}
                />
                <br></br>
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
                  Replace
                </h1>
                <h3 style={{ color: "black" }}>
                  Replace bone that has been lost due to periodontal disease or
                  trauma
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
                  Repair
                </h1>
                <h3 style={{ color: "black" }}>
                  Repair bone that has been damaged by infection or injury
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
                  Strengthen
                </h1>
                <h3 style={{ color: "black" }}>
                  Strengthen the jawbone in preparation for dental implant
                  surgery
                </h3>
                <br></br>
                <br></br>
                <h3 style={{ color: "black" }}>
                  There are several different types of bone grafting materials
                  that can be used, including synthetic bone substitutes, donor
                  bone tissue, and the patient's own bone tissue. The type of
                  material used will depend on the specific needs of the patient
                  and the location of the graft.
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
