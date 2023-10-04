import useClock from '@/hooks/useClock';

interface getMonthArrayData {
  daysInMonthArray: number[];
  firstDayOfMonthIndex: number;
  lastDayOfMonthIndex: number;
}
function getMonthArray(): getMonthArrayData {
  const date = new Date();
  const firstDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  const lastDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const lastDayOfLastMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const lastDayOfMonthDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const daysInMonthArray: number[] = [];

  const offset = (firstDayOfMonth + 6) % 7;

  const firstDayOfMonthIndex = offset;

  for (let i = lastDayOfLastMonth - offset + 1; i <= lastDayOfLastMonth; i++) {
    daysInMonthArray.push(i);
  }

  for (let i = 1; i <= lastDayOfMonth; i++) {
    daysInMonthArray.push(i);
  }

  while (daysInMonthArray.length < 42) {
    daysInMonthArray.push(
      daysInMonthArray.length - (lastDayOfMonth + offset) + 1
    );
  }

  return {
    daysInMonthArray,
    firstDayOfMonthIndex,
    lastDayOfMonthIndex: (lastDayOfMonthDay + 6) % 7,
  };
}

export default function GoogleCalendarView() {
  const currentTime = useClock();

  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day, index) => (
      <span
        key={index}
        className="w-4 h-4 flex justify-center items-center -my-0.5"
      >
        <p className="text-3xs">{day}</p>
      </span>
    ));
  };

  const renderCalendarDates = () => {
    const { daysInMonthArray, firstDayOfMonthIndex, lastDayOfMonthIndex } =
      getMonthArray();

    const rows = [];
    for (let i = 0; i < daysInMonthArray.length; i += 7) {
      const row = daysInMonthArray.slice(i, i + 7);
      rows.push(row);
    }

    return rows.map((row, rowIndex) => (
      <div key={rowIndex} className="flex flex-row w-[130px] justify-between">
        {row.map((date, columnIndex) => {
          const isFirstRowBeforeMonth =
            rowIndex === 0 && columnIndex < firstDayOfMonthIndex;
          const isLastRowAfterMonth =
            rowIndex === rows.length - 1 && columnIndex > lastDayOfMonthIndex;
          return (
            <span
              key={date}
              className={`w-4 h-4 flex justify-center items-center -my-0.5 ${
                date === currentTime.getDate() &&
                !isFirstRowBeforeMonth &&
                !isLastRowAfterMonth
                  ? 'bg-blue-400 text-white rounded-full'
                  : ''
              }`}
            >
              <p
                className={`text-3xs ${
                  isFirstRowBeforeMonth || isLastRowAfterMonth
                    ? 'text-slate-400'
                    : ''
                }`}
              >
                {date}
              </p>
            </span>
          );
        })}
      </div>
    ));
  };

  return (
    <>
      <div className="flex flex-row w-[130px] justify-between">
        {renderDaysOfWeek()}
      </div>
      {renderCalendarDates()}
    </>
  );
}
