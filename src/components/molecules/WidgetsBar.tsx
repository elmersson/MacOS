export default function WidgetsBar() {
  const currentDate = new Date();
  const dayOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][currentDate.getDay()];

  return (
    <div className=" p-4">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row space-x-4">
          <div className="h-[164px] w-[164px] bg-white rounded-2xl p-4 shadow-2xl dark:bg-slate-900 ">
            <p className="text-red-600 font-semibold text-xs">{dayOfWeek}</p>
            <p className="text-3xl">{currentDate.getDate()}</p>
            <p className="text-xs text-slate-300 text-center mt-6">
              No events today
            </p>
          </div>
          <div className="h-[164px] w-[164px] rounded-2xl p-4 shadow-2xl bg-slate-500 ">
            <p className=" font-semibold text-base text-white">Bandhagen</p>
            <p className="text-4xl text-white">20°</p>
            <p className="text-sm mt-8 text-white">Partly Cloudy</p>
            <p className="text-xs text-white">H:20° L:14°</p>
          </div>
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
