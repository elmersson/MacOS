import ThemeSwitcher from '../atoms/ThemeSwitcher';
import Dock from '../organisms/Dock';
import Navbar from '../organisms/Navbar';
import Window from '../molecules/Window';
import WidgetsBar from '../molecules/WidgetsBar';

export default function Desktop() {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  console.log(width, height);
  return (
    <div
      className="flex flex-col"
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <Navbar />
      <ThemeSwitcher />
      <WidgetsBar />
      {/* <Window /> */}
      <Dock />
    </div>
  );
}
