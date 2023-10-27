import { MenuVariants } from '@/configs/animations';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useStore } from '@/lib/store';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
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
  const ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

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

  useClickOutside(ref, handleVisibility, [btnRef]);

  return (
    <div>
      <div
        className={`px-2.5 rounded-md py-1 ${
          isVisible ? 'bg-slate-100/20' : ''
        }`}
        onClick={handleVisibility}
        ref={btnRef}
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
            variants={MenuVariants}
            className="fixed top-11 left-[4px] z-50 overflow-hidden shadow-lg menubg"
            ref={ref}
          >
            <div className="w-72 flex flex-col ">
              <div className="menuItem">
                <p className="text-sm">About This Mac</p>
              </div>
              <div className="border-b border-gray-500/20"></div>
              <div className="menuItem">
                <p className="text-sm">System Settings...</p>
              </div>

              <div className="menuItem">
                <div className="flex flex-row items-center">
                  <p className="text-sm">App Store...</p>
                </div>
                <div className="flex flex-row items-center px-3 rounded-xl bg-slate-400/50">
                  <p className="text-xxs ">11 Updates</p>
                </div>
              </div>
              <div className="border-b border-gray-500/20"></div>
              <div className="menuItem">
                <div className="flex flex-row items-center space-x-2">
                  <p className="text-sm">Recent Items</p>
                </div>
                <IoChevronForwardOutline />
              </div>
              <div className="border-b border-gray-500/20" />
              <div className="menuItem" onClick={handleQuit}>
                <p className="text-sm">Force Quit</p>
                <div className="flex flex-row space-x-1">
                  <LuOption />
                  <LuCommand />
                  <LuPower />
                </div>
              </div>
              <div className="border-b border-gray-500/20"></div>
              <div className="menuItem" onClick={handleSignOut}>
                <p className="text-sm">Sleep</p>
              </div>
              <div className="menuItem" onClick={handleQuit}>
                <p className="text-sm">Restart...</p>
              </div>
              <div className="menuItem" onClick={handleQuit}>
                <p className="text-sm">Shut Down...</p>
              </div>

              <div className="border-b border-gray-500/20"></div>
              <div className="menuItem" onClick={handleSignOut}>
                <p className="text-sm">Lock Screen</p>
                <div className="flex flex-row space-x-1">
                  <IoChevronUpOutline />
                  <LuCommand />
                  <LuPower />
                </div>
              </div>
              <div className="menuItem" onClick={handleSignOut}>
                <p className="text-sm">Log Out Rasmus Elmersson...</p>
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
