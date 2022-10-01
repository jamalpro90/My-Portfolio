/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  allProducts,
  nextProducts,
  reactProducts,
  reactNativeProducts,
} from "../data";
import ProjectsCard from "./utils/ProjectsCard";
import SectionTitle from "./utils/SectionTitle";
import CircleBackground from "./utils/CircleBackground";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Projects() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);

  const listGroup = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "next-js",
      title: "Next JS",
    },
    {
      id: "react-js",
      title: "React JS",
    },
    {
      id: "react-native",
      title: "React Native",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(allProducts);
        break;
      case "next-js":
        setData(nextProducts);
        break;
      case "react-js":
        setData(reactProducts);
        break;
      case "react-native":
        setData(reactNativeProducts);
        break;
    }
  }, [selected]);

  return (
    <div id="projects" className="projects py-0 overflow-hidden relative">
      {/* Circle Background */}
      <CircleBackground
        color="rgba(247, 143, 75, 0.4)"
        position="bottom-48 -left-40 md:bottom-56 md:-right-56 lg:-left-48 lg:bottom-20 scale-90"
      />

      <div className="container mx-auto py-8 portfolio">
        {/* section title */}
        <SectionTitle title="PROJECTS" position="text-center" />
        <ul
          data-aos="fade-down"
          data-aos-delay="500"
          className="mt-8 lg:mt-16 flex justify-evenly font-u-mono font-bold text-xl py-6 flex-wrap"
        >
          {/* project list group */}
          {listGroup.map(list => (
            <li
              key={list.id}
              className={`px-3 mx-3 mb-3 dark:text-gray-50 rounded cursor-pointer transition duration-300 ${
                selected === list.id && "active"
              }`}
              onClick={() => setSelected(list.id)}
            >
              {list.title}
            </li>
          ))}
        </ul>
        {/* project card container */}
        <div
          // data-aos="zoom-in"
          // data-aos-delay="500"
          className="flex flex-wrap mx-auto justify-center items-center max-h-[630px] overflow-auto"
        >
          {data.map(data => (
            <ProjectsCard
              key={data.text}
              image={data.image}
              text={data.text}
              webLink={data.webLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
