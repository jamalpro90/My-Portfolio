import React from "react";

export default function SectionTitle({ title, position }) {
  return (
    <h2
      data-aos="fade-left"
      className={`ml-4 font-r-slab font-bold text-3xl md:text-4xl lg:text-5xl text-black-09 dark:text-white ${
        position && position
      }`}
    >
      {title}
    </h2>
  );
}
