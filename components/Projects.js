/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import ProjectsCard from './utils/ProjectsCard';
import SectionTitle from './utils/SectionTitle';

export default function Projects() {
  const allProducts = [
    {
      image: '/img/fashion.png',
      text: 'Fashion',
    },
    {
      image: '/img/fashion.png',
      text: 'Javascript',
    },
    {
      image: '/img/fashion.png',
      text: 'Blog',
    },
    {
      image: '/img/fashion.png',
      text: 'React JS',
    },
    {
      image: '/img/fashion.png',
      text: 'React Native',
    },
    {
      image: '/img/fashion.png',
      text: 'Next JS',
    },
  ];
  const javascriptProducts = [
    {
      image: '/img/fashion.png',
      text: 'Javascript',
    },
    {
      image: '/img/fashion.png',
      text: 'Count Down',
    },
    {
      image: '/img/fashion.png',
      text: 'Todo List',
    },
  ];
  const reactProducts = [
    {
      image: '/img/fashion.png',
      text: 'React',
    },
    {
      image: '/img/fashion.png',
      text: 'Blog',
    },
    {
      image: '/img/fashion.png',
      text: 'React Todos',
    },
  ];
  const reactNativeProducts = [
    {
      image: '/img/fashion.png',
      text: 'React Native',
    },
    {
      image: '/img/fashion.png',
      text: 'Money App',
    },
  ];
  const [selected, setSelected] = useState('all');
  const listGroup = [
    {
      id: 'all',
      title: 'All',
    },
    {
      id: 'javascript',
      title: 'Javascript',
    },
    {
      id: 'react-js',
      title: 'React JS',
    },
    {
      id: 'react-native',
      title: 'React Native',
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case 'all':
        setData(allProducts);
        break;
      case 'javascript':
        setData(javascriptProducts);
        break;
      case 'react-js':
        setData(reactProducts);
        break;
      case 'react-native':
        setData(reactNativeProducts);
        break;
    }
  }, [selected]);

  return (
    <div id="projects" className="projects py-14">
      <div className="container mx-auto py-14">
        {/* section title */}
        <SectionTitle title="PROJECTS" />
        <ul className="flex justify-center font-u-mono font-bold text-xl py-6">
          {/* project list group */}
          {listGroup.map((list) => (
            <li key={list.id} className={`px-3 mx-3 dark:text-gray-50 rounded cursor-pointer transition duration-300 ${selected === list.id && 'active'}`} onClick={() => setSelected(list.id)}>
              {list.title}
            </li>
          ))}
        </ul>
        {/* project card container */}
        <div className="flex flex-wrap w-full justify-center mx-auto">
          {data.map((data) => (
            <ProjectsCard key={data.text} image={data.image} text={data.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
