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
    title: "Grocery Delivery App",
    description:
      "A microservices-based grocery delivery application built with the MERN stack, focused on scalable architecture, separated services, and a smoother customer ordering flow.",
    tech: ["JavaScript", "MERN", "React", "Node.js", "MongoDB"],
    github: "https://github.com/yasasArt/Grocery-Delivery-Microservices.git",
    highlights: [
      "Frontend and backend separation",
      "Catalog and shopping flow structure",
      "Applied microservices architecture practice",
    ],
    status: "Featured build",
  },
  {
    title: "Job Change Predictor",
    description:
      "A machine learning project that predicts job changes from employee data, combining data preparation, modeling, and evaluation to surface useful patterns about career transitions.",
    tech: ["JavaScript", "React", "Node.js", "Docker", "MongoDB"],
    github: "https://github.com/asitha-dharmarathne/Job-Change-Prediction-Using-Supervised-Learning.git",
    highlights: [
      "Data preprocessing and feature engineering",
      "Multiple supervised learning algorithms",
      "Model evaluation with metrics and visualizations",
    ],
    status: "Data-driven project",
  },
  {
    title: "Learning Plus",
    description:
      "A Python-based applied computing project focused on image upload, transformation, and real-time experimentation with image-processing concepts.",
    tech: ["Python", "Jupyter Notebook", "OpenCV", "NumPy"],
    github: "https://github.com/asitha-dharmarathne/learning-plus.git",
    highlights: [
      "Image manipulation techniques",
      "Interactive experimentation with processing concepts",
      "Applied computing principles in a practical workflow",
    ],
    status: "Technical exploration",
  },
  {
    title: "My Todo App",
    description:
      "A simple task manager built with Python and Flask to practice CRUD flows, clean interaction patterns, and lightweight full-stack delivery.",
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS"],
    github: "https://github.com/UchithChethana/MyTodoApp.git",
    highlights: [
      "Simple productivity-focused UI",
      "CRUD task workflow with backend routing",
      "Useful project for refining fundamentals",
    ],
    status: "Foundation project",
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
        <div className="absolute left-[10%] top-20 h-52 w-52 rounded-full bg-[#7cc7c1]/10 blur-3xl" />
        <div className="absolute right-[8%] top-16 h-60 w-60 rounded-full bg-[#d6b07c]/10 blur-3xl" />
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
            <div className="section-kicker">Selected Work</div>
            <h2 className="section-title mt-7">Projects that turn study into delivery.</h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="section-copy max-w-none">
              These projects show how coursework has been translated into
              software practice across full-stack architecture, machine
              learning, and applied Python experimentation.
            </p>

            <div className="mt-7 lux-panel rounded-[30px] p-4 md:p-5">
              <div className="grid gap-4 md:grid-cols-[1.1fr_auto] md:items-center">
                <div className="relative">
                  <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/34" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search projects, tools, or technologies"
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

        {featured ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="lux-panel mt-12 overflow-hidden rounded-[36px] p-6 md:p-8"
          >
            <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="section-kicker border-[rgba(124,199,193,0.22)] bg-[rgba(124,199,193,0.08)] text-[#7cc7c1]">
                    Featured Project
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
                    Technology Stack
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {featured.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[rgba(214,176,124,0.22)] bg-[rgba(214,176,124,0.08)] px-4 py-2 text-sm text-[#f0d4a8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
                          className="hover:text-[#f0d4a8]"
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
                          className="hover:text-[#7cc7c1]"
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
                    className="mt-5 text-sm uppercase tracking-[0.2em] text-[#f0d4a8] hover:text-white"
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
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7cc7c1]" />
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
