'use client';

import Image from 'next/image';
import { useBattery } from '../../hooks/useBattery';
import Charging from '@/assets/icons/charging.svg';
import BatteryLevelIndicator from '../atoms/BatteryLevelIndicator';

export default function Battery() {
  const batteryState = useBattery();

  return (
    <div className="flex items-center">
      <p className="text-white text-xs text-shadow mx-1">
        {(batteryState.level * 100).toFixed(0)} %
      </p>
      <div className="relative flex items-center">
        <BatteryLevelIndicator batteryLevel={batteryState.level} />
        {batteryState.charging && (
          <Image
            src={Charging}
            alt="charging"
            height={9.8}
            width={9.8}
            className="absolute top-1/2 -mt-2 left-2.5 ml-1"
          />
        )}
      </div>
    </div>
  );
}
