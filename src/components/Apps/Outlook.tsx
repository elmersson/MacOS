import useScreenSize from '@/hooks/useScreenSize';
import { useStore } from '@/lib/store';
import { useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';
import ActionButtons from './ActionButtons';
import { AiOutlineNotification, AiOutlineTeam } from 'react-icons/ai';
import { IoNotificationsOutline, IoSyncSharp } from 'react-icons/io5';
import { FaGlobe } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { BsArchive, BsCalendar3, BsFlag } from 'react-icons/bs';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FiEdit } from 'react-icons/fi';
import { HiOutlineTrash } from 'react-icons/hi';
import { RiFolderSharedLine } from 'react-icons/ri';
import { GoUnread } from 'react-icons/go';
import { LuPanelRightClose } from 'react-icons/lu';

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
        className=" bg-blue-400 rounded-t-md py-2 flex flex-row items-center justify-between"
        onDoubleClick={handleDoubleClick}
      >
        <div className="flex">
          <ActionButtons exit={handleExit} fullSize={fullSize} />
        </div>
        <div>
          <input
            placeholder="Search"
            className=" bg-slate-700 text-sm rounded-lg"
          />
        </div>
        <div className="flex flex-row text-white space-x-1 mx-2">
          <AiOutlineNotification />
          <IoNotificationsOutline />
        </div>
      </div>

      <div className="w-full h-full bg-slate-200 flex flex-row">
        <div className="h-full p-2 bg-slate-100 space-y-4 flex flex-col items-center">
          <div className="p-2 bg-blue-400 rounded-full">
            <FaGlobe style={{ color: 'blue', fontSize: '20px' }} />
          </div>
          <GrMail style={{ color: '#60A5FA', fontSize: '20px' }} />
          <BsCalendar3 style={{ color: 'gray', fontSize: '20px' }} />
          <AiOutlineTeam style={{ color: 'gray', fontSize: '20px' }} />
          <MdOutlineMoreHoriz style={{ color: 'gray', fontSize: '20px' }} />
        </div>

        <div className="flex flex-col p-2 w-full space-y-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-2">
              <RxHamburgerMenu style={{ color: 'gray', fontSize: '20px' }} />
              <button className="flex flex-row bg-blue-400 rounded-md space-x-1 px-2 items-center">
                <FiEdit style={{ color: 'white', fontSize: '16px' }} />
                <span className=" text-white text-md font-semibold">
                  New Email
                </span>
              </button>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <div className="flex flex-row items-center space-x-1">
                <HiOutlineTrash style={{ color: 'gray', fontSize: '20px' }} />
                <span className=" text-slate-500 text-md">Delete</span>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <BsArchive style={{ color: 'gray', fontSize: '20px' }} />
                <span className=" text-slate-500 text-md">Archive</span>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <RiFolderSharedLine
                  style={{ color: 'gray', fontSize: '20px' }}
                />
                <span className=" text-slate-500 text-md">Move</span>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <BsFlag style={{ color: 'gray', fontSize: '20px' }} />
                <span className=" text-slate-500 text-md">Flag</span>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <GoUnread style={{ color: 'gray', fontSize: '20px' }} />
                <span className=" text-slate-500 text-md">Mark as Unread</span>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <IoSyncSharp style={{ color: 'gray', fontSize: '20px' }} />
                <span className=" text-slate-500 text-md">Sync</span>
              </div>
              <MdOutlineMoreHoriz style={{ color: 'gray', fontSize: '20px' }} />
            </div>

            <div>
              <LuPanelRightClose style={{ color: 'gray', fontSize: '20px' }} />
            </div>
          </div>

          <div className="flex flex-row h-full w-full space-x-2">
            <div className="flex flex-col">
              <span>Favorites</span>
              <span>All Accounts</span>
              <span>Rasmus.elmersson@regent.se</span>
              <span>Rasmus.elmersson@martinservera.se</span>
              <span>Saved Searched</span>
              <span>On my Computer</span>
            </div>

            <div className="h-full bg-slate-700 p-2 rounded-lg">
              <span>Focused</span> <span>Other</span>
            </div>

            <div className="h-full bg-slate-700 p-2 rounded-lg">
              <span>Focused</span> <span>Other</span>
            </div>

            <div className="h-full bg-slate-700 p-2 rounded-lg">
              <span>Focused</span> <span>Other</span>
            </div>
          </div>
        </div>
      </div>
    </Rnd>
  );
}
