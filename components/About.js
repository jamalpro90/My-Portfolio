/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Button from './utils/Button';
import Icon from './utils/Icon';
import SectionTitle from './utils/SectionTitle';

export default function About() {
  return (
    <div id="about" className="about container mx-auto py-14 bg-gray-100">
      {/* section title */}
      <SectionTitle title="ABOUT ME" />
      {/* section content container */}
      <div className="flex mt-10 h-5/6">
        {/* section content left */}
        <div className="flex justify-center flex-col w-6/12">
          <h3 className="text-5xl text-black-111 font-bold font-r-slab">
            My Name Is <span className="text-blue-600">Jamal</span>
          </h3>
          <p className="text-base font-r text-black-222 my-6">
            I am from Indonesia, I am 22 years old and I am a Front-End Web Developer, I have been self-taught in this field for the past 1 year. Honestly, I still don't have work experience, but this website can make you interested in
            working with me
          </p>
          {/* section button left */}
          <div className="flex items-center">
            <Button text="Send Mail" icon={<i className="fas fa-envelope"></i>} />
            <Icon type="fab fa-whatsapp" size="text-2xl" blank />
            <Icon type="fab fa-facebook" size="text-2xl" blank />
            <Icon type="fab fa-instagram" size="text-2xl" blank />
            <Icon type="fab fa-github" size="text-2xl" blank />
          </div>
        </div>
        {/* section content right */}
        <div className="flex justify-center items-center w-6/12">
          <Image src="/img/jamal-black.png" alt="Profile Picture" width={293} height={363} layout="intrinsic" />
        </div>
      </div>
    </div>
  );
}
