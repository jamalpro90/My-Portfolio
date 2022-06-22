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
    <div id="projects" className="projects py-14 overflow-hidden">
      <div className="container mx-auto py-8">
        {/* section title */}
        <SectionTitle title="PROJECTS" />
        <ul
          data-aos="fade-down"
          data-aos-delay="500"
          className="flex justify-evenly font-u-mono font-bold text-xl py-6 flex-wrap"
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
          data-aos="zoom-in"
          data-aos-delay="500"
          className="flex flex-wrap w-full justify-center mx-auto"
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
