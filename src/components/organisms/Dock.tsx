import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import apps from '@/data/Apps';
import DockItem from '../molecules/DockItem';

export default function Dock() {
  const [isDockFocused, setIsDockFocused] = useState(false);
  const controls = useAnimation();

  const initialY = '120%';
  const animateY = isDockFocused ? '0%' : '120%';

  const handleMouseEnter = () => {
    controls.start({ y: '0%' });
    setIsDockFocused(true);
  };

  const handleMouseLeave = () => {
    controls.start({ y: initialY });
    setIsDockFocused(false);
  };

  return (
    <motion.div
      className="fixed bottom-2 left-0 w-full flex justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.ul
        className="bg-clip-padding backdrop-filter backdrop-blur-md bg-neutral-300/10 border border-neutral-100/20 flex rounded-3xl p-1 dark:bg-neutral-500/10 dark:border-neutral-300/20"
        initial={{ y: initialY }}
        animate={{ y: animateY }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {apps.map((app) => (
          <DockItem id={app.id} title={app.title} img={app.img} key={app.id} />
        ))}
      </motion.ul>
    </motion.div>
  );
}
