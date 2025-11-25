"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import RippleEffect from "./RippleEffect";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={pathname} 
        className="fixed inset-0 pointer-events-none z-40 flex overflow-hidden"
      >
        {/* Ripple Effect */}
        <RippleEffect />

        {/* Background Transition */}
        <motion.div 
          className="fixed inset-0 bg-primary"
          initial={{ opacity: 1 }} 
          animate={{
            opacity: 0, 
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          exit={{ opacity: 1 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default StairTransition;
