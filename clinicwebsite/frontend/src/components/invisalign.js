import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const Invisalign = () => {
  return (
    <TreatmentLayout
      title="Teeth Aligners"
      cursiveAccent="A perfectly straight smile"
      intro="Teeth aligners are a modern, discreet orthodontic treatment used to straighten teeth and improve your bite. Unlike traditional metal braces, clear aligners are virtually invisible, removable, and designed for maximum comfort."
      offerings={[
        { title: "Invisible & Discreet", desc: "Crafted from transparent, medical-grade plastic, these aligners go virtually unnoticed." },
        { title: "Removable Convenience", desc: "Easily take them out to eat your favorite foods and to brush and floss normally." },
        { title: "Comfortable Fit", desc: "Custom-made using 3D scanning to ensure a snug fit without the irritation of metal brackets." },
      ]}
      whenToConsider={[
        "You have crowded or overlapping teeth.",
        "There are noticeable gaps between your teeth.",
        "You suffer from overbite, underbite, or crossbite issues.",
        "You want a straighter smile without the aesthetic impact of metal braces."
      ]}
      faqs={[
        { q: "How long does treatment usually take?", a: "Treatment times vary depending on the complexity of your case, but most patients see their final results in 12 to 18 months." },
        { q: "How many hours a day must I wear them?", a: "For optimal results, you should wear your aligners for 20 to 22 hours per day, removing them only to eat, drink, brush, and floss." },
        { q: "Are clear aligners painful?", a: "You may experience mild discomfort or pressure for a few days when switching to a new set of aligners, which is a normal sign that your teeth are moving." }
      ]}
    />
  );
};

export default Invisalign;
