import Image from 'next/image';
import { useBattery } from '../../hooks/useBattery';
import Charging from '@/assets/icons/charging.svg';
import BatteryLevelIndicator from './BatteryLevelIndicator';
import { useState } from 'react';
import { MenuVariants } from '@/configs/animations';
import { AnimatePresence, motion } from 'framer-motion';

export default function Battery() {
  const batteryState = useBattery();
  const [isBatteryVisible, setIsBatteryVisible] = useState<boolean>(false);

  const handleClick = () => {
    setIsBatteryVisible(!isBatteryVisible);
  };

  return (
    <div
      className={`flex items-center px-2.5 py-1 rounded-md ${
        isBatteryVisible ? 'bg-slate-100/20' : ''
      }`}
      onClick={handleClick}
    >
      <p className="text-white text-xs text-shadow">
        {(batteryState.level * 100).toFixed(0)} %
      </p>
      <div className="relative flex items-center drop-shadow-lg">
        <BatteryLevelIndicator batteryLevel={batteryState.level} />
        {batteryState.charging && (
          <Image
            src={Charging}
            alt="charging"
            height={9.8}
            width={9.8}
            className="absolute top-1/2 -mt-2 left-2.5 ml-1 drop-shadow-lg"
          />
        )}
      </div>
      <AnimatePresence>
        {isBatteryVisible && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={MenuVariants}
            className="fixed top-11 right-[175px] z-50 overflow-hidden shadow-lg"
          >
            <div className=" rounded-md px-3 py-3 w-80 flex flex-col bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/80 space-y-2">
              <p className="text-sm font-bold">
                {batteryState.charging ? 'Power adapter' : 'Battery'}
              </p>
              <p className="text-xs text-slate-500">Power source: Battery</p>
              <div className="border-b border-gray-500/20"></div>
              <p className="text-xs text-slate-600 font-bold">
                Using Significant Energy
              </p>
              <div className="border-b border-gray-500/20"></div>
              <p className="text-xs font-bold">Battery Settings...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
