import React, { useRef } from "react";
import Button from "./utils/Button";
import Icon from "./utils/Icon";
import Input from "./utils/Input";
import SectionTitle from "./utils/SectionTitle";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const handleSendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8bpue6i",
        "template_yd1lzeq",
        form.current,
        "user_Tm8UIWPG5ORlRopyThttz"
      )
      .then(
        result => {
          console.log(result.text);
          alert("Email has been sent");
        },
        error => {
          console.log(error.text);
          alert("Email failed to send");
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="contact container mx-auto py-14">
      <SectionTitle title="CONTACT" />
      {/* pembungkus section left & right */}
      <div className="flex h-full pt-6 contact-content">
        {/* section contact left */}
        <div className="sm:w-full lg:w-6/12 flex flex-col py-8 px-10 left">
          <h3 className="font-u-mono font-bold text-xl dark:text-gray-50 mb-10 text-center">
            Another option to contact me :
          </h3>
          <div className="flex items-center mt-2 md:-ml-6 md:text-sm lg:text-base">
            <Icon type="fas fa-envelope" size="text-3xl" className="mr-3" />
            <p className="dark:text-gray-50 text-sm sm:text-base">
              jamalpro90@gmail.com
            </p>
          </div>
          <div className="flex items-center mt-2 md:-ml-6 md:text-sm lg:text-base">
            <Icon
              type="fab fa-facebook"
              size="text-3xl"
              className="mr-3"
              blank
            />
            <p className="dark:text-gray-50 text-sm sm:text-base">
              Jamal Jenius
            </p>
          </div>
          <div className="flex items-center mt-2 md:-ml-6 md:text-sm lg:text-base">
            <Icon
              type="fab fa-whatsapp"
              size="text-3xl"
              className="mr-3"
              blank
            />
            <p className="dark:text-gray-50 text-sm sm:text-base">
              +62 819-3693-4925
            </p>
          </div>
          <div className="flex items-center mt-2 md:-ml-6 md:text-sm lg:text-base">
            <Icon type="fab fa-github" size="text-3xl" className="mr-3" blank />
            <p className="dark:text-gray-50 text-sm sm:text-base">jamalpro90</p>
          </div>
          <div className="flex items-center mt-2 md:-ml-6 md:text-sm lg:text-base">
            <Icon
              type="fab fa-instagram"
              size="text-3xl"
              className="mr-3"
              blank
            />
            <p className="dark:text-gray-50 text-sm sm:text-base">
              jamaljenius
            </p>
          </div>
        </div>

        {/* section contact right */}
        <form
          ref={form}
          onSubmit={e => handleSendEmail(e)}
          className="sm:w-full lg:w-6/12 flex flex-col py-6 px-10 right"
        >
          <Input type="text" label="Name" name="name" place="Enter Name" />
          <Input type="email" label="Email" name="email" place="Enter Email" />
          <Input textA label="Message" name="message" place="Enter Message" />
          <div className=" w-10/12">
            <Button text="submit" textSize="font-u-mono font-bold text-xl" />
          </div>
        </form>
      </div>
    </div>
  );
}
