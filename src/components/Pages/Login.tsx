'use client';
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import { useStore } from '@/lib/store';
import { useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ProfileImage from '@/assets/images/ProfileImage.png';
import useClock from '@/hooks/useClock';
import getFullFormatDate from '@/lib/Date/getFullFormatDate';

export default function Login() {
  const [inputValue, setInputValue] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const currentTime = useClock();
  const timeObject = getFullFormatDate(currentTime);

  const { setLogedIn } = useStore();
  const inputAnimationControls = useAnimation();

  const password = 'RasmusRocks!!!';

  const handlePasswordValidation = () => {
    if (inputValue === password) {
      setIsPasswordCorrect(true);
      setLogedIn(true);
    } else {
      setIsPasswordCorrect(false);
      inputAnimationControls.start({ x: [-10, 10, -10, 10, 0] });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handlePasswordValidation();
    }
  };

  const handleClickOnScreen = () => {
    setShowInput(true);

    if (inputRef) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 500);
    }
  };

  return (
    <div className="h-screen flex flex-col" onClick={handleClickOnScreen}>
      <Navbar />
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col items-center mt-10">
          <text className="text-[2rem] font-bold text-teal-100 mix-blend-overlay text-shadow">
            {timeObject.dayOfWeek}, {timeObject.dayOfMonth} {timeObject.month}
          </text>
          <text className="text-[8rem] font-black text-teal-100 mix-blend-overlay -mt-8 text-shadow">
            {timeObject.time}
          </text>
        </div>
        <div className="flex flex-col items-center mb-36">
          <div className="w-20 h-20 bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 rounded-full p-2">
            <Image
              src={ProfileImage}
              alt="account image"
              className="rounded-full drop-shadow"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          {!showInput ? (
            <p className="text-white font-semibold text-sm text-shadow-lg h-6 px-2 mt-2">
              Rasmus Elmersson
            </p>
          ) : (
            <motion.div
              className={`flex items-center w-32 h-6 px-2 rounded-2xl bg-sky-200/30 backdrop-blur-sm mt-2 drop-shadow p-1 ${
                isPasswordCorrect ? '' : 'shake'
              }`}
              animate={inputAnimationControls}
            >
              <input
                ref={inputRef}
                placeholder="Enter Password"
                onBlur={handlePasswordValidation}
                onChange={handleInputChange}
                className="focus:none outline-none text-white bg-transparent placeholder-sky-50/80 text-shadow text-xs"
                onKeyDown={handleKeyPress}
              />
            </motion.div>
          )}

          {isPasswordCorrect ? (
            <p className="text-white text-shadow-lg mt-1 text-xs">
              Enter Password
            </p>
          ) : (
            <p className="text-white/80 text-shadow-lg mt-1 text-xs">
              Test {password}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
