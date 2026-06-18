import React, { Component } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  // Collapse
} from "reactstrap";

class NavbarUtil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isOpenG: false,
      isOpenC: false,
      isOpenS: false,
      activeIndex: 0,
      hover: false,
      hover1: false,
      hover2: false,
      opacity: 1,
    };
    this.onHover = this.onHover.bind(this);
    this.onHoverOver = this.onHoverOver.bind(this);
    this.onHover1 = this.onHover1.bind(this);
    this.onHoverOver1 = this.onHoverOver1.bind(this);
    this.onHover2 = this.onHover2.bind(this);
    this.onHoverOver2 = this.onHoverOver2.bind(this);
  }

  onMouseEnter = () => {
    this.setState({ isOpen: true });
  };
  onMouseLeave = () => {
    this.setState({ isOpen: false });
  };
  onMouseEnterG = () => {
    this.setState({ isOpenG: true });
  };
  onMouseLeaveG = () => {
    this.setState({ isOpenG: false });
  };
  onMouseEnterC = () => {
    this.setState({ isOpenC: true });
  };
  onMouseLeaveC = () => {
    this.setState({ isOpenC: false });
  };
  onMouseEnterS = () => {
    this.setState({ isOpenS: true });
  };
  onMouseLeaveS = () => {
    this.setState({ isOpenS: false });
  };
  onHover = (e) => {
    e.preventDefault();

    console.log("hovering");
    this.setState({ opacity: 0.2, hover: true });
  };
  onHoverOver = (e) => {
    e.preventDefault();
    this.setState({ hover: false });
  };
  onHover1 = (e) => {
    e.preventDefault();
    console.log("hovering");
    this.setState({ opacity: 0.2, hover1: true });
  };
  onHoverOver1 = (e) => {
    e.preventDefault();
    this.setState({ hover1: false });
  };
  onHover2 = (e) => {
    e.preventDefault();
    console.log("hovering");
    this.setState({ opacity: 0.2, hover2: true });
  };
  onHoverOver2 = (e) => {
    e.preventDefault();
    this.setState({ hover2: false });
  };

  onExiting() {
    this.animating = true;
  }
  onExited() {
    this.animating = false;
  }

  render() {
    const generalServices = [
      { name: "Dental Check-ups & Consultations", link: "/checkups" },
      { name: "Professional Cleaning (Scaling & Polishing)", link: "/cleaning" },
      { name: "Fillings (Tooth-Coloured Restorations)", link: "/fillings" },
      { name: "Root Canal Treatment", link: "/root-canal" },
      { name: "Crowns & Bridges", link: "/crowns-bridges" },
      { name: "Complete and Partial Dentures", link: "/dentures" },
      { name: "Treatment of Tooth Sensitivity", link: "/sensitivity" },
      { name: "Treatment of temporomandibular joint disorders", link: "/tmj-treatment" },
      { name: "Fluoride Therapy", link: "/fluoride-therapy" },
      { name: "Night Guards / Mouth Guards", link: "/mouth-guards" },
      { name: "Management of Gum Disease", link: "/gum-disease" },
      { name: "Emergency Dental Care", link: "/emergency" },
      { name: "Pediatric Dental Care", link: "/pediatric" }
    ];

    const cosmeticServices = [
      { name: "Teeth Whitening", link: "/teeth-whitening" },
      { name: "Smile Designing", link: "/smile-designing" },
      { name: "Veneers", link: "/veneers" },
      { name: "Tooth-Coloured Fillings", link: "/tooth-colored-fillings" },
      { name: "Gum Contouring", link: "/gum-contouring" },
      { name: "Diastema (Gap) Closure", link: "/gap-closure" },
      { name: "Aesthetic Crowns", link: "/aesthetic-crowns" },
      { name: "Clear Aligners / Invisible Braces", link: "/clear-aligners" }
    ];

    const surgicalServices = [
      { name: "Dental Implants", link: "/dental-implants" },
      { name: "Full Mouth Implant Rehabilitation", link: "/full-mouth-rehab" },
      { name: "Tooth Extractions", link: "/extractions" },
      { name: "Surgical Wisdom Tooth Removal", link: "/wisdom-tooth-removal" },
      { name: "Bone Grafting", link: "/bone-grafting" },
      { name: "Sinus Lift Procedures", link: "/sinus-lift" },
      { name: "Soft Tissue Grafting", link: "/soft-tissue-grafting" },
      { name: "Implant Site Development", link: "/implant-site-development" },
      { name: "Exposure of Impacted Teeth", link: "/impacted-teeth" },
      { name: "Apicoectomy (Root-End Surgery)", link: "/apicoectomy" },
      { name: "Oral Biopsies", link: "/oral-biopsies" },
      { name: "Pre-Prosthetic Surgery", link: "/pre-prosthetic-surgery" }
    ];

    return (
      <Navbar
        expand="md"
        style={{
          color: "#0A2342",
          fontFamily: "times new roman",
          // fontSize: "30px",
          position: "fixed",
          width: "100%",
          zIndex: "100",
          height:"6vw",
          // paddingLeft: "0px",
          // marginLeft: "0px",
          // backgroundColor: "white",
          backgroundColor: "white",
          flexDirection: "column",
          padding:"0.5vw",
          alignItems: "stretch",
        }}
      >
        <NavbarBrand
          href="/"
           
        style={{
          fontFamily: "times new roman",
          fontSize: "2.25vw",
          color: "#0A2342",
          // backgroundColor: "white",
          // width: "100vw",
          padding: "1vw",
          // margin: "10px",
          width: "50vw",
          // textAlign: "center",
        }}
        >
          Dr Sandhya's Total Dental Care
        </NavbarBrand>
        
        {/* <Collapse isOpen={this.state.isOpen} navbar> */}
        <Nav className="ml-auto" navbar style={{
            flexDirection: "row",
            flexWrap: "wrap",
            // justifyContent: "center",
          }}>
          <NavItem style={{ width: "1vw" }}></NavItem>
          <NavItem>
            <NavLink
              onClick=""
              href="/about"
              style={{
                fontFamily: "times new roman",
                fontSize: "1.125vw",
                color: "#0A2342",
                // backgroundColor: "white",
                // width: "100vw",
                padding: "1vw",
                paddingTop:"1.5vw",
                margin: "0.5vw",
              }}
            >
              About
            </NavLink>
          </NavItem>

          <Dropdown
            onMouseOver={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            isOpen={this.state.isOpen}
          >
            <DropdownToggle
              nav
              style={{
                fontFamily: "times new roman",
                fontSize: "1.125vw",
                color: "#0A2342",
                padding: "1vw",
                paddingTop: "1.5vw",
                margin: "0.5vw",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              Services
            </DropdownToggle>
            <DropdownMenu right>
              <Dropdown
                direction="left"
                onMouseOver={this.onMouseEnterG}
                onMouseLeave={this.onMouseLeaveG}
                isOpen={this.state.isOpenG}
              >
                <DropdownToggle nav 
                style={{
                  fontFamily: "times new roman",
                  fontSize: "1.5vw",
                  // color: "#0A2342",
                  // backgroundColor: "white",
                  // width: "100vw",
                  padding: "1vw",
                  // margin: "10px",
                }}
                >
                  General
                </DropdownToggle>
                <DropdownMenu style={{ maxHeight: "60vh", overflowY: "auto" }}>
                  {generalServices.map((item, idx) => (
                    <DropdownItem
                      key={idx}
                      href={item.link}
                      style={{
                        fontFamily: "times new roman",
                        fontSize: "1.5vw",
                        padding: "1vw",
                      }}
                    >
                      {item.name}
                    </DropdownItem>
                  ))}
                  {/* PREVIOUS LINKS:
                  <DropdownItem href="/cleaningexams" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Cleanings and Exams</DropdownItem>
                  <DropdownItem href="/crowns" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Crowns</DropdownItem>
                  <DropdownItem href="/extractions" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Tooth Extractions</DropdownItem>
                  <DropdownItem href="/deepscaling" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Deep Scaling</DropdownItem>
                  <DropdownItem href="/bondingfillings" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Bonding and White Fillings</DropdownItem>
                  <DropdownItem href="/dentures" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Dentures</DropdownItem>
                  <DropdownItem href="/nightguards" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Night Guards</DropdownItem>
                  */}
                </DropdownMenu>
              </Dropdown>
              <DropdownItem divider />
              <Dropdown
                direction="left"
                onMouseOver={this.onMouseEnterC}
                onMouseLeave={this.onMouseLeaveC}
                isOpen={this.state.isOpenC}
              >
                <DropdownToggle nav style={{
                  fontFamily: "times new roman",
                  fontSize: "1.5vw",
                  // color: "#0A2342",
                  // backgroundColor: "white",
                  // width: "100vw",
                  padding: "1vw",
                  // margin: "10px",
                }}>
                  Cosmetic
                </DropdownToggle>
                <DropdownMenu style={{ maxHeight: "60vh", overflowY: "auto" }}>
                  {cosmeticServices.map((item, idx) => (
                    <DropdownItem
                      key={idx}
                      href={item.link}
                      style={{
                        fontFamily: "times new roman",
                        fontSize: "1.5vw",
                        padding: "1vw",
                      }}
                    >
                      {item.name}
                    </DropdownItem>
                  ))}
                  {/* PREVIOUS LINKS:
                  <DropdownItem href="/invisalign" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>InvisAlign</DropdownItem>
                  <DropdownItem href="/teethwhitening" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Teeth Whitening</DropdownItem>
                  <DropdownItem href="/bondingfillings" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Bonding</DropdownItem>
                  <DropdownItem href="/veneers" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Veneers</DropdownItem>
                  <DropdownItem href="/smilemakeover" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Smile Makeover</DropdownItem>
                  <DropdownItem href="/gummysmilereduction" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Gummy Smile Reduction</DropdownItem>
                  <DropdownItem href="/fullmouthrehab" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Full Mouth Rehabilitation</DropdownItem>
                  */}
                </DropdownMenu>
              </Dropdown>
              <DropdownItem divider />
              <Dropdown
                direction="left"
                onMouseOver={this.onMouseEnterS}
                onMouseLeave={this.onMouseLeaveS}
                isOpen={this.state.isOpenS}
              >
                <DropdownToggle nav style={{
                  fontFamily: "times new roman",
                  fontSize: "1.5vw",
                  // color: "#0A2342",
                  // backgroundColor: "white",
                  // width: "100vw",
                  padding: "1vw",
                  // margin: "10px",
                }}>
                  Surgical
                </DropdownToggle>
                <DropdownMenu style={{ maxHeight: "60vh", overflowY: "auto" }}>
                  {surgicalServices.map((item, idx) => (
                    <DropdownItem
                      key={idx}
                      href={item.link}
                      style={{
                        fontFamily: "times new roman",
                        fontSize: "1.5vw",
                        padding: "1vw",
                      }}
                    >
                      {item.name}
                    </DropdownItem>
                  ))}
                  {/* PREVIOUS LINKS:
                  <DropdownItem href="/implants" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Implants</DropdownItem>
                  <DropdownItem href="/extractions" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Extractions</DropdownItem>
                  <DropdownItem href="/rootcanal" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Root Canal</DropdownItem>
                  <DropdownItem href="/bonegraft" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Bone Graft</DropdownItem>
                  <DropdownItem href="/implantsupporteddentures" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Implant-supported Dentures</DropdownItem>
                  <DropdownItem href="/bridges" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Bridges</DropdownItem>
                  <DropdownItem href="/overdentures" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Over Dentures</DropdownItem>
                  <DropdownItem href="/samedayimplants" style={{ fontFamily: "times new roman", fontSize: "1.5vw", padding: "1vw" }}>Same day Implants</DropdownItem>
                  */}
                </DropdownMenu>
              </Dropdown>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            {console.log("doctor login", this.state.isOpenDoctorLogin)}
            <NavLink
              on
              onMouseEnter={this.onMouseEnterDoctorLogin}
              onMouseLeave={this.onMouseLeaveDoctorLogin}
              href="/doctorlogin"
              
              style={{
                // color: "#0A2342",
                fontFamily: "times new roman",
                fontSize: "1.125vw",
                padding:"1vw",
                paddingTop:"1.5vw",
                margin: "0.5vw",
                // width:"11vw",
                // 
              }}

             
            >
              Doctor Login
            </NavLink>
          </NavItem>
          <Button
            style={{
              fontFamily: "times new roman",
              fontSize: "1.125vw",
              color: "#FFFFFF",
              backgroundColor: "#173A5E",
              borderColor: "#173A5E",
              width: "15vw",
              padding: "0.5vw",
            }}
          >
            <a
              href="https://wa.me/919833630985?text=Hello%20Dr%20Sandhya,%20I%27m%20interested%20in%20booking%20an%20appointment%20at%20your%20clinic%0D%0AMy%20name%20is%20:%0D%0AMy%20chief%20complaint%20is:"
              style={{ color: "#FFFFFF", textDecoration: "none" }}
            >
              Book an appointment
            </a>
          </Button>
        </Nav>
        
      </Navbar>
    );
  }
}

export default NavbarUtil;