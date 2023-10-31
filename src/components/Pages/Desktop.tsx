import VSCode from '../Apps/VSCode';
import Dock from '../Dock/Dock';
import Navbar from '../Navbar/Navbar';

export default function Desktop() {
  return (
    <div className="flex">
      <Navbar />
      <VSCode />
      <Dock />
    </div>
  );
}
