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
        style={{
          color: "white",
          fontFamily: "Playfair Display",
          fontSize: "30px",
          position: "fixed",
          width: "100%",
          zIndex: "1",
          paddingLeft: "0px",
          marginLeft: "0px",
          backgroundColor: "rgba(0, 28, 40, 0.38)",
        }}
      >
        <NavbarBrand
          href="/"
          style={{
            color: "white",
            fontFamily: "Playfair Display",
            fontSize: "30px",
            paddingLeft: "0px",
            marginLeft: "0px",
          }}
        >
          Dr Sandhya's Total Dental Care
        </NavbarBrand>
        {/* <NavbarToggler onClick={this.toggle} /> */}

        <Nav className="ms-auto">
          <NavItem style={{ width: "200px" }}></NavItem>
          <NavItem>
            <NavLink
              onClick=""
              href="/about"
              style={{
                color: "white",
                fontFamily: "Playfair Display",
                fontSize: "20px",
                backgroundColor: "rgba(0, 28, 40, 0.38)",
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
                color: "white",
                fontFamily: "Playfair Display",
                fontSize: "20px",
                backgroundColor: "rgba(0, 28, 40, 0.38)",
                padding: "10px",
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
                <DropdownToggle nav style={{ fontSize: "20px" }}>
                  General
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    href="/cleaningexams"
                    style={{ fontSize: "20px" }}
                  >
                    Cleanings and Exams
                  </DropdownItem>

                  <DropdownItem href="/crowns" style={{ fontSize: "20px" }}>
                    Crowns
                  </DropdownItem>
                  <DropdownItem
                    href="/extractions"
                    style={{ fontSize: "20px" }}
                  >
                    Tooth Extractions
                  </DropdownItem>
                  <DropdownItem href="/gumtherapy" style={{ fontSize: "20px" }}>
                    Gum Therapy
                  </DropdownItem>
                  <DropdownItem
                    href="/bondingfillings"
                    style={{ fontSize: "20px" }}
                  >
                    Bonding and White Fillings
                  </DropdownItem>
                  <DropdownItem href="/dentures" style={{ fontSize: "20px" }}>
                    Dentures
                  </DropdownItem>
                  <DropdownItem
                    href="/nightguards"
                    style={{ fontSize: "20px" }}
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
                <DropdownToggle nav style={{ fontSize: "20px" }}>
                  Cosmetic
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/invisalign" style={{ fontSize: "20px" }}>
                    InvisAlign
                  </DropdownItem>

                  <DropdownItem
                    href="/teethwhitening"
                    style={{ fontSize: "20px" }}
                  >
                    Teeth Whitening
                  </DropdownItem>
                  <DropdownItem
                    href="/bondingfillings"
                    style={{ fontSize: "20px" }}
                  >
                    Bonding
                  </DropdownItem>
                  <DropdownItem href="/veneers" style={{ fontSize: "20px" }}>
                    Veneers
                  </DropdownItem>
                  <DropdownItem
                    href="/smilemakeover"
                    style={{ fontSize: "20px" }}
                  >
                    Smile Makeover
                  </DropdownItem>
                  <DropdownItem
                    href="/gummysmilereduction"
                    style={{ fontSize: "20px" }}
                  >
                    Gummy Smile Reduction
                  </DropdownItem>
                  <DropdownItem
                    href="/fullmouthrehab"
                    style={{ fontSize: "20px" }}
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
                <DropdownToggle nav style={{ fontSize: "20px" }}>
                  Surgical
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/implants" style={{ fontSize: "20px" }}>
                    Implants
                  </DropdownItem>
                  <DropdownItem
                    href="/extractions"
                    style={{ fontSize: "20px" }}
                  >
                    Extractions
                  </DropdownItem>
                  <DropdownItem href="/rootcanal" style={{ fontSize: "20px" }}>
                    Root Canal
                  </DropdownItem>
                  <DropdownItem href="/bonegraft" style={{ fontSize: "20px" }}>
                    Bone Graft
                  </DropdownItem>
                  <DropdownItem
                    href="/implantsupporteddentures"
                    style={{ fontSize: "20px" }}
                  >
                    Implant-supported Dentures
                  </DropdownItem>
                  <DropdownItem href="/bridges" style={{ fontSize: "20px" }}>
                    Bridges
                  </DropdownItem>
                  <DropdownItem
                    href="/overdentures"
                    style={{ fontSize: "20px" }}
                  >
                    Over Dentures
                  </DropdownItem>
                  <DropdownItem
                    href="/samedayimplants"
                    style={{ fontSize: "20px" }}
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
              style={{
                color: "white",
                fontFamily: "Playfair Display",
                fontSize: "20px",
                marginRight: "5px",
                backgroundColor: this.state.isOpenDoctorLogin
                  ? "lightslategrey"
                  : "rgba(0, 28, 40, 0.38)",
              }}
            >
              Doctor Login
            </NavLink>
          </NavItem>
          <Button
            active
            color="light"
            style={{ fontFamily: "Playfair Display", fontSize: "20px" }}
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







/*



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
  Collapse
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
            // isOpenUtil: false,
          };
          this.onHover = this.onHover.bind(this);
          this.onHoverOver = this.onHoverOver.bind(this);
          this.onHover1 = this.onHover1.bind(this);
          this.onHoverOver1 = this.onHoverOver1.bind(this);
          this.onHover2 = this.onHover2.bind(this);
          this.onHoverOver2 = this.onHoverOver2.bind(this);
        }
        // onMouseEnter = (dropdown) => {
        //   this.setState({ [dropdown]: true });
        // }
      
        // onMouseLeave = (dropdown) => {
        //   this.setState({ [dropdown]: false });
        // }
      
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

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  // onMouseEnter = (dropdown) => {
  //   this.setState({ [dropdown]: true });
  // }

  // onMouseLeave = (dropdown) => {
  //   this.setState({ [dropdown]: false });
  // }

  render() {
    return (
      <Navbar
        expand="md"
        style={{
          backgroundColor: "rgba(0, 28, 40, 0.38)",
          position: "fixed",
          width: "100%",
          zIndex: "1000",
        }}
      >
        <NavbarBrand href="/" className="text-white" 
        style={{
          fontFamily: "Playfair Display",
          fontSize: "3vw",
          color: "white",
          // backgroundColor: "rgba(0,0,0,0.5)",
          width: "100vw",
          padding: "10px",
          margin: "10px",
        }}
        >
          Dr Sandhya's Total Dental Care
        </NavbarBrand>
         <NavbarToggler onClick={this.toggle} /> 
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/about" className="text-white"
              style={{
                fontFamily: "Playfair Display",
                fontSize: "1.75vw",
                color: "white",
                // backgroundColor: "rgba(0,0,0,0.5)",
                // width: "100vw",
                padding: "10px",
                margin: "10px",
              }}
              >About</NavLink>
            </NavItem>
            <Dropdown
              nav
              // inNavbar
              isOpen={this.state.isOpen}
              // onMouseOver={() => this.onMouseEnter('isOpen')}
              // onMouseLeave={() => this.onMouseLeave('isOpen')}
              onMouseOver={this.onMouseEnter}
             onMouseLeave={this.onMouseLeave}
              // toggle={() => this.onMouseEnter('isOpen')}
            >
              <DropdownToggle nav caret className="text-white"
              style={{
                fontFamily: "Playfair Display",
                fontSize: "1.75vw",
                color: "white",
                // backgroundColor: "rgba(0,0,0,0.5)",
                // width: "100vw",
                padding: "10px",
                margin: "10px",
              }}
              >
                Services
              </DropdownToggle>
              <DropdownMenu>
                <Dropdown
                  direction="right"
                  isOpen={this.state.isOpenG}
                  onMouseOver={this.onMouseEnterG}
                  onMouseLeave={this.onMouseLeaveG}
                >
                  <DropdownToggle nav>General</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/cleaningexams">Cleanings and Exams</DropdownItem>
                    <DropdownItem href="/crowns">Crowns</DropdownItem>
                    
                  </DropdownMenu>
                </Dropdown>
                <DropdownItem divider />
                <Dropdown
                  direction="right"
                  isOpen={this.state.isOpenC}
                  onMouseOver={this.onMouseEnterC}
                  onMouseLeave={this.onMouseLeaveC}
                >
                  <DropdownToggle nav>Cosmetic</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/invisalign">InvisAlign</DropdownItem>
                    <DropdownItem href="/teethwhitening">Teeth Whitening</DropdownItem>
                    
                  </DropdownMenu>
                </Dropdown>
                <DropdownItem divider />
                <Dropdown
                  direction="right"
                  isOpen={this.state.isOpenS}
                  onMouseOver={this.onMouseEnterS}
                  onMouseLeave={this.onMouseLeaveS}
                >
                  <DropdownToggle nav>Surgical</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/implants">Implants</DropdownItem>
                    <DropdownItem href="/extractions">Extractions</DropdownItem>
                    
                  </DropdownMenu>
                </Dropdown>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink href="/doctorlogin" className="text-white"
              style={{
                fontFamily: "Playfair Display",
                fontSize: "1.75vw",
                color: "white",
                // backgroundColor: "rgba(0,0,0,0.5)",
                width: "11vw",
                padding: "10px",
                margin: "10px",
              }}
              
              >Doctor Login</NavLink>
            </NavItem>
            <NavItem>
              <Button color="light" className="mt-2 mt-md-0 ml-md-2"
              style={{
                fontFamily: "Playfair Display",
                fontSize: "1.75vw",
                color: "white",
                // backgroundColor: "rgba(0,0,0,0.5)",
                width: "20vw",
                padding: "10px",
                margin: "10px",
              }}
              >
                <a href="https://wa.me/919833630985?text=Hello%20Dr%20Sandhya,%20I%27m%20interested%20in%20booking%20an%20appointment%20at%20your%20clinic%0D%0AMy%20name%20is%20:%0D%0AMy%20chief%20complaint%20is:" className="text-dark text-decoration-none">
                  Book an appointment
                </a>
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarUtil;

*/