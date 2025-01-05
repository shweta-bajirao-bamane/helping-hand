import React from "react";
import SectionTitle from "./SectionTitle";

import { causes } from "../data/Data";
import CardCauses from "./CardCauses";

const CauseSection = () => {
  return (
    <section id="causes" className="section">
      <SectionTitle
        title="Our Causes"
        subtitle="This all mean that giving is a much more important element of happiness than receivin. Being able to give makes us feel like we're making a big impact on someone's life."
      />
      <div className="cards-container">
        {causes.map((cause) => (
          <CardCauses
            key={cause.id}
            title={cause.title}
            description={cause.description}
            image={cause.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CauseSection;