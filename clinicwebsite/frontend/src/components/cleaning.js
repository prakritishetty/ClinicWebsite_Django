import React from "react";
import AllServicesTemplate from "./AllServicesTemplate";

const Cleaning = () => {
  return (
    <AllServicesTemplate
      title="Professional Cleaning (Scaling & Polishing)"
      cursiveAccent="A foundation for healthy smiles"
      intro={
        <>
          No matter how well you brush and floss at home, a layer of hardened deposits (called tartar or calculus) can form on your teeth over time. Professional cleaning removes this buildup using special instruments, followed by polishing to make your teeth smooth and clean.
          <br /><br />
          Tartar buildup is the main cause of gum disease and tooth decay. No amount of brushing at home can remove it once it hardens. Regular cleaning keeps your gums healthy and your breath fresh.
        </>
      }
      offerings={[
        { 
          title: "Comprehensive Examination", 
          desc: "Our specialists meticulously examine your teeth and gums for any early signs of problems, such as tooth decay, gum disease or oral cancer." 
        },
        { 
          title: "Professional Scaling", 
          desc: "We gently but effectively remove hardened tartar (calculus) buildup from above and below the gumline." 
        },
        { 
          title: "Polishing", 
          desc: "We polish your teeth to remove surface stains to restore your smile." 
        },
      ]}
      whenToConsider={[
        "Your gums bleed when you brush or floss.",
        "You notice persistent bad breath or a bad taste in your mouth.",
        "You feel a rough texture on the back of your teeth (tartar buildup)."
      ]}
      faqs={[
        { q: "How often should I get my teeth cleaned?", a: "The American Dental Association recommends a professional cleaning and exam at least twice a year. If you have a history of gum disease, we may recommend visits every 3 to 4 months." },
        { q: "Is a professional dental cleaning painful?", a: "No, a routine dental cleaning is not painful. If you have sensitive teeth or deep gum pockets, let us know so we can ensure you are completely comfortable." },
        { q: "What is the difference between plaque and tartar?", a: "Plaque is a sticky film of bacteria that forms daily and can be brushed away. If left on the teeth, it hardens into tartar (calculus), which can only be removed by a dental professional." }
      ]}
    />
  );
};

export default Cleaning;
