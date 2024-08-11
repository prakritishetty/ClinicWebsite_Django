import React, { Component } from "react";
import {
  Card,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

class FooterUtil extends Component {
  render() {
    return (
      <>
        <Card
          class="container-fluid"
          style={{
            height: "250px",
            borderWidth: "2px",
            margin: "0px",
            borderColor: "white",
            backgroundColor: "rgba(0, 28, 40, 0.38)",
          }}
        >
          <div className="text-center p-3"
            style={{
              fontFamily: "Playfair Display",
              fontSize: "2.5vw",
              color: "white",
              // padding: "20px",
              backgroundColor: "rgba(0, 28, 40, 0.38)",
              // zIndex: 100,
            }}
          >
            So what are you waiting for? Smile wide, and
            <Button
              active
              color="light"
              className="d-block mx-auto my-3"
              style={{
                fontFamily: "Playfair Display",
                fontSize: "2vw",
                padding: "1vw",
                display:"inline"
                // margin: "15px",
                // marginLeft: "80px",
                // zIndex: 100,
              }}
            >
              <a
                href="https://wa.me/919833630985?text=Hello%20Dr%20Sandhya,%20I%27m%20interested%20in%20booking%20an%20appointment%20at%20your%20clinic%0D%0AMy%20name%20is%20:%0D%0AMy%20chief%20complaint%20is:"
                style={{ color: "black", textDecoration: "black", zIndex: 100 }}
              >
                Book your appointment today!
              </a>
            </Button>
          </div>
        </Card>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="row" style={{
            fontFamily: "Playfair Display",
            fontSize: "1.25vw",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "10px",
            margin: "10px",
          }}>
          <div className="col-md-8" >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.627340847596!2d72.94237301412522!3d19.167783054063854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f7c2d76931%3A0xa2d85150fddd96c8!2sDr%20Sandhya&#39;s%20Total%20Dental%20Care!5e0!3m2!1sen!2sin!4v1670239514055!5m2!1sen!2sin"
              // style={{
              //   width: "900px",
              //   height: "250px",
              //   border: "50px",
              //   allowfullscreen: "",
              //   loading: "lazy",
              //   referrerpolicy: "no-referrer-when-downgrade",
              //   padding: "20px",
              // }}
              style={{
                width: "100%",
                height: "25vw",
                border: "0",
                backgroundColor:"white"
              }}
            ></iframe>
          {/* </ListGroup.Item>
          <ListGroup.Item
            style={{
              fontFamily: "Playfair Display",
              backgroundColor: "white",
              color: "black",
              fontSize: "20px",
              width: "400px",
              borderWidth: "5px",
              borderColor: "white",
            }}
          >
            <div style={{ fontSize: "30px", borderWidth: "5px" }}>Visit Us</div>{" "}
            <hr color="black"></hr>Shop #9, Saidham Complex, <br></br>P.K road,
            Mulund West <br></br>Mumbai - 400080<br></br>
            <br></br>Mon - Sat: <br></br>10am to 2pm, 6pm to 9pm
          </ListGroup.Item>
        </ListGroup> */}
        </div>
  <div className="col-md-4">
    <h2 className="mb-3"  style={{
            fontFamily: "Playfair Display",
            fontSize: "3vw",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "2vw",
            margin: "10px",
          }}>Visit Us</h2>
    <hr />
    <p  style={{
            fontFamily: "Playfair Display",
            fontSize: "1.5vw",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "0.5vw",
            margin: "10px",
          }}>Shop #9, Saidham Complex,<br />P.K road, Mulund West<br />Mumbai - 400080</p>
          <hr></hr>
    <p style={{
            fontFamily: "Playfair Display",
            fontSize: "1.5vw",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "0.5vw",
            margin: "10px",
          }}>Mon - Sat:<br />10am to 2pm, 6pm to 9pm</p>
  </div>
</div>

        <br></br>
        <br></br>

        {/* <Navbar
          style={{
            marginRight: "0px",
            paddingRight: "0px",
            paddingLeft: "250px",
            marginBottom: "0px",
            backgroundColor: "rgba(0, 28, 40, 0.38)",
          }}
        >
          <NavbarToggler onClick={this.toggle} />

          <Nav style={{ marginRight: "0px", paddingRight: "0px" }}>
            <NavItem></NavItem>

            <ListGroup>
              <ListGroup.Item
                style={{
                  fontFamily: "Playfair Display",
                  color: "white",
                  backgroundColor: "rgba(0, 28, 40, 0.38)",
                }}
              >
                <NavItem
                  style={{
                    padding: "20px",
                    paddingRight: "60px",
                    marginRight: "5px",
                    fontFamily: "Playfair Display",
                    fontSize: "30px",
                    backgroundColor: "rgba(0, 28, 40, 0.38)",
                  }}
                >
                  Social
                </NavItem>
                <br></br>
                <br></br>
                <BsInstagram size="45px" style={{ padding: "5px" }} />{" "}
                <AiOutlineLinkedin size="50px" style={{ padding: "3px" }} />
              </ListGroup.Item>
            </ListGroup>
            <NavItem></NavItem>
            <NavItem></NavItem>
            <ListGroup>
              <ListGroup.Item
                style={{
                  fontFamily: "Playfair Display",
                  color: "white",
                  backgroundColor: "rgba(0, 28, 40, 0.38)",
                }}
              >
                {" "}
                <NavItem
                  style={{
                    padding: "20px",
                    paddingRight: "80px",
                    rightMargin: "50px",
                    fontFamily: "Playfair Display",
                    fontSize: "30px",
                    backgroundColor: "rgba(0, 28, 40, 0.38)",
                  }}
                >
                  Services
                </NavItem>
                <br></br>
                <br></br>
                <NavLink
                  href="/general"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  General
                </NavLink>
                <NavLink
                  href="/cosmetic"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  Cosmetic
                </NavLink>
                <NavLink
                  href="/surgical"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  Surgical
                </NavLink>
                <br></br>
                <br></br>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup>
              <ListGroup.Item
                style={{
                  fontFamily: "Playfair Display",
                  color: "white",
                  backgroundColor: "rgba(0, 28, 40, 0.38)",
                }}
              >
                {" "}
                <NavItem
                  style={{
                    padding: "20px",
                    paddingRight: "80px",
                    rightMargin: "70px",
                    fontFamily: "Playfair Display",
                    fontSize: "30px",
                    backgroundColor: "rgba(0, 28, 40, 0.38)",
                  }}
                >
                  Our Office
                </NavItem>
                <br></br>
                <br></br>
                <NavLink
                  href="/"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  Home
                </NavLink>
                <NavLink
                  href="/about"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  About
                </NavLink>
                <NavLink
                  href="/doctorlogin"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  Doctor Login
                </NavLink>
                <br></br>
                <br></br>
              </ListGroup.Item>
            </ListGroup>
            <NavItem></NavItem>
            <ListGroup style={{ marginRight: "0px", paddingRight: "0px" }}>
              <ListGroup.Item
                style={{
                  fontFamily: "Playfair Display",
                  color: "white",
                  backgroundColor: "rgba(0, 28, 40, 0.38)",
                }}
              >
                {" "}
                <NavItem
                  style={{
                    padding: "20px",
                    paddingRight: "80px",
                    margin: "0px",
                    fontFamily: "Playfair Display",
                    fontSize: "30px",
                    backgroundColor: "rgba(0, 28, 40, 0.38)",
                  }}
                >
                  Contact Us
                </NavItem>
                <div style={{ fontSize: "15px" }}>
                  Call (+91) 9833630985<br></br>
                  <br></br>Shop #9, Saidham Complex, <br></br>P.K road, Mulund
                  West <br></br>Mumbai - 400080<br></br>
                  <br></br>Mon - Sat: <br></br>10am to 2pm,<br></br>6pm to 9pm
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Nav>
        </Navbar> */}

<div className="container-fluid text-white py-4" style={{
            fontFamily: "Playfair Display",
            fontSize: "1.5vw",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "1.5vw",
            margin: "0.5vw",
          }} >
  <div className="row">
    <div className="col-md-3 mb-3">
      <h3 style={{
            fontFamily: "Playfair Display",
            fontSize: "1.5vw",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "0.5vw",
            margin: "10px",
          }}>Social</h3>
      <BsInstagram size="2em" className="mr-2" style={{margin:"1vw"}}/>
      <AiOutlineLinkedin size="2em" />
    </div>
    <div className="col-md-3 mb-3">
      <h3 style={{
            fontFamily: "Playfair Display",
            fontSize: "1.5vw",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "0.5vw",
            margin: "10px",
          }}>Services</h3>
      <NavLink href="/general">General</NavLink>
      <NavLink href="/cosmetic">Cosmetic</NavLink>
      <NavLink href="/surgical">Surgical</NavLink>
    </div>
    <div className="col-md-3 mb-3">
      <h3 style={{
            fontFamily: "Playfair Display",
            fontSize: "1.5vw",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "0.5vw",
            margin: "10px",
          }}>Our Office</h3>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/doctorlogin">Doctor Login</NavLink>
    </div>
    <div className="col-md-3 mb-3">
      <h3 style={{
            fontFamily: "Playfair Display",
            fontSize: "1.5vw",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            // width: "100vw",
            padding: "0.5vw",
            margin: "10px",
          }}>Contact Us</h3>
      <p>Call (+91) 9833630985</p>
      <p>Shop #9, Saidham Complex,<br />P.K road, Mulund West<br />Mumbai - 400080</p>
      <p>Mon - Sat: 10am to 2pm, 6pm to 9pm</p>
    </div>
  </div>
</div>

        <div className="container-fluid text-white py-4" style={{backgroundColor:"rgba(0, 28, 40, 0.38)", padding:"20px", fontFamily:"Playfair Display", fontSize:"clamp(1rem, 4vw, 1.75rem)"}}
          // className="text"
          // style={{
          //   paddingLeft: "750px",
          //   color: "white",
          //   fontFamily: "Playfair Display",
          //   fontSize: "15px",
          //   fontStyle: "italic",
          //   backgroundColor: "rgba(0, 28, 40, 0.38)",
          // }}
        >
          @ Dr Sandhya's Total Dental Care | Copyright: 2022 | Designed by:
          Prakriti Shetty
        </div>
      </>
    );
  }
}

export default FooterUtil;
