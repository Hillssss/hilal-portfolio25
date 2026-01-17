"use client";


import { BsCodeSlash } from "react-icons/bs";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { FiServer } from "react-icons/fi";
import { MdOutlineBugReport } from "react-icons/md";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Front - End",
    description: 
    "As a Frontend Developer, I specialise in building interactive, responsive and aesthetically pleasing user interfaces for various web platforms. Using modern technologies such as HTML5, Next.js, and Tailwind CSS, I am able to develop websites that are fast, dynamic, and optimised for maximum user experience. In addition to web-based I can also be desktop-based using Electron.JS",
     icon: BsCodeSlash,
  },
  {
    num: "02",
    title: "UI/UX",
    description: 
    "One of my other services is UI/UX with a user-centred design-based approach, I create digital solutions that are not only aesthetically pleasing but also functional and efficient while being committed to delivering elegant, intuitive and innovative digital experiences, ensuring that every product not only looks good but also functions to its full potential.",
    icon: HiOutlineColorSwatch,
  },
  {
    num: "03",
    title: "DevOps",
    description: 
    "As a DevOps Engineer, I integrate development and operations to create stable, automated, and efficient systems. With CI/CD (Continuous Integration & Continuous Deployment) approach, I ensure the development process is smooth, secure, and scalable.Managing cloud-based infrastructure such as AWS, Google Cloud, and DigitalOcean.",
    icon: FiServer,
  },
  {
    num: "04",
    title: "Quality Assurance",
    description: 
    "I focus on testing and improving software quality to ensure optimal performance, security, and user experience. Using manual testing and automated testing approaches, I help ensure applications are bug-free before they are released to users.Skills & Specialisations: Manual Testing, Automated Testing, API Testing, Bug Tracking & Reporting. ",
    icon: MdOutlineBugReport,
  }
];


        const Services = () => {
          return (
            <section className="min-h-[60vh] py-10 ">
              <div className="container mx-auto">
                <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 2.2,
              duration: 0.6,
              ease: "easeOut",
            },
          }}
          className="
            grid grid-cols-1
            md:grid-cols-4
            rows-[minmax(240px)]
            gap-4
          "
        >

          {services.map((service, index) => {
            const isLarge = index === 0 || index === 3;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className={`
                  relative group rounded-2xl overflow-hidden
                  bg-white/[0.04]
                  border border-white/[0.08]
                  hover:border-white/[0.18]
                  shadow-sm hover:shadow-xl hover:shadow-black/30
                  transition-all duration-500

                  ${isLarge
                    ? "md:col-span-4 md:row-span-2"
                    : "md:col-span-2"}
                `}
              >
                {/* soft gradient overlay */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-white/[0.06]
                  via-transparent
                  to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                " />

                {/* subtle blur depth */}
                <div className="
                  absolute -top-20 -right-20
                  w-48 h-48
                  bg-white/[0.06]
                  rounded-full blur-3xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-700
                " />

                {/* content */}
                <div className="relative h-full p-6 flex flex-col gap-4">

                  
                  {/* header block */}
               <div className="flex items-start justify-between">
  <div className="flex flex-col gap-2">
    {/* number + garis */}
    <div className="flex flex-col gap-1">
      <span
        className="text-4xl font-bold leading-none"
        style={{ color: "#67e8f9B3" }}
      >
        {service.num}
      </span>
    </div>

    {/* title */}
    <h3 className="text-xl font-semibold leading-tight"
     style={{ color: "#e8e1d1" }}
     >
      {service.title}
    </h3>
  </div>

  <service.icon className="text-white/80 text-3xl" />
</div>


                  {/* description */}
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;