import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";
import clinic1 from "../images/79.jpeg";
import IMG_6409 from "../images/IMG_6409.JPG";
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
            backgroundImage: `url(${IMG_6409})`,
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
              width: "600px",
              padding: "10px",
              margin: "10px",
            }}
          >
            {" "}
            Over Dentures!
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
            height: "1100px",
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
              <b>Over Dentures</b>
            </p>
            An overdenture is a type of removable dental appliance that is used
            to replace some or all of the teeth in the upper or lower jaw. It is
            supported by dental implants or the remaining natural teeth, which
            are called abutment teeth.
            <br></br>
            <br></br>
            <br></br>
            <b>Treatment Procedure:</b>
            To place overdentures, a dental specialist will first place dental
            implants into the jawbone or identify the remaining natural teeth
            that will serve as abutments. The implants or abutment teeth are
            used to support the overdenture, which is attached to the implants
            or abutments using a variety of mechanisms, such as ball and socket
            attachments or bar and clip attachments.
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
              Comparison with Traditional Dentures
            </CardHeader>
            <CardBody>
              <CardText>
                <p
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontFamily: "Playfair Display",
                  }}
                >
                  Overdentures offer several benefits compared to traditional
                  dentures. They are more stable and secure than traditional
                  dentures, which can slip or move around in the mouth.
                  Overdentures also help preserve the structure of the jawbone,
                  as the implants stimulate the bone tissue and prevent bone
                  loss. In addition, overdentures can improve the function of
                  the denture, allowing you to chew and speak more easily.
                  <br></br>
                  <br></br>
                  Overall, overdentures are a more stable and secure option for
                  replacing missing teeth compared to traditional dentures. They
                  can improve the appearance, function, and stability of the
                  denture and help preserve the structure of the jawbone. If you
                  are considering overdentures, it is important to consult with
                  a dental professional to determine if this treatment option is
                  right for you.
                </p>
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
