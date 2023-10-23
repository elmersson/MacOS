import { useStore } from '@/lib/store';
import { useEffect, useRef, useState } from 'react';

export default function Wallpapers() {
  const { logedIn, booted } = useStore();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSource, setVideoSource] = useState<string | null>(
    'https://sylvan.apple.com/Videos/P001_C005_UHD_SDR_2K_AVC.mov'
  );

  const handleVideoError = () => {
    setVideoSource(
      'http://sylvan.apple.com/Videos/P001_C005_UHD_SDR_2K_AVC.mov'
    );
  };

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      video.onerror = handleVideoError;

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
        src={videoSource || undefined}
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
