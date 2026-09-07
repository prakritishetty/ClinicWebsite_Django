import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const GumTherapy = () => {
  return (
    <TreatmentLayout
      title="Gum Therapy"
      cursiveAccent="Healthy gums, healthy body"
      intro="Periodontal (gum) disease is a serious infection that damages the soft tissue and bone supporting your teeth. Our advanced gum therapy treatments are designed to halt the progression of the disease, eliminate infection and restore the health of your gums."
      offerings={[
        { title: "Deep Cleaning (Scaling & Root Planing)", desc: "Meticulously removes plaque and tartar from deep below the gumline and smooths the tooth roots." },
        { title: "Laser Therapy", desc: "Utilizes advanced lasers to comfortably remove infected tissue and bacteria while promoting faster healing." },
        { title: "Maintenance Programs", desc: "Customized periodontal maintenance schedules to ensure your gums stay healthy long-term." }
      ]}
      whenToConsider={[
        "Your gums bleed easily when you brush or floss.",
        "Your gums are red, swollen or tender.",
        "You suffer from persistent bad breath or a bad taste in your mouth.",
        "You notice your gums are pulling away from your teeth (receding)."
      ]}
      faqs={[
        { q: "Can gum disease be cured?", a: "Early-stage gum disease (gingivitis) can be reversed. Advanced gum disease (periodontitis) cannot be cured, but it can be effectively managed and halted with professional therapy." },
        { q: "Is deep cleaning painful?", a: "We use local anesthesia to numb your gums before a deep cleaning, ensuring you are comfortable throughout the entire process." },
        { q: "Is there a link between gum disease and overall health?", a: "Yes. Studies have linked periodontal disease to an increased risk of heart disease, stroke, diabetes complications and other serious systemic health issues." }
      ]}
    />
  );
};

export default GumTherapy;
