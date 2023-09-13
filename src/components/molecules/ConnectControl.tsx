import { useStore } from '@/lib/store';
import { IoBluetooth } from 'react-icons/io5';
import { MdWifi, MdWifiTethering } from 'react-icons/md';

export default function ConnectControl() {
  const { wifi, setWifi, bluetooth, setBluetooth, airdrop, setAirdrop } =
    useStore();

  const handleWifiClick = () => {
    setWifi(!wifi);
  };

  const handleBluetoothClick = () => {
    setBluetooth(!bluetooth);

    if (airdrop) {
      setAirdrop(!airdrop);
    }
  };

  const handleAirdropClick = () => {
    setAirdrop(!airdrop);
  };

  return (
    <div className="rounded-md px-3 py-1 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 shadow-md flex flex-col justify-evenly">
      <div className="flex flex-row space-x-2" onClick={handleWifiClick}>
        <div
          className={`h-7 w-7 ${
            wifi
              ? 'bg-[#167AE5]'
              : 'bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30'
          } rounded-full flex justify-center items-center`}
        >
          <MdWifi style={{ color: 'white' }} />
        </div>
        <div>
          <p className="text-xs font-semibold">Wi-Fi</p>
          <p className="text-xxs">{wifi ? 'NETGEAR15-5G' : 'Not connected'}</p>
        </div>
      </div>
      <div className="flex flex-row space-x-2" onClick={handleBluetoothClick}>
        <div
          className={`h-7 w-7 ${
            bluetooth
              ? 'bg-[#167AE5]'
              : 'bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30'
          } rounded-full flex justify-center items-center`}
        >
          <IoBluetooth style={{ color: 'white' }} />
        </div>
        <div>
          <p className="text-xs font-semibold">Bluetooth</p>
          <p className="text-xxs">{bluetooth ? 'On' : 'Off'}</p>
        </div>
      </div>
      <div className="flex flex-row space-x-2" onClick={handleAirdropClick}>
        <div
          className={`h-7 w-7 ${
            airdrop
              ? 'bg-[#167AE5]'
              : 'bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30'
          } rounded-full flex justify-center items-center`}
        >
          <MdWifiTethering style={{ color: 'white' }} />
        </div>
        <div>
          <p className="text-xs font-semibold">Airdrop</p>
          <p className="text-xxs">{airdrop ? 'Contacts only' : 'Off'}</p>
        </div>
      </div>
    </div>
  );
}
