import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const NightGuards = () => {
  return (
    <TreatmentLayout
      title="Custom Night Guards"
      cursiveAccent="Protect your smile while you sleep"
      intro="Bruxism, or teeth grinding, often occurs subconsciously while you sleep and can cause severe damage to your teeth, jaw, and restorative work. A custom-fitted night guard provides a comfortable, protective barrier that absorbs the force of grinding."
      offerings={[
        { title: "Custom Fit", desc: "Our night guards are molded exactly to your teeth, offering vastly superior comfort compared to over-the-counter boil-and-bite guards." },
        { title: "Prevents Tooth Damage", desc: "Stops the wear, chipping, and cracking of your natural teeth and expensive dental work." },
        { title: "Alleviates Jaw Pain", desc: "Helps to reduce or eliminate morning jaw pain, headaches, and TMJ discomfort caused by clenching." }
      ]}
      whenToConsider={[
        "You wake up with dull headaches, jaw soreness, or facial pain.",
        "Your dentist has noticed that your teeth are flattened, fractured, or chipped.",
        "You have a history of grinding your teeth in your sleep (often noticed by a partner).",
        "You have had extensive restorative work (like veneers or crowns) that you want to protect."
      ]}
      faqs={[
        { q: "Why shouldn't I just buy a night guard at the pharmacy?", a: "Over-the-counter guards are bulky, uncomfortable, and can actually encourage more grinding. A custom guard is slim, comfortable, and properly distributes bite forces." },
        { q: "How long does a custom night guard last?", a: "Depending on the severity of your grinding, a high-quality custom night guard can last several years." },
        { q: "Is it hard to sleep with a night guard?", a: "Because our guards are custom-fitted to your exact bite, most patients find them very comfortable and get used to sleeping with them within a few nights." }
      ]}
    />
  );
};

export default NightGuards;
