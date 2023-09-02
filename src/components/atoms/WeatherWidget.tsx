import axios from 'axios';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface WeatherResponse {
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  name: string;
}

const capitalizeWords = (str: string) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [longitude, setLongitude] = useState<number>(59.3326);
  const [latitude, setLatitude] = useState<number>(18.0649);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER;
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );
        const weatherData: WeatherResponse = {
          main: {
            temp: response.data.main.temp,
            temp_max: response.data.main.temp_max,
            temp_min: response.data.main.temp_min,
          },
          weather: response.data.weather,
          name: response.data.name,
        };
        setWeather(weatherData);
      } catch (err) {
        console.error(err);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          fetchWeatherData();
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      fetchWeatherData();
    }
  }, [latitude, longitude]);

  return (
    <div className="h-[164px] w-[164px] rounded-2xl p-4 shadow-2xl bg-gradient-to-b from-[#225385] to-[#92caf4]">
      <p className="font-semibold text-base text-white">{weather?.name}</p>
      {weather && (
        <>
          <p className="text-4xl text-white">{`${weather.main.temp.toFixed(
            0
          )}°`}</p>
          <Image
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="icon"
            width={20}
            height={20}
          />
          <p className="text-sm mt-2 text-white">
            {capitalizeWords(weather.weather[0].description)}
          </p>
          <p className="text-xs text-white mb-1">{`H:${weather.main.temp_max.toFixed(
            0
          )}° L:${weather.main.temp_min.toFixed(0)}°`}</p>
        </>
      )}
    </div>
  );
}
