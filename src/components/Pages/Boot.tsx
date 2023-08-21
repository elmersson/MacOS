'use client';
import Image from 'next/image';
import Apple from '@/assets/icons/apple.svg';
import { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';

export default function Boot() {
  const [progress, setProgress] = useState<number>(0);
  const { setBooted } = useStore();

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => (prevProgress + 1) % 101);
      }, 50);

      return () => clearInterval(interval);
    } else {
      setTimeout(() => {
        setBooted(true);
      }, 1000);
    }
  }, [progress, setBooted]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-black justify-center">
      <Image src={Apple} alt="Apple logo" width={130} />
      <div className="h-1.5 w-64 rounded-full bg-neutral-700/80 border border-neutral-100/20 mt-[5%]">
        <div
          className="h-1 rounded-full bg-white border"
          style={{ width: `${progress}%`, transition: 'width 0.5s ease' }}
        ></div>
      </div>
    </div>
  );
}
