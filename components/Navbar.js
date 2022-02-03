import React, { useEffect, useRef, useState } from "react";
// import NavMobile from './utils/NavMobile';

export default function Navbar() {
  const navbar = useRef();
  const navMobile = useRef();
  const [scrollY, setScrollY] = useState(0);
  const [themeS, setThemeS] = useState("fa-sun");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    document.querySelector("html").classList.add(theme);
    setThemeS(theme === "dark" ? "fa-moon" : "fa-sun");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScrollY(parseInt(window.scrollY));
      const navbarHeight = navbar.current.clientHeight;
      navbar.current.classList.toggle("bg-blue-600", scrollY > navbarHeight);
      navbar.current.classList.toggle(
        "dark:bg-black-09",
        scrollY > navbarHeight
      );
    });
  }, [scrollY]);

  const defaultTheme = () => {
    const html = document.querySelector("html");
    if (html.classList.value === "light") {
      return "dark";
    } else if (html.classList.value === "dark") {
      return "light";
    } else {
      return "dark";
    }
  };

  const handleTheme = value => {
    localStorage.setItem("theme", value);
    const theme = localStorage.getItem("theme");
    const html = document.querySelector("html");
    html.classList.add(theme);
    if (theme === "light") {
      html.classList.remove("dark");
      html.classList.remove("null");
    } else {
      html.classList.remove("light");
      html.classList.remove("null");
    }
    setThemeS(theme === "dark" ? "fa-moon" : "fa-sun");
  };

  const mobileMenu = e => {
    if (e.target.classList.contains("fa-bars")) {
      e.target.classList.remove("fa-bars");
      e.target.classList.add("fa-times");
      // navMobile.current.classList.add('active');
      navMobile.current.style.transform = "translateY(0)";
      navMobile.current.style.display = "flex";
    } else {
      e.target.classList.add("fa-bars");
      e.target.classList.remove("fa-times");
      // navMobile.current.classList.remove('active');
      navMobile.current.style.transform = "translateY(-310px)";
      navMobile.current.style.display = "none";
    }
  };

  return (
    <div ref={navbar} className="navbar w-full fixed z-10 top-0">
      {/* Navbar */}
      <div className="container mx-auto flex justify-between items-center py-2">
        {/* Logo */}
        <h3 className="font-u-mono text-3xl font-semibold text-white tracking-wide">
          JAMAL
        </h3>

        {/* Nav */}
        <ul className="nav-des text-xl font-semibold font-u-mono text-white flex cursor-pointer tracking-wide">
          <li className="ml-10" onClick={() => handleTheme(defaultTheme())}>
            <i className={`fas ${themeS}`}></i>
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

        {/* ham menu */}
        <ul
          className="ham-menu text-3xl font-semibold font-u-mono text-white flex cursor-pointer tracking-wide w-40"
          onClick={e => mobileMenu(e)}
        >
          <li className="ml-10" onClick={() => handleTheme(defaultTheme())}>
            <i className={`fas ${themeS}`}></i>
          </li>
          <li className="ml-10">
            <i className="fas fa-bars"></i>
          </li>
        </ul>

        {/* nav mobile */}
      </div>
      <div ref={navMobile} className="nav-mobile bg-blue-600 dark:bg-black-09">
        <ul className="container mx-auto text-xl font-semibold font-u-mono text-white flex flex-col cursor-pointer tracking-wide">
          <li className="my-3">
            <a href="#hero">Home</a>
          </li>
          <li className="my-3">
            <a href="#about">About</a>
          </li>
          <li className="my-3">
            <a href="#projects">Projects</a>
          </li>
          <li className="my-3">
            <a href="#skills">Skills</a>
          </li>
          <li className="my-3">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
