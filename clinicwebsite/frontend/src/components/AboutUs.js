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
        // backgroundImage: `url(${clinic1})`,
        backgroundColor:"#b3cde0",
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
          // // className="p-5 my-6 rounded"
          // className="d-flex flex-column justify-content-center align-items-center"
          // style={{
          //   padding: "0px",
          //   margin: "0px",
          //   backgroundImage: `url(${ammawithbg})`,
          //   backgroundPosition: "center ",
          //   // backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          //   width: "100vw",
          //   minHeight: "140vh",
          //   overflowX:"auto"
          // }}
        >
          <div
            className="text-center"
            style={{
              fontFamily: "times new roman",
              fontSize: "4.5vw",
              color: "white",
              backgroundColor: "	#6497b1",
              width: "95vw",
              padding: "10px",
              margin: "2vw",
            }}
          >
            {" "}
            About Us!
          </div>
          {/* <br></br><br></br> */}
          {/* <Button
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
          </div> */}
        
        </div>
        {/* <br></br>
        <br></br>
        <br></br>
        <br></br> */}
        {/* <br></br>
        <br></br>

        <br></br> */}

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
              fontFamily: "times new roman",
              fontSize: "1.125vw",
              color: "#B8860B",
              // position: "center",
              width:"96vw",
              padding: "2vw",
              margin: "1vw",
              marginRight:"1vw",
              // borderWidth: "0.2vw",
              // borderColor: "black",
            }}
          >
            <Navbar
          style={{
            // backgroundColor: "rgba(0, 28, 40, 0.38)",
            padding: "20px",
            marginLeft: "0px",
            paddingLeft: "0px",
            display: "flex", 
            flexDirection: "row"
          }}
        >
          <Nav style={{ display: "flex", flexDirection: "row" }}>
            <NavItem style={{ width: "65%" }}>
            Welcome to our practice - where experience, precision, and compassion come together to create confident smiles. <br></br><br></br>
            Founded and led by <b>Dr. Sandhya Shetty (BDS, Gold Medalist)</b> and <b>Dr. Pratiksha Shetty (BDS, MDS Prosthodontics)</b>, our practice has been a trusted name in dental care for over 15 years. Known for our ethical practice and ability to explain treatments with clarity and care, we have earned the trust and respect of a wide patient base.
            
            {/* With academic excellence backed by national conference presentations and peer-reviewed publications, she combines artistry with evidence-based dentistry. <br/><br/> */}
            <br></br><br></br>
            Together, we are committed to providing personalized, comfortable and high-quality dental care for every smile by coalescing need-based and want-based dentistry. 
            </NavItem>
            <NavItem style={{ width: "35%", paddingLeft:"20px" }}>
              {/* User requested to comment out photos
<img
                  src={ammawithbg}
                  // align="center"
                  
                  style={{ marginLeft: "auto",
                  marginRight: "auto", 
                  height: "25vw", width: "33vw",
                  // paddingTop:"10px" 
                    // marginLeft:"20px" 
                  }}
                ></img>
*/}
            </NavItem>

          </Nav>

          </Navbar>
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

               <Card
            style={{
              fontFamily: "times new roman",
              fontSize: "1.125vw",
              color: "#B8860B",
              // position: "center",
              width:"96vw",
              padding: "2vw",
              margin: "1vw",
              marginRight:"1vw",
              // borderWidth: "0.2vw",
              // borderColor: "black",
            }}
          >
            <Navbar
          style={{
            // backgroundColor: "rgba(0, 28, 40, 0.38)",
            padding: "20px",
            marginLeft: "0px",
            paddingLeft: "0px",
            display: "flex", 
            flexDirection: "row"
          }}
        >
          <Nav style={{ display: "flex", flexDirection: "row" }}>
            <NavItem style={{ width: "65%" }}>
              <CardHeader
                  style={{
                    fontSize: "1.125vw",
                    // width: "400px",
                    color: "#B8860B",
                    padding: "1vw",
                    align: "center",
                  }}
                >
                  <b>Dr(Mrs.) Sandhya Shetty, B.D.S</b>
                </CardHeader>
            
            <CardBody
                  style={{ 
                    // width: "400px", 
                    fontSize: "1.125vw", 
                    color: "#B8860B" }}
                >
                  <br></br>
                  Dr. Sandhya Shetty (BDS, Gold Medalist) completed her Bachelor of Dental Surgery from Government Dental College, Aurangabad, in 1994, earning the Gold Medal from Marathwada University for her outstanding academic performance. 
                  <br/><br/>
                  With over 25 years of clinical experience, she has honed her expertise in a wide range of dental procedures, including cosmetic fillings, root canal treatments and extractions. Renowned for her in-depth understanding of oral anatomy and exceptional diagnostic skills, Dr. Shetty ensures each patient receives accurate, personalized care. 
                  <br/><br/>
                  Her gentle technique and ability to explain the treatment plan in a methodical way, have made her a trusted and beloved dentist. She is deeply committed to recommending the most suitable and ethical treatment approach for every patient, ensuring long-term oral health and comfort.
                </CardBody>
            </NavItem>
            <NavItem style={{ width: "35%", paddingLeft:"20px" }}>
              {/* User requested to comment out photos
<img
                  src={amma}
                  // align="center"
                  
                  style={{ marginLeft: "auto",
                  marginRight: "auto", 
                  height: "40vw", width: "33vw",
                  paddingTop:"80px" 
                    // marginLeft:"20px" 
                  }}
                ></img>
*/}
            </NavItem>

          </Nav>

          </Navbar>
          </Card>




               <Card
            style={{
              fontFamily: "times new roman",
              fontSize: "1.125vw",
              color: "#B8860B",
              // position: "center",
              width:"96vw",
              padding: "2vw",
              margin: "1vw",
              marginRight:"1vw",
              // borderWidth: "0.2vw",
              // borderColor: "black",
            }}
          >
            <Navbar
          style={{
            // backgroundColor: "rgba(0, 28, 40, 0.38)",
            padding: "20px",
            marginLeft: "0px",
            paddingLeft: "0px",
            display: "flex", 
            flexDirection: "row"
          }}
        >
          <Nav style={{ display: "flex", flexDirection: "row" }}>
            <NavItem style={{ width: "65%" }}>
              <CardHeader
                  style={{
                    fontSize: "1.125vw",
                    // width: "400px",
                    color: "#B8860B",
                    padding: "1vw",
                    align: "center",
                  }}
                >
                  <b>Dr Pratiksha Shetty, B.D.S, M.D.S</b>
                </CardHeader>
            
            <CardBody
                  style={{ 
                    // width: "400px", 
                    fontSize: "1.125vw", 
                    color: "#B8860B" }}
                >
                  <br></br>
                  Dr. Pratiksha Shetty (BDS, MDS Prosthodontics and Crown & Bridge) is a skilled and passionate prosthodontist dedicated to restoring smiles with precision and artistry. 
                  <br/><br/>
                  She completed her BDS from Nair Hospital Dental College, Mumbai (2022) and pursued her MDS in Prosthodontics and Crown & Bridge from Government Dental College & Hospital, Mumbai, where she gained advanced training in comprehensive oral rehabilitation. 
                  <br/><br/>
                  Dr. Pratiksha has delivered presentations at national conferences and published research in peer-reviewed journals, reflecting her commitment to academic excellence. Her clinical expertise spans implants, full-mouth rehabilitation, veneers, digital dentistry and maxillofacial prosthodontics, with a special focus on restoring missing oral and facial structures to enhance both function and aesthetics. She integrates complete digital workflows into her practice to ensure comfort, accuracy and superior results, helping every patient regain not just their smile, but also their confidence.
 
                  
                </CardBody>
            </NavItem>
            <NavItem style={{ width: "35%", paddingLeft:"20px" }}>
              {/* User requested to comment out photos
<img
                  src={akka}
                  // align="center"
                  
                  style={{ marginLeft: "auto",
                  marginRight: "auto", 
                  height: "40vw", width: "33vw",
                  paddingTop:"80px" 
                    // marginLeft:"20px" 
                  }}
                ></img>
*/}
            </NavItem>

          </Nav>

          </Navbar>
          </Card>


              


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
