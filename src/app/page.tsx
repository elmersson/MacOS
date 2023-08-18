'use client';
import Boot from '@/components/Pages/Boot';
import Desktop from '@/components/Pages/Desktop';
import Login from '@/components/Pages/Login';
import Wallpapers from '@/components/atoms/Wallpapers';
import { useStore } from '@/lib/store';

export default function Home() {
  const { booted, logedIn } = useStore();

  if (!booted) {
    return <Boot />;
  } else if (!logedIn) {
    return (
      <>
        <Login />
        <Wallpapers />
      </>
    );
  } else {
    return (
      <>
        <Desktop />
        <Wallpapers />
      </>
    );
  }
}
