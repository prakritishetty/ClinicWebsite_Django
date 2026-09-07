import React from "react";
import TreatmentLayout from "./TreatmentLayout";
import { CROWN_PHOTOS } from "../data/photos.js";

/* Per request: no "materials choice" section and no crown animation graphic.
   Showing the bridge photography for now - crown imagery is still to be made. */
const Crowns = () => {
  return (
    <TreatmentLayout
      title="Dental Crowns"
      cursiveAccent="General · Restorative"
      photos={CROWN_PHOTOS}
      intro="A cap that goes over a damaged tooth to give back its shape, strength and appearance. Custom made to fit and colour-matched, so it disappears next to your own teeth."
      offerings={[
        { title: "Precision made", desc: "Custom made and shade-matched to the tooth beside it." },
        { title: "Protection", desc: "Encases the whole tooth so a weak one stops breaking down." },
        { title: "Versatile", desc: "Tops an implant, anchors a bridge or finishes a root canal." }
      ]}
      whenToConsider={[
        "A tooth is badly decayed or cracked.",
        "You have just had a root canal.",
        "A large old filling has left little tooth behind.",
        "A tooth is misshapen or deeply discoloured."
      ]}
      faqs={[
        { q: "How many visits does it take?", a: "Usually two - one to prepare and scan, one to fit." },
        { q: "Will it hurt?", a: "The procedure is usually painless. Mild sensitivity is normal in cases of vital teeth." },
        { q: "What are crowns made of?", a: "Zirconia and full ceramic crowns give the most natural appearance and suit front teeth. Metal-ceramic crowns pair a metal base with a ceramic outer layer for strength. Full metal crowns are the most durable and are usually reserved for back teeth. We will recommend the material that suits the tooth, your bite and your budget." }
      ]}
    />
  );
};

export default Crowns;
