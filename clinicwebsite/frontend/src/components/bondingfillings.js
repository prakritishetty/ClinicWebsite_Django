import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const BondingFillings = () => {
  return (
    <TreatmentLayout
      title="Bonding & Fillings"
      cursiveAccent="Seamless, invisible repairs"
      intro="Dental bonding and composite fillings are minimally invasive treatments used to repair decayed, chipped, or fractured teeth. We use high-quality, tooth-colored composite resin that flawlessly matches your natural enamel, ensuring your repair is virtually invisible."
      offerings={[
        { title: "Invisible Finish", desc: "Our tooth-colored fillings blend seamlessly with your natural teeth, eliminating the need for unsightly silver amalgam." },
        { title: "Minimally Invasive", desc: "Bonding requires very little removal of the natural tooth structure compared to other restorations." },
        { title: "Quick & Effective", desc: "Most bonding and filling procedures can be completed in a single, comfortable visit." }
      ]}
      whenToConsider={[
        "You have a cavity that needs to be filled.",
        "You have a chipped or cracked tooth.",
        "You want to replace old, dark silver fillings with tooth-colored ones.",
        "You have a small gap between your teeth that you want closed."
      ]}
      faqs={[
        { q: "Is the procedure painful?", a: "No, we use local anesthesia to ensure you are completely comfortable while we remove decay and place the filling." },
        { q: "How long do composite fillings last?", a: "With good oral hygiene, composite fillings typically last 5 to 7 years, and often much longer." },
        { q: "Can bonding stain?", a: "While composite resin resists stains better than natural enamel, it can discolor over time if exposed to heavy coffee, tea, or tobacco use. Regular cleanings help maintain its color." }
      ]}
    />
  );
};

export default BondingFillings;
