import DateNTime from '../atoms/DateNTime';
import Battery from '../molecules/Battery';
import { useStore } from '@/lib/store';
import ControlCenter from '../molecules/ControlCenter';
import HiddenNavbar from '../atoms/HiddenNavbar';
import Wifi from '../atoms/Wifi';
import Apple from '../molecules/Apple';

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
        <div className="flex items-center">{logedIn && <Apple />}</div>
        <div className="flex items-center">
          {logedIn && <HiddenNavbar />}
          <Battery />
          <Wifi />
          {logedIn && <ControlCenter />}
          <DateNTime />
        </div>
      </div>
    </>
  );
}
