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

  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <Navbar />
      <Dock />
    </div>
  );
}
