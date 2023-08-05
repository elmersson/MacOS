'use client';

import React, { useState, useEffect } from 'react';
import { useBattery } from 'react-use';

const getFormattedDate = (): string => {
  const now = new Date();

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dayOfWeek = daysOfWeek[now.getDay()];
  const dayOfMonth = now.getDate();
  const month = months[now.getMonth()];
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${dayOfWeek} ${dayOfMonth} ${month} ${hours}:${minutes}`;
};

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

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState(getFormattedDate);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedDate());
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

  const batteryWidth = mapBatteryStateToRange(batteryState.level).toFixed(0);

  return (
    <div className="flex justify-between bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 pb-2">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="25"
          viewBox="0 0 22 25"
          fill="none"
        >
          <g filter="url(#filter0_d_0_4120)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.8504 5.86815C11.4447 6.08478 11.0595 6.1931 10.695 6.1931C10.6194 6.1931 10.5472 6.18622 10.4784 6.17247C10.4715 6.15184 10.4646 6.11401 10.4578 6.05899C10.4509 6.00398 10.4475 5.94552 10.4475 5.88362C10.4475 5.47099 10.5369 5.07038 10.7157 4.68182C10.8945 4.29325 11.0974 3.97174 11.3243 3.71728C11.6132 3.37341 11.9776 3.08801 12.4178 2.86106C12.8579 2.63411 13.2775 2.51375 13.6763 2.5C13.697 2.5894 13.7073 2.696 13.7073 2.81979C13.7073 3.23243 13.6282 3.63303 13.47 4.0216C13.3118 4.41017 13.109 4.75575 12.8614 5.05835C12.5932 5.38158 12.2562 5.65152 11.8504 5.86815ZM9.0187 18.3349C8.77455 18.445 8.48743 18.5 8.15732 18.5C7.65528 18.5 7.21513 18.3006 6.83688 17.9017C6.45863 17.5028 6.07006 17.0248 5.67118 16.4678C5.2104 15.8075 4.81668 15.0012 4.49001 14.0487C4.16334 13.0962 4 12.1351 4 11.1654C4 10.1269 4.196 9.25521 4.58801 8.55029C4.98001 7.84537 5.48377 7.31238 6.09929 6.95132C6.71481 6.59026 7.35268 6.40974 8.0129 6.40974C8.36364 6.40974 8.69375 6.46647 9.00322 6.57995C9.3127 6.69342 9.60327 6.80862 9.87492 6.92553C10.1466 7.04245 10.3924 7.1009 10.6125 7.1009C10.8257 7.1009 11.0733 7.03901 11.3553 6.91522C11.6372 6.79142 11.9536 6.66935 12.3043 6.549C12.6551 6.42865 13.0299 6.36847 13.4288 6.36847C13.5801 6.36847 13.838 6.39254 14.2024 6.44068C14.5669 6.48882 14.9675 6.62465 15.4043 6.84816C15.841 7.07167 16.2381 7.44133 16.5957 7.95712C16.5751 7.97776 16.4754 8.05169 16.2966 8.17892C16.1178 8.30615 15.9183 8.49183 15.6983 8.73598C15.4782 8.98012 15.2856 9.2896 15.1206 9.66441C14.9555 10.0392 14.873 10.4845 14.873 11.0003C14.873 11.5918 14.9779 12.0938 15.1876 12.5064C15.3974 12.9191 15.6415 13.2509 15.9201 13.5019C16.1986 13.753 16.4462 13.9369 16.6628 14.0538C16.8794 14.1707 16.9946 14.2326 17.0084 14.2395C17.0015 14.267 16.9138 14.5112 16.7453 14.972C16.5768 15.4327 16.3 15.9451 15.9149 16.509C15.5779 16.9973 15.2151 17.4478 14.8266 17.8604C14.438 18.273 13.9721 18.4794 13.4288 18.4794C13.0643 18.4794 12.7651 18.4261 12.5313 18.3195C12.2974 18.2129 12.0567 18.1063 11.8092 17.9997C11.5616 17.8931 11.228 17.8398 10.8085 17.8398C10.4028 17.8398 10.064 17.8948 9.79239 18.0048C9.52074 18.1149 9.26284 18.2249 9.0187 18.3349Z"
              fill="white"
              fill-opacity="0.92"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_0_4120"
              x="0"
              y="0.5"
              width="21.0084"
              height="24"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_4120"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_4120"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="">
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
      <div className="flex items-center">
        <p className="text-white text-xs">
          {(batteryState.level * 100).toFixed(0)}%
        </p>{' '}
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
              width={batteryWidth}
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
        <p className="text-white text-xs">{currentTime}</p>
      </div>
    </div>
  );
}
