import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const Whitening = () => {
  return (
    <TreatmentLayout
      title="Teeth Whitening"
      cursiveAccent="Reveal a brighter, more confident you"
      intro="Professional teeth whitening is a fast, safe and highly effective way to lighten the color of your teeth. We offer advanced whitening treatments that penetrate deep into the enamel to remove years of stubborn stains and discoloration."
      offerings={[
        { title: "Immediate Results", desc: "Our in-office whitening treatments can make your teeth several shades whiter in just a single visit." },
        { title: "Safe & Professional", desc: "Supervised by dental professionals to ensure your gums and enamel are protected throughout the process." },
        { title: "Customized At-Home Kits", desc: "We also offer custom-fitted trays and professional-grade gel for convenient whitening at home." }
      ]}
      whenToConsider={[
        "You have an upcoming special event (wedding, graduation, interview).",
        "Your teeth are stained from coffee, tea, wine or tobacco use.",
        "You feel self-conscious about a dull or yellowing smile.",
        "You are about to receive dental restorations and want to match them to a brighter shade."
      ]}
      faqs={[
        { q: "Does teeth whitening cause sensitivity?", a: "Some patients experience temporary tooth sensitivity. We use advanced formulas designed to minimize discomfort and any sensitivity typically subsides within a few days." },
        { q: "How long do the results last?", a: "Results can last from several months to a few years. It largely depends on your lifestyle, such as your consumption of staining foods and beverages and your oral hygiene routine." },
        { q: "Is professional whitening better than over-the-counter strips?", a: "Yes. Professional treatments use stronger, more effective bleaching agents and custom-fitted trays to ensure even whitening and to protect your delicate gum tissue." }
      ]}
    />
  );
};

export default Whitening;
