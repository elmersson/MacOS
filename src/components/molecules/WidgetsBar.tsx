import { motion, AnimatePresence } from 'framer-motion';
import CalenderWidget from '../atoms/CalenderWidget';
import WeatherWidget from '../atoms/WeatherWidget';
import Clocks from './Clocks';
import Stocks from './Stocks';

interface WidgetBarProps {
  isVisible: boolean;
}

export default function WidgetsBar({ isVisible }: WidgetBarProps) {
  const variants = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      x: '0%',
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-16 right-1 z-50 overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          <div className="p-4 flex justify-end z-50">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row space-x-4">
                <CalenderWidget />
                <WeatherWidget />
              </div>
              <Clocks />
              <Stocks />
              <div className="flex justify-center">
                <div className="h-[24px] w-[98px] bg-clip-padding backdrop-filter backdrop-blur-md bg-neutral-50/50 rounded-2xl shadow-2xl flex items-center justify-center">
                  <p className="text-center text-xs text-slate-600">
                    Edit widgets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

