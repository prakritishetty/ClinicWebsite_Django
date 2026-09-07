import React from "react";
import TreatmentLayout from "./TreatmentLayout";
import { IMPLANT_PHOTOS } from "../data/photos.js";

const Implants = () => {
  return (
    <TreatmentLayout
      title="Dental Implants"
      cursiveAccent="A permanent, natural-looking solution"
      photos={IMPLANT_PHOTOS}
      intro="Dental implants are the gold standard for replacing missing teeth. They provide a strong, permanent foundation for fixed or removable replacement teeth that are made to match your natural teeth perfectly."
      offerings={[
        { title: "Lifelike Appearance", desc: "Designed to look, feel and function like your natural teeth." },
        { title: "Bone Preservation", desc: "Implants stimulate bone growth, preventing the bone loss that typically occurs when teeth are missing." },
        { title: "Durability", desc: "With proper care, dental implants can last a lifetime, making them a highly cost-effective solution." }
      ]}
      whenToConsider={[
        "You are missing one or more teeth.",
        "You have a bridge that needs to be replaced.",
        "Your dentures are slipping, clicking or causing discomfort.",
        "You want a permanent solution that doesn't require removing healthy tooth structure from adjacent teeth."
      ]}
      faqs={[
        { q: "What is a dental implant?", a: "A dental implant is a titanium post surgically positioned into the jawbone beneath the gum line that allows your dentist to mount replacement teeth or a bridge into that area." },
        { q: "Is the implant procedure painful?", a: "Most patients report that the procedure involves less discomfort than a tooth extraction. We use local anesthesia to ensure you are comfortable and any post-operative soreness can usually be managed with over-the-counter pain medication." },
        { q: "How long does the process take?", a: "The entire process can take anywhere from a few months to over six months. Much of this time is dedicated to healing and waiting for the growth of new bone in your jaw." }
      ]}
    />
  );
};

export default Implants;
