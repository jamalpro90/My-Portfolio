import Image from 'next/image';

export default function ProjectsCard({ image, text }) {
  return (
    <div className="card flex mx-3 mt-2 flex-col items-center">
      <Image src={image} alt="project image" width={250} height={150} layout="intrinsic" className="cursor-pointer img" />
      <p className="text-xl font-u-mono font-bold">{text}</p>
    </div>
  );
}
