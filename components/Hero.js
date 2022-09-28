import React from "react";
import CircleBackground from "./utils/CircleBackground";
import Icon from "./utils/Icon";

export default function Hero() {
  return (
    <div id="hero" className="hero relative overflow-hidden">
      {/* Circle Background */}
      <CircleBackground
        color="rgba(255, 109, 109, 0.4)"
        position="top-80 -left-60 md:top-56 md:-left-56"
      />
      <CircleBackground
        color="rgba(102, 204, 248, 0.4)"
        position="top-80 -right-60 md:top-56 md:-right-56"
      />

      {/* Main Content */}
      <div className="container mx-auto h-full flex justify-center items-center">
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          className="flex text-center font-r-slab font-bold text-4xl sm:text-5xl flex-wrap flex-col text-black dark:text-slate-50"
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
            className="text-black-111 dark:text-white mb-10"
          />
        </div>
      </div>
    </div>
  );
}
