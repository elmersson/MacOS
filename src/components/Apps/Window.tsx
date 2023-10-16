import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { RxCross2 } from 'react-icons/rx';
import { PiMinusBold } from 'react-icons/pi';
import { RiExpandLeftRightFill } from 'react-icons/ri';

export default function Window() {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 100,
    y: 100,
  });

  const handleDragStop = (_e: any, d: { x: number; y: number }) => {
    setPosition({
      x: d.x,
      y: d.y,
    });
  };

  return (
    <Rnd
      bounds="parent"
      size={{ width: 800, height: 800 }}
      position={{ x: position.x, y: position.y }}
      onDragStop={handleDragStop}
    >
      <div className="items-center justify-center bg-slate-50/90 rounded-t-md py-1 flex flex-row">
        <div
          className="flex items-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="rounded-full h-3 w-3 bg-[#FF6157] border-[#E24640] mx-2 flex justify-center items-center">
            {hovered && (
              <RxCross2
                style={{ color: 'text-slate-900', fontSize: '0.55rem' }}
              />
            )}
          </div>
          <div className="rounded-full h-3 w-3 bg-[#FFC12F] border-[#DFA023] mr-2 flex justify-center items-center">
            {hovered && (
              <PiMinusBold
                style={{ color: 'text-slate-900', fontSize: '0.55rem' }}
              />
            )}
          </div>
          <div className="rounded-full h-3 w-3 bg-[#2ACB42] border-[#1BAC2C] flex justify-center items-center">
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
        <p className="flex-1 text-center">Window</p>
      </div>
      <div className="w-full h-[500px] bg-black"></div>
    </Rnd>
  );
}
