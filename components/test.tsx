"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useDrag } from "@use-gesture/react";
import Image from "next/image";
import { Expertises } from "@/data/expertises";
import { Button } from "./ui/button";

const Expertise = () => {
  const [position, setPosition] = useState(0);
  const totalSlides = Math.ceil(Expertises.length / 2);

  const nextSlide = () => {
    setPosition((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setPosition((prev) => Math.max(prev - 1, 0));
  };

  const bind = useDrag(({ direction: [dx], offset: [ox], cancel }) => {
    if (Math.abs(ox) > 50) {
      if (dx < 0) nextSlide();
      if (dx > 0) prevSlide();
      cancel();
    }
  });

  const renderDots = () => {
    return Array.from({ length: totalSlides }, (_, idx) => (
      <motion.button
        key={idx}
        onClick={() => setPosition(idx)}
        className={`w-3 h-3 rounded-full transition ${
          position === idx ? "bg-white scale-125" : "bg-white/50"
        }`}
        whileHover={{ scale: 1.3 }}
        transition={{ duration: 0.2 }}
      />
    ));
  };

  return (
    <section
      className="w-full min-h-[85vh] flex flex-col justify-center py-12 xl:py-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/service-bg.png')" }}
    >
      <div className="container mx-auto text-left px-4">
      <div className="flex items-center justify-between">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-lg text-white/70 uppercase mt-6"
          >
            SERVICE
          </motion.h2>
        </div>

        <div className="flex items-center justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-bold text-white max-w-3xl mt-4"
          >
            We do it best.
          </motion.p>
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
>
  <Button className="relative overflow-hidden">
    <motion.span
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="inline-block"
    >
      View All Service
    </motion.span>
  </Button>
</motion.div>
        </div>

        <motion.div className="overflow-hidden w-full mt-8">
          <motion.div
            className="flex w-full"
            animate={{ x: `-${position * 100}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            {...(bind() as any)}
          >
            {Array.from({ length: Math.ceil(Expertises.length / 2) }, (_, index) => (
              <motion.div key={index} className="w-full flex-shrink-0 px-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[Expertises[index * 2], Expertises[index * 2 + 1]].map(
                  (service, idx) =>
                    service && (
                      <div key={idx} className="flex flex-col justify-center gap-6 group p-6 bg-black/40 rounded-xl backdrop-blur-md">
                        <div className="w-full flex justify-between items-center">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500"
                          >
                            {service.num}
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="w-[50px] h-[50px]"
                          >
                            <Image src={service.icon} alt={service.title} width={50} height={50} />
                          </motion.div>
                        </div>
                        <motion.h2
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          className="text-[34px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"
                        >
                          {service.title}
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          className="text-white/60 text-[14px] text-justify"
                        >
                          {service.description}
                        </motion.p>
                        <div className="border-b border-white/20 w-full"></div>
                      </div>
                    )
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex justify-center gap-2 mt-5">{renderDots()}
        </div>
      </div>
    </section>
  );
};

export default Expertise;