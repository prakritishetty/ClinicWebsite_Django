import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const RootCanal = () => {
  return (
    <TreatmentLayout
      title="Root Canal Therapy"
      cursiveAccent="Save your natural tooth"
      intro="A root canal is a treatment used to repair and save a tooth that is badly decayed or becomes infected. During a root canal procedure, the nerve and pulp are removed and the inside of the tooth is cleaned and sealed, alleviating pain and preserving your natural smile."
      offerings={[
        { title: "Pain Relief", desc: "Root canal therapy effectively eliminates the excruciating pain caused by a severe tooth infection." },
        { title: "Tooth Preservation", desc: "It allows you to keep your natural tooth, which helps maintain your jawbone structure and natural bite." },
        { title: "Modern Comfort", desc: "With modern anesthesia and techniques, a root canal is typically no more uncomfortable than getting a standard filling." }
      ]}
      whenToConsider={[
        "You experience severe pain while chewing or biting.",
        "You have a chipped or cracked tooth.",
        "You notice lingering sensitivity to hot or cold, even after the sensation has been removed.",
        "You have swollen or tender gums, or a pimple on your gums."
      ]}
      faqs={[
        { q: "Does a root canal hurt?", a: "The purpose of a root canal is to relieve pain, not cause it. With modern anesthetics, the procedure itself is typically painless." },
        { q: "Will I need a crown after the root canal?", a: "In most cases, yes. A tooth that requires a root canal is often weak and susceptible to fracture. A custom crown will protect the tooth and restore its full function." },
        { q: "How long does the procedure take?", a: "Most root canals can be completed in one or two visits, depending on the severity of the infection and the specific tooth." }
      ]}
    />
  );
};

export default RootCanal;
