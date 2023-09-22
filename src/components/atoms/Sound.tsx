import { useStore } from '@/lib/store';
import { MdWifiTethering } from 'react-icons/md';

interface SoundProps {
  // eslint-disable-next-line no-unused-vars
  setAudioVolume: (newVolume: number) => void;
}
export default function Sound({ setAudioVolume }: SoundProps) {
  const { airdrop, setAirdrop, volume, setVolume } = useStore();

  const handleAirdropClick = () => {
    setAirdrop(!airdrop);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(event.target.value, 10);
    setVolume(newVolume);
    setAudioVolume(newVolume / 100);
  };

  return (
    <div className="rounded-md px-3 py-2 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 shadow-md">
      <div className="space-y-2 mb-2">
        <p className="text-xs font-bold">Sound {volume}</p>
        <div className="flex flex-row space-x-2 justify-center items-center">
          <div className="flex w-full py-1 justify-center items-center">
            <input
              className="w-full grow rounded-xl overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 appearance-none sound-slider"
              type="range"
              min={0}
              max={100}
              step={1}
              value={volume}
              onChange={handleVolumeChange}
            />
            <style>
              {`
                input.sound-slider::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  appearance: none;
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background: white;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
                }

                input.sound-slider::-webkit-slider-runnable-track {
                  background: linear-gradient(to right, white 0%, white ${volume}%, transparent ${volume}%, transparent 100%);
                }
              `}
            </style>
          </div>

          <div
            className={`h-6 w-7 ${
              airdrop
                ? 'bg-[#167AE5]'
                : 'bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30'
            } rounded-full flex justify-center items-center`}
            onClick={handleAirdropClick}
          >
            <MdWifiTethering style={{ color: 'white', fontSize: '15px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
