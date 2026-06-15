import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const Crowns = () => {
  return (
    <TreatmentLayout
      title="Dental Crowns"
      cursiveAccent="Restore strength and beauty"
      intro="A dental crown is a custom-made cap placed over a damaged or decayed tooth to restore its shape, size, strength, and appearance. Using high-quality porcelain or ceramic, our crowns are designed to blend seamlessly with your natural teeth."
      offerings={[
        { title: "Custom Craftsmanship", desc: "Each crown is precision-milled and color-matched to ensure it looks indistinguishable from your natural teeth." },
        { title: "Structural Protection", desc: "Crowns encase the entire visible portion of the tooth, protecting weak teeth from breaking." },
        { title: "Versatile Restoration", desc: "Can be used to cover dental implants, hold dental bridges in place, or restore a tooth after a root canal." }
      ]}
      whenToConsider={[
        "You have a tooth that is severely decayed or damaged.",
        "You recently had a root canal and need to protect the remaining tooth structure.",
        "You have a large filling with very little natural tooth remaining.",
        "You want to cover a misshapen or severely discolored tooth."
      ]}
      faqs={[
        { q: "How long does it take to get a crown?", a: "Traditionally, it takes two visits. The first for preparation and impressions, and the second for placement. However, we also offer Same-Day Crowns using advanced CAD/CAM technology." },
        { q: "Is it painful to have a crown placed?", a: "Your dentist will use local anesthesia to numb the area, making the procedure virtually painless. You may experience some mild sensitivity for a few days after placement." },
        { q: "How long will my dental crown last?", a: "With excellent oral hygiene and regular dental checkups, a high-quality crown can last between 10 and 15 years, and often much longer." }
      ]}
    />
  );
};

export default Crowns;
