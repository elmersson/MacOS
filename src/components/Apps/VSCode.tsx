import React, { useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';
import { RxCross2 } from 'react-icons/rx';
import { PiMinusBold } from 'react-icons/pi';
import { RiExpandLeftRightFill } from 'react-icons/ri';
import useScreenSize from '@/hooks/useScreenSize';

interface VSCodeState {
  width: number;
  height: number;
  x: number;
  y: number;
}
export default function VSCode() {
  const { scrHeight, scrWidth } = useScreenSize();
  const [hovered, setHovered] = useState(false);

  const initWidth = Math.min(scrWidth, 640);
  const initHeight = Math.min(scrHeight, 400);

  const [state, setState] = useState<VSCodeState>({
    width: initWidth,
    height: initHeight * 2,
    x: scrWidth / 4,
    y: scrHeight / 4,
  });

  useEffect(() => {
    setState({
      ...state,
      width: Math.min(scrWidth, state.width),
      height: Math.min(scrHeight, state.height),
    });
  }, [scrWidth, scrHeight, state]);

  const handleDoubleClick = () => {
    setState({ width: scrWidth, height: scrHeight * 2, x: 0, y: 11 });
  };

  const fullSize = () => {
    setState({
      width: scrWidth - 6,
      height: scrHeight - 80,
      x: 0,
      y: 44,
    });
  };

  return (
    <Rnd
      size={{ width: state.width, height: state.height }}
      position={{
        x: Math.max(0, Math.min(scrWidth * 2 - state.width, state.x)),
        y: Math.min(scrHeight - 11, Math.max(0, state.y)),
      }}
      onDragStop={(e, d) => {
        setState({ ...state, x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setState({
          ...state,
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
          ...position,
        });
      }}
      minWidth={200}
      minHeight={150}
    >
      <div
        className="items-center bg-[#3c3c3c] rounded-t-md py-2 flex flex-row round"
        onDoubleClick={handleDoubleClick}
      >
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
      </div>
      <div className="w-full h-full bg-black">
        <iframe
          className="w-full h-full bg-black"
          title="github"
          src="https://github1s.com/elmersson/MacOS"
        />
      </div>
    </Rnd>
  );
}
