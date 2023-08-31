import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

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
      <div className="items-center justify-center bg-slate-50/80 rounded-t-md py-1 flex flex-row">
        <div
          className="flex items-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="rounded-full h-3 w-3 bg-[#FF6157] border-[#E24640] mx-2 flex justify-center items-center">
            {hovered && <p className="text-slate-800 text-xs">x</p>}
          </div>
          <div className="rounded-full h-3 w-3 bg-[#FFC12F] border-[#DFA023] mr-2 flex justify-center items-center">
            {hovered && <p className="text-slate-800 text-xs">-</p>}
          </div>
          <div className="rounded-full h-3 w-3 bg-[#2ACB42] border-[#1BAC2C] flex justify-center items-center">
            {hovered && (
              <svg
                className="icon"
                viewBox="0 0 19 19"
                width={9}
                height={9}
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit={2}
              >
                <path d="M18.373 9.23L9.75.606V9.23h8.624zM.6 9.742l8.623 8.624V9.742H.599z" />
              </svg>
            )}
          </div>
        </div>
        <p className="flex-1 text-center">Window</p>
      </div>
    </Rnd>
  );
}