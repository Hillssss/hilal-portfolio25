"use client";

import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import Socials from "@/components/Socials";
import dynamic from "next/dynamic";

import Stats from "@/components/Stats";
const CircularClock = dynamic(() => import('@/components/CircularClock'), { ssr: false });

const Home = () => {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl-pt-8 xl:pb-16">
            <div className="text-center xl:text-left order-2 xl:order-none">
             <div className="mb-4 flex justify-center xl:justify-start">
               <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  delay: 0.4,
                }}
                className="mb-6 flex justify-center xl:justify-start cursor-pointer"
              >
                <Image
                  src="/assets/fixlogoo.png"
                  alt="Hillsss Logo"
                  width={480}
                  height={120}
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>


              </div>
              <p className="max-w-[500px] mb-4 text-white/80">
              Passionate Software Developer with experience in building scalable and high-performance applications. 
              I specialize in web development, focusing on clean code, modern frameworks, and user-centric solutions.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button asChild variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <a href="/assets/CV_NEW_HILAL.pdf" download>
                    <span>DOWNLOAD CV</span>
                    <FiDownload />
                  </a>
                </Button>
                <div className="mb-4 xl:mb-0">
                <Socials containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border-accent rounded-full flex justify-center items-center
                text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" 
                />
                </div>
              </div>
              </div>
            <div className="order-1 xl:order-none mb-2 xl:mb-0 flex justify-center">
            <div className="responsive-clock">
              <CircularClock />
            </div>
          </div>
          </div>
        </div>
        <Stats />
    </section>
    
  );
};
export default Home;