import { useStore } from '@/lib/store';
import { useEffect, useRef } from 'react';

export default function Wallpapers() {
  const { logedIn, booted } = useStore();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      if (booted && !logedIn) {
        video.play();
      } else {
        video.playbackRate = 0.5;

        setTimeout(() => {
          video.pause();
          video.playbackRate = 1;
        }, 2000);
      }
    }
  }, [booted, logedIn]);

  return (
    <div className={`absolute inset-0 -z-50 bg-black`}>
      <video
        ref={videoRef}
        src="https://sylvan.apple.com/Videos/P001_C005_UHD_SDR_2K_AVC.mov"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        autoPlay
        loop
        playsInline
        muted
      ></video>
    </div>
  );
}
