import React, { Component } from "react";
import { Card, CardBody, CardGroup, CardSubtitle } from "reactstrap";
import ReactCompareImage from "react-compare-image";
import veneerpre from "../images/veneerspreop.JPG"
import veneerpost from "../images/veneerspostop.JPG"
import cleftpalatepre from "../images/cleftpalatemissingtoothpostop.jpg"
import cleftpalatepost from "../images/cleftpalatemissingtoothpreop.jpg"
import compositepre from "../images/compositrestorationpreop.JPG"
import compositepost from "../images/compositerestorationpostop.JPG"

class BeforeAfterUtil extends Component {
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
    const before =
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg?h=100px&w=20px";
    const after =
      "https://hindalkindi1992.files.wordpress.com/2013/11/portrait_eyes_23.jpg";

    return (
      <Card className="container-fluid"
        style={{
          fontFamily: "times new roman",
          color: "#FFFFFF",
          padding: "4vw",
          backgroundColor: "#173A5E",
          border: "none",
          margin: "2vw 0"
        }}
      >
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3vw", textAlign: "center", marginBottom: "3vw" }}>
          Clinical Transformations
        </h2>
        <CardGroup className="container-fluid" style={{ gap: "2vw" }}>
          <Card style={{ backgroundColor: "#0A2342", border: "none", borderRadius: "10px", padding: "1vw" }}>
            <ReactCompareImage leftImage={veneerpre} rightImage={veneerpost} />
            <CardBody style={{ padding: "2vw" }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", color: "#FFFFFF", marginBottom: "1vw" }}>
                Porcelain Veneers
              </h4>
              <p style={{ fontFamily: "times new roman", fontSize: "1.1vw", color: "#FFFFFF", margin: 0 }}>
                Custom-made, ultra-thin shells crafted from high-quality porcelain to completely cover the front surface of teeth. This transformative procedure corrects discoloration, chips, and misalignment, resulting in a flawless, natural-looking smile that lasts for years.
              </p>
            </CardBody>
          </Card>
          
          <Card style={{ backgroundColor: "#0A2342", border: "none", borderRadius: "10px", padding: "1vw" }}>
            <ReactCompareImage leftImage={cleftpalatepre} rightImage={cleftpalatepost} />
            <CardBody style={{ padding: "2vw" }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", color: "#FFFFFF", marginBottom: "1vw" }}>
                Cleft Palate Missing Tooth
              </h4>
              <p style={{ fontFamily: "times new roman", fontSize: "1.1vw", color: "#FFFFFF", margin: 0 }}>
                A highly specialized prosthetic and surgical intervention designed to restore both aesthetic harmony and functional capability for patients with congenital cleft palate. This treatment seamlessly bridges gaps, enabling confident smiles and improved speech and mastication.
              </p>
            </CardBody>
          </Card>
          
          <Card style={{ backgroundColor: "#0A2342", border: "none", borderRadius: "10px", padding: "1vw" }}>
            <ReactCompareImage leftImage={compositepre} rightImage={compositepost} />
            <CardBody style={{ padding: "2vw" }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", color: "#FFFFFF", marginBottom: "1vw" }}>
                Composite Restoration
              </h4>
              <p style={{ fontFamily: "times new roman", fontSize: "1.1vw", color: "#FFFFFF", margin: 0 }}>
                An immediate, minimally invasive cosmetic solution using tooth-colored resin material. Carefully sculpted and bonded directly to the tooth structure, it repairs decay or damage while flawlessly blending with the surrounding natural enamel for an invisible finish.
              </p>
            </CardBody>
          </Card>
        </CardGroup>
      </Card>
    );
  }
}

export default BeforeAfterUtil;
