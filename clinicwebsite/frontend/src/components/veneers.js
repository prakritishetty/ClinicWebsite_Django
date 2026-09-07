import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const Veneers = () => {
  return (
    <TreatmentLayout
      title="Porcelain Veneers"
      cursiveAccent="Design the smile of your dreams"
      intro="Porcelain veneers are ultra-thin, custom-made shells of tooth-colored materials designed to cover the front surface of teeth. They are an ideal choice for improving the appearance of your smile, correcting discoloration, chips and misalignment."
      offerings={[
        { title: "Flawless Aesthetics", desc: "Veneers dramatically transform the color, shape, size and length of your teeth for a picture-perfect smile." },
        { title: "Stain Resistance", desc: "Unlike natural enamel, porcelain veneers are highly resistant to stains from coffee, tea and red wine." },
        { title: "Minimally Invasive", desc: "Veneers require less enamel removal than crowns, preserving more of your natural tooth structure." }
      ]}
      whenToConsider={[
        "Your teeth are severely discolored and don't respond to traditional whitening.",
        "You have teeth that are worn down, chipped or broken.",
        "You have misaligned, uneven or irregularly shaped teeth.",
        "You have noticeable gaps between your front teeth."
      ]}
      faqs={[
        { q: "How long do veneers last?", a: "With proper care and good oral hygiene, high-quality porcelain veneers can last 10 to 15 years or even longer." },
        { q: "Are veneers reversible?", a: "Because a small amount of enamel must be removed to accommodate the veneer, the process is not considered reversible." },
        { q: "Will veneers look fake?", a: "Not at all. We meticulously custom-design your veneers to match the translucency and color of your surrounding natural teeth." }
      ]}
    />
  );
};

export default Veneers;
