import React from 'react';
import Button from './utils/Button';
import Icon from './utils/Icon';
import Input from './utils/Input';
import SectionTitle from './utils/SectionTitle';

export default function Contact() {
  return (
    <div id="contact" className="contact container mx-auto py-14">
      <SectionTitle title="CONTACT" />
      {/* pembungkus section left & right */}
      <div className="flex h-full pt-6 contact-content">
        {/* section contact left */}
        <div className="sm:w-full lg:w-6/12 flex flex-col py-8 px-10 left">
          <h3 className="font-u-mono font-bold text-xl dark:text-gray-50 mb-10 text-center">Another option to contact me :</h3>
          <div className="flex items-center mt-2 md:-ml-6 md:text-sm lg:text-base">
            <Icon type="fas fa-envelope" size="text-3xl" className="mr-3" />
            <p className="dark:text-gray-50">jamalpro90@gmail.com</p>
          </div>
          <div className="flex items-center mt-2 md:-ml-6 md:text-sm lg:text-base">
            <Icon type="fab fa-facebook" size="text-3xl" className="mr-3" blank />
            <p className="dark:text-gray-50">facebook.com/Jamal.Pebisnis.Sukses</p>
          </div>
          <div className="flex items-center mt-2 md:-ml-6 md:text-sm lg:text-base">
            <Icon type="fab fa-whatsapp" size="text-3xl" className="mr-3" blank />
            <p className="dark:text-gray-50">+62 819-3693-4925</p>
          </div>
          <div className="flex items-center mt-2 md:-ml-6 md:text-sm lg:text-base">
            <Icon type="fab fa-github" size="text-3xl" className="mr-3" blank />
            <p className="dark:text-gray-50">https://github.com/jamalpro90</p>
          </div>
          <div className="flex items-center mt-2 md:-ml-6 md:text-sm lg:text-base">
            <Icon type="fab fa-instagram" size="text-3xl" className="mr-3" blank />
            <p className="dark:text-gray-50">https://www.instagram.com/jamaljenius/</p>
          </div>
        </div>
        {/* section contact right */}
        <div className="sm:w-full lg:w-6/12 flex flex-col py-6 px-10 right">
          <Input type="text" label="Name" name="name" place="Enter Name" />
          <Input type="email" label="Email" name="email" place="Enter Email" />
          <Input textA label="Message" name="message" place="Enter Message" />
          <div className=" w-10/12">
            <Button text="submit" textSize="font-u-mono font-bold text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}