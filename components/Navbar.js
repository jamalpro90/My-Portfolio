import React, { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const navbar = useRef();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      setScrollY(parseInt(window.scrollY));
      const navbarHeight = navbar.current.clientHeight;
      navbar.current.classList.toggle('bg-blue-500', scrollY > navbarHeight);
    });
  }, [scrollY]);

  return (
    <div ref={navbar} className="navbar w-full fixed z-10 top-0">
      {/* Navbar */}
      <div className="container mx-auto flex justify-between items-center py-2">
        {/* Logo */}
        <h3 className="font-u-mono text-3xl font-semibold text-white tracking-wide">JAMAL</h3>
        {/* Nav */}
        <ul className="text-xl font-semibold font-u-mono text-white flex cursor-pointer tracking-wide">
          <li className="ml-10">
            <i className="fas fa-sun"></i>
          </li>
          <li className="ml-10">
            <a href="#hero">Home</a>
          </li>
          <li className="ml-10">
            <a href="#about">About</a>
          </li>
          <li className="ml-10">
            <a href="#projects">Projects</a>
          </li>
          <li className="ml-10">
            <a href="#skills">Skills</a>
          </li>
          <li className="ml-10">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
