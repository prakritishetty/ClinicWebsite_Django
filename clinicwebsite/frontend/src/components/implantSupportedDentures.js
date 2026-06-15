import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const ImplantSupportedDentures = () => {
  return (
    <TreatmentLayout
      title="Implant Supported Dentures"
      cursiveAccent="Unwavering stability and comfort"
      intro="Implant-supported dentures combine the cost-effectiveness of traditional dentures with the unparalleled stability of dental implants. By anchoring the denture to strategically placed implants, you can enjoy a secure bite without the worry of slipping or clicking."
      offerings={[
        { title: "Rock-Solid Stability", desc: "The denture snaps securely onto the implants, meaning you can eat tough or sticky foods with confidence." },
        { title: "No Messy Adhesives", desc: "Eliminates the need for uncomfortable and messy denture pastes or glues." },
        { title: "Bone Preservation", desc: "The implants stimulate your jawbone, preventing the bone loss that typically occurs with traditional dentures." }
      ]}
      whenToConsider={[
        "You currently wear traditional dentures but are unhappy with their fit or stability.",
        "You are missing all of your teeth in either your upper or lower jaw.",
        "You want the stability of implants but cannot afford a full arch of individual implants.",
        "You have enough bone density in your jaw to support the implants."
      ]}
      faqs={[
        { q: "Do I take these dentures out at night?", a: "Yes, an implant-supported denture is overdenture that snaps onto attachments on the implants. You will take it out daily to clean it and to clean the implant posts." },
        { q: "How many implants are needed?", a: "Typically, an implant-supported denture requires between 2 to 4 implants per jaw to provide adequate stability." },
        { q: "Is the procedure painful?", a: "The implant placement is done under local anesthesia, so you won't feel pain during surgery. Post-operative discomfort is usually manageable with over-the-counter pain relievers." }
      ]}
    />
  );
};

export default ImplantSupportedDentures;
