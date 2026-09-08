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
        "You have teeth that are slightly worn down or chipped.",
        "You have minimally misaligned, uneven or irregularly shaped teeth.",
        "You have noticeable gaps between your front teeth."
      ]}
      faqs={[
        { q: "Are there any dietary changes required after getting veneers?", a: "Yes, you will have to avoid biting into hard foods using those teeth as they can cause the veneers to come off sometimes." },
        { q: "Are veneers reversible?", a: "Because a small amount of enamel must be removed to accommodate the veneer, the process is not considered reversible." },
        { q: "Will veneers look fake?", a: "Not at all. We meticulously custom-design your veneers to match the translucency and color of your surrounding natural teeth." }
      ]}
    />
  );
};

export default Veneers;
