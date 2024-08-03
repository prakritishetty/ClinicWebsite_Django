import React, { Component } from "react";
import { Button, Card, CardText } from "reactstrap";
import clinic1 from "../images/79.jpeg";
import IMG_6413 from "../images/IMG_6413.JPG"
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
            backgroundImage: `url(${IMG_6413})`,
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
              width: "850px",
              padding: "10px",
              margin: "10px",
            }}
          >
            {" "}
            Teeth Whitening!
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
            height: "700px",
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
              <b>Teeth Whitening</b>
            </p>
            <CardText>
                <img
                  src="https://thumbs.dreamstime.com/b/cleaning-teeth-mouthwash-dental-health-care-cleaning-teeth-mouthwash-dental-health-care-tooth-cartoon-vector-flat-style-cute-156111096.jpg"
                  alt="Card image cap"
                  style={{ float: "right", height: "300px" }}
                />
                <br></br>
            
            Teeth whitening is a cosmetic dental procedure that is designed to
            lighten the color of the teeth and improve the appearance of the
            smile. It is often used to address tooth discoloration or staining
            caused by factors such as aging, tobacco use, certain medications,
            and consumption of staining foods and drinks.
            <br></br>
            <br></br>
            Teeth whitening is generally safe and effective when performed by a
            dental professional or when using products that have been approved
            by the American Dental Association (ADA). However, it is important
            to follow the instructions provided by the dental professional or
            the product manufacturer to avoid overuse or improper use of the
            whitening agent, which can cause tooth sensitivity or other side
            effects
            </CardText>
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
