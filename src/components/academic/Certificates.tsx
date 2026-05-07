"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  FiAward,
  FiDownload,
  FiExternalLink,
  FiFileText,
  FiSearch,
  FiX,
} from "react-icons/fi";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  type: "Technical" | "Soft Skill";
  skillImproved: string;
  proof: string;
  file: string;
  link?: string;
};

function isPdf(path: string) {
  return /\.pdf(\?.*)?$/i.test(path);
}

export default function Certificates() {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<"All" | Cert["type"]>("All");
  const [open, setOpen] = useState<Cert | null>(null);

  const certs: Cert[] = useMemo(
    () => [
      {
        title: "Python Programming",
        issuer: "University of Moratuwa",
        date: "2024",
        type: "Technical",
        skillImproved: "Python fundamentals",
        proof:
          "Strengthened core Python syntax, data types, control flow, and problem solving.",
        file: "/certificates/Cer3.pdf",
      },
      {
        title: "Frontend Software Development",
        issuer: "Forage",
        date: "2024",
        type: "Technical",
        skillImproved: "Frontend development with React",
        proof: "Improved hands-on programming and writing cleaner, reusable code.",
        file: "/certificates/Cer2.pdf",
      },
      
      
    ],
    []
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return certs.filter((cert) => {
      const matchesType = activeType === "All" ? true : cert.type === activeType;
      const matchesQuery = !normalizedQuery
        ? true
        : `${cert.title} ${cert.issuer} ${cert.skillImproved} ${cert.proof} ${cert.type}`
            .toLowerCase()
            .includes(normalizedQuery);

      return matchesType && matchesQuery;
    });
  }, [certs, query, activeType]);

  return (
    <section id="certificates" className="section-shell overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-52 w-52 rounded-full bg-[#7fd6c2]/12 blur-3xl" />
        <div className="absolute right-[10%] top-10 h-56 w-56 rounded-full bg-[#f26b4c]/12 blur-3xl" />
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
              <FiAward />
              Certificates
            </div>
            <h2 className="section-title mt-7">Certificates</h2>
          </div>

          <p className="section-copy max-w-none xl:pt-14">
            These certificates reflect continued learning across programming,
            academic development, and supporting tools. They also give quick,
            browsable proof behind the growth shown elsewhere in the portfolio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="lux-panel mt-10 rounded-[34px] p-5"
        >
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div className="relative">
              <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/34" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search certificates, issuers, or skills"
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
              {(["All", "Technical", "Soft Skill"] as const).map((type) => {
                const active = type === activeType;
                return (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`lux-chip text-sm ${active ? "lux-chip-active" : ""}`}
                    type="button"
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Certificates", value: `${filtered.length}` },
            { label: "Primary Type", value: "Technical" },
            { label: "Review Style", value: "Preview + proof" },
          ].map((item) => (
            <div key={item.label} className="lux-panel-soft rounded-[28px] px-5 py-5">
              <div className="display-font text-2xl text-white">{item.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/44">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((cert, index) => {
            const pdf = isPdf(cert.file);

            return (
              <motion.button
                key={cert.title}
                type="button"
                onClick={() => setOpen(cert)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.2) }}
                whileHover={{ y: -6 }}
                className="lux-panel-soft group overflow-hidden rounded-[30px] text-left"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  {pdf ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,rgba(242,107,76,0.16),rgba(127,214,194,0.1))]">
                      <div className="flex flex-col items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(242,107,76,0.24)] bg-black/18 text-[#ff9a76]">
                          <FiFileText size={22} />
                        </div>
                        <div className="text-sm uppercase tracking-[0.2em] text-white/68">PDF Preview</div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={cert.file}
                      alt={`${cert.title} certificate`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  )}

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(7,16,21,0.85)_100%)]" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="rounded-full border border-white/10 bg-black/18 px-3 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-white/56">
                      {cert.issuer} / {cert.date}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-[rgba(242,107,76,0.24)] bg-[rgba(242,107,76,0.12)] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-[#ff9a76]">
                      {cert.type}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/38 group-hover:text-[#7fd6c2]">
                      View Proof
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-white">{cert.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">
                    <span className="text-white/88">Skill improved:</span> {cert.skillImproved}
                  </p>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/54">{cert.proof}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <div className="lux-panel-soft mt-10 rounded-[28px] p-8 text-white/68">
            No certificates match that filter. Try another skill, issuer, or keyword.
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/72 px-5 py-8 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="lux-panel max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[34px]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/42">
                    {open.issuer} / {open.date}
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">{open.title}</div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={open.file}
                    target="_blank"
                    rel="noreferrer"
                    className="lux-button-secondary px-4 py-2 text-sm"
                  >
                    <FiExternalLink />
                    Open
                  </a>

                  <a href={open.file} download className="lux-button-secondary px-4 py-2 text-sm">
                    <FiDownload />
                    Download
                  </a>

                  {open.link ? (
                    <a
                      href={open.link}
                      target="_blank"
                      rel="noreferrer"
                      className="lux-button-secondary px-4 py-2 text-sm"
                    >
                      <FiExternalLink />
                      Verify
                    </a>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => setOpen(null)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/18 text-white/66 hover:text-white"
                    aria-label="Close preview"
                  >
                    <FiX />
                  </button>
                </div>
              </div>

              <div className="grid max-h-[calc(92vh-6rem)] gap-0 overflow-auto md:grid-cols-[1.1fr_0.9fr]">
                <div className="min-h-[360px] bg-black">
                  {isPdf(open.file) ? (
                    <iframe
                      src={open.file}
                      className="h-full min-h-[420px] w-full"
                      title={`${open.title} certificate preview`}
                    />
                  ) : (
                    <div className="relative min-h-[420px] w-full">
                      <Image
                        src={open.file}
                        alt={`${open.title} certificate preview`}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-7">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-[rgba(242,107,76,0.24)] bg-[rgba(242,107,76,0.12)] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-[#ff9a76]">
                      {open.type}
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/18 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/56">
                      {open.skillImproved}
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/18 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/56">
                      {isPdf(open.file) ? "PDF" : "Image"}
                    </span>
                  </div>

                  <h4 className="display-font mt-6 text-3xl text-white">
                    Evidence of skill improvement
                  </h4>
                  <p className="mt-4 leading-8 text-white/70">{open.proof}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
