import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { BsShift } from 'react-icons/bs';
import {
  IoChevronForwardOutline,
  IoChevronUpOutline,
  IoLogoApple,
} from 'react-icons/io5';
import { LuCommand, LuOption, LuPower } from 'react-icons/lu';

export default function Apple() {
  const [isVisible, setIsVisible] = useState<Boolean>(false);

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
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <div
        className={`px-2.5 rounded-md py-1 ${
          isVisible ? 'bg-slate-100/20' : ''
        }`}
        onClick={handleClick}
      >
        <IoLogoApple style={{ color: 'white', fontSize: '18px' }} />
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            className="fixed top-10 left-[4px] z-50 overflow-hidden shadow-lg"
          >
            <div className="w-72 flex flex-col menubg space-y-2 p-3">
              <p className="text-xs">About This Mac</p>
              <div className="border-b border-gray-500/20"></div>
              <p className="text-xs">System Settings...</p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center space-x-2">
                  <p className="text-xs">App Store...</p>
                </div>
                <div className="flex flex-row items-center px-3 rounded-xl bg-slate-400/50">
                  <p className="text-xxs ">11 Updates</p>
                </div>
              </div>
              <div className="border-b border-gray-500/20"></div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center space-x-2">
                  <p className="text-xs">Recent Items</p>
                </div>
                <IoChevronForwardOutline
                  style={{ color: 'black', fontSize: '14px' }}
                />
              </div>
              <div className="border-b border-gray-500/20" />
              <div className="flex flex-row justify-between items-center">
                <p className="text-xs">Force Quit</p>
                <div className="flex flex-row space-x-1">
                  <LuOption
                    style={{ color: 'rgb(51 65 85 / 0.8)', fontSize: '12px' }}
                  />
                  <LuCommand
                    style={{ color: 'rgb(51 65 85 / 0.8)', fontSize: '12px' }}
                  />
                  <LuPower
                    style={{ color: 'rgb(51 65 85 / 0.8)', fontSize: '12px' }}
                  />
                </div>
              </div>
              <div className="border-b border-gray-500/20"></div>
              <p className="text-xs">Sleep</p>
              <p className="text-xs">Restart...</p>
              <p className="text-xs">Shut Down...</p>
              <div className="border-b border-gray-500/20"></div>
              <div className="flex flex-row justify-between items-center">
                <p className="text-xs">Lock Screen</p>
                <div className="flex flex-row space-x-1">
                  <IoChevronUpOutline
                    style={{ color: 'rgb(51 65 85 / 0.8)', fontSize: '12px' }}
                  />
                  <LuCommand
                    style={{ color: 'rgb(51 65 85 / 0.8)', fontSize: '12px' }}
                  />
                  <LuPower
                    style={{ color: 'rgb(51 65 85 / 0.8)', fontSize: '12px' }}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <p className="text-xs">Log Out Rasmus Elmersson...</p>
                <div className="flex flex-row space-x-1 items-center">
                  <BsShift
                    style={{ color: 'rgb(51 65 85 / 0.8)', fontSize: '12px' }}
                  />
                  <LuCommand
                    style={{ color: 'rgb(51 65 85 / 0.8)', fontSize: '12px' }}
                  />
                  <p className="text-xs text-slate-700/80">Q</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
