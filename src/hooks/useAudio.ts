import { useState, useEffect, useCallback } from 'react';

const useAudio = (initialAudioUrl: string) => {
  const [audio, setAudio] = useState(new Audio(initialAudioUrl));
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const play = useCallback(() => {
    audio.play().then(() => {
      setIsPlaying(true);
    });
  }, [audio]);

  const pause = useCallback(() => {
    audio.pause();
    setIsPlaying(false);
  }, [audio]);

  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  const setAudioSource = useCallback((newAudioUrl: string) => {
    const newAudio = new Audio(newAudioUrl);
    newAudio.volume = volume;
    setAudio(newAudio);
    setIsPlaying(false);
  }, [volume]);

  const setAudioVolume = useCallback((newVolume: number) => {
    if (newVolume >= 0 && newVolume <= 1) {
      audio.volume = newVolume;
      setVolume(newVolume);
    }
  }, [audio]);

  useEffect(() => {
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [audio]);

  return {
    audio,
    isPlaying,
    volume,
    play,
    pause,
    togglePlayPause,
    setAudioSource,
    setAudioVolume,
  };
};

export default useAudio;
