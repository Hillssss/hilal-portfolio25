"use client";
import { useActiveSection } from "@/hooks/useActiveSection";

const links = [
  { name: "home", path: "home" },
  { name: "services", path: "services" },
  { name: "work", path: "work" },
  { name: "contact", path: "contact" },
];

const Nav = () => {
  const active = useActiveSection();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <button
          key={link.path}
          onClick={() => scrollTo(link.path)}
          className={`
            capitalize transition-all
            ${active === link.path
              ? "text-accent font-semibold"
              : "text-white/70 hover:text-white"}
          `}
        >
          {link.name}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
