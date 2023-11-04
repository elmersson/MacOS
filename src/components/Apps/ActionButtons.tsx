import { useState } from 'react';
import { PiMinusBold } from 'react-icons/pi';
import { RiExpandLeftRightFill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

interface ActionButtonsProps {
  exit: () => void;
  fullSize: () => void;
}

export default function ActionButtons({ exit, fullSize }: ActionButtonsProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="rounded-full h-3 w-3 bg-[#FF6157] border-[#E24640] mx-2 flex justify-center items-center"
        onClick={exit}
      >
        {hovered && (
          <RxCross2 style={{ color: 'text-slate-900', fontSize: '0.55rem' }} />
        )}
      </div>
      <div className="rounded-full h-3 w-3 bg-[#FFC12F] border-[#DFA023] mr-2 flex justify-center items-center">
        {hovered && (
          <PiMinusBold
            style={{ color: 'text-slate-900', fontSize: '0.55rem' }}
          />
        )}
      </div>
      <div
        className="rounded-full h-3 w-3 bg-[#2ACB42] border-[#1BAC2C] flex justify-center items-center"
        onClick={fullSize}
      >
        {hovered && (
          <RiExpandLeftRightFill
            style={{
              color: 'text-slate-900',
              fontSize: '0.55rem',
              transform: 'rotate(45deg)',
            }}
          />
        )}
      </div>
    </div>
  );
}
