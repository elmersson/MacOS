import React, { useState } from 'react';

export default function Window() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex items-center bg-slate-50/80 rounded-t-md py-1">
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
  );
}
