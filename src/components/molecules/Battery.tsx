'use client';

import { useBattery } from '../../hooks/useBattery';

function mapBatteryStateToRange(batteryState: number) {
  if (batteryState < 0 || batteryState > 1) {
    throw new Error('Battery state must be between 0 and 1');
  }

  const newMin = 0;
  const newMax = 19;

  // Scale the battery state to the new range
  const scaledValue = batteryState * (newMax - newMin) + newMin;

  return scaledValue;
}

export default function Battery() {
  const batteryState = useBattery();

  const batteryWidth = mapBatteryStateToRange(batteryState.level).toFixed(0);

  const color = (): string => {
    if (batteryState.charging) return 'rgba(255,255,0,0.92)';

    if (batteryState.level < 0.1) return 'rgba(200, 0, 0, 0.92)';
    else return 'rgba(255, 255, 255, 0.92)';
  };

  return (
    <div className="flex mx-2 items-center">
      <p className="text-white text-xs text-shadow mx-1">
        {(batteryState.level * 100).toFixed(0)} %
      </p>
      <div className="drop-shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="13"
          viewBox="0 0 26 13"
          fill="none"
        >
          <g clipPath="url(#clip0_208_1555)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 3.5C0 1.84315 1.34315 0.5 3 0.5H20C21.6569 0.5 23 1.84315 23 3.5V9.5C23 11.1569 21.6569 12.5 20 12.5H3C1.34315 12.5 0 11.1569 0 9.5V3.5ZM1 3.5C1 2.39543 1.89543 1.5 3 1.5H20C21.1046 1.5 22 2.39543 22 3.5V9.5C22 10.6046 21.1046 11.5 20 11.5H3C1.89543 11.5 1 10.6046 1 9.5V3.5ZM25.5 6.5C25.5 7.61042 24.8967 8.57994 24 9.09865V3.90135C24.8967 4.42006 25.5 5.38958 25.5 6.5Z"
              fill="rgba(255, 255, 255, 0.92)"
            />
            <rect
              x="2"
              y="2.5"
              width={batteryWidth}
              height="8"
              rx="1"
              fill={color()}
            />
          </g>
          <defs>
            <clipPath id="clip0_208_1555">
              <rect
                width="25.5"
                height="12"
                fill="rgba(255, 255, 255, 0.92)"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
