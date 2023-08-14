'use client';
import Image from 'next/image';
import Github from '@/assets/apps/github.png';
import Finder from '@/assets/apps/finder.png';
import Mail from '@/assets/apps/MAIL.png';
import LaunchPad from '@/assets/apps/launchpad.png';
import VsCode from '@/assets/apps/vscode.png';
import Safari from '@/assets/apps/safari.png';
import Iterm2 from '@/assets/apps/iterm2.png';
import Notes from '@/assets/apps/notes.png';

export default function Dock() {
  return (
    <div className="fixed bottom-2 left-0 w-full flex justify-center">
      <ul className="bg-clip-padding backdrop-filter backdrop-blur-md bg-neutral-300/10 border border-neutral-100/20 flex rounded-3xl p-1">
        <li className="flex justify-center">
          <div className="flex flex-col items-center">
            <Image src={Finder} alt="github" className="w-14" />
            <div className="h-1 w-1 m-0 rounded-full bg-accent-2 mt-1"></div>
          </div>
        </li>
        <li className="flex justify-center">
          <div className="flex flex-col items-center">
            <Image src={LaunchPad} alt="github" className="w-14" />
            <div className="h-1 w-1 rounded-full mt-1"></div>
          </div>
        </li>
        <li className="flex justify-center">
          <div className="flex flex-col items-center">
            <Image src={Safari} alt="github" className="w-14" />
            <div className="h-1 w-1 rounded-full mt-1"></div>
          </div>
        </li>
        <li className="flex justify-center">
          <div className="flex flex-col items-center">
            <Image src={Mail} alt="github" className="w-14" />
            <div className="h-1 w-1 rounded-full mt-1"></div>
          </div>
        </li>
        <li className="flex justify-center">
          <div className="flex flex-col items-center">
            <Image src={Iterm2} alt="github" className="w-14" />
            <div className="h-1 w-1 rounded-full mt-1"></div>
          </div>
        </li>
        <li className="flex justify-center">
          <div className="flex flex-col items-center">
            <Image src={VsCode} alt="github" className="w-14" />
            <div className="h-1 w-1 rounded-full mt-1"></div>
          </div>
        </li>
        <li className="flex justify-center">
          <div className="flex flex-col items-center">
            <Image src={Github} alt="github" className="w-14" />
            <div className="h-1 w-1 rounded-full mt-1"></div>
          </div>
        </li>
        <li className="flex justify-center">
          <div className="flex flex-col items-center">
            <Image src={Notes} alt="github" className="w-14" />
            <div className="h-1 w-1 rounded-full bg-slate-50 dark:bg-slate-900 mt-1"></div>
          </div>
        </li>
      </ul>
    </div>
  );
}
