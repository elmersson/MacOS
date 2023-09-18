import { AnimatePresence, motion } from 'framer-motion';
import { IoApps } from 'react-icons/io5';
import ConnectControl from './ConnectControl';
import ThemeSwitcher from '../atoms/ThemeSwitcher';
import Sound from '../atoms/Sound';
import Display from '../atoms/Display';
import Music from '../atoms/Music';

interface ControlCenterMenuProps {
  isVisible: boolean;
}
export default function ControlCenterMenu({
  isVisible,
}: ControlCenterMenuProps) {
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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          className="fixed top-10 right-[4px] z-50 overflow-hidden shadow-lg"
        >
          <div className="rounded-xl px-2 py-2 w-[300px] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 space-y-2">
            <div className="flex flex-row space-x-2">
              <ConnectControl />
              <div className="flex flex-col space-y-2">
                <ThemeSwitcher />
                <div className="flex flex-row space-x-2">
                  <div className="rounded-md px-3 py-1 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 shadow-md flex justify-center items-center flex-col">
                    <div className="flex justify-center items-center py-1">
                      <IoApps style={{ color: 'white', fontSize: '24px' }} />
                    </div>
                    <div>
                      <p className="text-xxs text-center">Stage Manager</p>
                    </div>
                  </div>
                  <div className="rounded-md px-3 py-1 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 shadow-md flex justify-center items-center flex-col">
                    <div className="flex justify-center items-center py-1">
                      <IoApps style={{ color: 'white', fontSize: '24px' }} />
                    </div>
                    <div>
                      <p className="text-xxs text-center">Screen Mirroring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Display />
            <Sound />
            <Music />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
