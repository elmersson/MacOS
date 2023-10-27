import Image from 'next/image';
import ControlCenterImage from '../../assets/icons/controlCenter.svg';
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import ConnectControl from './ConnectControl';
import StageNScreen from './StageNScreen';
import { useAudio } from '@/hooks/useAudio';
import Display from './Display';
import Music from './Music';
import Sound from './Sound';
import ThemeSwitcher from './ThemeSwitcher';
import { useClickOutside } from '@/hooks/useClickOutside';

export default function ControlCenter() {
  const [isVisible, setIsisVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line no-unused-vars
  const [audio, audioState, controls, audioRef] = useAudio({
    src: '/music/Stockholmsvy.mp3',
    autoReplay: true,
  });
  const variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };

  const handleClick = () => {
    setIsisVisible(!isVisible);
  };

  useClickOutside(ref, handleClick, [btnRef]);

  return (
    <div
      className={`flex items-center px-2.5 py-1 rounded-md ${
        isVisible ? 'bg-slate-100/20' : ''
      }`}
      onClick={handleClick}
      ref={btnRef}
    >
      <Image
        src={ControlCenterImage}
        height={13}
        alt="control center logo"
        className="drop-shadow"
      />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={ref}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            className="fixed top-11 right-[4px] z-50 overflow-hidden shadow-lg"
          >
            <div className="rounded-xl px-2 py-2 w-[300px] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 space-y-2">
              <div className="flex flex-row space-x-2">
                <ConnectControl />
                <div className="flex flex-col space-y-2">
                  <ThemeSwitcher />
                  <StageNScreen />
                </div>
              </div>
              <Display />
              <Sound setAudioVolume={controls.volume} />
              <Music
                isPlaying={audioState.playing}
                togglePlayPause={controls.toggle}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
