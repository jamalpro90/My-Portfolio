import React from "react";
import Icon from "./utils/Icon";

export default function Hero() {
  return (
    <div id="hero" className="hero py-14">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          className="flex text-center font-r-slab font-bold text-4xl sm:text-5xl flex-wrap flex-col text-white"
        >
          <h1>
            Hello, I’m <span className="text-blue-600">Jamal</span> ,
          </h1>
          <h1>
            I’m A <span className="text-yellow-400">Front-End</span> Web
            Developer
          </h1>
          <Icon
            type="fas fa-chevron-down"
            href="#about"
            size="text-3xl"
            className="text-white mb-2"
          />
        </div>
      </div>
    </div>
  );
}
