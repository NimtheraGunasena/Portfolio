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
      { href: "#home", label: "Home", compactLabel: "Home" },
      { href: "#about", label: "About", compactLabel: "About" },
      { href: "#projects", label: "Projects", compactLabel: "Projects" },
      { href: "#skills", label: "Skills", compactLabel: "Skills" },
      { href: "#contact", label: "Contact", compactLabel: "Contact" },
      { href: "#reflective", label: "Journal", compactLabel: "Journal" },
      { href: "#career-plan", label: "Career Plan", compactLabel: "Career Plan" },
      { href: "#certificates", label: "Certificates", compactLabel: "Certificates" },
      { href: "#cv", label: "CV", compactLabel: "CV" },
    ],
    []
  );

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`mx-auto max-w-[92rem] overflow-hidden rounded-[30px] border transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[rgba(15,19,22,0.84)] shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
            : "border-white/8 bg-[rgba(15,19,22,0.68)] backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-5 py-4 md:px-6">
          <a href="#home" className="min-w-0 shrink-0">
            <Logo withText />
          </a>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-4 xl:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-[0.8rem] font-medium tracking-[0.08em] text-white/66 hover:text-white"
              >
                {link.compactLabel}
              </a>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <div
              className="lux-chip shrink-0 whitespace-nowrap px-3 py-2 text-[0.68rem] uppercase tracking-[0.2em]"
              title="Software Engineering Track"
            >
              <FiCompass className="text-[#ff9a76]" />
              <span>Design-minded SE</span>
            </div>

            <a
              href="#cv"
              className="group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full border border-white/12 bg-[linear-gradient(135deg,rgba(242,107,76,0.18),rgba(255,215,163,0.12)_58%,rgba(255,255,255,0.05))] px-2.5 py-2 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(5,8,20,0.26)] ring-1 ring-white/6 backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-white/18 hover:shadow-[0_20px_44px_rgba(82,46,34,0.3)]"
              aria-label="View CV"
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_38%)] opacity-80"
              />
              <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/14 bg-black/18 text-[#ffd7a3] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <FiFileText />
              </span>
              <span className="relative whitespace-nowrap pr-1 text-[0.82rem] tracking-[0.06em]">
                View CV
              </span>
              <span className="relative text-white/78 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <FiArrowUpRight className="text-[0.95rem]" />
              </span>
            </a>
          </div>

          <a
            href="#contact"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/4 text-[#ff9a76] md:hidden"
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
                className="shrink-0 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-white/72 hover:border-white/16 hover:text-white"
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
