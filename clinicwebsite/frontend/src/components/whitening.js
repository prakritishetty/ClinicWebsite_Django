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
          // className="p-5 my-6 rounded"
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            padding: "0px",
            margin: "0px",
            backgroundImage: `url(${IMG_6413})`,
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
            Teeth Whitening!
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
              <b>Teeth Whitening</b>
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
            </div>
            <div className="col-md-3" >
            <img
                  src="https://thumbs.dreamstime.com/b/cleaning-teeth-mouthwash-dental-health-care-cleaning-teeth-mouthwash-dental-health-care-tooth-cartoon-vector-flat-style-cute-156111096.jpg"
                  alt="Card image cap"
                  style={{height: "30vw", width:"30vw" }}
                />
                </div>
                </div>
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
