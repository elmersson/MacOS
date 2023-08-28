import ThemeSwitcher from '../atoms/ThemeSwitcher';
import Dock from '../organisms/Dock';
import Navbar from '../organisms/Navbar';
import Window from '../molecules/Window';

export default function Desktop() {
  return (
    <div>
      <Navbar />
      <ThemeSwitcher />
      <Window />
      <Dock />
    </div>
  );
}
