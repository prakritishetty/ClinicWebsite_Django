import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const OverDentures = () => {
  return (
    <TreatmentLayout
      title="Overdentures"
      cursiveAccent="Enhanced comfort and function"
      intro="An overdenture is a type of removable denture that is supported by and fits 'over' a small number of remaining natural teeth or dental implants. This approach offers significant advantages over traditional dentures by preserving bone and providing superior stability."
      offerings={[
        { title: "Bone Preservation", desc: "By keeping the roots of some natural teeth or using implants, overdentures stimulate the jawbone and prevent shrinkage." },
        { title: "Increased Stability", desc: "The underlying roots or implants act as anchors, preventing the denture from shifting or sliding while you eat or speak." },
        { title: "Improved Chewing", desc: "With a more secure fit, you can comfortably eat a wider variety of foods compared to conventional dentures." }
      ]}
      whenToConsider={[
        "You need a denture but still have a few healthy, strong teeth remaining.",
        "You are unhappy with the instability of your current traditional dentures.",
        "You want to prevent the 'sunken facial appearance' caused by jawbone loss.",
        "You are looking for a more secure alternative to standard removable dentures."
      ]}
      faqs={[
        { q: "How do overdentures stay in place?", a: "They attach to your remaining natural teeth roots (which have been shaped) or to dental implants using special snap-on attachments." },
        { q: "Do I still need to clean an overdenture?", a: "Yes. Just like a regular denture, you must remove the overdenture daily to clean it, as well as thoroughly clean the underlying roots or implants." },
        { q: "Are overdentures more expensive than regular dentures?", a: "They can be, as they require preparation of remaining teeth or placement of implants. However, the benefits in stability and bone preservation make them a highly worthwhile investment." }
      ]}
    />
  );
};

export default OverDentures;
