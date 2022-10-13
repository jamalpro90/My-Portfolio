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
import CircleBackground from "../components/utils/CircleBackground";

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
    <div className="relative overflow-hidden">
      <Head>
        <title>Portfolio</title>
      </Head>

      {/* website */}
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Projects />
      <Skills />

      {/* Circle Background Skills - Contact */}
      <CircleBackground
        color="rgba(102, 204, 248, 0.4)"
        position="bottom-[1000px] -left-48 md:bottom-56 md:-right-56 lg:-left-48 lg:bottom-[600px] scale-90"
      />

      <Contact />

      {/* Circle Background Contact - Footer */}
      <CircleBackground
        color="rgba(245, 102, 248, 0.4)"
        position="bottom-[0px] -right-48 md:bottom-56 md:-right-56 lg:-left-48 lg:bottom-[600px] scale-90"
      />

      <Footer />
    </div>
  );
}

// https://www.youtube.com/watch?v=S5lwvy2TN6w&list=PLzCxunOM5WFIBEfixsIWyqPpaABQ5S8HD&index=22
