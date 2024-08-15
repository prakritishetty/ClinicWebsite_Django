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
           backgroundImage: `url(${IMG_6445})`,
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
            Bone Grafts!
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
            fontFamily: "Playfair Display",
            fontSize: "1.75vw",
            color: "Black",
            position: "center",
            padding: "2vw",
            margin: "1vw",
            borderWidth: "0.2vw",
            borderColor: "black",
            // fontSize: "25px",
          }}
          >
            <CardHeader
              style={{
                color: "black",
                fontSize: "2.5vw",
                fontFamily: "Playfair Display",
              }}
            >
              Need for Tooth Bone Grafts
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
                  Replace
                </h1>
                <h3 style={{ color: "black" , fontSize:'1.75vw'}}>
                  Replace bone that has been lost due to periodontal disease or
                  trauma
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
                  Repair
                </h1>
                <h3 style={{ color: "black", fontSize:'1.75vw' }}>
                  Repair bone that has been damaged by infection or injury
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
                  Strengthen
                </h1>
                <h3 style={{ color: "black" , fontSize:"1.75vw"}}>
                  Strengthen the jawbone in preparation for dental implant
                  surgery
                </h3>
                <br></br>
                <br></br>
                <h3 style={{ color: "black", fontSize:"1.75vw" }}>
                  There are several different types of bone grafting materials
                  that can be used, including synthetic bone substitutes, donor
                  bone tissue, and the patient's own bone tissue. The type of
                  material used will depend on the specific needs of the patient
                  and the location of the graft.
                </h3>
                </div>
                <div className="col-md-3">
                <img
                  src="https://i.makeagif.com/media/11-28-2021/mp-izn.gif"
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
