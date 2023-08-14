'use client';

import { useEffect, useState } from 'react';

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

export default function DateNTime() {
  const [currentTime, setCurrentTime] = useState(getFormattedDate);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedDate());
    }, 30000); // Update 30 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);
  return (
    <p className="text-xs text-slate-50 text-shadow mx-2">{currentTime}</p>
  );
}
