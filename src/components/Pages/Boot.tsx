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
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-black">
      <Image src={Apple} alt="Apple logo" width={80} />
      <div className="h-1 w-56 rounded-full bg-gray-500 mt-4">
        <div
          className="h-1 rounded-full bg-white"
          style={{ width: `${progress}%`, transition: 'width 0.5s ease' }}
        ></div>
      </div>
    </div>
  );
}
