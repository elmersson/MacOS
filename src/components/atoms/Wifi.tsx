import { useStore } from '@/lib/store';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  IoBatteryHalfOutline,
  IoChevronForwardOutline,
  IoLockClosed,
} from 'react-icons/io5';
import { MdWifi } from 'react-icons/md';
import { TbAntennaBars5 } from 'react-icons/tb';
import { BsLink } from 'react-icons/bs';

export default function Wifi() {
  const [isVisible, setIsisVisible] = useState<boolean>(false);
  const [isPersonalHotspot, setIsPersonalHotspot] = useState<boolean>(false);

  const { wifi, setWifi } = useStore();
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

  return (
    <>
      <div
        className={`px-2.5 rounded-md py-1 ${
          isVisible ? 'bg-slate-100/20' : ''
        }`}
        onClick={handleClick}
      >
        <MdWifi style={{ color: 'white', fontSize: '20px' }} />
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            className="fixed top-10 right-[158px] z-50 overflow-hidden shadow-lg"
          >
            <div className="w-72 flex flex-col menubg space-y-2 p-3">
              <p className="text-sm font-bold">Wi-fi</p>
              <div className="border-b border-gray-500/20"></div>
              <p className="text-xs text-slate-700/80 font-bold">
                Personal Hotspot
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center space-x-2">
                  <div
                    className={`h-7 w-7 ${
                      isPersonalHotspot
                        ? 'bg-[#167AE5]'
                        : 'bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30'
                    } rounded-full flex justify-center items-center`}
                    onClick={() => setIsPersonalHotspot(!isPersonalHotspot)}
                  >
                    <BsLink style={{ color: 'rgb(51 65 85 / 0.8)' }} />
                  </div>
                  <p className="text-xs">Rasmus - iPhone</p>
                </div>
                <div className="flex flex-row items-center space-x-1">
                  <TbAntennaBars5 style={{ color: 'rgb(51 65 85 / 0.8)' }} />
                  <p className="text-xs text-slate-700/80">5G</p>
                  <IoBatteryHalfOutline
                    style={{ color: 'rgb(51 65 85 / 0.8)' }}
                  />
                </div>
              </div>
              <div className="border-b border-gray-500/20"></div>
              <p className="text-xs text-slate-700/80 font-bold">
                Known Network
              </p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center space-x-2">
                  <div
                    className={`h-7 w-7 ${
                      wifi
                        ? 'bg-[#167AE5]'
                        : 'bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30'
                    } rounded-full flex justify-center items-center`}
                    onClick={() => setWifi(wifi)}
                  >
                    <MdWifi style={{ color: 'white' }} />
                  </div>
                  <p className="text-xs">NETGEAR15-5G</p>
                </div>
                <IoLockClosed
                  style={{ color: 'rgb(51 65 85 / 0.8)', fontSize: '14px' }}
                />
              </div>
              <div className="border-b border-gray-500/20" />
              <div className="flex flex-row justify-between">
                <p className="text-xs text-slate-700/80 font-bold">
                  Other Network
                </p>
                <IoChevronForwardOutline
                  style={{ color: 'rgb(51 65 85 / 0.8)' }}
                />
              </div>

              <div className="border-b border-gray-500/20"></div>
              <p className="text-xs">Wi-fi Settings...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
