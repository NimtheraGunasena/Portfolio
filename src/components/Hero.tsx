"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { FiArrowRight, FiAward, FiBookOpen, FiBriefcase, FiTarget } from "react-icons/fi";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 180, damping: 18 });
  const ySpring = useSpring(y, { stiffness: 180, damping: 18 });
  const rotateY = useTransform(xSpring, [-100, 100], [-11, 11]);
  const rotateX = useTransform(ySpring, [-100, 100], [11, -11]);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const proofCards = useMemo(
    () => [
      { label: "Academic Years", value: "4", accent: "text-[#f0d4a8]" },
      { label: "Evidence Pieces", value: "12+", accent: "text-[#7cc7c1]" },
      { label: "Active Focus", value: "Full-Stack Growth", accent: "text-white" },
    ],
    []
  );

  const insightCards = useMemo(
    () => [
      {
        icon: FiBookOpen,
        title: "Reflective Learning",
        detail: "PPW entries, academic evidence, and personal growth mapped into one clear story.",
      },
      {
        icon: FiBriefcase,
        title: "Project Craft",
        detail: "Coursework translated into portfolio-ready applications with stronger UI and system thinking.",
      },
      {
        icon: FiAward,
        title: "Professional Readiness",
        detail: "Certificates, CV material, and a structured career plan supporting the technical journey.",
      },
    ],
    []
  );

  const handleMove = (event: React.MouseEvent) => {
    const element = cardRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="home"
      className="section-shell flex min-h-screen items-center overflow-hidden pt-36 md:pt-40"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-24 h-56 w-56 rounded-full bg-[#d6b07c]/12 blur-3xl" />
        <div className="absolute right-[10%] top-36 h-64 w-64 rounded-full bg-[#7cc7c1]/10 blur-3xl" />
        <div className="absolute bottom-12 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/4 blur-3xl" />
      </div>

      <div className="section-inner grid items-center gap-14 xl:grid-cols-[1.15fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="section-kicker">
            <FiTarget />
            Academic Portfolio 2026
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.34em] text-white/46">
            Nimthera Gunasena | Software Engineering Undergraduate
          </p>

          <h1 className="section-title mt-4 max-w-4xl text-glow">
            A more refined showcase of academic growth, engineering momentum, and
            professional ambition.
          </h1>

          <p className="section-copy mt-8 text-lg md:text-[1.12rem]">
            This portfolio brings together applied software projects, reflective
            PPW work, certifications, and a future-facing career plan in a
            presentation that feels polished, intentional, and premium.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="lux-button-primary">
              Explore Projects
              <FiArrowRight />
            </a>
            <a href="#reflective" className="lux-button-secondary">
              Read Journal
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {proofCards.map((card) => (
              <div
                key={card.label}
                className="lux-panel-soft rounded-[28px] px-5 py-5"
              >
                <div className={`display-font text-3xl ${card.accent}`}>{card.value}</div>
                <div className="mt-2 text-sm tracking-[0.08em] text-white/56">{card.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {insightCards.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(214,176,124,0.22)] bg-[rgba(214,176,124,0.08)] text-[#f0d4a8]">
                  <Icon />
                </div>
                <div className="mt-5 text-lg font-semibold text-white">{title}</div>
                <p className="mt-3 text-sm leading-7 text-white/62">{detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: "easeOut" }}
          className="relative flex justify-center xl:justify-end"
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[31rem]"
          >
            <div
              aria-hidden
              className="absolute inset-3 rounded-[32px] border border-white/10"
              style={{ transform: "translateZ(-30px)" }}
            />
            <motion.div
              aria-hidden
              className="absolute -left-10 top-12 h-44 w-44 rounded-full bg-[#d6b07c]/18 blur-3xl"
              animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.72, 0.5] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(-60px)" }}
            />
            <motion.div
              aria-hidden
              className="absolute -bottom-8 right-0 h-52 w-52 rounded-full bg-[#7cc7c1]/16 blur-3xl"
              animate={{ scale: [1.04, 0.96, 1.04], opacity: [0.48, 0.72, 0.48] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(-40px)" }}
            />

            <div
              className="lux-panel relative overflow-hidden rounded-[36px] p-5"
              style={{ transform: "translateZ(10px)" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,212,168,0.16),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_48%)]" />

              <div className="relative rounded-[28px] border border-white/12 bg-[rgba(255,255,255,0.03)] p-4">
                <div className="flex items-center justify-between pb-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.26em] text-white/45">
                      Portfolio Portrait
                    </div>
                    <div className="mt-1 text-sm text-white/68">Nimthera Gunasena</div>
                  </div>
                  <div className="lux-chip text-[0.72rem] uppercase tracking-[0.2em] text-[#7cc7c1]">
                    
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[26px]">
                  <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent_40%,rgba(7,16,21,0.3)_100%)]" />
                  <div className="absolute inset-x-0 top-0 z-10 h-32 bg-[linear-gradient(180deg,rgba(240,212,168,0.18),transparent)]" />
                  <div className="relative aspect-[0.88] w-full overflow-hidden rounded-[26px]">
                    <Image
                      src="/image-2.png"
                      alt="Nimthera Gunasena"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-white/45">Current Role</div>
                    <div className="mt-2 display-font text-2xl text-white">
                      SE Undergraduate
                    </div>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-white/45">Main Goal</div>
                    <div className="mt-2 display-font text-2xl text-[#f0d4a8]">
                      Build with clarity
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="lux-panel-soft absolute -left-8 top-16 rounded-[24px] px-4 py-4 max-md:hidden"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(38px)" }}
            >
              <div className="text-xs uppercase tracking-[0.22em] text-white/46">Focus</div>
              <div className="mt-2 text-sm text-white/78">Reflection + product craft</div>
            </motion.div>

            <motion.div
              className="lux-panel-soft absolute -right-6 bottom-14 rounded-[24px] px-4 py-4 max-md:hidden"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(32px)" }}
            >
              <div className="text-xs uppercase tracking-[0.22em] text-white/46">Trajectory</div>
              <div className="mt-2 text-sm text-white/78">Coursework into production habits</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
