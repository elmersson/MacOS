import Battery from './Battery';
import { useStore } from '@/lib/store';
import ControlCenter from './ControlCenter';

import Apple from './Apple';
import AppMenu from './AppMenu';
import DateNTime from './DateNTime';
import HiddenNavbar from './HiddenNavbar';
import Wifi from './Wifi';

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
            ? 'bg-slate-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 dark:bg-slate-800/40 '
            : ''
        } py-2 px-2 relative`}
      >
        <div className="flex flex-row items-center">
          {logedIn && (
            <>
              <Apple />
              <AppMenu />
            </>
          )}
        </div>
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
