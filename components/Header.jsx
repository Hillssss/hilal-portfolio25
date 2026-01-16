"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header
  className="
    sticky top-0 z-50
    py-4 xl:py-6
    text-white
    bg-background/20
    backdrop-blur-lg
    supports-[backdrop-filter]:bg-background/60
  "
>

      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1
            className="text-xl xl:text-2xl font-semibold text-accent tracking-wide"
            style={{ textShadow: "0 0 8px rgba(0,255,255,0.6)" }}
          >
            Trust the Process.
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="#contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
