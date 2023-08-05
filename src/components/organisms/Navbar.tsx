'use client';

import React, { useState, useEffect } from 'react';
import { useBattery } from 'react-use';

const getCurrentTimeFormatted = (): string => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState(getCurrentTimeFormatted);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTimeFormatted());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  const batteryState = useBattery();

  if (!batteryState.isSupported) {
    return (
      <div>
        <>Battery sensor</>: <span>not supported</span>
      </div>
    );
  }

  if (!batteryState.fetched) {
    return (
      <div>
        <p>Battery sensor</p>: <span>supported</span> <br />
        <p>Battery state</p>: <span>fetching</span>
      </div>
    );
  }

  return (
    <div className="flex flex-row-reverse">
      <p className="text-white text-xs">{currentTime}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="13"
        viewBox="0 0 26 13"
        fill="none"
      >
        <g clip-path="url(#clip0_208_1555)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 3.5C0 1.84315 1.34315 0.5 3 0.5H20C21.6569 0.5 23 1.84315 23 3.5V9.5C23 11.1569 21.6569 12.5 20 12.5H3C1.34315 12.5 0 11.1569 0 9.5V3.5ZM1 3.5C1 2.39543 1.89543 1.5 3 1.5H20C21.1046 1.5 22 2.39543 22 3.5V9.5C22 10.6046 21.1046 11.5 20 11.5H3C1.89543 11.5 1 10.6046 1 9.5V3.5ZM25.5 6.5C25.5 7.61042 24.8967 8.57994 24 9.09865V3.90135C24.8967 4.42006 25.5 5.38958 25.5 6.5Z"
            fill="white"
            fill-opacity="0.5"
          />
          <rect
            x="2"
            y="2.5"
            width="5"
            height="8"
            rx="1"
            fill="white"
            fill-opacity="0.9"
          />
        </g>
        <defs>
          <clipPath id="clip0_208_1555">
            <rect
              width="25.5"
              height="12"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
      <p className="text-white text-xs">
        {(batteryState.level * 100).toFixed(0)}%
      </p>{' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="225"
        height="32"
        viewBox="0 0 225 32"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 8C20 5.19974 20 3.79961 19.455 2.73005C18.9757 1.78924 18.2108 1.02433 17.27 0.544967C16.2004 0 14.8003 0 12 0H0H225H213C210.2 0 208.8 0 207.73 0.544967C206.789 1.02433 206.024 1.78924 205.545 2.73005C205 3.79961 205 5.19974 205 8V16C205 21.6005 205 24.4008 203.91 26.5399C202.951 28.4215 201.422 29.9513 199.54 30.9101C197.401 32 194.601 32 189 32H36C30.3995 32 27.5992 32 25.4601 30.9101C23.5785 29.9513 22.0487 28.4215 21.0899 26.5399C20 24.4008 20 21.6005 20 16V8Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
