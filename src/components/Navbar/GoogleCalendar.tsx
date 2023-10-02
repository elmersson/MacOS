import useClock from '@/hooks/useClock';
import getFullFormatDate from '@/lib/Date/getFullFormatDate';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface NamesDayData {
  cachetid: string;
  version: string;
  uri: string;
  startdatum: string;
  slutdatum: string;
  dagar: Days[];
}

interface Days {
  datum: string;
  veckodag: string;
  arbetsfriDag: string;
  rödDag: string;
  vecka: string;
  dagIVecka: string;
  namnsdag: string[];
  flaggDag: string;
}

export default function GoogleCalendar() {
  const [data, setData] = useState<NamesDayData>();
  const [names, setNames] = useState<string[]>([]);
  const [isGet, setIsGet] = useState<boolean>(false);

  const currentTime = useClock();
  const forrmatedTime = getFullFormatDate(currentTime);

  useEffect(() => {
    const currentDate =
      currentTime.getFullYear() +
      '/' +
      (currentTime.getMonth() + 1) +
      '/' +
      forrmatedTime.dayOfMonth;
    const apiUrl = `http://sholiday.faboul.se/dagar/v2.1/${currentDate}`;

    console.log(apiUrl);

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        if (data && data.dagar && data.dagar.length > 0) {
          const namesForToday = data.dagar[0].namnsdag;
          const reversedNamesForToday = [...namesForToday].reverse();
          setNames(reversedNamesForToday);
          setIsGet(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGet]);

  return (
    <div className="h-[164px] w-[344px] bg-white dark:bg-black rounded-2xl p-4 shadow-2xl">
      <div className="flex flex-row">
        <div className="mr-12 space-y-1.5">
          <p className="text-xs text-slate-700">
            {forrmatedTime.month.toUpperCase()}
          </p>
          <div className="flex flex-row space-x-3">
            <p className="text-xxs">M</p>
            <p className="text-xxs">T</p>
            <p className="text-xxs">W</p>
            <p className="text-xxs">T</p>
            <p className="text-xxs">F</p>
            <p className="text-xxs">S</p>
            <p className="text-xxs">S</p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="text-xxs text-slate-700/50">25</p>
            <p className="text-xxs text-slate-700/50">26</p>
            <p className="text-xxs text-slate-700/50">27</p>
            <p className="text-xxs text-slate-700/50">28</p>
            <p className="text-xxs text-slate-700/50">29</p>
            <p className="text-xxs text-slate-700/50">30</p>
            <p className="text-xxs ">1</p>
          </div>
          <div className="flex flex-row space-x-3.5">
            <span className="text-xxs bg-blue-500 p-1 rounded-full">2</span>
            <p className="text-xxs">3</p>
            <p className="text-xxs">4</p>
            <p className="text-xxs">5</p>
            <p className="text-xxs">6</p>
            <p className="text-xxs">7</p>
            <p className="text-xxs">8</p>
          </div>
          <div className="flex flex-row space-x-2.5">
            <p className="text-xxs">9</p>
            <p className="text-xxs">10</p>
            <p className="text-xxs">11</p>
            <p className="text-xxs">12</p>
            <p className="text-xxs">13</p>
            <p className="text-xxs">14</p>
            <p className="text-xxs">15</p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="text-xxs">16</p>
            <p className="text-xxs">17</p>
            <p className="text-xxs">18</p>
            <p className="text-xxs">19</p>
            <p className="text-xxs">20</p>
            <p className="text-xxs">21</p>
            <p className="text-xxs">22</p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="text-xxs">23</p>
            <p className="text-xxs">24</p>
            <p className="text-xxs">25</p>
            <p className="text-xxs">26</p>
            <p className="text-xxs">27</p>
            <p className="text-xxs">28</p>
            <p className="text-xxs">29</p>
          </div>
          <div className="flex flex-row space-x-3">
            <p className="text-xxs">30</p>
            <p className="text-xxs">31</p>
            <p className="text-xxs text-slate-700/50">1</p>
            <p className="text-xxs text-slate-700/50">2</p>
            <p className="text-xxs text-slate-700/50">3</p>
            <p className="text-xxs text-slate-700/50">4</p>
            <p className="text-xxs text-slate-700/50">S</p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row bg-slate-200 p-1 rounded-full space-x-1 items-center mb-1 w-36">
            <div className="h-3 w-3 rounded-full bg-slate-600" />
            {names.map((name, index) => (
              <div key={index} className="flex flex-row">
                <p className="text-xs">{name}</p>
                {index === name.length - 4 && (
                  <span className="text-xs">,</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-1">
            <div className="px-2 pb-4 pt-1 rounded-xl bg-purple-400">
              <p className="text-xs">(not set)</p>
              <p className="text-xs">15:15 - 16:15</p>
            </div>
            <div className="px-2 pb-4 pt-1 rounded-xl bg-purple-400">
              <p className="text-xs">(not set)</p>
              <p className="text-xs">15:15 - 16:15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
