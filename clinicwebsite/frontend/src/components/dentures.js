import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const Dentures = () => {
  return (
    <TreatmentLayout
      title="Dentures"
      cursiveAccent="Reclaim your confident smile"
      intro="Dentures are custom-crafted, removable replacements for missing teeth and surrounding tissues. Whether you need full dentures to replace all your teeth or partial dentures to fill in gaps, we design them to fit comfortably and look incredibly natural."
      offerings={[
        { title: "Customized Fit", desc: "Our dentures are meticulously molded to the exact contours of your gums for a secure, comfortable fit." },
        { title: "Natural Aesthetics", desc: "We use high-quality acrylics to ensure the artificial teeth and gum base look incredibly lifelike." },
        { title: "Improved Function", desc: "Regain the ability to chew your favorite foods and speak clearly without hesitation." }
      ]}
      whenToConsider={[
        "You have lost all or most of your natural teeth along the upper or lower jaw.",
        "You have several missing teeth but are not a candidate for implants or bridges.",
        "Your current dentures are loose, worn out or causing sore spots.",
        "You want an affordable, non-surgical option for tooth replacement."
      ]}
      faqs={[
        { q: "Are dentures difficult to get used to?", a: "New dentures may feel a little odd or loose for a few weeks until the muscles of your cheeks and tongue learn to keep them in place. This is a normal adjustment period." },
        { q: "Can I sleep in my dentures?", a: "While you can, it is highly recommended that you remove them at night. This allows your gums to rest and gives you time to properly clean and soak the dentures." },
        { q: "Will dentures change how I speak or eat?", a: "Initially, you may need to practice speaking and eating with them. Start with soft foods cut into small pieces. With a little practice, your speech and chewing will return to normal." }
      ]}
    />
  );
};

export default Dentures;
