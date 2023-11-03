import { useStore } from '@/lib/store';
import VSCode from '../Apps/VSCode';
import Dock from '../Dock/Dock';
import Navbar from '../Navbar/Navbar';

export default function Desktop() {
  const { showVSCode } = useStore();

  return (
    <div className="flex overflow-hidden no-scrollbar">
      <Navbar />
      {showVSCode && <VSCode />}
      <Dock />
    </div>
  );
}
