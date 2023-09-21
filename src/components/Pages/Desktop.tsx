import useAudio from '@/hooks/useAudio';
import Dock from '../organisms/Dock';
import Navbar from '../organisms/Navbar';

export default function Desktop() {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  const { isPlaying, togglePlayPause } = useAudio('/music/Stockholmsvy.mp3');

  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <Navbar />
      <button onClick={togglePlayPause}>
        <p>{isPlaying ? 'isPlaying' : 'isNotPlaying'}</p>
      </button>
      <Dock />
    </div>
  );
}
