'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import light from '@/assets/images/bg.jpg';
import dark from '@/assets/images/bg_dark.png';

export default function Wallpapers() {
  const { theme } = useTheme();

  return (
    <div className="z-10">
      <Image
        src={theme === 'light' ? light : dark}
        alt="Vercel Logo"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
}
