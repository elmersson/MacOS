import CalenderWidget from '../atoms/CalenderWidget';
import WeatherWidget from '../atoms/WeatherWidget';

export default function WidgetsBar() {
  return (
    <div className=" p-4">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row space-x-4">
          <CalenderWidget />
          <WeatherWidget />
        </div>
        <div className="h-[164px] w-[344px]  rounded-2xl p-4 shadow-2xl bg-slate-900"></div>
        <div className="h-[164px] w-[344px] bg-black rounded-2xl p-4 shadow-2xl"></div>
        <div className="h-[24px] w-[128px] bg-clip-padding backdrop-filter backdrop-blur-md bg-neutral-300/10 border border-neutral-100/20 rounded-2xl p-4 shadow-2xl flex items-center justify-center">
          <p className="text-center text-xs">Edit widgets</p>
        </div>
      </div>
    </div>
  );
}
