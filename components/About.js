/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Button from './utils/Button';
import Icon from './utils/Icon';
import SectionTitle from './utils/SectionTitle';

export default function About() {
  return (
    <div id="about" className="about py-14 bg-gray-100 dark:bg-black-1c">
      <div className="container mx-auto h-full">
        {/* section title */}
        <SectionTitle title="ABOUT ME" />
        {/* section content container */}
        <div className="flex mt-10 h-5/6 about-content">
          {/* section content left */}
          <div className="flex left justify-center flex-col w-full lg:w-6/12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-center md:text-left text-black-111 dark:text-gray-50 font-bold font-r-slab">
              My Name Is <span className="text-blue-600">Jamal</span>
            </h3>
            <p className="text-base font-r text-black-222 dark:text-gray-300 my-6">
              I am from Indonesia, I am 22 years old and I am a Front-End Web Developer, I have been self-taught in this field for the past 1 year. Honestly, I still don't have work experience, but this website can make you interested in
              working with me
            </p>
            {/* section button left */}
            <div className="flex items-center justify-center md:justify-start">
              <Button text="Send Mail" icon={<i className="fas fa-envelope"></i>} />
              <Icon order="order-1" type="fab fa-whatsapp" size="text-2xl" blank />
              <Icon order="order-2" type="fab fa-facebook" size="text-2xl" blank />
              <Icon order="order-4" type="fab fa-instagram" size="text-2xl" blank />
              <Icon order="order-5" type="fab fa-github" size="text-2xl" blank />
            </div>
          </div>
          {/* section content right */}
          <div className="flex right justify-center items-center w-full lg:w-6/12">
            <Image src="/img/jamal.png" alt="Profile Picture" width={273} height={303} layout="intrinsic" />
          </div>
        </div>
      </div>
    </div>
  );
}
