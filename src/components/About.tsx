"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { FiArrowRight, FiBriefcase, FiFileText, FiMapPin } from "react-icons/fi";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

type TimelineItem = {
  title: string;
  org: string;
  period: string;
  points: string[];
};

function StatCounter({ value, suffix, label }: Stat) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const durationMs = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className="rounded-[24px] border border-white/10 bg-black/18 px-5 py-5 text-left">
      <div className="display-font text-4xl text-[#ff9a76]">
        {display}
        {suffix ?? ""}
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/48">{label}</div>
    </div>
  );
}

function TimelineDot() {
  return (
    <span className="relative flex h-3.5 w-3.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f26b4c]/45" />
      <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#ff9a76]" />
    </span>
  );
}

export default function About() {
  const stats: Stat[] = useMemo(
    () => [
      { value: 4, label: "Academic Years" },
      { value: 4, suffix: "+", label: "Featured Projects" },
      { value: 7, label: "Certificates" },
      { value: 4, suffix: "+", label: "Journal Entries" },
    ],
    []
  );

  const timeline: TimelineItem[] = useMemo(
    () => [
      {
        title: "BSc (Hons) in Software Engineering",
        org: "SLIIT",
        period: "2022 - Present",
        points: [
          "Built stronger fundamentals in programming, software design, databases, and engineering process.",
          "Used portfolio work to connect coursework with communication, presentation, and professional identity.",
        ],
      },
      {
        title: "IT Consultant - Software Engineering",
        org: "Gennext (Pvt) Ltd",
        period: "2026",
        points: [
          "Supported clients with practical technical guidance and implementation thinking.",
          "Worked with cross-functional teams to help shape software solutions and delivery decisions.",
        ],
      },
      {
        title: "Junior Consultant - Software Development and Project Management",
        org: "Lab4ICT (Pvt) Ltd",
        period: "2025 - 2026",
        points: [
          "Contributed to software projects using React, Node.js, and Python.",
          "Assisted with planning, coordination, communication, and day-to-day project follow-through.",
        ],
      },
      {
        title: "Freelance Web Developer",
        org: "Fiverr",
        period: "2023 - Present",
        points: [
          "Delivered custom web solutions for clients with a focus on clean, usable interfaces.",
          "Improved responsiveness, reliability, and client communication through iterative delivery.",
        ],
      },
      {
        title: "Personal Secretary Trainee",
        org: "National Water Supply & Drainage Board",
        period: "2022",
        points: [
          "Worked confidently with Word, PowerPoint, Excel, Canva, and document workflows.",
          "Supported administrative tasks and contributed to small project coordination activities.",
        ],
      },
      {
        title: "Applied Project Development",
        org: "Coursework and Self-Directed Practice",
        period: "2024 - Present",
        points: [
          "Turned classroom concepts into working applications using React, Next.js, Node.js, and Python.",
          "Moved beyond implementation into UI refinement, API design, and more disciplined delivery habits.",
        ],
      },
    ],
    []
  );

  return (
    <section id="about" className="section-shell overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-8 top-10 h-48 w-48 rounded-full bg-[#f26b4c]/12 blur-3xl" />
        <div className="absolute right-8 top-24 h-52 w-52 rounded-full bg-[#7fd6c2]/12 blur-3xl" />
      </div>

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="section-kicker">
            <FiBriefcase />
            Academic Portfolio
          </div>
          <h2 className="section-title mt-7">Academic Profile</h2>
          <p className="section-copy mt-6">
            I am shaping my portfolio around more than qualifications alone. It
            also shows how I approach project work, how I reflect on progress,
            and where I want to grow next as a software engineer.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lux-panel rounded-[34px] p-6 md:p-7"
          >
            <div className="flex items-start gap-5">
              <div className="relative h-24 w-24 overflow-hidden rounded-[26px] border border-white/12">
                <Image src="/image-2.png" alt="Nimthera Gunasena" fill className="object-cover" />
              </div>

              <div className="flex-1">
                <div className="display-font text-3xl text-white">Nimthera Gunasena</div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-white/48">
                  Software Engineering Undergraduate
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/64">
                  <span className="lux-chip">
                    <FiMapPin className="text-[#7fd6c2]" />
                    Kurunegala, Sri Lanka
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-8 leading-8 text-white/72">
              I enjoy turning academic and freelance experience into work that
              feels more polished, more deliberate, and easier to trust. That
              means better structure in the code, clearer decisions in the
              interface, and stronger communication around the result.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/_Nimthera_Resume_.pdf" download className="lux-button-primary">
                <FiFileText />
                Download CV
              </a>
              <a href="#career-plan" className="lux-button-secondary">
                See Career Plan
                <FiArrowRight />
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Expected graduation in 2026",
                "Comfortable across frontend and backend work",
                "Strong interest in UI refinement",
                "Actively improving testing and delivery habits",
              ].map((tag) => (
                <div
                  key={tag}
                  className="rounded-[22px] border border-white/10 bg-black/18 px-4 py-4 text-sm text-white/74"
                >
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="lux-panel-soft rounded-[34px] p-7 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-white/44">
                    Academic Portfolio
                  </div>
                  <h3 className="display-font mt-3 text-4xl text-white">
                    Current Academic Focus
                  </h3>
                </div>
                <div className="text-sm text-white/56 md:max-w-60">
                  I&apos;m focusing on cleaner execution, better user-facing polish,
                  and more consistent engineering habits.
                </div>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {[
                  "Software engineering principles",
                  "Modern web application development",
                  "Design-sensitive frontend work",
                  "Reflection, planning, and professional growth",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/10 bg-black/18 px-4 py-4 text-white/78"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <StatCounter key={stat.label} {...stat} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className="lux-panel rounded-[34px] p-7 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm uppercase tracking-[0.22em] text-white/44">
                  Experience Timeline
                </div>
                <h3 className="display-font mt-3 text-4xl text-white">
                  The moments that shaped how I work.
                </h3>
              </div>
              <div className="hidden text-right text-sm text-white/52 md:block">
                2022 to present
              </div>
            </div>

            <div className="relative mt-10 rounded-[28px] border border-white/10 bg-black/18 p-6 md:p-8">
              <div aria-hidden className="absolute bottom-8 left-7 top-8 w-px bg-white/10" />
              <div className="space-y-9">
                {timeline.map((item) => (
                  <div key={`${item.title}-${item.period}`} className="relative pl-10">
                    <div className="absolute left-[0.1rem] top-1.5">
                      <TimelineDot />
                    </div>

                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="text-lg font-semibold text-white">{item.title}</div>
                        <div className="text-white/56">{item.org}</div>
                      </div>
                      <div className="text-sm uppercase tracking-[0.18em] text-[#ff9a76]">
                        {item.period}
                      </div>
                    </div>

                    <ul className="mt-4 space-y-3 text-white/68">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span
                            className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7fd6c2]"
                            aria-hidden
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
