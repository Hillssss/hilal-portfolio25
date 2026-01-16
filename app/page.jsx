"use client";
import React from "react";
import Home from "@/components/section/Home";
import Services from "@/components/section/Services";
import Work from "@/components/section/Work";
import Resume from "@/components/section/Resume";
import Contact from "@/components/section/Contact";

const Page = () => {
  return (
    <>
      <section id="home" className="min-h-screen scroll-mt-28">
        <Home />
      </section>

      <section id="services" className="relative py-18 xl:py-24">
      <div className="absolute top-0 left-1/2 w-[80%] h-px -translate-x-1/2 bg-white/10" />
        <Services />
      </section>

      <section id="work" className="relative py-18 xl:py-24">
      <div className="absolute top-0 left-1/2 w-[80%] h-px -translate-x-1/2 bg-white/10" />
        <Work />
      </section>

      <section id="resume" className="relative py-18 xl:py-24">
      <div className="absolute top-0 left-1/2 w-[80%] h-px -translate-x-1/2 bg-white/10" />
        <Resume />
      </section>

      <section id="contact" className="relative py-18 xl:py-24">
        <div className="absolute top-0 left-1/2 w-[80%] h-px -translate-x-1/2 bg-white/10" />
        <Contact />
      </section>

    </>
  );
};

export default Page;
