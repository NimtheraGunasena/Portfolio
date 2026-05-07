"use client";

import { motion } from "framer-motion";
import { FiClock, FiTarget, FiTrendingUp } from "react-icons/fi";

const goalGroups = [
  {
    title: "Short-Term",
    span: "1-2 years",
    icon: FiClock,
    accent: "text-[#ff9a76]",
    items: [
      "Maintain strong academic performance",
      "Complete polished portfolio and capstone-style projects",
      "Strengthen testing and system design fundamentals",
      "Deploy stronger full-stack applications",
      "Earn at least one cloud or testing certification",
    ],
  },
  {
    title: "Mid-Term",
    span: "3-5 years",
    icon: FiTrendingUp,
    accent: "text-[#7fd6c2]",
    items: [
      "Become a dependable full-stack engineer",
      "Lead small features and smoother team delivery",
      "Grow stronger knowledge of scalable architecture",
      "Contribute to open-source or community projects",
      "Support peers through collaboration and mentoring",
    ],
  },
  {
    title: "Long-Term",
    span: "5+ years",
    icon: FiTarget,
    accent: "text-white",
    items: [
      "Grow into a senior engineering role",
      "Architect scalable distributed systems",
      "Build impactful digital products with clear user value",
      "Keep adapting to emerging technologies",
      "Explore product leadership or entrepreneurial paths",
    ],
  },
];

export default function CareerPlan() {
  return (
    <section id="career-plan" className="section-shell overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-[12%] top-12 h-52 w-52 rounded-full bg-[#f26b4c]/12 blur-3xl" />
        <div className="absolute left-[8%] top-36 h-56 w-56 rounded-full bg-[#7fd6c2]/12 blur-3xl" />
      </div>

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]"
        >
          <div>
            <div className="section-kicker">Career Plan</div>
            <h2 className="section-title mt-7">Career Plan</h2>
          </div>

          <p className="section-copy max-w-none xl:pt-14">
            My career plan connects current study and project work to the
            technical and professional strengths I want to build over time. It
            keeps the path practical, measurable, and aligned with software
            engineering expectations.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {goalGroups.map(({ title, span, icon: Icon, accent, items }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="lux-panel-soft rounded-[32px] p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/18 ${accent}`}>
                  <Icon />
                </div>
                <div className="text-xs uppercase tracking-[0.22em] text-white/42">{span}</div>
              </div>

              <h3 className="display-font mt-6 text-4xl text-white">{title}</h3>

              <ul className="mt-6 space-y-3 text-white/70">
                {items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#ff9a76]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Short-Term Goal", value: "Polished delivery" },
            { label: "Mid-Term Goal", value: "Team-ready engineer" },
            { label: "Long-Term Goal", value: "Scalable product impact" },
          ].map((item) => (
            <div key={item.label} className="lux-panel-soft rounded-[28px] px-5 py-5">
              <div className="display-font text-2xl text-white">{item.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/44">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          viewport={{ once: true }}
          className="lux-panel mt-8 rounded-[36px] p-7 md:p-8"
        >
          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-white/42">
                Skill Gap Analysis
              </div>
              <h3 className="display-font mt-4 text-4xl text-white">
                Improvement areas with a practical action strategy.
              </h3>
              <p className="mt-5 leading-8 text-white/68">
                The goal is steady growth through structured learning,
                real-world project application, and measurable progress. This
                keeps the plan aligned with both academic milestones and
                industry expectations.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-black/18 p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-white/42">
                  Areas to improve
                </div>
                <ul className="mt-4 space-y-3 text-white/70">
                  {[
                    "Advanced system design principles",
                    "Automated testing and CI/CD pipelines",
                    "Cloud deployment on AWS or Azure",
                    "Performance optimization and monitoring",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7fd6c2]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/18 p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-white/42">
                  Action strategy
                </div>
                <ul className="mt-4 space-y-3 text-white/70">
                  {[
                    "Complete structured online certifications",
                    "Build and deploy more scalable projects",
                    "Study system design case studies weekly",
                    "Seek mentorship and regular feedback",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#ff9a76]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
