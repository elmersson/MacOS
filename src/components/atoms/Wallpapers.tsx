import Image from 'next/image';
import WallpaperDay from '../../assets/images/wallpapers/wallpaper-day.jpg';
import WallpaperNight from '../../assets/images/wallpapers/wallpaper-night.jpg';
import { useTheme } from 'next-themes';

export default function Wallpapers() {
  const { theme } = useTheme();
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={theme === 'light' ? WallpaperDay : WallpaperNight}
        alt="background image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
}
