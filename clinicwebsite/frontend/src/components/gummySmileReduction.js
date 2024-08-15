import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";
import { TfiCheckBox } from "react-icons/tfi";
import clinic1 from "../images/79.jpeg";
import IMG_6455 from "../images/IMG_6455.JPG"
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
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            padding: "0px",
            margin: "0px",
            backgroundImage: `url(${IMG_6455})`,
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
            Gummy Smile Reduction!
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
            fontSize: "1.9vw",
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
              <b>Gummy Smile Reduction</b>
            </p>
            A gummy smile is a term used to describe a smile that reveals too
            much gum tissue when the lips are parted. This can be caused by a
            variety of factors, including the shape of the teeth, the length of
            the teeth, or the position of the jaw. A gummy smile can affect the
            appearance of the teeth and may make a person feel self-conscious
            about their smile.
          </Card>
          <br></br>
          <br></br>

          <Card
           style={{
            padding: "1vw",
            borderWidth: "0.2vw",
            margin: "0.5vw",
            position: "float",
            backgroundColor: "white",
          }}
          >
            <CardHeader
              style={{
                color: "black",
                fontSize: "2.5vw",
                fontFamily: "Playfair Display",
              }}
            >
              Treatment Options
            </CardHeader>
            <CardBody>
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
                
                <TfiCheckBox size="3vw" color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    display: "inline",
                    fontSize: "1.9vw",
                    color: "black",
                  }}
                >
                  Orthodontic Treatment
                </h1>
                <h3 style={{ color: "black", fontSize:'1.75vw' }}>
                  In some cases, orthodontic treatment, such as braces, can be
                  used to move the teeth into a more aesthetically pleasing
                  position and expose more of the tooth surface.
                </h3>
                <br></br>
                <TfiCheckBox size="3vw" color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    display: "inline",
                    fontSize: "1.9vw",
                    color: "black",
                  }}
                >
                  Laser Gum Contouring
                </h1>
                <h3 style={{ color: "black" , fontSize:'1.75vw'}}>
                  This procedure involves using a laser to remove excess gum
                  tissue and expose more of the tooth surface.
                </h3>
                <br></br>
                <TfiCheckBox size="3vw" color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    display: "inline",
                    fontSize: "1.9vw",
                    color: "black",
                  }}
                >
                  Crown Lengthening
                </h1>
                <h3 style={{ color: "black", fontSize:"1.75vw" }}>
                  This procedure involves removing a small amount of gum tissue
                  and bone to expose more of the tooth.
                </h3>
                <br></br>
                <TfiCheckBox size="3vw" color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    display: "inline",
                    fontSize: "1.9vw",
                    color: "black",
                  }}
                >
                  
                  Porcelain Veneers
                </h1>
                <h3 style={{ color: "black", fontSize:"1.75vw" }}>
                  Veneers are thin, custom-made shells that are placed over the
                  front surface of the teeth. They can be used to cover up a
                  gummy smile and improve the appearance of the teeth.
                </h3>
                <br></br>
                <br></br>
                <h3 style={{ color: "black", fontSize:"1.75vw" }}>
                  The best treatment option for reducing a gummy smile will
                  depend on the underlying cause of the problem and the
                  individual needs and goals of the patient. It is important to
                  work closely with a dental professional to determine the most
                  appropriate treatment plan.
                </h3>
                </div><div className="col-md-3" >
                <img
                  src="https://ih1.redbubble.net/image.780195444.4073/st,small,507x507-pad,600x600,f8f8f8.jpg"
                  alt="Card image cap"
                  style={{height: "30vw", width:"30vw" }}
                />
                </div>
                </div>
                
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
