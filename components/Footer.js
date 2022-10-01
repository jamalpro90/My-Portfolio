import Icon from "./utils/Icon";

export default function Footer() {
  const footerTopContent = [
    {
      type: "fas fa-envelope",
      text: "jamalpro90@gmail.com",
    },
    {
      type: "fab fa-facebook",
      text: "facebook.com/Jamal.Pebisnis.Sukses/",
    },
    {
      type: "fab fa-whatsapp",
      text: "+6287834414508",
    },
    {
      type: "fab fa-github",
      text: "https://github.com/jamalpro90",
    },
  ];

  return (
    <footer>
      {/* Footer Top */}
      <div className="top md:flex pb-10 pt-10 md:pt-32">
        {/* Top Or Left */}
        <div className="pt-40 md:pt-0 md:flex-1 md:flex md:justify-center md:items-center">
          <h3 className="text-slate-50 text-center font-r-slab font-bold text-3xl md:text-4xl lg:text-5xl mb-10">
            CONTACT
          </h3>
        </div>

        {/* Bottom Or Right */}
        <div className="container md:w-1/2 text-slate-50 flex flex-col justify-center items-start lg:pl-20 xl:pl-40">
          {footerTopContent.map((data, i) => (
            <div key={i} className="my-4 flex items-center">
              <Icon
                type={data.type}
                size="text-2xl lg:text-3xl text-white"
                blank
              />
              <span>{data.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-3 text-white bg-black-09 text-center z-40">
        <p className="font-r">
          Jamal &copy; <span className="text-blue-600">2021</span>
        </p>
      </div>
    </footer>
  );
}
