import Head from 'next/head';
import About from '../components/About';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </>
  );
}
