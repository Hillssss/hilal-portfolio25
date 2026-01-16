"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  { name: "home", path: "home" },
  { name: "services", path: "services" },
  { name: "work", path: "work" },
  { name: "contact", path: "contact" },
  { name: "resume", path: "resume" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

 const scrollToSection = (id) => {
  setOpen(false);

  setTimeout(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 40;
    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }, 300); // ⏱️ kasih waktu Sheet close
};


  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <div className="mt-24 mb-30 text-center text-xl">
          <button
            onClick={() => scrollToSection("home")}
            className="text-4xl font-semibold"
          >
            Hillsss<span className="text-accent">.</span>
          </button>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => scrollToSection(link.path)}
              className="text-xl capitalize hover:text-accent transition-all"
            >
              {link.name}
            </button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;