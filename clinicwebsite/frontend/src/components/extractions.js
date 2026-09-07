import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const Extractions = () => {
  return (
    <TreatmentLayout
      title="Tooth Extractions"
      cursiveAccent="Gentle care when you need it most"
      intro="While our primary goal is always to save your natural teeth, there are times when a tooth extraction is necessary to maintain your overall oral health. We perform extractions with the utmost care, utilizing modern anesthetics and gentle techniques to ensure your comfort."
      offerings={[
        { title: "Painless Procedure", desc: "We use effective local anesthetics to ensure a pain-free, relaxed experience." },
        { title: "Wisdom Teeth Removal", desc: "Specialized surgical extractions for impacted or problematic third molars." },
        { title: "Post-Op Care", desc: "Comprehensive aftercare instructions and follow-up to ensure a smooth, infection-free healing process." }
      ]}
      whenToConsider={[
        "You have a tooth that is severely decayed or damaged beyond repair.",
        "You have advanced periodontal (gum) disease that has loosened the tooth.",
        "Your wisdom teeth are impacted, causing pain or crowding other teeth.",
        "You require an extraction for orthodontic treatment (to create room for alignment)."
      ]}
      faqs={[
        { q: "Will the extraction be painful?", a: "No. The area will be completely numbed using local anesthesia before the procedure begins. You will feel pressure, but not pain." },
        { q: "How long is the recovery period?", a: "Initial healing typically takes 1 to 2 weeks. However, the bone and tissue will continue to heal and reshape over several months." },
        { q: "What should I eat after an extraction?", a: "Stick to soft foods like rice and dal, curd and ice cream for the first few days. Avoid using a straw, as the suction can dislodge the blood clot." }
      ]}
    />
  );
};

export default Extractions;
