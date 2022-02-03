import Image from "next/image";
import SectionTitle from "./utils/SectionTitle";

export default function Skills() {
  return (
    <div id="skills" className="skiils py-14 bg-gray-100 dark:bg-black-1c">
      <div className="container mx-auto">
        <SectionTitle title="SKILLS" />
        <div className="flex justify-center items-center h-5/6 lg:pt-6 sm:pt-10">
          <div className="flex flex-wrap mx-auto w-full lg:w-8/12 justify-center h-3/6">
            {/* Images */}
            <div className="px-3 py-3 cursor-pointer transition duration-300 transform scale-[0.7] hover:scale-[0.9] md:scale-100 md:hover:scale-125">
              <Image
                // className="cursor-pointer transition duration-200 hover:scale-110"
                src="/img/skill/html.svg"
                alt="skill image"
                width={71}
                height={100}
              />
            </div>
            <div className="px-3 py-3 cursor-pointer transition duration-300 transform scale-[0.7] hover:scale-[0.9] md:scale-100 md:hover:scale-125">
              <Image
                src="/img/skill/css.svg"
                alt="skill image"
                width={71}
                height={100}
              />
            </div>
            <div className="px-3 py-3 cursor-pointer transition duration-300 transform scale-[0.7] hover:scale-[0.9] md:scale-100 md:hover:scale-125">
              <Image
                src="/img/skill/javascript.svg"
                alt="skill image"
                width={85}
                height={85}
              />
            </div>
            <div className="px-3 py-3 cursor-pointer transition duration-300 transform scale-[0.7] hover:scale-[0.9] md:scale-100 md:hover:scale-125">
              <Image
                src="/img/skill/bootstrap.svg"
                alt="skill image"
                width={85}
                height={85}
              />
            </div>
            <div className="px-3 py-3 cursor-pointer transition duration-300 transform scale-[0.7] hover:scale-[0.9] md:scale-100 md:hover:scale-125">
              <Image
                src="/img/skill/tailwind.svg"
                alt="skill image"
                width={133}
                height={80}
              />
            </div>
            <div className="px-3 py-3 cursor-pointer transition duration-300 transform scale-[0.7] hover:scale-[0.9] md:scale-100 md:hover:scale-125">
              <Image
                src="/img/skill/react.svg"
                alt="skill image"
                width={95}
                height={85}
              />
            </div>
            <div className="px-3 py-3 cursor-pointer transition duration-300 transform scale-[0.7] hover:scale-[0.9] md:scale-100 md:hover:scale-125">
              <Image
                src="/img/skill/next.svg"
                alt="skill image"
                width={95}
                height={95}
              />
            </div>
            <div className="px-3 py-3 cursor-pointer transition duration-300 transform scale-[0.7] hover:scale-[0.9] md:scale-100 md:hover:scale-125">
              <Image
                src="/img/skill/figma.svg"
                alt="skill image"
                width={60}
                height={90}
              />
            </div>
            <div className="px-3 py-3 cursor-pointer transition duration-300 transform scale-[0.7] hover:scale-[0.9] md:scale-100 md:hover:scale-125">
              <Image
                src="/img/skill/xd.svg"
                alt="skill image"
                width={82}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
