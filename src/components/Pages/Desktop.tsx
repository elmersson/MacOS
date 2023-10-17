import Window from '../Apps/Window';
import Dock from '../Dock/Dock';
import Navbar from '../Navbar/Navbar';

export default function Desktop() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar />
      <Window />
      <Dock />
    </div>
  );
}
