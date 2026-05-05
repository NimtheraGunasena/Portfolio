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
      <div className="display-font text-4xl text-[#f0d4a8]">
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
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d6b07c]/45" />
      <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#f0d4a8]" />
    </span>
  );
}

export default function About() {
  const stats: Stat[] = useMemo(
    () => [
      { value: 4, label: "Academic Years" },
      { value: 3, suffix: "+", label: "Flagship Projects" },
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
          "Developed an evidence-driven academic identity through projects, reflection, and portfolio curation.",
        ],
      },
      {
        title: "IT Consultant - Software Engineering",
        org: "Gennext(pvt)ltd",
        period: "2026",
        points: [
          "Provided technical support and consulting services to various clients.",
          "Collaborated with cross-functional teams to deliver software solutions.",
        ],
      },
      {
        title: "Junior Consultant - (Software Development + Project Management)",
        org: "Lab4ICT(pvt)ltd",
        period: "2025 - 2026",
        points: [
          "Contributed to software development projects using React, Node.js, and Python.",
          "Assisted in project management tasks, including planning, coordination, and communication.",
        ],
      },
      {
        title: "Personal Secretory Trainee",
        org: "National Water Supply & Drainage Board",
        period: "2022",
        points: [
          "Worked well with Microsoft Word, PowerPoint, Excel & Canva & IT documentations",
          "Managed paper works & Managed small projects - Underground water supply project",
          "ITIL Certification - Reading"
        ]
      },
      {
        title:"fiver - Freelance Web Developer",
        org: "Fiver.com",
        period: "2023 - Present",
        points: [
          "Delivered custom web development solutions to clients worldwide, specializing in React and Next.js applications.",
          "Maintained a 5-star rating by consistently exceeding client expectations and delivering high-quality work on time.",
        ]

      },
      {
        title: "Applied Project Development",
        org: "Coursework and Self-Directed Practice",
        period: "2024 - 2025",
        points: [
          "Turned classroom concepts into working applications using React, Next.js, Node.js, and Python.",
          "Expanded from implementation into UI refinement, API design, and more structured delivery habits.",
        ],
      },
      {
        title: "Continuous Learning Evidence",
        org: "Certificates, Reflection, and Career Planning",
        period: "Current Focus",
        points: [
          "Documented weekly learning through reflective journal entries and PPW evidence.",
          "Collected certificates and career planning material to show growth beyond single assignments.",
        ],
      },
    ],
    []
  );

  return (
    <section id="about" className="section-shell overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-8 top-10 h-48 w-48 rounded-full bg-[#d6b07c]/10 blur-3xl" />
        <div className="absolute right-8 top-24 h-52 w-52 rounded-full bg-[#7cc7c1]/10 blur-3xl" />
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
            Profile Overview
          </div>
          <h2 className="section-title mt-7">Academic profile with stronger structure and polish.</h2>
          <p className="section-copy mt-6">
            This section frames the degree path, the evidence behind it, and the
            technical direction I am actively developing through project work,
            reflection, and career planning.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
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
                    <FiMapPin className="text-[#7cc7c1]" />
                    Kurunegala, Sri Lanka
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-white/72 leading-8">
              I use this portfolio to connect academic study with practical
              software engineering work. It is designed to show more than
              outputs alone, highlighting how projects, reflection, and
              supporting evidence are shaping my professional direction.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/_Nimthera_Resume_.pdf" download className="lux-button-primary">
                <FiFileText />
                Download CV
              </a>
              <a href="#career-plan" className="lux-button-secondary">
                View Career Plan
                <FiArrowRight />
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Expected graduation: 2026",
                "Full-stack project delivery",
                "Reflective academic evidence",
                "Growing testing and quality mindset",
              ].map((tag) => (
                <div
                  key={tag}
                  className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/74"
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
                    Current Focus
                  </div>
                  <h3 className="display-font mt-3 text-4xl text-white">
                    Sharpening practical engineering depth.
                  </h3>
                </div>
                <div className="text-sm text-white/56 md:max-w-60">
                  Coursework is being translated into cleaner systems, clearer communication, and better execution.
                </div>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {[
                  "Software engineering principles",
                  "Modern web application development",
                  "Testing and quality thinking",
                  "Career planning and reflection",
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
          className="mt-12 grid gap-8 xl:grid-cols-[1fr_0.72fr]"
        >
          <div className="lux-panel rounded-[34px] p-7 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm uppercase tracking-[0.22em] text-white/44">Academic Journey</div>
                <h3 className="display-font mt-3 text-4xl text-white">
                  Growth translated into practical milestones.
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
                      <div className="text-sm uppercase tracking-[0.18em] text-[#f0d4a8]/76">
                        {item.period}
                      </div>
                    </div>

                    <ul className="mt-4 space-y-3 text-white/68">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span
                            className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7cc7c1]"
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

          <div className="space-y-6">
            {[
              {
                title: "Academic Projects",
                detail: "Applied software engineering work spanning full-stack applications and Python-based experimentation.",
              },
              {
                title: "Reflective Journal",
                detail: "PPW reflections that explain what was learned, how it was applied, and what improved next.",
              },
              {
                title: "Certificates and CV",
                detail: "Supporting evidence that strengthens credibility and shows steady learning outside one module.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="lux-panel-soft rounded-[30px] p-6"
              >
                <div className="text-sm uppercase tracking-[0.2em] text-white/44">Coverage</div>
                <div className="display-font mt-3 text-3xl text-white">{item.title}</div>
                <p className="mt-3 text-white/66 leading-7">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
