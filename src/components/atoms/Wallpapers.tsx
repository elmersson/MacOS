import Image from 'next/image';
import WallpaperDay from '../../assets/images/wallpaper-day.jpg';
import WallpaperNight from '../../assets/images/wallpaper-night.jpg';
import { useTheme } from 'next-themes';

export default function Wallpapers() {
  const { theme } = useTheme();
  return (
    <div className="absolute inset-0 -z-50">
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
