import useScreenSize from '@/hooks/useScreenSize';
import { useStore } from '@/lib/store';
import { useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';
import ActionButtons from './ActionButtons';
import { AiOutlineNotification } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';

interface OutlookState {
  width: number;
  height: number;
  x: number;
  y: number;
}

export default function Outlook() {
  const { setShowVSCode } = useStore();

  const { scrHeight, scrWidth } = useScreenSize();

  const initWidth = Math.min(scrWidth, 640);
  const initHeight = Math.min(scrHeight, 400);

  const [state, setState] = useState<OutlookState>({
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
        className="bg-slate-800 rounded-t-md py-2 flex flex-row items-center justify-between"
        onDoubleClick={handleDoubleClick}
      >
        <div className="flex">
          <ActionButtons exit={handleExit} fullSize={fullSize} />
        </div>
        <div>
          <input
            placeholder="Search"
            className="bg-[#3c3c3c] text-sm rounded-lg"
          />
        </div>
        <div className="flex flex-row text-white space-x-1 mx-2">
          <AiOutlineNotification />
          <IoNotificationsOutline />
        </div>
      </div>

      <div className="w-full h-full bg-black"></div>
    </Rnd>
  );
}
