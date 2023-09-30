import { useStore } from '@/lib/store';

export default function Display() {
  const { display, setDisplay } = useStore();

  const handleDisplayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(event.target.value, 10);
    setDisplay(newVolume);
  };

  return (
    <div className="rounded-md px-3 py-2 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 shadow-md">
      <div className="space-y-2 mb-2">
        <p className="text-xs font-bold">Display {display}</p>
        <div className="flex flex-row space-x-2 justify-center items-center">
          <div className="flex w-full py-1 justify-center items-center">
            <input
              className="w-full grow rounded-xl overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 appearance-none display-slider"
              type="range"
              min={0}
              max={100}
              step={1}
              value={display}
              onChange={handleDisplayChange}
            />
            <style>
              {`
                  input.display-slider::-webkit-slider-runnable-track {
                    background: linear-gradient(to right, white 0%, white ${display}%, transparent ${display}%, transparent 100%);
                  }
                `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
}
