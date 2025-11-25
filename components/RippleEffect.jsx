"use client";

import { motion } from "framer-motion";

const rippleAnimation = {
  initial: { scale: 0, opacity: 1 },
  animate: { scale: 5, opacity: 0 },
  exit: { scale: 0, opacity: 0 },
};

const RippleEffect = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={index}
          variants={rippleAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            delay: index * 0.15,
          }}
          className="absolute rounded-full bg-accent"
          style={{
            width: "200px",
            height: "200px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </>
  );
};

export default RippleEffect;
