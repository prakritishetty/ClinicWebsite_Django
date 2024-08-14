import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";
import { TfiCheckBox } from "react-icons/tfi";
import clinic1 from "../images/79.jpeg";
import fallingtooth from "../images/fallingtooth.png"
import IMG_6441 from "../images/IMG_6441.JPG";
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
            backgroundImage: `url(${IMG_6441})`,
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
            Teeth Extractions!
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
              <b>Teeth Extractions</b>
            </p>
            <CardText>
            <div className="row" style={{
            fontFamily: "Playfair Display",
            fontSize: "1.25vw",
            color: "black",
            // backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "10px",
            // margin: "10px",
          }}>
          <div className="col-md-8" >
           
            A tooth extraction is a procedure in which a tooth is removed from
            the mouth.<br></br>
            <br></br>
            There are several reasons why a tooth may need to be extracted. One
            common reason is if the tooth is severely damaged or decayed and
            cannot be repaired. Other reasons for tooth extraction may include:
            <br></br>
            <br></br>
            <b>Crowded mouth:</b> If there is not enough room in the mouth for
            all of the teeth, some may need to be removed to make room for the
            others.<br></br>
            <b>Orthodontic treatment:</b> In some cases, teeth may need to be
            removed to make room for orthodontic treatment, such as braces.
            <br></br>
            <b>Infection:</b> If a tooth is infected and cannot be saved, it may
            need to be extracted to prevent the infection from spreading to
            other teeth or to other parts of the body.
            </div>
            <div className="col-md-3" >
                <img
                  src={fallingtooth}
                  alt="Card image cap"
                  style={{ float: "right", height: "300px" }}
                />
                </div></div>
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
              Treatment and Prerequisites
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
                      Simple Extractions
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
                      Surgical Extractions
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
                      Performed on a tooth that is visible in the mouth and can
                      be removed with forceps
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        color: "black",
                        fontSize: "20px",
                        fontFamily: "Playfair Display",
                      }}
                    >
                      More complex procedure that may be necessary for teeth
                      that are broken off at the gum line or for teeth that have
                      not erupted through the gums. <br></br>This type of
                      extraction may require the use of local anesthesia,
                      intravenous (IV) sedation, or general anesthesia to numb
                      the area and make the procedure more comfortable.
                    </td>
                  </tr>
                </table>
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
                  Don't forget to get your vitals checked
                </h1>
                <h3 style={{ color: "black" }}>
                  Ensure that your Blood Pressure is normal (120/80) before you
                  come in for an extraction, to avoid emergency situations.
                </h3>
               
                
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
