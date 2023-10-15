/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Image from 'next/image';
import Apple from '@/assets/icons/apple.svg';
import { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';
import useClock from '@/hooks/useClock';
import getFullFormatDate from '@/lib/Date/getFullFormatDate';
import axios from 'axios';
import { WeatherData } from '@/data/Weather/WeatherData';

export default function Boot() {
  const [progress, setProgress] = useState<number>(0);
  const [latitude, setLatitude] = useState<number>(59.3326);
  const [longitude, setLongitude] = useState<number>(18.0649);
  const { setBooted, setNameOfTheDay, setWeather } = useStore();

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => (prevProgress + 1) % 101);
      }, 50);

      return () => clearInterval(interval);
    } else {
      setTimeout(() => {
        setBooted(true);
      }, 1000);
    }
  }, [progress, setBooted]);

  const currentTime = useClock();
  const forrmatedTime = getFullFormatDate(currentTime);

  const currentDate =
    currentTime.getFullYear() +
    '/' +
    (currentTime.getMonth() + 1) +
    '/' +
    forrmatedTime.dayOfMonth;

  const apiUrl = `http://sholiday.faboul.se/dagar/v2.1/${currentDate}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        if (
          response.data &&
          response.data.dagar &&
          response.data.dagar.length > 0
        ) {
          const namesForToday = response.data.dagar[0].namnsdag;
          console.log(namesForToday);
          setNameOfTheDay(namesForToday);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER;
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );
        const weatherData: WeatherData = response.data;
        setWeather(weatherData);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
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
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-black justify-center">
      <Image src={Apple} alt="Apple logo" width={130} />
      <div className="h-1.5 w-64 rounded-full bg-neutral-700/80 border border-neutral-100/20 mt-[5%]">
        <div
          className="h-1 rounded-full bg-white border"
          style={{ width: `${progress}%`, transition: 'width 0.5s ease' }}
        ></div>
      </div>
    </div>
  );
}
