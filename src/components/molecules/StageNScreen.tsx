import { IoApps } from 'react-icons/io5';
import { TbBoxMultiple } from 'react-icons/tb';

export default function StageNScreen() {
  return (
    <div className="flex flex-row space-x-2">
      <div className="rounded-md px-3 py-1 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 shadow-md flex justify-center items-center flex-col">
        <div className="flex justify-center items-center py-1">
          <IoApps style={{ color: 'black', fontSize: '24px' }} />
        </div>
        <div>
          <p className="text-xxs text-center">Stage Manager</p>
        </div>
      </div>
      <div className="rounded-md px-3 py-1 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 shadow-md flex justify-center items-center flex-col">
        <div className="flex justify-center items-center py-1">
          <TbBoxMultiple style={{ color: 'black', fontSize: '24px' }} />
        </div>
        <div>
          <p className="text-xxs text-center">Screen Mirroring</p>
        </div>
      </div>
    </div>
  );
}
