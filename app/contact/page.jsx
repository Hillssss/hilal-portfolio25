"use client";

import { Button } from "@/components/ui/button";
import {Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {Select,
       SelectContent,
       SelectGroup,
       SelectValue,
        SelectItem,
        SelectLabel,
        SelectTrigger
 } from "@/components/ui/select";

 import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 896 6913 9169"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "samaranhilal@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Jln. Menteng Ujung No.11, Kota Bogor"
  }
];

import {motion} from "framer-motion"


const Contact = () => {
  return (
    <motion.section
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition: {delay: 2.4, duration: 0.4, ease:"easeIn"},
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-black rounded-xl ">
            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
            <p className="text-white/60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ex illo culpa consequuntur et quos iusto dolorum consectetur, laborum aut repellendus! Libero veritatis suscipit doloribus, laborum vitae debitis provident nulla.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" placeholder="First Name" />
              <Input type="lastname" placeholder="Last Name" />
              <Input type="email" placeholder="Email Address" />
              <Input type="phone" placeholder="Phone Number" />
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service">
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="est">Frontend Development</SelectItem>
                    <SelectItem value="cst">Web Development</SelectItem>
                    <SelectItem value="mst">Desktop  Development</SelectItem>
                  </SelectGroup>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea
              className="h-[200px]"
              placeholder="Type your massage here"
            />
            <Button size="md" className="max-w-40">
              Send Message
            </Button>
            </form>
           
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return(
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-black text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default Contact;