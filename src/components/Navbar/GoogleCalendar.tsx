import useClock from '@/hooks/useClock';
import getFullFormatDate from '@/lib/Date/getFullFormatDate';
import GoogleCalendarView from './GoogleCalendarView';
import { useStore } from '@/lib/store';

export default function GoogleCalendar() {
  const { nameOfTheDay } = useStore();

  const currentTime = useClock();
  const forrmatedTime = getFullFormatDate(currentTime);

  return (
    <div className="h-[164px] w-[344px] bg-white dark:bg-black rounded-2xl p-3 shadow-2xl">
      <div className="flex flex-row">
        <div className="mr-10 space-y-1.5">
          <p className="text-xs text-slate-700">
            {forrmatedTime.month.toUpperCase()}
          </p>
          <GoogleCalendarView />
        </div>
        <div>
          <div className="flex flex-row bg-slate-200 p-1 rounded-full space-x-1 items-center mb-1 w-36">
            <div className="h-3 w-3 rounded-full bg-slate-600" />
            {nameOfTheDay.map((name, index) => (
              <div key={index} className="flex flex-row">
                <p className="text-xs">{name}</p>
                {index !== nameOfTheDay.length - 1 && (
                  <p className="text-xs">,</p>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-1">
            <div className="px-2 pb-[20px] pt-1 rounded-xl bg-purple-400">
              <p className="text-xs">(not set)</p>
              <p className="text-xs">15:15 - 16:15</p>
            </div>
            <div className="px-2 pb-[20px] pt-1 rounded-xl bg-purple-400">
              <p className="text-xs">(not set)</p>
              <p className="text-xs">15:15 - 16:15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
