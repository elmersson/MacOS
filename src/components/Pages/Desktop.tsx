import ThemeSwitcher from '../atoms/ThemeSwitcher';
import Dock from '../organisms/Dock';
import Navbar from '../organisms/Navbar';

export default function Desktop() {
  return (
    <div>
      <Navbar />
      <ThemeSwitcher />
      <p className="text-lg text-accent-2">Hej på deg</p>
      <Dock />
    </div>
  );
}
