'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useStore } from '@/lib/store';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { setDarkmode } = useStore();

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
    <div>
      The current theme is: {theme}
      <br />
      <button onClick={() => handleClick()}>Light Mode</button>
    </div>
  );
};

export default ThemeSwitcher;
