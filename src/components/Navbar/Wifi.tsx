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
import { MenuVariants } from '@/configs/animations';

export default function Wifi() {
  const [isVisible, setIsisVisible] = useState<boolean>(false);
  const [isPersonalHotspot, setIsPersonalHotspot] = useState<boolean>(false);

  const { wifi, setWifi } = useStore();

  const handleClick = () => {
    setIsisVisible(!isVisible);
  };

  const handleWifi = () => {
    setWifi(!wifi);
  };

  return (
    <>
      <div
        className={`px-2.5 rounded-md py-1 ${
          isVisible ? 'bg-slate-100/20' : ''
        }`}
        onClick={handleClick}
      >
        <div className="drop-shadow-lg">
          <MdWifi style={{ color: 'white', fontSize: '20px' }} />
        </div>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={MenuVariants}
            className="fixed top-11 right-[110px] z-50 overflow-hidden shadow-lg"
          >
            <div className="w-72 flex flex-col menubg space-y-2 p-3 ">
              <div className="flex flex-row justify-between">
                <p className="text-sm font-bold">Wi-fi</p>
                <input
                  className="mr-2  h-[23px] w-10 appearance-none rounded-full bg-neutral-300 before:pointer-events-none 
                before:absolute before:h-5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] 
                after:absolute after:z-[2] after:mt-[1.5px] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] 
              checked:bg-apple-active checked:after:absolute checked:after:z-[2] checked:after:mt-[1.5px] checked:after:ml-[18.5px] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] 
                dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary"
                  type="checkbox"
                  role="switch"
                  checked={wifi}
                  onChange={handleWifi}
                />
              </div>

              <div className="border-b border-gray-500/20"></div>
              <p className="text-sm text-slate-700/80 font-bold">
                Personal Hotspot
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center space-x-2">
                  <div
                    className={`h-7 w-7 ${
                      isPersonalHotspot
                        ? ' bg-apple-blue-100'
                        : 'bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30'
                    } rounded-full flex justify-center items-center`}
                    onClick={() => setIsPersonalHotspot(!isPersonalHotspot)}
                  >
                    <BsLink style={{ color: 'rgb(51 65 85 / 0.8)' }} />
                  </div>
                  <p className="text-sm">Rasmus - iPhone</p>
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
              <p className="text-sm text-slate-700/80 font-bold">
                Known Network
              </p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center space-x-2">
                  <div
                    className={`h-7 w-7 ${
                      wifi
                        ? 'bg-apple-blue-100'
                        : 'bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30'
                    } rounded-full flex justify-center items-center`}
                    onClick={handleWifi}
                  >
                    <MdWifi style={{ color: 'white' }} />
                  </div>
                  <p className="text-sm">NETGEAR15-5G</p>
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
              <p className="text-sm">Wi-fi Settings...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
