/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Button from "./utils/Button";
import CircleBackground from "./utils/CircleBackground";
import Icon from "./utils/Icon";
import SectionTitle from "./utils/SectionTitle";

export default function About() {
  return (
    <div
      id="about"
      className="about  border-red-500 overflow-hidden py-14 bg-slate-50 dark:bg-black-111 relative"
    >
      {/* Circle Background */}
      <CircleBackground
        color="rgba(102, 248, 143, 0.3)"
        position="bottom-32 -right-20 md:bottom-56 md:-right-56 lg:-right-28 lg:bottom-40"
      />

      <div className="container mx-auto h-full py-8">
        {/* section content container */}
        <div className="flex h-5/6 about-content">
          {/* section content left */}
          <div
            data-aos="fade-up-right"
            data-aos-delay="500"
            className="flex left justify-center flex-col w-full lg:w-6/12"
          >
            {/* section title */}
            <SectionTitle title="ABOUT ME" />
            <h3 className="text-3xl md:text-4xl lg:text-5xl mt-6 ml-4 text-black-111 dark:text-gray-50 font-bold font-r-slab">
              My Name Is <span className="text-blue-600">Jamal</span>
            </h3>
            <p className="text-base font-r text-black-222 dark:text-gray-300 my-6 mx-4">
              I am from Indonesia, I am 22 years old and I am a Front-End Web
              Developer, I have been self-taught in this field for the past 1
              year. Honestly, I still don't have work experience, but this
              website can make you interested in working with me
            </p>
            {/* section button left */}
            <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
              <a href="#contact">
                <Button
                  text="Download CV"
                  icon={<i className="fas fa-file-download"></i>}
                />
              </a>
              <Icon
                order="order-1"
                type="fab fa-whatsapp"
                size="text-2xl lg:text-3xl"
                blank
              />
              <Icon
                order="order-2"
                type="fab fa-facebook"
                size="text-2xl lg:text-3xl"
                blank
              />
              <Icon
                order="order-4"
                type="fab fa-instagram"
                size="text-2xl lg:text-3xl"
                blank
              />
              <Icon
                order="order-5"
                type="fab fa-github"
                size="text-2xl lg:text-3xl"
                blank
              />
            </div>
          </div>

          {/* section content right */}
          <div
            data-aos="fade-up-left"
            data-aos-delay="500"
            className="flex right justify-center items-center w-full lg:w-6/12 mt-12"
          >
            <div className="md:-mt-20">
              <Image
                src="/img/jamal-blue-orange.png"
                alt="Profile Picture"
                width={1400}
                height={1172}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
