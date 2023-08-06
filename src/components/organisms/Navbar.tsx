import DateNTime from '../atoms/DateNTime';
import Battery from '../molecules/Battery';
import Apple from '../../assets/icons/apple.svg';
import ControlCenter from '../../assets/icons/controlCenter.svg';
import Wifi from '../../assets/icons/wifi.svg';
import Notch from '../../assets/ui/notch.svg';
import Image from 'next/image';
export default function Navbar() {
  return (
    <div className="flex justify-between bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 pb-2 px-2 items-center">
      <div className="flex items-center">
        <Image src={Apple} alt="apple logo" className="drop-shadow mx-2" />
      </div>
      <div>
        <Image src={Notch} alt="notch" />
      </div>
      <div className="flex items-center">
        <Battery />
        <Image src={Wifi} alt="apple logo" className="drop-shadow mx-2" />
        <Image
          src={ControlCenter}
          alt="apple logo"
          className="drop-shadow mx-2"
        />
        <DateNTime />
      </div>
    </div>
  );
}
