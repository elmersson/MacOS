import { StaticImageData } from 'next/image';
import Finder from '@/assets/apps/finder.png';
import LaunchPad from '@/assets/apps/launchpad.png';
import Safari from '@/assets/apps/safari.png';
import Mail from '@/assets/apps/MAIL.png';
import Iterm2 from '@/assets/apps/iterm2.png';
import VsCode from '@/assets/apps/vscode.png';
import Github from '@/assets/apps/github.png';
import Notes from '@/assets/apps/notes.png';

export interface AppData {
  id: string;
  title: string;
  img: StaticImageData;
  url?: string;
}

const apps: AppData[] = [
  {
    id: 'finder',
    title: 'Finder',
    img: Finder,
  },
  {
    id: 'launchpad',
    title: 'Launchpad',
    img: LaunchPad,
  },
  {
    id: 'safari',
    title: 'Safari',
    img: Safari,
  },
  {
    id: 'mail',
    title: 'Mail',
    img: Mail,
  },
  {
    id: 'iterm2',
    title: 'Iterm2',
    img: Iterm2,
  },
  {
    id: 'visual_studio_code',
    title: 'Visual Studio Code',
    img: VsCode,
  },
  {
    id: 'github',
    title: 'Github',
    img: Github,
    url: 'https://github.com/elmersson',
  },
  {
    id: 'notes',
    title: 'Notes',
    img: Notes,
  },
];

export default apps;
