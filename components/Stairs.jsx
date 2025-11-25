import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    y: 0,
  },
  animate: {
    y: "100%",
  },
  exit: {
    y: ["100%", "0%"], // Pergerakan keluar
  },
};

const reverseIndex = (index) => 6 - index - 1;

const Stairs = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-accent relative"
        />
      ))}
    </>
  );
};

export default Stairs;
