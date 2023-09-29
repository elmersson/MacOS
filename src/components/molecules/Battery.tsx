import Image from 'next/image';
import { useBattery } from '../../hooks/useBattery';
import Charging from '@/assets/icons/charging.svg';
import BatteryLevelIndicator from '../atoms/BatteryLevelIndicator';
import { useState } from 'react';
import BatteryMenu from '../atoms/BatteryMenu';

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
      <BatteryMenu
        isVisible={isBatteryVisible}
        charging={batteryState.charging}
      />
    </div>
  );
}
