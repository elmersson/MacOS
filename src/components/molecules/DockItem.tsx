import Image from 'next/image';
import { AppData } from '@/data/Apps';

export default function DockItem({ id, title, img }: AppData) {
  return (
    <li className="flex justify-center" id={id}>
      <div className="flex flex-col items-center">
        <Image src={img} alt={title} className="w-14" />
        <div className="h-1 w-1 m-0 rounded-full bg-slate-950/80 dark:bg-slate-50/80 mt-1"></div>
      </div>
    </li>
  );
}
