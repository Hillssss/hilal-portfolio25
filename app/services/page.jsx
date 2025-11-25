"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "FrontEnd",
    description: 
    "As a Frontend Developer, I specialise in building interactive, responsive and aesthetically pleasing user interfaces for various web platforms. Using modern technologies such as HTML5, Next.js, and Tailwind CSS, I am able to develop websites that are fast, dynamic, and optimised for maximum user experience. In addition to web-based I can also be desktop-based using Electron.JS",
    href:""
  },
  {
    num: "02",
    title: "UI/UX",
    description: 
    "One of my other services is UI/UX with a user-centred design-based approach, I create digital solutions that are not only aesthetically pleasing but also functional and efficient while being committed to delivering elegant, intuitive and innovative digital experiences, ensuring that every product not only looks good but also functions to its full potential.",
    href:""
  },
  {
    num: "03",
    title: "DevOps",
    description: 
    "As a DevOps Engineer, I integrate development and operations to create stable, automated, and efficient systems. With CI/CD (Continuous Integration & Continuous Deployment) approach, I ensure the development process is smooth, secure, and scalable.Managing cloud-based infrastructure such as AWS, Google Cloud, and DigitalOcean.",
    href:""
  },
  {
    num: "04",
    title: "Quality Assurance",
    description: 
    "I focus on testing and improving software quality to ensure optimal performance, security, and user experience. Using manual testing and automated testing approaches, I help ensure applications are bug-free before they are released to users.Skills & Specialisations: Manual Testing, Automated Testing, API Testing, Bug Tracking & Reporting. ",
    href:""
  }
];


const Services = () => {
  return (
    <section className="min-h[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{services.num}</div>
                  <Link href={services.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center
                  items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{services.title}</h2>
                <p className="text-white/60">{services.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
          </motion.div>
      </div>
    </section>
  );
};

export default Services;