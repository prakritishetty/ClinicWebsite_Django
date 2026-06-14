import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";
import { TfiCheckBox } from "react-icons/tfi";
import clinic1 from "../images/79.jpeg";
import FMR from "../images/FMR.jpg"
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
            backgroundImage: `url(${clinic1})`,
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
              fontFamily: "times new roman",
              fontSize: "4.5vw",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "100vw",
              padding: "10px",
              margin: "2vw",
            }}
          >
            {" "}
            Full Mouth Rehabilitation!
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
               fontFamily: "times new roman",
               fontSize: "2.25vw",
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
                fontFamily: "times new roman",
                fontSize: "1.875vw",
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
            fontFamily: "times new roman",
            fontSize: "1.4249999999999998vw",
            color: "#B8860B",
            position: "center",
            padding: "1vw",
            margin: "0.5vw",
            borderWidth: "0.2vw",
            borderColor: "black",
            // fontSize: "25px",
          }}
          >
            <p style={{ fontSize: "1.875vw" }}>
              <b>Full Mouth Rehabilitation</b>
            </p>
            Full mouth rehabilitation, also known as full mouth reconstruction
            or full mouth restoration, is a type of dental treatment that
            involves repairing or replacing all of the teeth in the upper and
            lower jaws. This type of treatment is typically recommended for
            patients who have a significant amount of dental damage or are
            experiencing multiple oral health issues.
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
                color: "#B8860B",
                fontSize: "1.875vw",
                fontFamily: "times new roman",
              }}
            >
              Treatment Journey
            </CardHeader>
            <CardBody>
              <CardText>
              <div className="row" style={{
            fontFamily: "times new roman",
            fontSize: "1.4249999999999998vw",
            color: "#B8860B",
            // backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "1vw",
            // margin: "10px",
          }}>
          <div className="col-md-8" >
                
                <h3 style={{ color: "#B8860B", fontSize: "1.3125vw" }}>
                  Full mouth rehabilitation can be a complex and lengthy process
                  that may involve several different dental procedures. The
                  specific treatment plan will depend on the individual needs of
                  the patient, but may include:
                </h3>
                <br></br>
                <br></br>
                <TfiCheckBox size="3vw" color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "times new roman",
                    display: "inline",
                    fontSize: "1.4249999999999998vw",
                    color: "#B8860B",
                  }}
                >
                  Dental Exams and Cleanings:
                </h1>
                <h3 style={{ color: "#B8860B", fontSize: "1.3125vw" }}>
                  These are performed to remove plaque and tartar from the teeth
                  and to identify any potential dental problems.
                </h3>
                <br></br>
                <TfiCheckBox size="3vw" color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "times new roman",
                    display: "inline",
                    fontSize: "1.4249999999999998vw",
                    color: "#B8860B",
                  }}
                >
                  Tooth Extractions:
                </h1>
                <h3 style={{ color: "#B8860B" , fontSize: "1.3125vw"}}>
                  If a tooth is severely damaged or decayed, it may need to be
                  removed.
                </h3>
                <br></br>
                <TfiCheckBox size="3vw" color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "times new roman",
                    display: "inline",
                    fontSize: "1.4249999999999998vw",
                    color: "#B8860B",
                  }}
                >
                  Fillings:
                </h1>
                <h3 style={{ color: "#B8860B", fontSize: "1.3125vw" }}>
                  If a tooth has a cavity, a filling may be used to repair it.
                </h3>
                <br></br>
                <TfiCheckBox size="3vw" color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "times new roman",
                    display: "inline",
                    fontSize: "1.4249999999999998vw",
                    color: "#B8860B",
                  }}
                >
                  Crowns and Bridges:
                </h1>
                <h3 style={{ color: "#B8860B" , fontSize: "1.3125vw"}}>
                  These are used to restore damaged or missing teeth.
                </h3>
                <br></br>
                <TfiCheckBox size="3vw" color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "times new roman",
                    display: "inline",
                    fontSize: "1.4249999999999998vw",
                    color: "#B8860B",
                  }}
                >
                  Orthodontic Treatment:
                </h1>
                <h3 style={{ color: "#B8860B", fontSize: "1.3125vw" }}>
                  This may include braces or other appliances to straighten the
                  teeth.
                </h3>
                <br></br>
                <TfiCheckBox size="3vw" color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "times new roman",
                    display: "inline",
                    fontSize: "1.4249999999999998vw",
                    color: "#B8860B",
                  }}
                >
                  Dental Implants:
                </h1>
                <h3 style={{ color: "#B8860B" , fontSize: "1.3125vw"}}>
                  These are used to replace missing teeth.
                </h3>
                <br></br>
                <br></br>
                <h3 style={{ color: "#B8860B", fontSize: "1.3125vw" }}>
                  In some cases, full mouth rehabilitation may also involve
                  cosmetic procedures, such as teeth whitening or veneers, to
                  improve the appearance of the teeth.
                  <br></br>
                  <br></br>
                  Full mouth rehabilitation can help restore the function and
                  appearance of the teeth, and can significantly improve a
                  patient's oral health and quality of life. It is important to
                  work closely with a dental professional to develop a treatment
                  plan that meets your individual needs and goals.
                </h3>
                </div>
                <div className="col-md-3">
                {/* User requested to comment out photos
<img
                  src={FMR}
                  alt="Card image cap"
                  style={{ height: "30vw", width:"30vw" }}
                />
*/}
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
