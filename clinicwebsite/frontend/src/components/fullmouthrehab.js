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
            backgroundImage: `url(${clinic1})`,
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
            Full Mouth Rehabilitation!
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
            height: "1500px",
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
              Treatment Journey
            </CardHeader>
            <CardBody>
              <CardText>
                <br></br>
                <img
                  src={FMR}
                  alt="Card image cap"
                  style={{ float: "right", height: "500px" }}
                />
                <br></br>
                <br></br>
                <h3 style={{ color: "black" }}>
                  Full mouth rehabilitation can be a complex and lengthy process
                  that may involve several different dental procedures. The
                  specific treatment plan will depend on the individual needs of
                  the patient, but may include:
                </h3>
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
                  Dental Exams and Cleanings:
                </h1>
                <h3 style={{ color: "black" }}>
                  These are performed to remove plaque and tartar from the teeth
                  and to identify any potential dental problems.
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
                  Tooth Extractions:
                </h1>
                <h3 style={{ color: "black" }}>
                  If a tooth is severely damaged or decayed, it may need to be
                  removed.
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
                  Fillings:
                </h1>
                <h3 style={{ color: "black" }}>
                  If a tooth has a cavity, a filling may be used to repair it.
                </h3>
                <TfiCheckBox size={50} color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    display: "inline",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  Crowns and Bridges:
                </h1>
                <h3 style={{ color: "black" }}>
                  These are used to restore damaged or missing teeth.
                </h3>
                <TfiCheckBox size={50} color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    display: "inline",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  Orthodontic Treatment:
                </h1>
                <h3 style={{ color: "black" }}>
                  This may include braces or other appliances to straighten the
                  teeth.
                </h3>
                <TfiCheckBox size={50} color="black" />{" "}
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    display: "inline",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  Dental Implants:
                </h1>
                <h3 style={{ color: "black" }}>
                  These are used to replace missing teeth.
                </h3>
                <br></br>
                <br></br>
                <h3 style={{ color: "black" }}>
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
