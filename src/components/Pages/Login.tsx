import Image from 'next/image';
import Navbar from '../organisms/Navbar';
import Cancel from '../../assets/icons/cancel-button-svgrepo-com.svg';

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-80">
        <div className="w-48 h-48 bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 rounded-full p-2"></div>
        <p className="text-white font-semibold text-2xl text-shadow-lg mt-12">
          Rasmus Elmersson
        </p>
        <div className="w-44 h-8 px-4 rounded-2xl bg-sky-200/30 backdrop-blur-sm mt-4 drop-shadow p-1">
          <input
            placeholder="Enter Password"
            className=" focus:none outline-none text-white bg-transparent placeholder-sky-50/80 text-shadow"
          />
        </div>
        <p className="text-white text-shadow-lg mt-2">Enter Password</p>
        <div className="flex flex-col items-center mt-80">
          <div className="w-9 h-9 bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 rounded-full p-2">
            <Image src={Cancel} alt="cancel" />
          </div>
          <p className="text-white text-shadow text-sm mt-2">Cancel</p>
        </div>
      </div>
    </div>
  );
}
