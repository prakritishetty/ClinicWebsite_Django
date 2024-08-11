import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";
import clinic1 from "../images/79.jpeg";
import IMG_6465 from "../images/IMG_6465-removebg-preview.png"
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
            backgroundImage: `url(${IMG_6465})`,
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
            Implant Supported Dentures!
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
              <b>Implant Supported Dentures</b>
            </p>

            <CardText>
            <img
                  src="https://media2.giphy.com/media/l2Jei5mr1P2wD70bu/200w.gif?cid=6c09b952v7jp7wn0vy29zshsh09k5dp67ya1y0yf3vxj481l&ep=v1_gifs_search&rid=200w.gif&ct=g"
                  alt="Card image cap"
                  style={{ float: "right", height: "300px" }}
                />
                <br></br>
            Implant-supported dentures are a type of dental restoration that
            involves the placement of dental implants in the jawbone to support
            a full or partial denture. A full denture is a removable appliance
            that replaces all of the teeth in the upper or lower jaw, while a
            partial denture is a removable appliance that replaces some of the
            teeth in the jaw.
            <br></br>
            <br></br>
            To place implant-supported dentures, a dental specialist will first
            place dental implants into the jawbone. The implants are typically
            made of titanium or a titanium alloy and are designed to integrate
            with the bone tissue over time. After the implants have integrated
            with the bone, the denture can be attached to the implants using a
            variety of mechanisms, such as ball and socket attachments or bar
            and clip attachments.
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
                  Implant-supported dentures offer several benefits compared to
                  traditional dentures. They are more stable and secure than
                  traditional dentures, which can slip or move around in the
                  mouth. Implant-supported dentures also help preserve the
                  structure of the jawbone, as the implants stimulate the bone
                  tissue and prevent bone loss. In addition, implant-supported
                  dentures can improve the function of the denture, allowing you
                  to chew and speak more easily.
                  <br></br>
                  <br></br>
                  Overall, implant-supported dentures are a more stable and
                  secure option for replacing missing teeth compared to
                  traditional dentures. They can improve the appearance,
                  function, and stability of the denture and help preserve the
                  structure of the jawbone. If you are considering
                  implant-supported dentures, it is important to consult with a
                  dental professional to determine if this treatment option is
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
