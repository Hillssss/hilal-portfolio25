"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub} from "react-icons/bs";

import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
  num: '01',
  category: 'Web-Development',
  title:'Dashboard Bodycam',
  description:'It is a web-based dashboard equipped with GPS tracking features using mapbox, live streaming using livekit and there are media features uploaded by users through an android-based application in collaboration with Korlantas POLRI.',
  stack: [
    {name: "Html5"}, {name: "Css3"}, {name: "JavaScript"}, {name: "JQuery"}],
    image:'/assets/work/bodycam.png',
    live:"https://tacticalcam.nexin.id",
    github:"http://git.nexin.id/ums-x-nxn/tactical-camera-website-dashboard.git",
},
{
  num: '02',
  category: 'Web-Development',
  title:'Dashboard Astral Smartwatch',
  description:'Web-based dashboard integrated with a smartwatch that features gps tracking, heart detection through message broker',
  stack: [
    {name: "Html5"}, {name: "Tailwind.CSS"}, {name: "JavaScript"}],
    image:'/assets/work/astral.png',
    live:"",
    github:"",
},
{
  num: '03',
  category: 'Web-Development',
  title:'Dashboard Ranrikmer',
  description:'Visual to determine the firing line and heading of the cannon towards the target based on the position of the towing vehicle using next js, integrated with python for backend and using mosquitto broker for realtime data transfer.',
  stack: [
    {name: "Next.js"}, {name: "Tailwind"}, {name: "Axios"}, {name: "MQTT"}, {name: "UI Motion"}, {name: "ShadCN UI"}  ],
    image:'/assets/work/ranrik.png',
    live:"",
    github:"http://git.nexin.id/armed/ranrikmer/frontend.git",
},
{
  num: '04',
  category: 'Web-Development',
  title: 'Dashboard RPMS',
  description: 'RPMS is a perimeter monitoring dashboard built with Next.js, integrated with backend APIs via Axios and Mosquitto MQTT to deliver real-time radar detection, gunshot visualization, tactical map rendering, AI-powered camera pages with live feed, object classification, auto counting, and dynamic operational controls—all in one unified tactical interface.',
  stack: [
    { name: "Next.js" },
    { name: "Tailwind" },,
    { name: "MQTT" },
    { name: "Axios" },
    { name: "MapLibre" },
    { name: "ShadCN UI" }
  ],
  image: '/assets/work/rpms.png',
  live: "",
  github: "http://git.nexin.id/pussenif/rpms/rpms-frontendweb.git",
},
{
  num: '05',
  category: 'Desktop-Development',
  title:'Scheduler Picker',
  description:'A desktop-based application that is integrated with the audio record API, where the purpose of building this application is to automatically record according to the desired schedule using the time picker.',
  stack: [
    {name: "Electron.js"}, {name: "Tailwind.css"}, {name: "HTML5"}],
    image:'/assets/work/schedulerr.png',
    live:"",
    github:"https://github.com/Hillssss/electron-sr.git",
},

{
  num: '06',
  category: 'Quality Assurance',
  title:'Web Central Kitchen',
  description:'I help an application before production stage by identifying and fixing bugs, improving application performance, and ensuring optimal user experience manually.',
  stack: [
    {name: "Postman"}, {name: "Spreadsheet"}],
    image:'/assets/work/QA.png',
    live:"",
    github:"",
},
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{opacity:1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-accent-hover text-outline">
              {project.num}              
            </div>
            <h2 className="text-[42px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">
              {project.category}
            </h2>
            <h3 className="text-[28px] text-accent-hover font-semibold leading-none  group-hover:text-accent transition-all duration-500 capitalize">
              {project.title}
            </h3>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.name},
                  </li>
                );
              })}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex items-center gap-4">
  {project.live && (
    <Link href={project.live}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Live Project</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  )}

  {project.github && (
    <Link href={project.github}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
            <BsGithub className="text-white text-3xl group-hover:text-accent" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Github repository</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  )}
</div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-accent/20 rounded-lg">

                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 rounded-lg z-10"></div>
                  <div className="relative w-full h-full">
                    <Image
                     src={project.image}
                     fill
                     className="object-cover rounded-lg"
                     alt=""
                     />
                  </div>
                  </div>
                </SwiperSlide>
              );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
      </motion.section>
  );
};

export default Work;