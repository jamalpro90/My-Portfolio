import React from "react";

const CircleBackground = ({ color, position }) => {
  return (
    <div
      style={{ background: color }}
      className={`w-[300px] h-[300px] md:w-[400px] md:h-[400px] absolute rounded-full blur-[100px] md:blur-[300px]  ${
        position && position
      }`}
    />
  );
};

export default CircleBackground;
