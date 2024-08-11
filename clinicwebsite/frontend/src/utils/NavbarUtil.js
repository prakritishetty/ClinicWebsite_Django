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
    return (
      <Navbar
        expand="md"
        style={{
          color: "white",
          fontFamily: "Playfair Display",
          // fontSize: "30px",
          position: "fixed",
          width: "100%",
          zIndex: "100",
          height:"15vh",
          // paddingLeft: "0px",
          // marginLeft: "0px",
          backgroundColor: "rgba(0, 28, 40, 0.38)",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <NavbarBrand
          href="/"
          className="text-white" 
        style={{
          fontFamily: "Playfair Display",
          fontSize: "3vw",
          color: "white",
          // backgroundColor: "rgba(0,0,0,0.5)",
          // width: "100vw",
          padding: "1vw",
          margin: "10px",
          width: "100%",
          // textAlign: "center",
        }}
        >
          Dr Sandhya's Total Dental Care
        </NavbarBrand>
        
        {/* <Collapse isOpen={this.state.isOpen} navbar> */}
        <Nav className="ml-auto" navbar style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
          <NavItem style={{ width: "1vw" }}></NavItem>
          <NavItem>
            <NavLink
              onClick=""
              href="/about"
              style={{
                fontFamily: "Playfair Display",
                fontSize: "1.5vw",
                color: "white",
                // backgroundColor: "rgba(0,28,40,0.38)",
                // width: "100vw",
                padding: "1vw",
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
                fontFamily: "Playfair Display",
                fontSize: "1.5vw",
                color: "white",
                // backgroundColor: "rgba(0,28,40,0.38)",
                // width: "100vw",
                padding: "0.5vw",
                margin: "0.5vw",
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
                  fontFamily: "Playfair Display",
                  fontSize: "2vw",
                  // color: "white",
                  // backgroundColor: "rgba(0,28,40,0.38)",
                  // width: "100vw",
                  padding: "1vw",
                  // margin: "10px",
                }}
                >
                  General
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    href="/cleaningexams"
                    style={{
                      fontFamily: "Playfair Display",
                      fontSize: "2vw",
                      // color: "white",
                      // backgroundColor: "rgba(0,28,40,0.38)",
                      // width: "100vw",
                      padding: "1vw",
                      // margin: "10px",
                    }}
                  >
                    Cleanings and Exams
                  </DropdownItem>

                  <DropdownItem href="/crowns" 
                  style={{
                    fontFamily: "Playfair Display",
                    fontSize: "2vw",
                    // color: "white",
                    // backgroundColor: "rgba(0,28,40,0.38)",
                    // width: "100vw",
                    padding: "1vw",
                    // margin: "10px",
                  }}
                  >
                    Crowns
                  </DropdownItem>
                  <DropdownItem
                    href="/extractions"
                    style={{
                      fontFamily: "Playfair Display",
                      fontSize: "2vw",
                      // color: "white",
                      // backgroundColor: "rgba(0,28,40,0.38)",
                      // width: "100vw",
                      padding: "1vw",
                      // margin: "10px",
                    }}
                  >
                    Tooth Extractions
                  </DropdownItem>
                  <DropdownItem href="/gumtherapy" style={{
                  fontFamily: "Playfair Display",
                  fontSize: "2vw",
                  // color: "white",
                  // backgroundColor: "rgba(0,28,40,0.38)",
                  // width: "100vw",
                  padding: "1vw",
                  // margin: "10px",
                }}>
                    Gum Therapy
                  </DropdownItem>
                  <DropdownItem
                    href="/bondingfillings"
                    style={{
                      fontFamily: "Playfair Display",
                      fontSize: "2vw",
                      // color: "white",
                      // backgroundColor: "rgba(0,28,40,0.38)",
                      // width: "100vw",
                      padding: "1vw",
                      // margin: "10px",
                    }}
                  >
                    Bonding and White Fillings
                  </DropdownItem>
                  <DropdownItem href="/dentures" 
                  style={{
                  fontFamily: "Playfair Display",
                  fontSize: "2vw",
                  // color: "white",
                  // backgroundColor: "rgba(0,28,40,0.38)",
                  // width: "100vw",
                  padding: "1vw",
                  // margin: "10px",
                }}>
                    Dentures
                  </DropdownItem>
                  <DropdownItem
                    href="/nightguards"
                    style={{
                      fontFamily: "Playfair Display",
                      fontSize: "2vw",
                      // color: "white",
                      // backgroundColor: "rgba(0,28,40,0.38)",
                      // width: "100vw",
                      padding: "1vw",
                      // margin: "10px",
                    }}
                  >
                    Night Guards
                  </DropdownItem>
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
                  fontFamily: "Playfair Display",
                  fontSize: "2vw",
                  // color: "white",
                  // backgroundColor: "rgba(0,28,40,0.38)",
                  // width: "100vw",
                  padding: "1vw",
                  // margin: "10px",
                }}>
                  Cosmetic
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/invisalign" style={{
                  fontFamily: "Playfair Display",
                  fontSize: "2vw",
                  // color: "white",
                  // backgroundColor: "rgba(0,28,40,0.38)",
                  // width: "100vw",
                  padding: "1vw",
                  // margin: "10px",
                }}>
                    InvisAlign
                  </DropdownItem>

                  <DropdownItem
                    href="/teethwhitening"
                    style={{
                      fontFamily: "Playfair Display",
                      fontSize: "2vw",
                      // color: "white",
                      // backgroundColor: "rgba(0,28,40,0.38)",
                      // width: "100vw",
                      padding: "1vw",
                      // margin: "10px",
                    }}
                  >
                    Teeth Whitening
                  </DropdownItem>
                  <DropdownItem
                    href="/bondingfillings"
                    style={{
                      fontFamily: "Playfair Display",
                      fontSize: "2vw",
                      // color: "white",
                      // backgroundColor: "rgba(0,28,40,0.38)",
                      // width: "100vw",
                      padding: "1vw",
                      // margin: "10px",
                    }}
                  >
                    Bonding
                  </DropdownItem>
                  <DropdownItem href="/veneers" style={{
                  fontFamily: "Playfair Display",
                  fontSize: "2vw",
                  // color: "white",
                  // backgroundColor: "rgba(0,28,40,0.38)",
                  // width: "100vw",
                  padding: "1vw",
                  // margin: "10px",
                }}>
                    Veneers
                  </DropdownItem>
                  <DropdownItem
                    href="/smilemakeover"
                    style={{
                      fontFamily: "Playfair Display",
                      fontSize: "2vw",
                      // color: "white",
                      // backgroundColor: "rgba(0,28,40,0.38)",
                      // width: "100vw",
                      padding: "1vw",
                      // margin: "10px",
                    }}
                  >
                    Smile Makeover
                  </DropdownItem>
                  <DropdownItem
                    href="/gummysmilereduction"
                    style={{
                      fontFamily: "Playfair Display",
                      fontSize: "2vw",
                      // color: "white",
                      // backgroundColor: "rgba(0,28,40,0.38)",
                      // width: "100vw",
                      padding: "1vw",
                      // margin: "10px",
                    }}
                  >
                    Gummy Smile Reduction
                  </DropdownItem>
                  <DropdownItem
                    href="/fullmouthrehab"
                    style={{
                      fontFamily: "Playfair Display",
                      fontSize: "2vw",
                      // color: "white",
                      // backgroundColor: "rgba(0,28,40,0.38)",
                      // width: "100vw",
                      padding: "1vw",
                      // margin: "10px",
                    }}
                  >
                    Full Mouth Rehabilitation
                  </DropdownItem>
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
                  fontFamily: "Playfair Display",
                  fontSize: "2vw",
                  // color: "white",
                  // backgroundColor: "rgba(0,28,40,0.38)",
                  // width: "100vw",
                  padding: "1vw",
                  // margin: "10px",
                }}>
                  Surgical
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/implants" style={{
                  fontFamily: "Playfair Display",
                  fontSize: "2vw",
                  // color: "white",
                  // backgroundColor: "rgba(0,28,40,0.38)",
                  // width: "100vw",
                  padding: "1vw",
                  // margin: "10px",
                }}>
                    Implants
                  </DropdownItem>
                  <DropdownItem
                    href="/extractions"
                    style={{
                      fontFamily: "Playfair Display",
                      fontSize: "2vw",
                      // color: "white",
                      // backgroundColor: "rgba(0,28,40,0.38)",
                      // width: "100vw",
                      padding: "1vw",
                      // margin: "10px",
                    }}
                  >
                    Extractions
                  </DropdownItem>
                  <DropdownItem href="/rootcanal" style={{
                  fontFamily: "Playfair Display",
                  fontSize: "2vw",
                  // color: "white",
                  // backgroundColor: "rgba(0,28,40,0.38)",
                  // width: "100vw",
                  padding: "1vw",
                  // margin: "10px",
                }}>
                    Root Canal
                  </DropdownItem>
                  <DropdownItem href="/bonegraft" style={{
                  fontFamily: "Playfair Display",
                  fontSize: "2vw",
                  // color: "white",
                  // backgroundColor: "rgba(0,28,40,0.38)",
                  // width: "100vw",
                  padding: "1vw",
                  // margin: "10px",
                }}>
                    Bone Graft
                  </DropdownItem>
                  <DropdownItem
                    href="/implantsupporteddentures"
                    style={{
                      fontFamily: "Playfair Display",
                      fontSize: "2vw",
                      // color: "white",
                      // backgroundColor: "rgba(0,28,40,0.38)",
                      // width: "100vw",
                      padding: "1vw",
                      // margin: "10px",
                    }}
                  >
                    Implant-supported Dentures
                  </DropdownItem>
                  <DropdownItem href="/bridges" style={{
                  fontFamily: "Playfair Display",
                  fontSize: "2vw",
                  // color: "white",
                  // backgroundColor: "rgba(0,28,40,0.38)",
                  // width: "100vw",
                  padding: "1vw",
                  // margin: "10px",
                }}>
                    Bridges
                  </DropdownItem>
                  <DropdownItem
                    href="/overdentures"
                    style={{
                      fontFamily: "Playfair Display",
                      fontSize: "2vw",
                      // color: "white",
                      // backgroundColor: "rgba(0,28,40,0.38)",
                      // width: "100vw",
                      padding: "1vw",
                      // margin: "10px",
                    }}
                  >
                    Over Dentures
                  </DropdownItem>
                  <DropdownItem
                    href="/samedayimplants"
                    style={{
                      fontFamily: "Playfair Display",
                      fontSize: "2vw",
                      // color: "white",
                      // backgroundColor: "rgba(0,28,40,0.38)",
                      // width: "100vw",
                      padding: "1vw",
                      // margin: "10px",
                    }}
                  >
                    Same day Implants
                  </DropdownItem>
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
              className="text-white"
              style={{
                // color: "white",
                fontFamily: "Playfair Display",
                fontSize: "1.5vw",
                padding:"1vw",
                margin: "0.5vw",
                width:"11vw",
                // backgroundColor: this.state.isOpenDoctorLogin
                //   ? "lightslategrey"
                //   : "rgba(0, 28, 40, 0.38)",
              }}

             
            >
              Doctor Login
            </NavLink>
          </NavItem>
          <Button
            active
            color="light"
            style={{
              fontFamily: "Playfair Display",
              fontSize: "1.5vw",
              color: "white",
              // backgroundColor: "rgba(0,0,0,0.5)",
              width: "15vw",
              padding: "0.5vw",
              // margin: "0.5vw",
            }}
          >
            <a
              href="https://wa.me/919833630985?text=Hello%20Dr%20Sandhya,%20I%27m%20interested%20in%20booking%20an%20appointment%20at%20your%20clinic%0D%0AMy%20name%20is%20:%0D%0AMy%20chief%20complaint%20is:"
              style={{ color: "black", textDecorationColor: "black" }}
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