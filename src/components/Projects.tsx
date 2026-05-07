"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiExternalLink, FiSearch } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
  highlights?: string[];
  status: string;
};

const projects: Project[] = [
  {
    title: "Product Service",
    description:
      "A full-stack product catalog and ordering system built with React, Node.js, and MongoDB, designed to practice service-oriented architecture and frontend-backend separation.",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/NimtheraGunasena/Product-service.git",
    highlights: [
      "Implemented a clean separation between frontend and backend",
      "Designed a simple product catalog with ordering functionality",
      "Focused on architecture and code organization for maintainability",
    ],
    status: "Architecture-focused build",
  },
  {
    title: "Hostel Nest",
    description:
      "A machine learning project exploring supervised learning techniques to predict student satisfaction based on hostel features and feedback data.",
    tech: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    github: "https://github.com/NimtheraGunasena/Hostel-Nest.git",
    highlights: [
      "Applied data preprocessing and feature engineering to real-world data",
      "Experimented with multiple supervised learning algorithms",
      "Visualized results to understand model performance and insights",
    ],
    status: "Applied machine learning experiment",
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing projects, skills, and experience.",
    tech: ["TypeScript", "React", "Next.js", "Framer Motion"],
    github: "https://github.com/NimtheraGunasena/Portfolio.git",
    highlights: [
      "Designed and developed a responsive portfolio website",
      "Showcased projects with interactive elements and animations",
      "Focused on clean design and user experience",
    ],
    status: "Technical experiment",
  },
  
];

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

export default function Projects() {
  const [query, setQuery] = useState("");
  const [activeTech, setActiveTech] = useState<string>("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const techOptions = useMemo(() => {
    const all = projects.flatMap((project) => project.tech);
    return ["All", ...uniq(all).sort((a, b) => a.localeCompare(b))];
  }, []);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesQuery = !normalizedQuery
        ? true
        : `${project.title} ${project.description} ${project.tech.join(" ")}`
            .toLowerCase()
            .includes(normalizedQuery);

      const matchesTech =
        activeTech === "All" ? true : project.tech.includes(activeTech);

      return matchesQuery && matchesTech;
    });
  }, [query, activeTech]);

  const featured = filtered[0];

  return (
    <section id="projects" className="section-shell overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-20 h-52 w-52 rounded-full bg-[#7fd6c2]/12 blur-3xl" />
        <div className="absolute right-[8%] top-16 h-60 w-60 rounded-full bg-[#f26b4c]/12 blur-3xl" />
      </div>

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <div className="section-kicker">Projects</div>
            <h2 className="section-title mt-7">Projects</h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="section-copy max-w-none">
              These projects span full-stack delivery, applied machine
              learning, and Python experimentation. Together they show how I
              turn technical learning into more complete products.
            </p>

            <div className="mt-7 lux-panel rounded-[30px] p-4 md:p-5">
              <div className="grid gap-4 md:grid-cols-[1.1fr_auto] md:items-center">
                <div className="relative">
                  <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/34" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search by project, stack, or focus"
                    className="lux-input py-3 pl-11 pr-10"
                  />
                  {query ? (
                    <button
                      onClick={() => setQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80"
                      aria-label="Clear search"
                      type="button"
                    >
                      x
                    </button>
                  ) : null}
                </div>

                <div className="flex flex-wrap gap-2">
                  {techOptions.map((tech) => {
                    const active = tech === activeTech;
                    return (
                      <button
                        key={tech}
                        onClick={() => setActiveTech(tech)}
                        className={`lux-chip text-sm ${active ? "lux-chip-active" : ""}`}
                        type="button"
                      >
                        {tech}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Projects Shown", value: `${filtered.length}` },
            { label: "Main Strength", value: "Frontend + Full Stack" },
            { label: "Design Goal", value: "Useful and polished" },
          ].map((item) => (
            <div key={item.label} className="lux-panel-soft rounded-[28px] px-5 py-5">
              <div className="display-font text-2xl text-white">{item.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/44">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {featured ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="lux-panel mt-10 overflow-hidden rounded-[36px] p-6 md:p-8"
          >
            <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="section-kicker border-[rgba(127,214,194,0.24)] bg-[rgba(127,214,194,0.1)] text-[#7fd6c2]">
                    Featured Case Study
                  </span>
                  <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/50">
                    {featured.status}
                  </span>
                </div>

                <h3 className="display-font mt-7 text-5xl text-white">{featured.title}</h3>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
                  {featured.description}
                </p>

                {featured.highlights?.length ? (
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {featured.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-[22px] border border-white/10 bg-black/20 px-4 py-4 text-white/74"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col justify-between gap-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-white/44">
                    Stack And Focus
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {featured.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[rgba(242,107,76,0.24)] bg-[rgba(242,107,76,0.12)] px-4 py-2 text-sm text-[#ff9a76]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-black/18 p-5">
                  <div className="text-sm uppercase tracking-[0.2em] text-white/44">
                    Why it matters
                  </div>
                  <p className="mt-3 leading-8 text-white/70">
                    This project best captures how I combine architecture,
                    usability, and project structure into a stronger final
                    result.
                  </p>
                </div>

                <div className="grid gap-3">
                  {featured.github ? (
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noreferrer"
                      className="lux-button-secondary justify-between"
                    >
                      <span className="inline-flex items-center gap-2">
                        <FaGithub />
                        View GitHub Repository
                      </span>
                      <FiArrowUpRight />
                    </a>
                  ) : null}
                  {featured.live ? (
                    <a
                      href={featured.live}
                      target="_blank"
                      rel="noreferrer"
                      className="lux-button-primary justify-between"
                    >
                      <span className="inline-flex items-center gap-2">
                        <FiExternalLink />
                        Open Live Project
                      </span>
                      <FiArrowUpRight />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence>
            {filtered.map((project, index) => {
              const isExpanded = expanded === project.title;
              const preview =
                project.description.length > 112
                  ? `${project.description.slice(0, 112)}...`
                  : project.description;

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 14 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.2) }}
                  whileHover={{ y: -6 }}
                  className="lux-panel-soft group rounded-[30px] p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-white/44">
                        {project.status}
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                    </div>

                    <div className="flex gap-3 text-lg text-white/42">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-[#ff9a76]"
                          aria-label={`${project.title} GitHub`}
                        >
                          <FaGithub />
                        </a>
                      ) : null}
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-[#7fd6c2]"
                          aria-label={`${project.title} live demo`}
                        >
                          <FiExternalLink />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <p className="mt-4 leading-8 text-white/68">
                    {isExpanded ? project.description : preview}
                  </p>

                  <button
                    onClick={() => setExpanded(isExpanded ? null : project.title)}
                    className="mt-5 text-sm uppercase tracking-[0.2em] text-[#ff9a76] hover:text-white"
                    type="button"
                  >
                    {isExpanded ? "Collapse details" : "Read more"}
                  </button>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-black/18 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-white/62"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence>
                    {isExpanded && project.highlights?.length ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 rounded-[22px] border border-white/10 bg-black/20 p-4">
                          <div className="text-xs uppercase tracking-[0.2em] text-white/44">
                            Highlights
                          </div>
                          <ul className="mt-3 space-y-2 text-sm text-white/72">
                            {project.highlights.map((highlight) => (
                              <li key={highlight} className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7fd6c2]" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 ? (
          <div className="lux-panel-soft mt-10 rounded-[28px] p-8 text-white/68">
            No projects match that search yet. Try another technology or clear the filter.
          </div>
        ) : null}
      </div>
    </section>
  );
}
