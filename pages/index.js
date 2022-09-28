import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useRouter } from "next/router";
import AOS from "aos";

export default function Home() {
  const [theme, setTheme] = useState("");
  // const router = useRouter();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    }
  }, []);

  // console.log(themeS);
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      {/* website */}
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
