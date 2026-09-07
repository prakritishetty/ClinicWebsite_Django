import React from "react";
import TreatmentLayout from "./TreatmentLayout";

/* Per request: no "materials choice" section and no crown animation graphic. */
const Crowns = () => {
  return (
    <TreatmentLayout
      title="Dental Crowns"
      cursiveAccent="General · Restorative"
      intro="A cap that goes over a damaged tooth to give back its shape, strength and appearance. Milled to fit and colour-matched, so it disappears next to your own teeth."
      photoNote="src/images/IMG_6432.JPG"
      offerings={[
        { title: "Custom fit", desc: "Precision-milled and shade-matched to the tooth beside it." },
        { title: "Protection", desc: "Encases the whole tooth so a weak one stops breaking down." },
        { title: "Versatile", desc: "Tops an implant, anchors a bridge, or finishes a root canal." }
      ]}
      whenToConsider={[
        "A tooth is badly decayed or cracked.",
        "You have just had a root canal.",
        "A large old filling has left little tooth behind.",
        "A tooth is misshapen or deeply discoloured."
      ]}
      faqs={[
        { q: "How many visits does it take?", a: "Usually two - one to prepare and scan, one to fit. Same-day crowns are available for suitable cases." },
        { q: "Will it hurt?", a: "The area is fully numbed, so no. Mild sensitivity for a few days afterwards is normal." },
        { q: "How long does a crown last?", a: "Ten to fifteen years with good hygiene and regular checkups, and frequently much longer." }
      ]}
    />
  );
};

export default Crowns;
