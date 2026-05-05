"use client";

import { useEffect, useMemo, useState } from "react";
import { FiArrowUpRight, FiCompass, FiFileText } from "react-icons/fi";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = useMemo(
    () => [
      { href: "#home", label: "Home" },
      { href: "#about", label: "Profile" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Learning" },
      { href: "#reflective", label: "Journal" },
      { href: "#career-plan", label: "Plan" },
      { href: "#certificates", label: "Evidence" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`mx-auto max-w-7xl overflow-hidden rounded-[28px] border transition-all duration-300 ${
          scrolled
            ? "border-white/12 bg-[#071017]/82 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
            : "border-white/10 bg-black/24 backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-6">
          <a href="#home" className="min-w-0 shrink-0">
            <Logo withText />
          </a>

          <div className="hidden items-center gap-5 xl:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-[0.08em] text-white/66 hover:text-[#f0d4a8]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="lux-chip text-[0.72rem] uppercase tracking-[0.22em]">
              <FiCompass className="text-[#7cc7c1]" />
              Software Engineering Track
            </div>

            <a href="#cv" className="lux-button-secondary text-sm">
              <FiFileText />
              View CV
            </a>
          </div>

          <a
            href="#contact"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(214,176,124,0.24)] bg-[rgba(214,176,124,0.08)] text-[#f0d4a8] md:hidden"
            aria-label="Jump to contact"
          >
            <FiArrowUpRight />
          </a>
        </div>

        <div className="border-t border-white/8 px-4 pb-4 xl:hidden md:px-6">
          <div className="flex gap-2 overflow-x-auto pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-white/72 hover:border-[rgba(214,176,124,0.24)] hover:text-[#f0d4a8]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
