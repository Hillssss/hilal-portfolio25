"use client";

import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"

import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl-pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">Hello I AM <br /> <span className="text-accent-hover">Hilal Hibatullah Agus</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
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
                <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border-accent rounded-full flex justify-center items-center
                text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" 
                />
                </div>
              </div>
              </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
    </section>
    
  );
};
export default Home;