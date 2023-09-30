import { useStore } from '@/lib/store';
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
  const { setBooted, setLogedIn } = useStore();

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

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleQuit = () => {
    setBooted(false);
    setLogedIn(false);
  };

  const handleSignOut = () => {
    setLogedIn(false);
  };
  return (
    <div>
      <div
        className={`px-2.5 rounded-md py-1 ${
          isVisible ? 'bg-slate-100/20' : ''
        }`}
        onClick={handleVisibility}
      >
        <div className=" drop-shadow-lg">
          <IoLogoApple
            style={{
              color: 'white',
              fontSize: '18px',
            }}
          />
        </div>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            className="fixed top-11 left-[4px] z-50 overflow-hidden shadow-lg menubg"
          >
            <div className="w-72 flex flex-col ">
              <div className="menuItem">
                <p className="text-xs">About This Mac</p>
              </div>
              <div className="border-b border-gray-500/20"></div>
              <div className="menuItem">
                <p className="text-xs">System Settings...</p>
              </div>

              <div className="menuItem">
                <div className="flex flex-row items-center">
                  <p className="text-xs">App Store...</p>
                </div>
                <div className="flex flex-row items-center px-3 rounded-xl bg-slate-400/50">
                  <p className="text-xxs ">11 Updates</p>
                </div>
              </div>
              <div className="border-b border-gray-500/20"></div>
              <div className="menuItem">
                <div className="flex flex-row items-center space-x-2">
                  <p className="text-xs">Recent Items</p>
                </div>
                <IoChevronForwardOutline />
              </div>
              <div className="border-b border-gray-500/20" />
              <div className="menuItem" onClick={handleQuit}>
                <p className="text-xs">Force Quit</p>
                <div className="flex flex-row space-x-1">
                  <LuOption />
                  <LuCommand />
                  <LuPower />
                </div>
              </div>
              <div className="border-b border-gray-500/20"></div>
              <div className="menuItem" onClick={handleSignOut}>
                <p className="text-xs">Sleep</p>
              </div>
              <div className="menuItem" onClick={handleQuit}>
                <p className="text-xs">Restart...</p>
              </div>
              <div className="menuItem" onClick={handleQuit}>
                <p className="text-xs">Shut Down...</p>
              </div>

              <div className="border-b border-gray-500/20"></div>
              <div className="menuItem" onClick={handleSignOut}>
                <p className="text-xs">Lock Screen</p>
                <div className="flex flex-row space-x-1">
                  <IoChevronUpOutline />
                  <LuCommand />
                  <LuPower />
                </div>
              </div>
              <div className="menuItem" onClick={handleSignOut}>
                <p className="text-xs">Log Out Rasmus Elmersson...</p>
                <div className="flex flex-row space-x-1 items-center">
                  <BsShift />
                  <LuCommand />
                  <span>Q</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
