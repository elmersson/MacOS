import React, { useState } from 'react';
import Image from 'next/image';
import { AppData } from '@/data/Apps';
import { motion } from 'framer-motion';

export default function DockItem({ id, title, img }: AppData) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li
      className="flex justify-center"
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center relative">
        <motion.div
          className={`absolute bg-clip-padding backdrop-filter backdrop-blur-md top-[-60px] bg-neutral-300/60 text-sm ${
            isHovered ? 'opacity-100' : 'opacity-0'
          } transition-all duration-100 py-1 px-2 rounded-md`}
        >
          <p className="text-black whitespace-nowrap overflow-hidden overflow-ellipsis">
            {title}
          </p>
        </motion.div>
        <Image src={img} alt={title} className="w-14" />
        <motion.div
          className={`h-1 w-1 m-0 rounded-full bg-slate-950/80 dark:bg-slate-50/80 mt-1 ${
            isActive ? 'opacity-100' : 'opacity-0'
          } transition-all duration-100`}
        />
      </div>
    </li>
  );
}
