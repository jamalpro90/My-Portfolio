import Image from "next/image";
import Button from "./utils/Button";
import SectionTitle from "./utils/SectionTitle";
import SkillsCard from "./utils/SkillsCard";
import { skillsCardData } from "../data";
import CircleBackground from "./utils/CircleBackground";

export default function Skills() {
  return (
    <div
      id="skills"
      className="skiils pt-10 bg-slate-50 dark:bg-black-111 overflow-hidden relative"
    >
      <div className="container mx-auto py-8 lg:flex ">
        {/* Left Or Top */}
        <div className="flex-1">
          {/* Title */}
          <SectionTitle title="SKILLS" />
          {/* Desc */}
          <p className="text-base font-r text-black-222 dark:text-gray-300 mt-6 mb-2 mx-4 xl:w-10/12">
            Untuk menunjang pekerjaan saya dibutuhkan bermacam - macam teknologi
            yang perlu digunakan untuk membuat website lebih baik, bagus, dan
            powerfull.
          </p>
          <p className="text-base font-r text-black-222 dark:text-gray-300 mb-6 mx-4 xl:w-10/12">
            Teknologi tersebut harus terhubung satu sama lain agar bisa
            menghasilkan website yang bagus, mudah digunakan, dan bekerja dengan
            sangat baik
          </p>
          <a href="#contact">
            <Button
              text="Download CV"
              icon={<i className="fas fa-file-download"></i>}
            />
          </a>
        </div>

        {/* Right Or Bottom */}
        <div className="lg:flex-1 flex justify-center items-center mt-10 lg:mt-0 overflow-auto lg:pt-6 sm:pt-10">
          <div
            data-aos="zoom-in-left"
            data-aos-delay="500"
            className="flex flex-wrap mx-auto w-full justify-center h-[400px]"
          >
            {/* Skiils */}

            {skillsCardData.map((data, i) => (
              <SkillsCard key={i} skill={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
