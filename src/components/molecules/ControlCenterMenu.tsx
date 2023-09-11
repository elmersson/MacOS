import { AnimatePresence, motion } from 'framer-motion';

interface ControlCenterMenuProps {
  isVisible: boolean;
}
export default function ControlCenterMenu({
  isVisible,
}: ControlCenterMenuProps) {
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
          className="fixed top-10 right-[4px] z-50 overflow-hidden shadow-lg"
        >
          <div className="rounded-md px-2 py-2 w-[300px] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 space-y-2">
            <div className="flex flex-row space-x-2">
              <div className="rounded-md px-3 py-3 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 shadow-md">
                <div>
                  <p className="text-sm">Wi-Fi</p>
                  <p className="text-xs">NETGEAR15-5G</p>
                </div>
                <div>
                  <p className="text-sm">Bluetooth</p>
                  <p className="text-xs">On</p>
                </div>
                <div>
                  <p className="text-sm">Airdrop</p>
                  <p className="text-xs">Everyone</p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="rounded-md px-3 py-3 w-[100%] h-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 shadow-md">
                  <div>
                    <p className="text-sm">Work</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="rounded-md px-3 py-3 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 shadow-md">
                    <div>
                      <p className="text-sm">Stage manager</p>
                    </div>
                  </div>
                  <div className="rounded-md px-3 py-3 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 shadow-md">
                    <div>
                      <p className="text-sm">Screen mirroring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-md px-3 py-3 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 shadow-md">
              <div>
                <p className="text-sm">Display</p>
              </div>
            </div>
            <div className="rounded-md px-3 py-3 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 shadow-md">
              <div>
                <p className="text-sm">Sound</p>
              </div>
            </div>
            <div className="rounded-md px-3 py-3 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 shadow-md">
              <div>
                <p className="text-sm">Music</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
