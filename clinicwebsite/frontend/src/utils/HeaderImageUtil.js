import React, { Component } from "react";
import { Button } from "reactstrap";
import clinic1 from "../images/79.jpeg";

class HeaderImageUtil extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center"
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
          className="text-center"
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
          Exceptional dental care for all ages
        </div>
        <Button
          active
          className="my-2"
          style={{
            padding: "10px",
            borderColor: "white",
            backgroundColor: "black",
          }}
        >
          <div
            className="text-center"
            style={{
              fontFamily: "Playfair Display",
              fontSize: "4vw",
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
          className="text-center"
          style={{
            fontFamily: "Playfair Display",
            fontSize: "3vw",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "60vw",
            padding: "10px",
            margin: "6px",
          }}
        >
          OR Call on (+91) 9833630985
        </div>
      </div>
    );
  }
}

export default HeaderImageUtil;
