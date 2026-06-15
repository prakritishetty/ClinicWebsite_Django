import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const BoneGraft = () => {
  return (
    <TreatmentLayout
      title="Bone Grafting"
      cursiveAccent="Building a solid foundation"
      intro="A bone graft is a surgical procedure used to rebuild or strengthen the jawbone. This is often a necessary prerequisite for dental implants, ensuring there is enough healthy, dense bone to securely anchor the implant post."
      offerings={[
        { title: "Implant Preparation", desc: "Creates the necessary bone volume to ensure a successful, long-lasting dental implant." },
        { title: "Preserves Facial Structure", desc: "Prevents the facial sagging and premature aging that occurs when jawbone deteriorates after tooth loss." },
        { title: "Advanced Techniques", desc: "We use the latest grafting materials and techniques to promote rapid healing and bone regeneration." }
      ]}
      whenToConsider={[
        "You are planning to get dental implants but have suffered from bone loss.",
        "You have had a tooth extracted and want to preserve the socket for a future implant.",
        "You have suffered jawbone deterioration due to severe gum disease (periodontitis).",
        "You have experienced facial trauma affecting the jaw."
      ]}
      faqs={[
        { q: "Does a bone graft hurt?", a: "The procedure is performed under local anesthesia and/or sedation, so you won't feel pain. Post-operative discomfort is usually mild and easily managed with medication." },
        { q: "Where does the bone come from?", a: "Grafting material can come from your own body, a tissue bank, or synthetic sources. We will discuss the best option for your specific case." },
        { q: "How long does it take to heal?", a: "It typically takes 3 to 6 months for the graft to fully fuse with your natural bone and be ready to support a dental implant." }
      ]}
    />
  );
};

export default BoneGraft;
