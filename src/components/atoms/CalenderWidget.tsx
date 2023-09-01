export default function CalenderWidget() {
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
    <div className="h-[164px] w-[164px] bg-white rounded-2xl p-4 shadow-2xl dark:bg-slate-900 ">
      <p className="text-red-600 font-semibold text-xs">{dayOfWeek}</p>
      <p className="text-3xl">{currentDate.getDate()}</p>
      <p className="text-xs text-slate-300 text-center mt-6">No events today</p>
    </div>
  );
}
