import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-5xl text-center font-bold text-blue-500">My Portfolio</h1>
    </>
  );
}
