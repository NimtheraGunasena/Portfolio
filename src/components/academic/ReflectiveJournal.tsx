"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FiBookOpen, FiCheckCircle } from "react-icons/fi";

type JournalEntry = {
  week: string;
  title: string;
  focus: string;
  learned: string[];
  evidence: string[];
  reflection: string;
  nextSteps: string[];
};

export default function ReflectiveJournal() {
  const [active, setActive] = useState(0);

  const entries: JournalEntry[] = useMemo(
    () => [
      {
        week: "Week 1",
        title: "Starting PPW and building self-awareness",
        focus:
          "Understanding the purpose of PPW and identifying my strengths, gaps, and learning goals.",
        learned: [
          "How to evaluate myself using evidence such as projects, coursework, and feedback.",
          "Why planning matters: goals, skills, actions, and outcomes need to connect clearly.",
          "How a portfolio supports employability and professional identity.",
        ],
        evidence: [
          "Reviewed existing projects and identified areas to improve such as testing, deployment, and documentation.",
          "Outlined a personal brand direction for the portfolio with a more premium visual style.",
        ],
        reflection:
          "I realized that technical ability alone is not enough. PPW pushed me to think about how I communicate progress, how I structure my growth, and how I prove skills with evidence. That shift made my academic identity more intentional.",
        nextSteps: [
          "Define measurable goals for the semester, such as deploying two polished projects.",
          "Track progress weekly in a more structured journal format.",
        ],
      },
      {
        week: "Week 2",
        title: "Portfolio structure and evidence-based presentation",
        focus:
          "Designing an academic portfolio that presents reflection, projects, and supporting evidence clearly.",
        learned: [
          "How to structure a portfolio from profile to projects, learning areas, evidence, and contact.",
          "Why storytelling matters: context, approach, outcome, and reflection improve understanding.",
          "How layout and micro-interactions change the clarity of an academic presentation.",
        ],
        evidence: [
          "Implemented searchable projects, learning filters, and guided journal content.",
          "Reframed the site as a dedicated academic portfolio instead of hiding academic work behind a separate mode.",
        ],
        reflection:
          "This week made me understand that the portfolio itself is a product. Details like navigation, consistency, and visual hierarchy affect how an academic reviewer reads the work. I also learned how important it is to connect evidence with reflection instead of only listing achievements.",
        nextSteps: [
          "Add clearer project outcomes such as features, metrics, or user impact.",
          "Create certificate and CV sections with proper evidence and dates.",
        ],
      },
      {
        week: "Week 3",
        title: "Career planning and building employability skills",
        focus:
          "Creating a Career Development Plan based on roles, required skills, and realistic milestones.",
        learned: [
          "How to map a target role such as Software Engineer into concrete skill groups.",
          "How to identify gaps and convert them into weekly learning tasks.",
          "How certifications can support skill growth when tied to real project improvement.",
        ],
        evidence: [
          "Drafted a career plan with short-term, mid-term, and long-term goals.",
          "Identified improvement areas including test automation, system design, deployment, and monitoring.",
        ],
        reflection:
          "PPW helped me move away from vague future thinking. I now plan with clear targets and actions. Instead of broad ambitions, I define practical development areas such as full-stack engineering, testing, and deployment and turn them into measurable next steps.",
        nextSteps: [
          "Complete one certification focused on testing or cloud deployment.",
          "Add measurable project metrics such as performance or Lighthouse improvements.",
        ],
      },
      {
        week: "Week 4",
        title: "Communication, professionalism, and continuous improvement",
        focus:
          "Improving professional communication through clearer writing, documentation, and teamwork habits.",
        learned: [
          "How to write formal emails and communicate technical issues clearly.",
          "How documentation such as README files and technical notes strengthens professionalism.",
          "How reflection supports continuous improvement through review, learning, and adjustment.",
        ],
        evidence: [
          "Improved portfolio wording to be clearer, more concise, and better aligned with academic review.",
          "Added structured academic sections so that reflection, certificates, and career planning are easier to assess.",
        ],
        reflection:
          "The biggest change is how I present myself. PPW made me more intentional about writing clearly, documenting work, and thinking about outcomes. Those habits strengthen both academic performance and future professional readiness.",
        nextSteps: [
          "Maintain a monthly reflection practice even after PPW ends.",
          "Seek feedback from mentors and keep iterating on the portfolio.",
        ],
      },
    ],
    []
  );

  const current = entries[active];

  return (
    <section id="reflective" className="section-shell overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-20 h-48 w-48 rounded-full bg-[#d6b07c]/10 blur-3xl" />
        <div className="absolute right-[6%] top-24 h-56 w-56 rounded-full bg-[#7cc7c1]/10 blur-3xl" />
      </div>

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <div className="section-kicker">
            <FiBookOpen />
            PPW Reflection
          </div>
          <h2 className="section-title mt-7">Reflective learning presented with stronger clarity.</h2>
          <p className="section-copy mt-6">
            These weekly notes summarize what I learned during PPW, how those
            lessons were applied to my portfolio and career thinking, and what
            I plan to improve next.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[0.38fr_0.62fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="lux-panel rounded-[32px] p-4 md:p-5">
              <div className="px-2 pb-3 text-sm uppercase tracking-[0.22em] text-white/42">
                Select Week
              </div>

              <div className="space-y-2">
                {entries.map((entry, index) => {
                  const selected = index === active;

                  return (
                    <button
                      key={entry.week}
                      onClick={() => setActive(index)}
                      className={`w-full rounded-[22px] border px-4 py-4 text-left transition ${
                        selected
                          ? "border-[rgba(214,176,124,0.24)] bg-[rgba(214,176,124,0.08)] text-white"
                          : "border-white/10 bg-black/18 text-white/74 hover:border-[rgba(124,199,193,0.22)]"
                      }`}
                      type="button"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm uppercase tracking-[0.18em] text-white/46">
                            {entry.week}
                          </div>
                          <div className="mt-2 font-semibold">{entry.title}</div>
                        </div>
                        {selected ? <FiCheckCircle className="mt-1 text-[#f0d4a8]" /> : null}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="lux-panel rounded-[34px] p-7 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-[#f0d4a8]/78">
                    {current.week}
                  </div>
                  <h3 className="display-font mt-3 text-4xl text-white">{current.title}</h3>
                  <p className="mt-4 text-white/68 leading-8">{current.focus}</p>
                </div>

                <div className="rounded-full border border-white/10 bg-black/18 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/54">
                  Reflective Evidence
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-[26px] border border-white/10 bg-black/18 p-5">
                  <div className="text-sm uppercase tracking-[0.2em] text-white/42">What I learned</div>
                  <ul className="mt-4 space-y-3 text-white/70">
                    {current.learned.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f0d4a8]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[26px] border border-white/10 bg-black/18 p-5">
                  <div className="text-sm uppercase tracking-[0.2em] text-white/42">Evidence and application</div>
                  <ul className="mt-4 space-y-3 text-white/70">
                    {current.evidence.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7cc7c1]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-[28px] border border-[rgba(214,176,124,0.24)] bg-[rgba(214,176,124,0.08)] p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-[#f0d4a8]">Reflection</div>
                <p className="mt-3 leading-8 text-white/76">{current.reflection}</p>
              </div>

              <div className="mt-6 rounded-[26px] border border-white/10 bg-black/18 p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-white/42">Next steps</div>
                <ul className="mt-4 space-y-3 text-white/70">
                  {current.nextSteps.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7cc7c1]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-7 text-xs uppercase tracking-[0.18em] text-white/38">
                Weekly PPW reflection connected to evidence and future action.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
