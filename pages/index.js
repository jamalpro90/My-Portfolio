import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      {/* website */}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
