import CalenderWidget from '../atoms/CalenderWidget';
import WeatherWidget from '../atoms/WeatherWidget';
import Stocks from './Stocks';

export default function WidgetsBar() {
  return (
    <div className=" p-4 flex justify-end z-50">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row space-x-4">
          <CalenderWidget />
          <WeatherWidget />
        </div>
        <div className="h-[164px] w-[344px]  rounded-2xl p-4 shadow-2xl bg-slate-900"></div>
        <Stocks />
        <div className="flex justify-center">
          <div className="h-[24px] w-[98px] bg-clip-padding backdrop-filter backdrop-blur-md bg-neutral-50/50 rounded-2xl shadow-2xl flex items-center justify-center">
            <p className="text-center text-xs text-slate-600">Edit widgets</p>
          </div>
        </div>
      </div>
    </div>
  );
}
