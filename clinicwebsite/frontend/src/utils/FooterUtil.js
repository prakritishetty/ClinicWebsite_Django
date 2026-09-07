import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import Reveal from "../components/Reveal.js";
import ToothMark from "../components/ToothMark.js";
import { BOOKING_URL, CATEGORIES, PHONE } from "../data/services.js";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.627340847596!2d72.94237301412522!3d19.167783054063854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f7c2d76931%3A0xa2d85150fddd96c8!2sDr%20Sandhya's%20Total%20Dental%20Care!5e0!3m2!1sen!2sin!4v1670239514055!5m2!1sen!2sin";

const FooterUtil = () => (
  <footer>
    {/* Closing invitation */}
    <section className="section section--ink on-dark" style={{ overflow: "hidden" }}>
      <div className="aurora">
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
          gap: "1.6rem",
        }}
      >
        <ToothMark size="clamp(46px, 6vw, 74px)" stroke="var(--gold)" />
        <Reveal>
          <h2 className="display display--xl" style={{ color: "#fff" }}>
            So, what are you waiting for?
          </h2>
        </Reveal>
        <Reveal i={1}>
          <p className="lede" style={{ maxWidth: "44ch" }}>
            Book an appointment. We&rsquo;ll take it from there.
          </p>
        </Reveal>
        <Reveal i={2} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a className="btn-lux btn-lux--light" href={BOOKING_URL}>
            Book an appointment
          </a>
          <a className="btn-lux btn-lux--light" href="tel:+919833630985">
            {PHONE}
          </a>
        </Reveal>
      </div>
    </section>

    {/* Visit us */}
    <section className="section section--warm">
      <div className="shell grid grid-2" style={{ alignItems: "center" }}>
        <Reveal>
          <iframe
            src={MAP_SRC}
            title="Clinic location"
            loading="lazy"
            style={{
              width: "100%",
              aspectRatio: "16 / 10",
              border: 0,
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-soft)",
              filter: "grayscale(0.35) contrast(1.05)",
            }}
          />
        </Reveal>
        <Reveal i={1}>
          <p className="eyebrow">Visit us</p>
          <h2 className="display display--lg" style={{ margin: ".5rem 0 1.4rem" }}>
            Mulund West, Mumbai
          </h2>
          <p className="prose" style={{ margin: 0 }}>
            Shop #9, Saidham Complex,
            <br />
            P.K. Road, Mulund West, Mumbai 400080
          </p>
          <hr className="rule" style={{ margin: "1.6rem 0" }} />
          <p className="prose" style={{ margin: 0 }}>
            Monday &ndash; Saturday
            <br />
            10:00 &ndash; 14:00 &nbsp;&middot;&nbsp; 18:00 &ndash; 21:00
          </p>
        </Reveal>
      </div>
    </section>

    {/* Sitemap */}
    <div className="section--ink on-dark" style={{ paddingBlock: "clamp(2.5rem, 5vw, 4.5rem)" }}>
      <div className="shell grid grid-4">
        <div>
          <p className="eyebrow eyebrow--light">Practice</p>
          <ul className="mega__list" style={{ marginTop: "1rem" }}>
            <li>
              <a className="mega__item" style={{ color: "rgba(255,255,255,.72)" }} href="/">
                Home
              </a>
            </li>
            <li>
              <a className="mega__item" style={{ color: "rgba(255,255,255,.72)" }} href="/about">
                The Practice
              </a>
            </li>
            <li>
              <a
                className="mega__item"
                style={{ color: "rgba(255,255,255,.72)" }}
                href="/about?tab=transformations"
              >
                Transformations
              </a>
            </li>
            <li>
              <a
                className="mega__item"
                style={{ color: "rgba(255,255,255,.72)" }}
                href="/testimonials"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {CATEGORIES.map((cat) => (
          <div key={cat.id}>
            <p className="eyebrow eyebrow--light">{cat.title}</p>
            <ul className="mega__list" style={{ marginTop: "1rem" }}>
              {cat.items.slice(0, 5).map((item) => (
                <li key={item.link + item.name}>
                  <a
                    className="mega__item"
                    style={{ color: "rgba(255,255,255,.72)" }}
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="shell" style={{ marginTop: "clamp(2rem, 4vw, 3.5rem)" }}>
        <hr className="rule" />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "1.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--fs-micro)",
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,.5)",
            }}
          >
            &copy; Dr Sandhya&rsquo;s Total Dental Care &nbsp;&middot;&nbsp; Designed by Prakriti
            Shetty
          </span>
          <span style={{ display: "flex", gap: "1.1rem", color: "rgba(255,255,255,.72)" }}>
            <a href="/" aria-label="Instagram">
              <BsInstagram size={18} />
            </a>
            <a href="/" aria-label="LinkedIn">
              <AiOutlineLinkedin size={20} />
            </a>
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterUtil;
