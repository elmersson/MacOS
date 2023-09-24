import { useEffect, useState } from 'react';
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoRocketSharp,
} from 'react-icons/io5';
import { SiAdobecreativecloud, SiAlfred, SiStackshare } from 'react-icons/si';
import { RxDividerVertical } from 'react-icons/rx';
import { TbRectangleFilled, TbSquareDotFilled } from 'react-icons/tb';
import { RiCactusFill } from 'react-icons/ri';
import { PiMonitorFill } from 'react-icons/pi';
import { LuCommand } from 'react-icons/lu';

export default function HiddenNavbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleHidden = () => {
    setIsHidden(!isHidden);
    setIsPressed(true);

    setTimeout(() => {
      setIsPressed(false);
    }, 200);
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let timer: NodeJS.Timeout;

    if (isHidden) {
      timer = setTimeout(() => {
        setIsHidden(false);
      }, 10000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isHidden]);

  return (
    <div className="flex flex-row items-center">
      {isHidden && (
        <div className="flex flex-row space-x-[1.15rem] items-center">
          <SiAdobecreativecloud
            style={{ color: 'white', fontSize: '1.2rem' }}
          />
          <TbSquareDotFilled style={{ color: 'white', fontSize: '1.2rem' }} />
          <SiStackshare style={{ color: 'white', fontSize: '1.2rem' }} />
          <IoRocketSharp style={{ color: 'white', fontSize: '1.2rem' }} />
          <PiMonitorFill style={{ color: 'white', fontSize: '1.2rem' }} />
          <LuCommand style={{ color: 'white', fontSize: '1rem' }} />
          <RiCactusFill style={{ color: 'white', fontSize: '1.2rem' }} />
          <SiAlfred style={{ color: 'white', fontSize: '1.2rem' }} />
          <TbRectangleFilled style={{ color: 'white', fontSize: '1.2rem' }} />
          <RxDividerVertical style={{ color: 'white' }} />
        </div>
      )}
      <div
        onClick={handleHidden}
        className={`flex items-center px-2 py-1 ml-1 rounded-md ${
          isPressed ? 'bg-slate-100/20' : ''
        }`}
      >
        {isHidden ? (
          <IoChevronForwardOutline style={{ color: 'white' }} />
        ) : (
          <IoChevronBackOutline style={{ color: 'white' }} />
        )}
      </div>
    </div>
  );
}
