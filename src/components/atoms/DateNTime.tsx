import useClock from '@/hooks/useClock';
import { useState } from 'react';
import WidgetsBar from '../molecules/WidgetsBar';
const getFormattedDate = (now: Date): string => {
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
  const [isWidgetVisible, setIsWidgetVisible] = useState<boolean>(false);
  const currentTime = useClock();

  const handleClick = () => {
    setIsWidgetVisible(!isWidgetVisible);
  };

  return (
    <>
      <div
        className={`px-2 py-1 rounded-lg ${
          isWidgetVisible ? 'bg-slate-100/20' : ''
        }`}
        onClick={handleClick}
      >
        <p className="text-xs text-slate-300 text-shadow">
          {getFormattedDate(currentTime)}
        </p>
      </div>
      <WidgetsBar isVisible={isWidgetVisible} />
    </>
  );
}
