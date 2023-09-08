import useClock from '@/hooks/useClock';
import { useState, useEffect } from 'react';
import AnalogClock from './AnalogClock';

function calculateDayDifference(date: Date) {
  const currentDate = new Date();

  const currentDateWithoutTime = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const dateWithoutTime = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const diffInDays = Math.floor(
    (dateWithoutTime.getTime() - currentDateWithoutTime.getTime()) /
      (1000 * 3600 * 24)
  );

  if (diffInDays === -1) {
    return 'Yesterday';
  } else if (diffInDays === 1) {
    return 'Tomorrow';
  } else {
    return 'Today';
  }
}

interface ClockProps {
  city: string;
  timezone: number;
}

export default function Clock({ city, timezone }: ClockProps) {
  const currentTime = useClock();
  const [time, setTime] = useState(new Date());
  const [diff, setDiff] = useState<number>(0);

  useEffect(() => {
    const localOffset = new Date().getTimezoneOffset() / 60;

    const dstOffset = isDST() ? 0 : 0;
    const timeDifference = timezone + dstOffset + localOffset;
    setDiff(timeDifference);

    const localTime = new Date(
      currentTime.getTime() + timeDifference * 3600 * 1000
    );

    setTime(localTime);

    function isDST() {
      const now = new Date();
      const januaryOffset = new Date(
        now.getFullYear(),
        0,
        1
      ).getTimezoneOffset();
      const julyOffset = new Date(now.getFullYear(), 6, 1).getTimezoneOffset();
      return Math.max(januaryOffset, julyOffset) !== now.getTimezoneOffset();
    }

    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const localTime = new Date(
        currentTime.getTime() + timeDifference * 3600 * 1000
      );
      setTime(localTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentTime, timezone]);

  const dayDifference = calculateDayDifference(time);

  return (
    <div className="w-[25%] text-center">
      <AnalogClock time={time} />
      <p className="text-white text-xs">{city}</p>
      <p className="text-xs text-gray-500">{dayDifference}</p>
      <p className="text-xs text-gray-500">
        {diff >= 0 ? `+${diff}` : diff}HRS
      </p>
    </div>
  );
}
