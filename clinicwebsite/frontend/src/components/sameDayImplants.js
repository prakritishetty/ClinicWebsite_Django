import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const SameDayImplants = () => {
  return (
    <TreatmentLayout
      title="Same-Day Implants"
      cursiveAccent="A brand new smile in one day"
      intro="Same-Day Implants are a revolutionary procedure that allows you to walk into our clinic with failing teeth and walk out the very same day with a beautiful, fully functional set of fixed replacement teeth."
      offerings={[
        { title: "Immediate Results", desc: "You never have to go without teeth. Your failing teeth are removed, implants are placed and new teeth are attached in a single visit." },
        { title: "Fewer Surgeries", desc: "Combines extraction, bone grafting (if needed) and implant placement into one streamlined procedure." },
        { title: "Rapid Recovery", desc: "Because the new teeth are fixed immediately to the implants, they act like a splint, often resulting in less post-operative discomfort." }
      ]}
      whenToConsider={[
        "You are facing the loss of all your teeth in an arch.",
        "You currently wear dentures and want a permanent, non-removable solution.",
        "You want a fast transformation without waiting months for traditional implants to heal before getting teeth.",
        "Your teeth are severely failing due to extensive decay or gum disease."
      ]}
      faqs={[
        { q: "How is it possible to get teeth in one day?", a: "By placing 4 to 6 implants at specific angles, we achieve immediate stability. This allows us to securely attach a temporary but highly functional set of teeth the same day." },
        { q: "Are the teeth I get on the first day my permanent teeth?", a: "No, they are a temporary set designed to look beautiful while your gums heal and the implants fuse to your bone. You will receive your final, permanent bridge several months later." },
        { q: "Am I a candidate for Same-Day Implants?", a: "Most patients with missing or failing teeth are candidates. We will perform a comprehensive 3D scan during your consultation to evaluate your bone density and plan your procedure. A comprehensive evaluation is done to determine if you're the perfect candidate." }
      ]}
    />
  );
};

export default SameDayImplants;
