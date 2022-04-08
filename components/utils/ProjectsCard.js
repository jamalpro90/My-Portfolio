import Image from "next/image";

export default function ProjectsCard({ image, text, webLink }) {
  return (
    <div className="card flex mx-3 mt-2 mb-4 flex-col items-center">
      <a href={webLink} target="_blank" rel="noopener noreferrer">
        <Image
          src={image}
          alt="project image"
          width={250}
          height={150}
          layout="intrinsic"
          className="cursor-pointer img"
        />
      </a>
      <a href={webLink} target="_blank" rel="noopener noreferrer">
        <p className="text-xl dark:text-gray-100 font-u-mono font-bold">
          {text}
        </p>
      </a>
    </div>
  );
}
