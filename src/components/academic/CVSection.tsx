"use client";

import { motion } from "framer-motion";
import { FiDownload, FiExternalLink, FiFileText } from "react-icons/fi";

export default function CVSection() {
  const cvPdf = "/_Nimthera_Resume_.pdf";

  return (
    <section id="cv" className="section-shell overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-12 h-44 w-44 rounded-full bg-[#f26b4c]/12 blur-3xl" />
        <div className="absolute right-[8%] top-28 h-56 w-56 rounded-full bg-[#7fd6c2]/12 blur-3xl" />
      </div>

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]"
        >
          <div>
            <div className="section-kicker">
              <FiFileText />
              CV
            </div>
            <h2 className="section-title mt-7">CV</h2>
          </div>

          <p className="section-copy max-w-none xl:pt-14">
            The CV sits inside the portfolio so education, experience, and
            supporting details can be reviewed without breaking the flow of the
            site.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          {[
            { label: "Document Type", value: "Academic CV" },
            { label: "Access", value: "Embedded preview" },
            { label: "Format", value: "Printable PDF" },
          ].map((item) => (
            <div key={item.label} className="lux-panel-soft rounded-[28px] px-5 py-5">
              <div className="display-font text-2xl text-white">{item.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/44">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lux-panel mt-8 overflow-hidden rounded-[36px]"
        >
          <div className="flex flex-col gap-2 border-b border-white/10 px-5 py-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-white/42">CV Preview</div>
              <div className="mt-2 text-white/70">Embedded PDF for quick academic review</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={cvPdf} download className="lux-button-primary px-4 py-2 text-sm">
                <FiDownload />
                Download CV
              </a>

              <a
                href={cvPdf}
                target="_blank"
                rel="noreferrer"
                className="lux-button-secondary px-4 py-2 text-sm"
              >
                <FiExternalLink />
                Open in New Tab
              </a>
            </div>
          </div>

          <div className="h-[78vh] min-h-[32rem] bg-black">
            <iframe src={cvPdf} className="h-full w-full" title="Nimthera Gunasena CV" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
