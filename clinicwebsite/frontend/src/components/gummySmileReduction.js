import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const GummySmileReduction = () => {
  return (
    <TreatmentLayout
      title="Gummy Smile Reduction"
      cursiveAccent="Perfecting your smile's proportions"
      intro="A 'gummy smile' occurs when an excessive amount of gum tissue shows above your top teeth when you smile. Gummy smile reduction, or crown lengthening, is a cosmetic procedure that gently reshapes the gumline to reveal more of your beautiful teeth."
      offerings={[
        { title: "Balanced Proportions", desc: "Creates a more aesthetically pleasing ratio between your teeth and gums." },
        { title: "Minimally Invasive Laser", desc: "We often use advanced soft-tissue lasers to gently sculpt the gums with minimal bleeding and rapid healing." },
        { title: "Immediate Results", desc: "You will leave our clinic with an instantly larger, more proportionate and radiant smile." }
      ]}
      whenToConsider={[
        "You feel that your teeth look too short or small.",
        "You are self-conscious about how much gum shows when you smile or laugh.",
        "Your gumline is uneven or asymmetrical.",
        "You need a crown but don't have enough exposed tooth structure to support it."
      ]}
      faqs={[
        { q: "Is the procedure painful?", a: "We use local anesthesia to ensure you feel no pain during the procedure. Post-operative discomfort is usually very mild." },
        { q: "How long does it take to heal?", a: "Initial healing takes just a few days, especially if a laser is used. Full tissue maturation may take a few weeks." },
        { q: "Will the gum tissue grow back?", a: "When performed correctly, gummy smile reduction is a permanent procedure and the tissue will not grow back." }
      ]}
    />
  );
};

export default GummySmileReduction;
