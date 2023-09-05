import useClock from '@/hooks/useClock';
import React, { useEffect, useState } from 'react';

export default function Clocks() {
  const currentTime = useClock();
  const [cupertinoTime, setCupertinoTime] = useState(new Date());
  const [diff, setDiff] = useState<number>(0);

  useEffect(() => {
    const localOffset = new Date().getTimezoneOffset() / 60;

    const pacificOffset = 7;
    const dstOffset = isDST() ? 0 : 0;
    const timeDifference = pacificOffset + dstOffset - localOffset;
    setDiff(timeDifference);

    const cupertinoTime = new Date(
      currentTime.getTime() + timeDifference * 3600 * 1000
    );

    setCupertinoTime(cupertinoTime);

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
      setCupertinoTime(cupertinoTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[164px] w-[344px]  rounded-2xl p-4 shadow-2xl bg-slate-900">
      <div>
        <p className="text-white">{cupertinoTime.toLocaleTimeString()}</p>
        <p className="text-white text-xs">Cupertino</p>
        <p className="text-xs text-gray-500">Today</p>
        <p className="text-xs text-gray-500">Time difference: {diff} hours</p>
      </div>
    </div>
  );
}
