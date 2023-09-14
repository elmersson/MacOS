import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { IoSunny } from 'react-icons/io5';
import { IoMdMoon } from 'react-icons/io';
import { useStore } from '@/lib/store';

export default function Darkmode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { darkmode, setDarkmode } = useStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function handleClick() {
    if (theme === 'light') {
      setTheme('dark');
      setDarkmode(true);
    } else {
      setTheme('light');
      setDarkmode(false);
    }
  }
  return (
    <div
      className="rounded-md px-3 py-4 w-[100%] h-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 shadow-md flex flex-row items-center space-x-2"
      onClick={handleClick}
    >
      <div className="h-7 w-7 bg-[#167AE5] rounded-full flex justify-center items-center">
        {darkmode ? (
          <IoMdMoon style={{ color: 'white' }} />
        ) : (
          <IoSunny style={{ color: 'white' }} />
        )}
      </div>
      <div>
        <p className="text-xs font-semibold">{darkmode ? 'Dark' : 'Light'}</p>
      </div>
    </div>
  );
}
