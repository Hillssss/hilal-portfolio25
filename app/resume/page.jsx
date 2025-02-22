"use client";

import { m } from "framer-motion";
import {FaHtml5, 
  FaCss3, 
  FaJs, 
  FaJava, 
  FaNodeJs, 
  FaUbuntu, 
  FaDigitalOcean
}from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs, SiPostman}from "react-icons/si"

const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hilal Hibatullah A"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 89669139169"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "Email",
      fieldValue: "samaranhilal@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Indonesia,"
    }
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Lorem ipsum dolor sit amet.",
  items: [
    {
      company: "Kawan Secuan",
      position: "Quality Assurance",
      duration: "Freelance"
    },
    {
      company: "Nexin Maya Innovation",
      position: "Software Developer",
      duration: "2024 - Present"
    },
    {
      company: "SDN Dewi Sartika 2 Bogor",
      position: "Honorary Computer Teacher",
      duration: "2020-2022"
    },
    
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "Lorem ipsum dolor sit amet.",
  items: [
    {
      institution: "Kawah Edukasi",
      degree: "Back-End Developer Bootcamp",
      duration: "January - March 2023"
    },
    {
      institution: "Universitas BSI",
      degree: "Bachelor of Informatics",
      duration: "2018 - 2022"
    },
  ]
}

const skills = {
  title: 'My skills',
  description: "Lorem ipsum dolor sit amet.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.JS",
    },
    {
      icon: <FaUbuntu />,
      name: "Linux Ubuntu",
    },
    {
      icon: <FaDigitalOcean />,
      name: "DigitalOcean",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate= {
      {
        opacity: 1,
        transition: {
          delay:2.4, 
          duration: 0.4,
          ease: "easeIn"
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return(
                          <li key={index} className="bg-[#1f1d38] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                            <span className="text-accent">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px]
                            text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>

                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
                education
              </TabsContent>
              <TabsContent value="skills" className="w-full">
                skills
              </TabsContent>
              <TabsContent value="about" className="w-full">
                about
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
  )
}

export default Resume;