import Image from 'next/image';

export default function Wallpapers() {
  const src = '/bg.jpg';
  return (
    <div className="z-10">
      <Image
        src={src}
        alt="Vercel Logo"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
}
