"use client";

import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import {
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiJsonwebtokens,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from "react-icons/si";

type Category = "Frontend" | "Backend" | "Database" | "Tools";

type Skill = {
  name: string;
  level: number;
  category: Category;
  hint: string;
  icon?: React.ComponentType<{ className?: string }>;
  featured?: boolean;
};

const SKILLS: Skill[] = [
  { name: "React", level: 92, category: "Frontend", hint: "Hooks, component architecture, and interactive UI patterns.", icon: SiReact, featured: true },
  { name: "Next.js", level: 88, category: "Frontend", hint: "App Router, SSR, and portfolio-focused front-end structure.", icon: SiNextdotjs, featured: true },
  { name: "TypeScript", level: 86, category: "Frontend", hint: "Safer code through types, interfaces, and clearer contracts.", icon: SiTypescript, featured: true },
  { name: "Tailwind CSS", level: 90, category: "Frontend", hint: "Responsive layouts, design systems, and consistent UI polish.", icon: SiTailwindcss, featured: true },
  { name: "UI/UX (Figma)", level: 72, category: "Frontend", hint: "Wireframing, layout exploration, and user-centered interface thinking.", icon: SiFigma },
  { name: "Node.js", level: 85, category: "Backend", hint: "API building, asynchronous workflows, and backend fundamentals.", icon: SiNodedotjs, featured: true },
  { name: "Express.js", level: 83, category: "Backend", hint: "Routing, middleware, and application structure for service layers.", icon: SiExpress, featured: true },
  { name: "REST API Design", level: 87, category: "Backend", hint: "Validation, CRUD design, pagination, and practical endpoint design." },
  { name: "JWT Authentication", level: 80, category: "Backend", hint: "Secure login flows, access tokens, and role-aware route protection.", icon: SiJsonwebtokens },
  { name: "Spring Boot", level: 75, category: "Backend", hint: "Controllers, layered structure, and Java service development.", icon: SiSpringboot },
  { name: "MongoDB", level: 82, category: "Database", hint: "Schema design, querying, and document-oriented data modeling.", icon: SiMongodb, featured: true },
  { name: "MySQL", level: 78, category: "Database", hint: "Relational thinking, joins, and structured query practice.", icon: SiMysql },
  { name: "Git", level: 86, category: "Tools", hint: "Version control, branching, and iterative delivery habits.", icon: SiGit, featured: true },
  { name: "GitHub", level: 85, category: "Tools", hint: "Repository management, collaboration, and workflow organization.", icon: SiGithub },
  { name: "Postman", level: 84, category: "Tools", hint: "API exploration, debugging, and test collection workflows.", icon: SiPostman },
  { name: "Testing Library", level: 70, category: "Tools", hint: "Component behavior testing and stronger quality habits.", icon: SiTestinglibrary },
  { name: "Jest", level: 68, category: "Tools", hint: "Unit testing fundamentals and confidence-building automation.", icon: SiJest },
];

const CATEGORIES: Array<"All" | Category> = ["All", "Frontend", "Backend", "Database", "Tools"];

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function GlowCard({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={(event) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }}
      onClick={onClick}
      className={`lux-panel-soft relative overflow-hidden rounded-[30px] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: show ? 1 : 0,
          background: `radial-gradient(280px circle at ${position.x}px ${position.y}px, rgba(240,212,168,0.16), transparent 60%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");
  const [pinned, setPinned] = useState<string | null>(null);

  const featuredStack = useMemo(
    () => [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind", Icon: SiTailwindcss },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Git", Icon: SiGit },
      { name: "Postman", Icon: SiPostman },
    ],
    []
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return SKILLS.filter((skill) => {
      const matchesCategory =
        activeCategory === "All" ? true : skill.category === activeCategory;
      const matchesQuery = !normalizedQuery
        ? true
        : `${skill.name} ${skill.hint} ${skill.category}`
            .toLowerCase()
            .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    }).sort((a, b) => {
      if (pinned) {
        if (a.name === pinned) return -1;
        if (b.name === pinned) return 1;
      }

      const aFeatured = a.featured ? 1 : 0;
      const bFeatured = b.featured ? 1 : 0;

      if (bFeatured !== aFeatured) return bFeatured - aFeatured;
      return b.level - a.level;
    });
  }, [activeCategory, query, pinned]);

  return (
    <section id="skills" className="section-shell overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[14%] top-16 h-44 w-44 rounded-full bg-[#d6b07c]/10 blur-3xl" />
        <div className="absolute right-[8%] top-36 h-56 w-56 rounded-full bg-[#7cc7c1]/10 blur-3xl" />
      </div>

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]"
        >
          <div>
            <div className="section-kicker">Capability Map</div>
            <h2 className="section-title mt-7">Learning areas with clearer depth and confidence.</h2>
          </div>

          <p className="section-copy max-w-none xl:pt-14">
            These tools and disciplines have been strengthened through
            coursework, certificates, and project delivery. The layout below
            makes it easier to scan core strengths while still showing where I
            am actively growing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <GlowCard className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-white/44">
                  Core Toolkit
                </div>
                <div className="display-font mt-3 text-3xl text-white">
                  The technologies I reach for most often.
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredStack.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="rounded-full border border-white/10 bg-black/18 px-4 py-2 text-sm text-white/70"
                    title={name}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon className="text-[#f0d4a8]" />
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </GlowCard>
        </motion.div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <GlowCard className="p-5">
            <div className="text-sm uppercase tracking-[0.2em] text-white/44">Search</div>
            <div className="mt-3">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search learning areas or tools"
                className="lux-input px-4 py-3"
              />
            </div>
          </GlowCard>

          <GlowCard className="p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm uppercase tracking-[0.2em] text-white/44">Filter by category</div>
              {pinned ? (
                <button
                  onClick={() => setPinned(null)}
                  className="text-xs uppercase tracking-[0.18em] text-[#f0d4a8] hover:text-white"
                  type="button"
                >
                  Clear pin: {pinned}
                </button>
              ) : null}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {CATEGORIES.map((category) => {
                const active = category === activeCategory;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`lux-chip text-sm ${active ? "lux-chip-active" : ""}`}
                    type="button"
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </GlowCard>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((skill, index) => {
            const isPinned = pinned === skill.name;
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.22) }}
              >
                <GlowCard
                  onClick={() => setPinned((current) => (current === skill.name ? null : skill.name))}
                  className={`cursor-pointer p-6 ${isPinned ? "border-[rgba(214,176,124,0.24)]" : ""}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-4">
                      <div className="rounded-[20px] border border-white/10 bg-black/18 p-3 text-lg text-[#f0d4a8]">
                        {Icon ? <Icon className="h-5 w-5" /> : <span>+</span>}
                      </div>
                      <div>
                        <div className="text-sm uppercase tracking-[0.2em] text-white/42">
                          {skill.category}
                        </div>
                        <h3 className="mt-2 text-xl font-semibold text-white">{skill.name}</h3>
                      </div>
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] ${
                        isPinned
                          ? "border-[rgba(214,176,124,0.24)] bg-[rgba(214,176,124,0.08)] text-[#f0d4a8]"
                          : "border-white/10 bg-black/18 text-white/56"
                      }`}
                    >
                      {isPinned ? "Pinned" : "Pin"}
                    </span>
                  </div>

                  <p className="mt-5 leading-8 text-white/68">{skill.hint}</p>

                  <div className="mt-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/46">Confidence level</span>
                      <span className="text-white/78">{clamp(skill.level, 0, 100)}%</span>
                    </div>

                    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/8">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${clamp(skill.level, 0, 100)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-[linear-gradient(90deg,#f0d4a8_0%,#d6b07c_48%,#7cc7c1_100%)]"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/42">
                    <span>{isPinned ? "Saved for quick review" : "Click card to pin"}</span>
                    <span>Coursework + projects</span>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <div className="lux-panel-soft mt-10 rounded-[28px] p-8 text-white/68">
            No learning areas match that search. Try a different keyword or reset the filters.
          </div>
        ) : null}
      </div>
    </section>
  );
}
