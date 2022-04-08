import React, { useRef, useState } from "react";
import Button from "./utils/Button";
import Icon from "./utils/Icon";
import Input from "./utils/Input";
import SectionTitle from "./utils/SectionTitle";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const inputRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = e => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      return window.alert("Data harus diisi");
    }

    if (confirm("Apakah pesan sudah benar")) {
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
            alert("Pesan berhasil dikirim");
          },
          error => {
            console.log(error.text);
            alert("Pesan gagal dikirim");
          }
        );
    }
    e.target.reset();
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleFocusName = () => {
    // console.log();
    inputRef.current.childNodes[0].childNodes[1].focus();
  };

  return (
    <div id="contact" className="contact container mx-auto py-14 pt-24">
      <SectionTitle title="CONTACT" />
      {/* pembungkus section left & right */}
      <div className="flex h-full pt-6 contact-content">
        {/* section contact left */}
        <div
          data-aos="zoom-in-left"
          data-aos-delay="500"
          className="sm:w-full lg:w-6/12 flex flex-col py-8 px-10 left"
        >
          <h3
            data-aos="fade-up"
            data-aos-delay="500"
            className="font-u-mono font-bold text-xl dark:text-gray-50 mb-10 text-center"
          >
            Another option to contact me :
          </h3>
          <div className="flex items-center mt-2 md:-ml-6 md:text-sm lg:text-base">
            <div onClick={handleFocusName}>
              <Icon type="fas fa-envelope" size="text-3xl" className="mr-3" />
            </div>
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
          data-aos="zoom-in-left"
          data-aos-delay="500"
          ref={form}
          onSubmit={e => handleSendEmail(e)}
          className="sm:w-full lg:w-6/12 flex flex-col py-6 px-10 right"
        >
          <div ref={inputRef}>
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              label="Name"
              name="name"
              place="Enter Name"
            />
          </div>

          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            label="Email"
            name="email"
            place="Enter Email"
          />
          <Input
            value={message}
            onChange={e => setMessage(e.target.value)}
            textA
            label="Message"
            name="message"
            place="Enter Message"
          />
          <div className=" w-10/12">
            <Button text="submit" textSize="font-u-mono font-bold text-xl" />
          </div>
        </form>
      </div>
    </div>
  );
}
