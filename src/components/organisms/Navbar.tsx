import DateNTime from '../atoms/DateNTime';
import Battery from '../molecules/Battery';
import Apple from '../../assets/icons/apple.svg';
import ControlCenter from '../../assets/icons/controlCenter.svg';
import Wifi from '../../assets/icons/wifi.svg';
import Notch from '../../assets/ui/notch.svg';
export default function Navbar() {
  return (
    <div className="flex justify-between bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 pb-2">
      <div className="flex items-center">
        <Apple />
      </div>
      <div>
        <Notch />
      </div>
      <div className="flex items-center">
        <Battery />
        <Wifi />
        <ControlCenter />
        <DateNTime />
      </div>
    </div>
  );
}
