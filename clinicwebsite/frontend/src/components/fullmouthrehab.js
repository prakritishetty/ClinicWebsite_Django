import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const FullMouthRehab = () => {
  return (
    <TreatmentLayout
      title="Full Mouth Rehabilitation"
      cursiveAccent="A complete transformation"
      intro="Full mouth rehabilitation is a highly personalized, comprehensive treatment plan designed to completely restore the health, function, and aesthetics of your smile. It combines multiple restorative and cosmetic procedures to rebuild a severely compromised mouth."
      offerings={[
        { title: "Comprehensive Care", desc: "Addresses everything from severe decay and missing teeth to bite alignment and gum disease." },
        { title: "Restored Functionality", desc: "Completely rehabilitates your bite, allowing you to eat, speak, and chew with total comfort." },
        { title: "Stunning Aesthetics", desc: "Results in a beautiful, harmonious smile that looks entirely natural and revitalizes your appearance." }
      ]}
      whenToConsider={[
        "You have multiple missing teeth.",
        "Your teeth are severely worn down from bruxism (grinding).",
        "You suffer from chronic jaw pain or severe bite misalignment.",
        "You have extensive decay or failing dental restorations throughout your mouth."
      ]}
      faqs={[
        { q: "What procedures are included?", a: "Every case is unique. It may include a combination of implants, crowns, bridges, veneers, gum therapy, and orthodontics." },
        { q: "How long does full mouth rehabilitation take?", a: "Because it involves multiple complex procedures, treatment can take several months to over a year to complete. We pace the treatments to ensure optimal healing." },
        { q: "Is it affordable?", a: "We provide a detailed treatment plan and breakdown of costs beforehand. We also offer flexible financing options to make this life-changing treatment accessible." }
      ]}
    />
  );
};

export default FullMouthRehab;
