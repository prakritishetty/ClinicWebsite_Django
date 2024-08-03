import React, { Component } from "react";
import { Button, Card } from "reactstrap";
import clinic1 from "../images/79.jpeg";
import IMG_6455 from "../images/IMG_6455.JPG"
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
            backgroundImage: `url(${IMG_6455})`,
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
              width: "500px",
              padding: "10px",
              margin: "10px",
            }}
          >
            {" "}
            Bridges!
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
            height: "800px",
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
              <b>Bridges</b>
            </p>
            A tooth bridge is a fixed dental appliance that is used to replace
            one or more missing teeth. It consists of one or more artificial
            teeth, known as pontics, that are attached to crowns on either side.
            The crowns are placed over the teeth adjacent to the gap left by the
            missing tooth or teeth, and the pontic is suspended in the gap,
            filling the space and restoring function to the mouth.
            <br></br>
            <br></br>
            Tooth bridges are a permanent solution for missing teeth, and can
            help to improve the appearance of the smile, restore proper function
            to the mouth, and prevent the remaining teeth from shifting out of
            position. They are typically easier to care for than dentures, and
            can last for many years with proper care.
            <br></br>
            <br></br>
            <br></br>
            <b>Materials Involved:</b>
            Tooth bridges can be made from a variety of materials, including
            porcelain, ceramic, or gold. They are custom-made to fit the
            patient's mouth and are usually cemented into place, although they
            can also be secured using dental implants.
          </Card>
          <br></br>
          <br></br>
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
