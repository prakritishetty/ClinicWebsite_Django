import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import clinic1 from "../images/79.jpeg";
import ammawithbg from "../images/61.jpeg"
// import ammawithbg from "../images/46.jpeg"
// import amma from "../images/amma.JPG"
import amma from "../images/46.jpeg"
import akka from "../images/41.jpeg"
import NavbarUtil from "../utils/NavbarUtil.js";
import PageTestimonialsUtil from "../utils/PageTestimonialsUtil.js";
import FooterUtil from "../utils/FooterUtil.js";
import BeforeAfterUtil from "../utils/BeforeAfterUtils.js";

class App extends Component {
  render() { 
    return (
      <div
      // style={{
      //   marginRight: "0",
      //   marginLeft: "0",
      //   paddingRight: "0",
      //   paddingLeft: "0",
      //   backgroundImage: `url(${clinic1})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "auto",
      //   backgroundRepeat: "no-repeat",
      //   width: "100vw",
      //   // height: "90vh",
      //   // overflowX: "hidden",
      // }}
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
            backgroundImage: `url(${ammawithbg})`,
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
            About Us!
          </div>
          <br></br><br></br>
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
        <br></br>
        <br></br>

        <br></br>

        {/* <div className="d-flex flex-wrap justify-content-around" style={{ backgroundColor: "rgba(0, 28, 40, 0.38)", padding: "10vw" }}> */}

        {/* <Card
          class="container-fluid"
          style={{
            // height: "70vw",
            borderWidth: "0.2vw",
            margin: "0.5vw",
            borderColor: "white",
            backgroundColor: "rgba(0, 28, 40, 0.38)",
          }}
        > */}
        
          <Card
            style={{
              fontFamily: "Playfair Display",
              fontSize: "2vw",
              color: "Black",
              position: "center",
              padding: "2vw",
              // margin: "1vw",
              borderWidth: "0.2vw",
              borderColor: "black",
            }}
          >
            Greetings and welcome to Dr Sandhya's Total Dental Care! <br></br>We
            value your trust in us and are committed to providing you with
            excellent dental care
          </Card>
        {/* </Card> */}


        <br></br>
        <br></br>
        <br></br>

        {/* <Navbar
          style={{
            backgroundColor: "rgba(0, 28, 40, 0.38)",
            padding: "20px",
            marginLeft: "0px",
            paddingLeft: "0px",
          }}
        >
          <Nav className="ms-auto">
            <NavItem style={{ padding: "30px" }}> */}
            <div className="row">
            <div className="col-md-5" style={{margin:"4vw", padding:"2vw"}} >
              <Card
              className="container-fluid"
                style={{
                  fontSize: "1.5vw",
                  margin: "0.5vw",
                  // width: "",
                  padding: "1vw",
                }}
              >
                <CardHeader
                  style={{
                    fontSize: "1.5vw",
                    // width: "400px",
                    color: "black",
                    padding: "1vw",
                    align: "center",
                  }}
                >
                  <b>Dr(Mrs.) Sandhya Shetty, B.D.S</b>
                </CardHeader>

                <CardBody
                  style={{ 
                    // width: "400px", 
                    fontSize: "1.5vw", 
                    color: "black" }}
                >
                  <br></br>
                  Dr Sandhya Shetty is a Bachelor in Dental Surgery (B.D.S) from
                  the <b>Government Dental College, Aurangabad</b>.<br></br>
                  <br></br>
                  She was the <b>University Topper</b> and <b>Gold Medalist</b>{" "}
                  and with almost 15 years of experience, she knows her way
                  around teeth like the back of her hand!
                </CardBody>
                <br></br>
                <br></br>
                
              

                <img
                  src={amma}
                  align="center"
                  style={{ height: "40vw", width: "35vw", 
                    // marginLeft:"20px" 
                  }}
                ></img>
              </Card>

              </div>
              
            {/* </NavItem> */}
            {/* <NavItem style={{width:"80px"}}></NavItem> */}
             {/* <NavItem style={{ padding: "30px" }}> */}

             <div className="col-md-5" style={{margin:"4vw", padding:"2vw"}} >
             <Card
                style={{
                  fontSize: "1.5vw",
                  margin: "0.5vw",
                  // width: "",
                  padding: "1vw",
                }}
              >
                <CardHeader
                  style={{
                    fontSize: "1.5vw",
                    // width: "400px",
                    color: "black",
                    padding: "1vw",
                    align: "center",
                  }}
                >
                
                  <b>Dr Pratiksha Shetty, B.D.S, M.D.S</b>
                </CardHeader>

                <CardBody
                  style={{ 
                    // width: "400px", 
                    fontSize: "1.5vw", color: "black" }}
                >
                  <br></br>
                  Dr Pratiksha Shetty is pursuing Masters of Dental Surgery
                  (M.D.S) in Prosthodontics from the{" "}
                  <b>Government Dental College, Mumbai</b>.<br></br>
                  <br></br>
                  She secured an <b>All India Rank 68</b> in NEET-MDS Qualifying
                  Exam.
                  <br></br>
                  <br></br>
                  She has completed her Bachelors in Dental Surgery (B.D.S) from{" "}
                  <b>Nair Hospital and Dental College, Mumbai</b>
                  <br></br>
                  <br></br>
                  Dr Pratiksha Shetty is the perfect example of adding the
                  enthusiasm of young and fresh state-of-the-art dentistry
                  techniques to the years of wisdom Dr Sandhya has amassed!
                </CardBody>
                <br></br>

                <img
                  src={akka}
                  style={{ height: "40vw", width: "35vw", 
                    // marginLeft:"20px" 
                  }}
                ></img>
              </Card>
              </div>
            {/* </NavItem>  */}
          {/* </Nav>
        </Navbar> */}
        </div>

        {/* </div> */}

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* <div className="d-flex flex-wrap justify-content-around" style={{ backgroundColor: "rgba(0, 28, 40, 0.38)", padding: "20vw" }}> */}

        <BeforeAfterUtil />
        {/* </div> */}

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
