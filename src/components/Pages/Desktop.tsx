import useScreenSize from '@/hooks/useScreenSize';
import Window from '../Apps/Window';
import Dock from '../Dock/Dock';
import Navbar from '../Navbar/Navbar';

export default function Desktop() {
  const state = useScreenSize();

  console.log(state.scrHeight, state.scrWidth);

  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ height: `${state.scrHeight}px`, width: `${state.scrWidth}px` }}
    >
      <Navbar />
      <Window />
      <Dock />
    </div>
  );
}
