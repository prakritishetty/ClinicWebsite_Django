import React from "react";
import TreatmentLayout from "./TreatmentLayout";

const SmileMakeover = () => {
  return (
    <TreatmentLayout
      title="Smile Makeover"
      cursiveAccent="Unleash your true radiance"
      intro="A smile makeover is a completely customized treatment plan combining multiple cosmetic and restorative dental procedures to dramatically enhance the appearance of your smile. We consider your facial appearance, skin tone and tooth shape to design a smile that is uniquely yours."
      offerings={[
        { title: "Personalized Design", desc: "We don't use a 'one-size-fits-all' approach. Your new smile is meticulously designed to compliment your unique facial features." },
        { title: "Comprehensive Enhancement", desc: "Can address crooked teeth, gaps, stains, chips, missing teeth and gummy smiles all in one coordinated plan." },
        { title: "Confidence Boost", desc: "A stunning new smile can completely transform your self-esteem and how you interact with the world." }
      ]}
      whenToConsider={[
        "You hide your smile in photos or when laughing.",
        "You have teeth slightly worn down or chipped.",
        "You have minimally misaligned, uneven or irregularly shaped teeth.",
        "You are preparing for a major life event like a wedding or a new career.",
        "You want to look younger and more vibrant."
      ]}
      faqs={[
        { q: "Are there any dietary changes required after getting veneers?", a: "Yes, you will have to avoid biting into hard food using those teeth as they can cause the veneers to come off sometimes." },
        { q: "Can I preview my new smile before treatment?", a: "Yes! We use advanced digital imaging to show you a simulation of your expected results before we even begin." },
        { q: "How long does a smile makeover take?", a: "Depending on the complexity of the procedures involved, your makeover could take anywhere from a few weeks (for whitening and veneers) to several months (if implants or orthodontics are needed)." }
      ]}
    />
  );
};

export default SmileMakeover;
