import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";
import clinic1 from "../images/79.jpeg";
import IMG_6469 from "../images/IMG_6469.JPG"
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
            backgroundImage: `url(${IMG_6469})`,
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
            Dentures!
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
              <b>Dentures</b>
            </p>
            <CardText>
            <img
                  src="https://media2.giphy.com/media/l2Jei5mr1P2wD70bu/200w.gif?cid=6c09b952v7jp7wn0vy29zshsh09k5dp67ya1y0yf3vxj481l&ep=v1_gifs_search&rid=200w.gif&ct=g"
                  alt="Card image cap"
                  style={{ float: "right", height: "300px" }}
                />
                <br></br>
            
            Dentures are removable artificial teeth that are used to replace
            missing teeth. <br></br>
            <br></br>They are made of acrylic resin or a combination of acrylic
            resin and other materials, and are custom-made to fit the patient's
            mouth.
            <br></br>
            <br></br>
            <b>Why Dentures?</b> Dentures can help to restore the appearance and
            function of the mouth, and can improve the patient's ability to eat
            and speak. They are typically easier to care for than fixed dental
            appliances, such as bridges, and can be removed for cleaning and
            soaking.<br></br>
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
              Types of Dentures
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
                      Full Dentures
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
                      Partial Dentures
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
                      Full dentures are used to replace all of the teeth in the
                      upper or lower jaw, or in both jaws. <br></br>
                      <br></br>They are held in place by suction or by a small
                      amount of natural saliva, and can be removed by the
                      patient for cleaning.
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        color: "black",
                        fontSize: "20px",
                        fontFamily: "Playfair Display",
                      }}
                    >
                      Partial dentures are used to replace some missing teeth,
                      and are held in place by natural teeth or dental implants.{" "}
                      <br></br>
                      <br></br>They can be removed by the patient for cleaning,
                      and can be made from acrylic resin, metal, or a
                      combination of both.
                    </td>
                  </tr>
                </table>
              </CardText>
            </CardBody>
          </Card>
        </Card>

        <br></br>
        <br></br>

        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
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
