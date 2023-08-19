'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import light from '../assets/images/bg.jpg';
import dark from '../assets/images/bg_dark.png';
import { useStore } from '@/lib/store';

export default function Wallpapers() {
  const { theme } = useTheme();
  const { darkmode } = useStore();
  console.log(theme, darkmode);

  return (
    <div className="z-10">
      <Image
        src={darkmode ? light : dark}
        alt="Vercel Logo"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
}
