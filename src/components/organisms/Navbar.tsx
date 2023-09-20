import DateNTime from '../atoms/DateNTime';
import Battery from '../molecules/Battery';
import Apple from '../../assets/icons/apple.svg';
import Wifi from '../../assets/icons/wifi.svg';
import Image from 'next/image';
import { useStore } from '@/lib/store';
import ControlCenter from '../molecules/ControlCenter';
import HiddenNavbar from '../atoms/HiddenNavbar';

export default function Navbar() {
  const { logedIn } = useStore();
  return (
    <>
      {/* <div className="fixed inset-x-0 top-0 flex justify-center -z-50">
        <Image src={Notch} alt="notch" height={40} />
      </div> */}
      <div
        className={`flex justify-between ${
          logedIn
            ? 'bg-slate-800 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 dark:bg-slate-800/40'
            : ''
        } py-2 px-2 relative`}
      >
        <div className="flex items-center">
          {logedIn && (
            <Image
              src={Apple}
              alt="apple logo"
              height={25}
              className="drop-shadow mx-2"
            />
          )}
        </div>
        <div className="flex items-center">
          {logedIn && <HiddenNavbar />}
          <Battery />
          <div className="px-2.5">
            <Image
              src={Wifi}
              height={13}
              alt="wifi logo"
              className="drop-shadow"
            />
          </div>
          <ControlCenter />
          <DateNTime />
        </div>
      </div>
    </>
  );
}
