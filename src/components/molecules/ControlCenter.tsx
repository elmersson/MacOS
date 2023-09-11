import Image from 'next/image';
import ControlCenterImage from '../../assets/icons/controlCenter.svg';
import { useState } from 'react';
import ControlCenterMenu from './ControlCenterMenu';

export default function ControlCenter() {
  const [isVisible, setIsisVisible] = useState<boolean>(false);

  const handleClick = () => {
    setIsisVisible(!isVisible);
  };

  return (
    <div
      className={`flex items-center px-2.5 py-1 rounded-md ${
        isVisible ? 'bg-slate-100/20' : ''
      }`}
      onClick={handleClick}
    >
      <div className="">
        <Image
          src={ControlCenterImage}
          height={13}
          alt="control center logo"
          className="drop-shadow"
        />
      </div>
      <ControlCenterMenu isVisible={isVisible} />
    </div>
  );
}
