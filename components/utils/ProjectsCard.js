import Image from "next/image";

export default function ProjectsCard({ image, text, webLink }) {
  return (
    <div className="card flex mx-3 mt-6 mb-4 flex-col items-center">
      <a href={webLink} target="_blank" rel="noopener noreferrer">
        <div className="img-wrapper shadow-image overflow-hidden rounded-lg w-[270px] h-40">
          <Image
            src={image}
            alt="project image"
            width={250}
            height={150}
            layout="responsive"
            className="cursor-pointer"
          />
        </div>
      </a>
      <a href={webLink} target="_blank" rel="noopener noreferrer">
        <p className="text-xl dark:text-slate-50 mt-2 font-u-mono font-bold">
          {text}
        </p>
      </a>
    </div>
  );
}
