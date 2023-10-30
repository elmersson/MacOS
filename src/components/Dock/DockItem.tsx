import React, { useState } from 'react';
import Image from 'next/image';
import { AppData } from '@/data/Apps';

export default function DockItem({ id, title, img }: AppData) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li
      className="flex justify-center relative group"
      id={id}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center">
        <div className="absolute bg-clip-padding backdrop-filter backdrop-blur-md top-[-60px] bg-neutral-300 text-sm opacity-0 transition-all duration-100 py-1 px-2 rounded-md group-hover:opacity-100">
          <p className="text-black whitespace-nowrap overflow-hidden overflow-ellipsis">
            {title}
          </p>
          <div className="before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-solid before:border-transparent before:border-t-4 before:border-l-4 before:border-r-4 before:border-b-0 before:border-neutral-300 dark:before:border-white before:transform before:-rotate-180 before:content-[' ']"></div>
        </div>
        <Image src={img} alt={title} className="w-14" />
        <div
          className={`h-1 w-1 m-0 rounded-full bg-slate-950/80 dark:bg-slate-50/80 mt-1 ${
            isActive ? 'opacity-100' : 'opacity-0'
          } transition-all duration-100`}
        />
      </div>
    </li>
  );
}
