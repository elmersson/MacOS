interface AnalogClockProps {
  time: Date;
}

export default function AnalogClock({ time }: AnalogClockProps) {
  const secondsStyle = {
    transform: `rotate(${time.getSeconds() * 6}deg)`,
    transition: time.getSeconds() === 0 ? 'none' : 'transform 1s linear',
  };
  const minutesStyle = {
    transform: `rotate(${time.getMinutes() * 6}deg)`,
    transition: time.getMinutes() === 0 ? 'none' : 'transform 60s linear',
  };
  const hoursStyle = {
    transform: `rotate(${(time.getHours() % 12) * 30}deg)`,
    transition: time.getHours() === 0 ? 'none' : 'transform 3600s linear',
  };

  const isDaytime = time.getHours() >= 8 && time.getHours() < 20;

  return (
    <div className="my-3">
      <div className="clock">
        <div
          className={`analog-clock ${isDaytime ? 'bg-white' : 'bg-slate-800'}`}
        >
          <div
            className="dial border-l border-red-500 border-solid border-opacity-100 h-[0.5px]"
            style={secondsStyle}
          />
          <div
            className={`dial border-l-2 ${
              isDaytime ? 'border-black' : 'border-whtie'
            }`}
            style={minutesStyle}
          />
          <div
            className={`dial hours border-l-2 ${
              isDaytime ? 'border-black' : 'border-whtie'
            }`}
            style={hoursStyle}
          />
        </div>
      </div>
    </div>
  );
}
