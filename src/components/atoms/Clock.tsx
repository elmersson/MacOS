import useClock from '@/hooks/useClock';
import { useState, useEffect } from 'react';

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
    const localOffset = -new Date().getTimezoneOffset() / 60;

    const dstOffset = isDST() ? 0 : 0;
    const timeDifference = timezone + dstOffset - localOffset;
    setDiff(timeDifference);

    const cupertinoTime = new Date(
      currentTime.getTime() + timeDifference * 3600 * 1000
    );

    setTime(cupertinoTime);

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
      const cupertinoTime = new Date(
        currentTime.getTime() + timeDifference * 3600 * 1000
      );
      setTime(cupertinoTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentTime, timezone]);

  const dayDifference = calculateDayDifference(time);

  return (
    <div>
      <p className="text-white">{time.toLocaleTimeString()}</p>
      <p className="text-white text-xs">{city}</p>
      <p className="text-xs text-gray-500">{dayDifference}</p>
      <p className="text-xs text-gray-500">{diff}HRS</p>
    </div>
  );
}
