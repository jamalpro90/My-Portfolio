import React, { useRef, useState } from "react";
import Button from "./utils/Button";
import Icon from "./utils/Icon";
import Input from "./utils/Input";
import SectionTitle from "./utils/SectionTitle";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
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

  return (
    <div
      id="contact"
      className="contact container mx-auto py-14 pt-24 overflow-hidden"
    >
      {/* pembungkus section left & right */}
      <div className="lg:flex h-full pt-6">
        {/* Right Or Top */}
        <div className="flex-1 lg:order-2 pl-10">
          {/* Title */}
          <SectionTitle title="CONTACT" />
          {/* Desc */}
          <p className="text-base font-r text-black-222 dark:text-gray-300 mt-6 mb-6 mx-4 xl:w-10/12">
            Jika anda tertarik untuk bekerja dengan saya atau ingin
            memperkerjakan saya bisa hubungi saya lewat form email di samping
            berikut, atau juga bisa lewat Whatsapp saya.
          </p>
          <a href="#contact">
            <Button
              text="Download CV"
              icon={<i className="fas fa-file-download"></i>}
            />
          </a>
        </div>

        {/* Left Or Bottom */}
        <form
          // data-aos="zoom-in-left"
          // data-aos-delay="500"
          ref={form}
          onSubmit={e => handleSendEmail(e)}
          className="sm:w-full lg:w-6/12 flex flex-col py-6 px-10 xl:px-20  mt-16 lg:mt-0 lg:order-1"
        >
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            label="Name"
            name="name"
            place="Enter Name"
          />

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
          <Button text="submit" textSize=" text-xl self-center mt-4" />
        </form>
      </div>
    </div>
  );
}
