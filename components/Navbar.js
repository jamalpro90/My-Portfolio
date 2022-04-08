import { useState, useRef } from "react";

export default function Navbar({ theme, setTheme }) {
  // const [theme, setTheme] = useState("");
  const [navIcon, setNavIcon] = useState(false);
  const navMobile = useRef();

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
    const top = "translate-y-[375px]";
    setNavIcon(!navIcon);
    navMobile.current.classList.toggle(top);
  };

  return (
    <div data-aos="fade-down">
      {/* Desktop Navbar */}
      <div className="transition duration-200 navbar-desktop md:bg-blue-700 md:dark:bg-black-111 fixed left-0 right-0 z-40 border-b-2">
        <ul className="container mx-auto hidden md:flex md:items-center text-white">
          <li
            onClick={handleChangeTheme}
            className="text-xl mr-8 py-2 font-medium cursor-pointer"
          >
            {theme === "dark" ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun "></i>
            )}
          </li>
          <li className="text-xl mr-8 py-2 px-3 my-2 cur font-medium transition duration-200 hover:bg-white hover:text-blue-700 dark:hover:text-black  hover:rounded-lg">
            <a href="#">Home</a>
          </li>
          <li className="text-xl mr-8 py-2 px-3 my-2 cur font-medium transition duration-200 hover:bg-white hover:text-blue-700 dark:hover:text-black  hover:rounded-lg">
            <a href="#about">About</a>
          </li>
          <li className="text-xl mr-8 py-2 px-3 my-2 cur font-medium transition duration-200 hover:bg-white hover:text-blue-700 dark:hover:text-black  hover:rounded-lg">
            <a href="#projects">Projects</a>
          </li>
          <li className="text-xl mr-8 py-2 px-3 my-2 cur font-medium transition duration-200 hover:bg-white hover:text-blue-700 dark:hover:text-black  hover:rounded-lg">
            <a href="#skills">Skills</a>
          </li>
          <li className="text-xl mr-8 py-2 px-3 my-2 cur font-medium transition duration-200 hover:bg-white hover:text-blue-700 dark:hover:text-black  hover:rounded-lg">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Ham Menu */}
      <div className="transition duration-200 ham-menu md:hidden bg-blue-700 dark:bg-black-111 border-b-[2px] border-white fixed left-0 right-0 top-0 z-50">
        <div className="container mx-auto py-[14px] transition duration-200">
          <i
            onClick={handleHamMenu}
            className={`fas ${
              navIcon ? "fa-times" : "fa-bars"
            } text-3xl text-white cursor-pointer pl-3`}
          ></i>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        ref={navMobile}
        className={`transition duration-200 navbar-mobile md:hidden bg-blue-700 dark:bg-black-111 fixed z-40 left-0 right-0 border-b-[1px] rounded-br-[60%] top-[-310px]`}
      >
        <ul className="container mx-auto text-white text-xl font-500 flex flex-col items-start">
          <li
            onClick={handleChangeTheme}
            className="py-3 pt-5 font-medium cursor-pointer px-3 my-1"
          >
            {theme === "dark" ? (
              <i className="fas fa-moon "></i>
            ) : (
              <i className="fas fa-sun "></i>
            )}
          </li>
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
