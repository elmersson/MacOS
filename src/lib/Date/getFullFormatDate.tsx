export default function getFullFormatDate(now: Date): {
  dayOfWeek: string;
  dayOfMonth: number;
  month: string;
  time: string;
} {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayOfWeek = daysOfWeek[now.getDay()];
  const dayOfMonth = now.getDate();

  const month = months[now.getMonth()];

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return {
    dayOfWeek: dayOfWeek,
    dayOfMonth: dayOfMonth,
    month: month,
    time: `${hours}:${minutes}`,
  };
}
