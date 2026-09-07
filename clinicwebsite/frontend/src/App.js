import React from "react";
import "./App.css";

import NavbarUtil from "./utils/NavbarUtil.js";
import HeaderImageUtil from "./utils/HeaderImageUtil.js";
import CoreValuesUtil from "./utils/CoreValuesUtil.js";
import WhyChooseUsUtil from "./utils/WhyChooseUsUtil.js";
import BeforeAfterUtil from "./utils/BeforeAfterUtils.js";
import PageTestimonialsUtil from "./utils/PageTestimonialsUtil.js";
import FaqUtil from "./utils/FaqUtil.js";
import FooterUtil from "./utils/FooterUtil.js";

import Reveal from "./components/Reveal.js";
import Ribbon from "./components/Ribbon.js";
import SmileJourney from "./components/SmileJourney.js";
import { CATEGORIES } from "./data/services.js";

const RIBBON_WORDS = [
  "Implants",
  "Veneers",
  "Smile design",
  "Root canals",
  "Crowns & bridges",
  "Clear aligners",
  "Full mouth rehabilitation",
  "Gum care",
];

const FAQS = [
  {
    q: "What happens at a first visit?",
    a: "A full examination, digital imaging where it helps and a straight conversation about what you actually need. You leave with a written plan, not a sales pitch.",
  },
  {
    q: "How often should I come in?",
    a: "Twice a year for most people. If you have gum disease, implants or a history of decay, we may see you more often.",
  },
  {
    q: "Do you handle emergencies?",
    a: "Yes. Call us for pain, swelling or trauma and we will find you a slot the same day wherever possible.",
  },
];

const App = () => (
  <div>
    <NavbarUtil />
    <HeaderImageUtil />

    <Ribbon words={RIBBON_WORDS} />

    <CoreValuesUtil />

    {/* Services */}
    <section className="section section--warm" id="our-services">
      <div className="shell-wide">
        <Reveal>
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">What we do</p>
            <h2 className="display display--xl">Three ways we look after you</h2>
          </div>
        </Reveal>

        <div className="grid grid-3">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.id} i={i}>
              <article className="card-lux" style={{ height: "100%" }}>
                <span
                  className="display"
                  style={{ fontSize: "var(--fs-xl)", color: "var(--gold)", lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display display--lg" style={{ margin: ".5rem 0 .3rem" }}>
                  {cat.title}
                </h3>
                <p className="text-quiet" style={{ fontSize: "var(--fs-base)", marginBottom: "1.4rem" }}>
                  {cat.tagline}
                </p>

                <ul className="mega__list">
                  {cat.items.map((item) => (
                    <li key={item.link + item.name}>
                      <a className="mega__item" href={item.link}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: "1.8rem" }}>
                  <a className="link-underline" href={cat.link}>
                    Explore {cat.title.toLowerCase()}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* How it goes */}
    <section className="section">
      <div className="shell grid grid-2" style={{ alignItems: "start" }}>
        <Reveal>
          <p className="eyebrow">How it goes</p>
          <h2 className="display display--xl" style={{ margin: ".5rem 0 1rem" }}>
            Five steps, no surprises
          </h2>
          <p className="lede" style={{ maxWidth: "34ch" }}>
            The same sequence for a filling and for a full mouth rehabilitation.
          </p>
        </Reveal>
        <SmileJourney />
      </div>
    </section>

    {/* Alternating light/dark so two navy bands never sit against each other */}
    <BeforeAfterUtil />

    <WhyChooseUsUtil />

    <PageTestimonialsUtil />

    <FaqUtil faqs={FAQS} />

    <FooterUtil />
  </div>
);

export default App;
