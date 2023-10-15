import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';
import { useStore } from '@/lib/store';

const capitalizeWords = (str: string) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

function extractHour(dtTxt: string): number {
  // eslint-disable-next-line no-unused-vars
  const [datePart, timePart] = dtTxt.split(' ');

  const [hourStr] = timePart.split(':');

  const hour = parseInt(hourStr, 10);

  return hour;
}

export default function WeatherWidget() {
  const { weather } = useStore();

  if (!weather || !weather.list) {
    return null;
  }

  const weatherSlice = weather.list.slice(0, 6);

  return (
    <div className="h-[164px] w-[344px] rounded-2xl pt-4 px-4 pb-2 shadow-2xl bg-weather-dark">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div>
            <div className="flex flex-row text-white items-center space-x-1 text-shadow-lg">
              <p className="font-semibold text-base text-white">
                {weather.city.name || 'Stockholm'}
              </p>
              <FaLocationArrow size="0.6em" />
            </div>
            <p className="text-4xl text-white mb-2 text-shadow-lg">
              {weather.list[0].main.temp.toFixed(0)}°
            </p>
          </div>
          <div className="flex flex-col">
            <Image
              src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
              alt="icon"
              width={25}
              height={25}
              style={{ marginLeft: 'auto' }}
            />
            <p className="text-sm mt-1 font-bold text-white text-right text-shadow">
              {capitalizeWords(weather.list[0].weather[0].description)}
            </p>
            <p className="text-xs text-white mb-1 text-shadow text-right font-bold">{`H:${weather.list[0].main.temp_max.toFixed(
              0
            )}° L:${weather.list[0].main.temp_min.toFixed(0)}°`}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-1">
          {weatherSlice.map((weatherItem) => (
            <div key={weatherItem.dt}>
              <div className="flex flex-col items-center space-y-1">
                <p className=" text-slate-100/80 text-xs">
                  {extractHour(weatherItem.dt_txt)}
                </p>
                <Image
                  src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`}
                  alt="icon"
                  width={25}
                  height={25}
                />
                <p className="text-white text-xs font-bold text-shadow">
                  {weatherItem.main.temp.toFixed(0)}°
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
