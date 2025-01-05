import React from "react";
import SectionTitle from "./SectionTitle";
import { galleryImages } from "../data/Data";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section id="gallery" className="section gallery">
      <SectionTitle
        title="Our Photo Gallery"
        subtitle="This all means that giving is a much more important elements of happiness than receving. Being able to give makes us feel like
                    we're making a big imapct on someone's life."
      />
      <div className="gallery-container">
        {galleryImages.map((img, index) => (
          <img key={index} src={img} alt={`Gallery Image ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
