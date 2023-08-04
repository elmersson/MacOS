import Image from 'next/image';
import WallpaperDay from '../../assets/images/wallpapers/wallpaper-day.jpg';

export default function Wallpapers() {
  return (
    <div className="z-10">
      <Image
        src={WallpaperDay}
        alt="Vercel Logo"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
}
