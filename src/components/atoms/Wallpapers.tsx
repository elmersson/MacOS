import Image from 'next/image';
import WallpaperDay from '../../assets/images/wallpapers/wallpaper-day.jpg';

export default function Wallpapers() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image src={WallpaperDay} alt="background image" fill />
    </div>
  );
}
