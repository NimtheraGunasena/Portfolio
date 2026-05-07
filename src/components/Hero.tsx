"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiDownload,
  FiMapPin,
  FiTarget,
} from "react-icons/fi";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 180, damping: 18 });
  const ySpring = useSpring(y, { stiffness: 180, damping: 18 });
  const rotateY = useTransform(xSpring, [-100, 100], [-10, 10]);
  const rotateX = useTransform(ySpring, [-100, 100], [10, -10]);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const proofCards = useMemo(
    () => [
      { label: "Years Studying", value: "4", accent: "text-[#ff9a76]" },
      { label: "Hands-On Projects", value: "4+", accent: "text-[#7fd6c2]" },
      { label: "Certificates", value: "7", accent: "text-[#ffd7a3]" },
    ],
    []
  );

  const insightCards = useMemo(
    () => [
      {
        icon: FiBriefcase,
        title: "Product-minded engineering",
        detail:
          "I like building software that feels clear to use, not just technically complete.",
      },
      {
        icon: FiBookOpen,
        title: "Evidence-led learning",
        detail:
          "Projects, journal reflections, and certificates all support the story behind the work.",
      },
      {
        icon: FiAward,
        title: "Ready for the next step",
        detail:
          "This portfolio is shaped to support internships, junior roles, and stronger collaboration.",
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
      className="section-shell flex min-h-[calc(100vh-3rem)] items-center overflow-hidden pt-24 md:min-h-[calc(100vh-4rem)] md:pt-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-24 h-56 w-56 rounded-full bg-[#f26b4c]/12 blur-3xl" />
        <div className="absolute right-[10%] top-36 h-64 w-64 rounded-full bg-[#7fd6c2]/10 blur-3xl" />
      </div>

      <div className="section-inner">
        <div className="grid items-center gap-12 xl:grid-cols-[1.04fr_0.96fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="section-kicker">
              <FiTarget />
              Software Engineer Portfolio
            </div>

            <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm uppercase tracking-[0.28em] text-white/50">
              <span>Nimthera Gunasena</span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-[#ff9a76]/70 md:inline-flex" />
              <span>Software Engineering Undergraduate</span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-[#7fd6c2]/70 md:inline-flex" />
              <span className="inline-flex items-center gap-2 normal-case tracking-normal text-white/58">
                <FiMapPin />
                Kurunegala, Sri Lanka
              </span>
            </p>

            <h1 className="section-title mt-5 max-w-5xl text-glow">
              Building calm, useful software experiences.
            </h1>

            <p className="section-copy mt-8 max-w-2xl text-lg md:text-[1.08rem]">
              I use this portfolio to bring together my best project work,
              academic growth, reflection, and career direction in one place.
              The result is a clearer picture of how I think, build, and keep
              improving.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="lux-button-primary">
                See Featured Work
                <FiArrowRight />
              </a>
              <a href="/_Nimthera_Resume_.pdf" download className="lux-button-secondary">
                Download CV
                <FiDownload />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/62">
              <span className="lux-chip">React and Next.js focused</span>
              <span className="lux-chip">Full-stack learning path</span>
              <span className="lux-chip">Thoughtful UI improvement</span>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {proofCards.map((card) => (
                <div
                  key={card.label}
                  className="lux-panel-soft rounded-[28px] px-5 py-5"
                >
                  <div className={`display-font text-3xl ${card.accent}`}>{card.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/44">
                    {card.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: "easeOut" }}
            className="relative flex justify-center xl:-translate-y-1 xl:justify-end"
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-[23.75rem] perspective-[1800px]"
            >
              <motion.div
                aria-hidden
                className="absolute -left-10 top-12 h-40 w-40 rounded-full bg-[#f26b4c]/16 blur-3xl"
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.72, 0.5] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(-60px)" }}
              />
              <motion.div
                aria-hidden
                className="absolute -bottom-8 right-0 h-44 w-44 rounded-full bg-[#7fd6c2]/14 blur-3xl"
                animate={{ scale: [1.04, 0.96, 1.04], opacity: [0.48, 0.72, 0.48] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(-40px)" }}
              />

              <div
                className="lux-panel relative overflow-hidden rounded-[30px] p-3"
                style={{ transform: "translateZ(10px)" }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%)]" />

                <div className="relative rounded-[22px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-2.5">
                  <div className="flex items-start justify-between gap-2.5 pb-2.5">
                    <div>
                      <div className="text-xs uppercase tracking-[0.26em] text-white/45">
                        Portfolio Snapshot
                      </div>
                     
                    </div>
                   
                  </div>

                  <div className="relative overflow-hidden rounded-[20px]">
                    <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent_40%,rgba(15,19,22,0.34)_100%)]" />
                    <div className="absolute inset-x-0 top-0 z-10 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),transparent)]" />
                    <div className="relative aspect-[0.72] w-full overflow-hidden rounded-[20px]">
                      <Image
                        src="/image-2.png"
                        alt="Nimthera Gunasena"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-3 grid gap-2">
                    <div className="rounded-[16px] border border-white/10 bg-black/20 p-2.5">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/45">
                        Current Focus
                      </div>
                      <div className="mt-1.5 display-font text-[1.28rem] leading-tight text-white">
                        Clean full-stack builds and better interface craft.
                      </div>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="rounded-[16px] border border-white/10 bg-black/20 p-2.5">
                        <div className="text-xs uppercase tracking-[0.22em] text-white/45">
                          Working Style
                        </div>
                        <div className="mt-1.5 text-[0.84rem] leading-5 text-white/78">
                          Structured, reflective, and steadily improving through real project work.
                        </div>
                      </div>
                      <div className="rounded-[16px] border border-white/10 bg-black/20 p-2.5">
                        <div className="text-xs uppercase tracking-[0.22em] text-white/45">
                          Best Fit
                        </div>
                        <div className="mt-1.5 display-font text-[1.05rem] leading-tight text-[#ffd7a3]">
                          Internships, junior roles, collaborative teams
                        </div>
                      </div>
                    </div>

                   
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: "easeOut" }}
          className="mt-10 md:mt-12"
        >
          <div className="section-rule" />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {insightCards.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(242,107,76,0.22)] bg-[rgba(242,107,76,0.1)] text-[#ff9a76]">
                  <Icon />
                </div>
                <div className="mt-5 text-lg font-semibold text-white">{title}</div>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/62">{detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
