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
      <p className="text-white">{currentTime}</p>
      <p className="text-white">
        {(batteryState.level * 100).toFixed(0)}%
      </p>{' '}
    </div>
  );
}
