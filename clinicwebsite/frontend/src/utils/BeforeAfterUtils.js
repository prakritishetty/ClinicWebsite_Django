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
      <Card
        style={{
          fontFamily: "Playfair Display",
          fontSize: "35px",
          color: "Black",
          padding: "30px",
          margin: "5px",
          backgroundColor: "rgba(255, 255, 255)",
          height: "500px",
        }}
      >
        Case Histories - Before/After:
        <CardGroup style={{ padding: "20px", height: "100px" }}>
          <Card style={{ padding: "20px", height: "300px" }}>
            <ReactCompareImage leftImage={veneerpre} rightImage={veneerpost} />
            <CardBody>
              <CardSubtitle className="mb-2 text-muted" tag="h3">
                Veneers
              </CardSubtitle>
            </CardBody>
          </Card>
          <Card style={{ padding: "20px", height: "300px" }}>
            <ReactCompareImage leftImage={cleftpalatepre} rightImage={cleftpalatepost} />
            <CardBody>
              <CardSubtitle className="mb-2 text-muted" tag="h3">
                Cleft Palate Missing Tooth Treatment
              </CardSubtitle>
            </CardBody>
          </Card>
          <Card style={{ padding: "20px", height: "300px" }}>
            <ReactCompareImage leftImage={compositepre} rightImage={compositepost} />
            <CardBody>
              <CardSubtitle className="mb-2 text-muted" tag="h3">
                Composite Restoration
              </CardSubtitle>
            </CardBody>
          </Card>
        </CardGroup>
      </Card>
    );
  }
}

export default BeforeAfterUtil;
