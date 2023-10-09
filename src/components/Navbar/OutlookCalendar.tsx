import useClock from '@/hooks/useClock';
import getFullFormatDate from '@/lib/Date/getFullFormatDate';

interface OutlookItemProps {
  time: string;
  title: string;
  location: string;
}
function OutlookItem({ time, title, location }: OutlookItemProps) {
  const [hours, minutes] = time.split(':').map(Number);

  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();

  const timeDifference =
    (hours - currentHours) * 60 + (minutes - currentMinutes);

  const formatTimeDifference = (difference: number): string => {
    if (difference === 0) {
      return 'Now';
    } else if (difference < 0) {
      return 'Past';
    } else if (difference < 60) {
      return `${difference} min`;
    } else {
      const hours = Math.floor(difference / 60);
      return `${hours} hr`;
    }
  };
  return (
    <div className="flex flex-row">
      <div className="mr-6">
        <p className="text-sm">{time}</p>
        <p className="text-xs">{formatTimeDifference(timeDifference)}</p>
      </div>
      <div className="w-1 h-8 mr-1 bg-teal-400" />
      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className="text-xs">{location}</p>
      </div>
    </div>
  );
}

export default function OutlookCalendar() {
  const currentTime = getFullFormatDate(useClock());

  return (
    <div className="h-[164px] w-[344px] bg-white dark:bg-black rounded-2xl p-4 shadow-2xl">
      <div className="flex flex-row">
        <div className="mr-8">
          <p className="text-xs text-apple-blue-100">{currentTime.dayOfWeek}</p>
          <p className="text-4xl">
            {currentTime.dayOfMonth < 10 ? '0' : ''}
            {currentTime.dayOfMonth}
          </p>
        </div>
        <div>
          <p className="text-xs mb-2 text-slate-600">Today</p>
          <div className="flex flex-col">
            <OutlookItem
              time="17:00"
              title="Stand-Up"
              location="Microsoft Teams Meeting"
            />
            <div className="flex w-full my-1 h-0.5 bg-slate-400/20" />
            <OutlookItem
              time="18:00"
              title="FE-Sync"
              location="Microsoft Teams Meeting"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
