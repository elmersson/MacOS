import Image from 'next/image';
import Navbar from '../organisms/Navbar';
import Cancel from '../../assets/icons/cancel-button-svgrepo-com.svg';
import { useStore } from '@/lib/store';
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AccountImage from '@/assets/images/Rasmus bakgrund.jpg';

export default function Login() {
  const [inputValue, setInputValue] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const { setLogedIn, setBooted } = useStore();
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

  const handleClick = () => {
    setBooted(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-80">
        <div className="w-48 h-48 bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 rounded-full p-2">
          <Image
            src={AccountImage}
            alt="account image"
            className="rounded-full drop-shadow"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <p className="text-white font-semibold text-2xl text-shadow-lg mt-12">
          Rasmus Elmersson
        </p>
        <motion.div
          className={`w-44 h-8 px-4 rounded-2xl bg-sky-200/30 backdrop-blur-sm mt-4 drop-shadow p-1 ${
            isPasswordCorrect ? '' : 'shake'
          }`}
          animate={inputAnimationControls}
        >
          <input
            placeholder="Enter Password"
            onBlur={handlePasswordValidation}
            onChange={handleInputChange}
            className=" focus:none outline-none text-white bg-transparent placeholder-sky-50/80 text-shadow"
            onKeyDown={handleKeyPress}
          />
        </motion.div>
        {!isPasswordCorrect && (
          <p className="text-white/80 text-shadow-lg mt-2 text-xs">
            Test {password}
          </p>
        )}
        <p className="text-white text-shadow-lg mt-2">Enter Password</p>
        <div className="flex flex-col items-center mt-80">
          <div
            className="w-9 h-9 bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 rounded-full p-2"
            onClick={handleClick}
          >
            <Image src={Cancel} alt="cancel" />
          </div>
          <p className="text-white text-shadow text-sm mt-2">Cancel</p>
        </div>
      </div>
    </div>
  );
}
