import { useState, useRef, useEffect } from "react";
import Button from "./utils/Button";

export default function Navbar({ theme, setTheme }) {
  // const [theme, setTheme] = useState("");
  const [navIcon, setNavIcon] = useState(false);
  const navMobile = useRef();
  const navDesktop = useRef();

  useEffect(() => {
    changeBackground(window.scrollY);

    document.addEventListener("scroll", () => changeBackground(window.scrollY));
  }, []);

  // Change Background Function
  const changeBackground = height => {
    console.log(height);
    if (height > 70) {
      navDesktop.current.classList.add("bg-slate-50");
      navDesktop.current.classList.add("dark:bg-black-111");
    } else {
      navDesktop.current.classList.remove("bg-slate-50");
      navDesktop.current.classList.remove("dark:bg-black-111");
    }
  };

  const handleChangeTheme = () => {
    // const theme = ;
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };

  const handleHamMenu = () => {
    const moveToLeft = "translate-x-[-50vw]";
    setNavIcon(!navIcon);
    navMobile.current.classList.toggle(moveToLeft);
  };

  return (
    <div data-aos="fade-down">
      {/* Desktop Navbar */}
      <div
        ref={navDesktop}
        className="navbar-desktop hidden lg:block  fixed h-[60px] top-0 left-0 right-0 z-40 text-black-111 dark:text-slate-50"
      >
        <div className="container lg:flex justify-between items-center">
          {/* Brand & Toggle Theme */}
          <div className="flex gap-2 items-center justify-center pl-5 font-bold dark:text-slate-50">
            <h2 className="text-2xl">Jamal</h2>
            <span
              onClick={handleChangeTheme}
              className="font-medium text-2xl cursor-pointer ml-5"
            >
              {theme === "dark" ? (
                <i className="fas fa-moon "></i>
              ) : (
                <i className="fas fa-sun "></i>
              )}
            </span>
          </div>

          {/* Navigasion Menu */}
          <ul className="container hidden md:flex justify-between items-center w-[fit-content] p-0 h-[60px]">
            <li className="text-xl cur font-medium transition duration-200 hover:bg-blue-700 hover:text-slate-50 mx-4 py-2 px-4  hover:rounded-lg">
              <a href="#">Home</a>
            </li>
            <li className="text-xl cur font-medium transition duration-200 hover:bg-blue-700 hover:text-slate-50 mx-4 py-2 px-4  hover:rounded-lg">
              <a href="#about">About</a>
            </li>
            <li className="text-xl cur font-medium transition duration-200 hover:bg-blue-700 hover:text-slate-50 mx-4 py-2 px-4  hover:rounded-lg">
              <a href="#projects">Projects</a>
            </li>
            <li className="text-xl cur font-medium transition duration-200 hover:bg-blue-700 hover:text-slate-50 mx-4 py-2 px-4  hover:rounded-lg">
              <a href="#skills">Skills</a>
            </li>
            <li className="mx-8 ml-16 p-2">
              <a href="#contact">
                <Button text="Contact" textSize="text-xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Ham Menu */}
      <div className="lg:hidden flex z-50 h-[60px] items-center bg-slate-50 dark:bg-black-111 fixed top-0 left-0 right-0">
        {/* Name & Theme Toggle */}
        <div className="flex gap-2 items-center justify-center pl-5 font-bold text-gray-900 dark:text-slate-50">
          <h2 className="text-2xl">Jamal</h2>
          <span
            onClick={handleChangeTheme}
            className="font-medium text-2xl cursor-pointer ml-5"
          >
            {theme === "dark" ? (
              <i className="fas fa-moon "></i>
            ) : (
              <i className="fas fa-sun "></i>
            )}
          </span>
        </div>

        {/* Ham Toggle */}
        <div className="container transition duration-200  text-right pr-5">
          <i
            onClick={handleHamMenu}
            className={`fas ${
              navIcon ? "fa-times" : "fa-bars"
            } text-3xl text-black-111 dark:text-slate-50 cursor-pointer z-30`}
          ></i>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        ref={navMobile}
        className={`transition duration-200 lg:hidden bg-blue-700 fixed z-40 w-[50vw] right-[-50vw] top-0 bottom-0`}
      >
        <ul className="text-white text-xl font-500 flex flex-col items-center justify-center py-16">
          <li className="py-3 transition duration-200 hover:bg-white hover:text-blue-700 dark:hover:text-black  hover:rounded-lg px-3 my-1">
            <a onClick={handleHamMenu} href="#">
              Home
            </a>
          </li>
          <li className="py-3 transition duration-200 hover:bg-white hover:text-blue-700 dark:hover:text-black  hover:rounded-lg px-3 my-1">
            <a onClick={handleHamMenu} href="#about">
              About
            </a>
          </li>
          <li className="py-3 transition duration-200 hover:bg-white hover:text-blue-700 dark:hover:text-black  hover:rounded-lg px-3 my-1">
            <a onClick={handleHamMenu} href="#projects">
              Projects
            </a>
          </li>
          <li className="py-3 transition duration-200 hover:bg-white hover:text-blue-700 dark:hover:text-black  hover:rounded-lg px-3 my-1">
            <a onClick={handleHamMenu} href="#skills">
              Skills
            </a>
          </li>
          <li className="py-3 transition duration-200 hover:bg-white hover:text-blue-700 dark:hover:text-black  hover:rounded-lg px-3 my-1">
            <a onClick={handleHamMenu} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
