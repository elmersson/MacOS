import React, { useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';
import useScreenSize from '@/hooks/useScreenSize';
import { useStore } from '@/lib/store';
import ActionButtons from './ActionButtons';

interface VSCodeState {
  width: number;
  height: number;
  x: number;
  y: number;
}
export default function VSCode() {
  const { setShowVSCode } = useStore();

  const { scrHeight, scrWidth } = useScreenSize();

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
    setState({ width: scrWidth - 10, height: scrHeight - 88, x: 0, y: 44 });
  };

  const fullSize = () => {
    setState({
      width: scrWidth - 6,
      height: scrHeight - 80,
      x: 0,
      y: 44,
    });
  };

  const handleExit = () => {
    setShowVSCode(false);
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
        <ActionButtons exit={handleExit} fullSize={fullSize} />
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
