'use client';
import Boot from '@/components/Pages/Boot';
import Desktop from '@/components/Pages/Desktop';
import Login from '@/components/Pages/Login';
import Wallpapers from '@/components/atoms/Wallpapers';
import { useStore } from '@/lib/store';

export default function Home() {
  const { booted, logedIn, display } = useStore();
  const opacity = display * 0.01;

  if (!booted) {
    return <Boot />;
  } else if (!logedIn) {
    return (
      <div style={{ opacity }}>
        <Login />
        <Wallpapers />
      </div>
    );
  } else {
    return (
      <div style={{ opacity }}>
        <Desktop />
        <Wallpapers />
      </div>
    );
  }
}
