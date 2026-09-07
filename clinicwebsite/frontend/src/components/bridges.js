import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const Bridges = () => {
  return (
    <TreatmentLayout
      title="Dental Bridges"
      cursiveAccent="Bridge the gap in your smile"
      intro="A dental bridge bridges the gap created by one or more missing teeth. It is made up of two or more crowns for the teeth on either side of the gap, with a false tooth in between. This fixed restoration restores your bite and prevents remaining teeth from shifting."
      offerings={[
        { title: "Restored Functionality", desc: "A bridge allows you to chew and speak properly by filling in the empty space left by missing teeth." },
        { title: "Alignment Protection", desc: "It prevents your remaining natural teeth from drifting out of position, which can cause bite issues." },
        { title: "Seamless Blending", desc: "Using high-grade porcelain, the bridge is color-matched to perfectly blend with your existing smile." }
      ]}
      whenToConsider={[
        "You are missing one or several consecutive teeth.",
        "You want a fixed (non-removable) replacement without undergoing implant surgery.",
        "You have healthy, strong teeth on either side of the missing gap.",
        "You notice your remaining teeth are starting to shift towards the empty space."
      ]}
      faqs={[
        { q: "How long does a dental bridge last?", a: "Dental bridges can last 5 to 15 years and even longer. With good oral hygiene and regular checkups, it is not unusual for a fixed bridge to last over 10 years." },
        { q: "Is it hard to eat with a dental bridge?", a: "Replacing missing teeth with a dental bridge should actually make eating easier. Until you become accustomed to the bridge, eat soft foods cut into small pieces." },
        { q: "How do I care for my bridge?", a: "You need to keep your remaining teeth healthy and strong. Brush twice a day, floss daily (using a special floss threader to clean under the bridge) and visit your dentist regularly." }
      ]}
    />
  );
};

export default Bridges;
