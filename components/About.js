/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Button from "./utils/Button";
import CircleBackground from "./utils/CircleBackground";
import Icon from "./utils/Icon";
import SectionTitle from "./utils/SectionTitle";

export default function About() {
  const SosmedContent = [
    {
      type: "fab fa-whatsapp",
      text: "+6287834414508",
    },
    {
      type: "fab fa-facebook",
      text: "facebook.com/Jamal.Pebisnis.Sukses/",
    },
    {
      type: "fab fa-github",
      text: "https://github.com/jamalpro90",
    },
  ];

  return (
    <div
      id="about"
      className="about  border-red-500 overflow-hidden py-14 bg-slate-50 dark:bg-black-111 relative"
    >
      {/* Circle Background */}
      <CircleBackground
        color="rgba(102, 248, 143, 0.3)"
        position="bottom-32 -right-20 md:bottom-56 md:-right-56 lg:-right-28 lg:bottom-40"
      />

      <div className="container mx-auto h-full py-8">
        {/* section content container */}
        <div className="flex h-5/6 about-content">
          {/* section content left */}
          <div
            data-aos="fade-up-right"
            data-aos-delay="500"
            className="flex left justify-center flex-col w-full lg:w-6/12"
          >
            {/* section title */}
            <SectionTitle title="ABOUT ME" />
            <h3 className="text-3xl md:text-4xl lg:text-5xl mt-6 ml-4 text-black-111 dark:text-gray-50 font-bold font-r-slab">
              My Name Is <span className="text-blue-600">Jamal</span>
            </h3>
            <p className="text-base font-r text-black-222 dark:text-gray-300 mt-6 mb-2 mx-4">
              Saya adalah seorang Front-End Web Developer, saya bisa membuat
              website yang anda butuhkan dengan hasil yang memuaskan, websitenya
              akan cepat diakses dan responsive di berbagai macam device.
            </p>
            <p className="text-base font-r text-black-222 dark:text-gray-300 mb-6 mx-4">
              Jika anda tertarik untuk bekerja sama dengan saya atau anda ingin
              dibuatkan website oleh saya, anda bisa langsung hubungi saya
              melalui kontak email atau Whatsap.
            </p>
            {/* section button left */}
            <div className="flex flex-wrap ">
              <a href="#contact" className="mb-6 w-full">
                <Button
                  text={
                    <a href="/cv.pdf" download>
                      Download CV
                    </a>
                  }
                  icon={<i className="fas fa-file-download"></i>}
                />
              </a>

              {/* Sosmed Icons */}
              {SosmedContent.map((data, i) => (
                <Icon
                  key={i}
                  type={data.type}
                  size="text-2xl lg:text-3xl text-white cursor-pointer pl-4"
                  blank
                />
              ))}
            </div>
          </div>

          {/* section content right */}
          <div
            data-aos="fade-up-left"
            data-aos-delay="500"
            className="flex right justify-center items-center w-full lg:w-6/12 mt-12"
          >
            <div className="md:-mt-10 w-full h-[auto]">
              <Image
                src="/img/jamal-orange-blue.png"
                alt="Profile Picture"
                width={1160}
                height={996}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
