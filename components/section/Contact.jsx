"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectValue,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast"; // Import useToast
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+62) 896 6913 9169" },
  { icon: <FaEnvelope />, title: "Email", description: "samaranhilal@gmail.com" },
  { icon: <FaMapMarkedAlt />, title: "Address", description: "Jln. Menteng Ujung No.11, Kota Bogor" },
];

const Contact = () => {
  const { toast } = useToast(); // Gunakan toast dari useToast

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Menangani perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Menangani submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        // Menampilkan toast ketika pesan berhasil dikirim
        toast({
          title: "Pesan Terkirim!",
          description: "Kami akan segera menghubungi Anda.",
        });

        // Reset form setelah sukses
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast({
          title: "Gagal Mengirim",
          description: "Mohon coba lagi nanti.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Terjadi Kesalahan",
        description: "Mohon coba lagi nanti.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#67e8f9B3] rounded-xl ">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                I’m always open to new opportunities and collaborations. Let’s create something great together!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required />
                <Input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required />
                <Input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                <Input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              </div>

              <Select onValueChange={(value) => setFormData({ ...formData, service: value })} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="UI/UX Designer">UI/UX Designer</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Desktop Development">Desktop Development</SelectItem>
                    <SelectItem value="Quality Assurance">Quality Assurance</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button size="md" className="max-w-40" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#67e8f9B3] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Toaster untuk menampilkan notifikasi */}
      <Toaster />
    </motion.section>
  );
};

export default Contact;
