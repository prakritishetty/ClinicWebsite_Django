import React from "react";
import NavbarUtil from "../utils/NavbarUtil.js";
import FooterUtil from "../utils/FooterUtil.js";
import Reveal from "./Reveal.js";
import ToothMark from "./ToothMark.js";
import { BOOKING_URL } from "../data/services.js";

const DoctorLogin = () => (
  <div style={{ background: "var(--paper)" }}>
    <NavbarUtil />

    <section
      className="section"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "min(70vh, 720px)",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div className="aurora">
        <span className="aurora__blob aurora__blob--a" />
        <span className="aurora__blob aurora__blob--b" />
      </div>

      <div
        className="shell"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1.2rem",
        }}
      >
        <ToothMark size="clamp(54px, 7vw, 92px)" />
        <Reveal>
          <p className="eyebrow eyebrow--center">Staff area</p>
        </Reveal>
        <Reveal i={1}>
          <h1 className="display display--hero" style={{ margin: 0 }}>
            Under construction
          </h1>
        </Reveal>
        <Reveal i={2}>
          <p className="lede" style={{ maxWidth: "40ch" }}>
            You found us mid-build. This is where the clinical dashboard will live.
          </p>
        </Reveal>
        <Reveal i={3}>
          <a className="btn-lux" href={BOOKING_URL}>
            Book an appointment instead
          </a>
        </Reveal>
      </div>
    </section>

    <FooterUtil />
  </div>
);

export default DoctorLogin;
