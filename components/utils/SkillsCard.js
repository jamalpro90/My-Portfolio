import Image from "next/image";
import React from "react";

const SkillsCard = ({ skill }) => {
  return (
    <div className="grayscale hover:grayscale-0 px-3 py-3 cursor-pointer flex items-center w-[200px] xl:w-[50%] transition duration-200">
      <div className="w-4/12 lg:w-5/12 xl:w-3/12">
        <Image
          // className="cursor-pointer transition duration-200 hover:scale-110"
          src={skill.image}
          alt={skill.alt}
          width={skill.width}
          height={skill.height}
          className=""
          layout="responsive"
        />
      </div>
      <span className="font-medium ml-6 text-base dark:text-slate-50">
        {skill.text}
      </span>
    </div>
  );
};

export default SkillsCard;
