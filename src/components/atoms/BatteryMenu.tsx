import { AnimatePresence, motion } from 'framer-motion';

interface BatteryMenuProps {
  isVisible: boolean;
  charging: boolean;
}

export default function BatteryMenu({ isVisible, charging }: BatteryMenuProps) {
  const variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          className="fixed top-10 right-[194px] z-50 overflow-hidden shadow-lg"
        >
          <div className=" rounded-md px-3 py-3 w-80 flex flex-col bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/80 space-y-2">
            <p className="text-sm font-bold">
              {charging ? 'Power adapter' : 'Battery'}
            </p>
            <p className="text-xs text-slate-500">Power source: Battery</p>
            <div className="border-b border-gray-500/20"></div>
            <p className="text-xs text-slate-600 font-bold">
              Using Significant Energy
            </p>
            <div className="border-b border-gray-500/20"></div>
            <p className="text-xs font-bold">Battery Settings...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
