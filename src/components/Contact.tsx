"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { IoQrCodeOutline } from "react-icons/io5";

export default function Contact() {
  const githubUrl = "https://github.com/NimtheraGunasena";
  const qrCodeSrc = `/api/qr?text=${encodeURIComponent(githubUrl)}`;

  const contactItems = [
    {
      label: "Email",
      value: "nimthera2380@gmail.com",
      href: "mailto:nimthera2380@gmail.com",
      icon: FiMail,
    },
    {
      label: "Phone",
      value: "+94 71 350 1023",
      href: "tel:+94713501023",
      icon: FiPhone,
    },
    {
      label: "Location",
      value: "Kurunegala, Sri Lanka",
      href: undefined,
      icon: FiMapPin,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/nimthera-gunasena-742810252",
      href: "https://www.linkedin.com/in/nimthera-gunasena-742810252",
      icon: FiLinkedin,
    },
    {
      label: "GitHub",
      value: "github.com/NimtheraGunasena",
      href: githubUrl,
      icon: FiGithub,
    },
    {
      label: "QR Code",
      value: "Scan for a quick visit",
      href: qrCodeSrc,
      icon: IoQrCodeOutline,
      openInNewTab: true,
    },
  ];

  return (
    <section id="contact" className="section-shell overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-10 h-48 w-48 rounded-full bg-[#f26b4c]/12 blur-3xl" />
        <div className="absolute right-[8%] top-24 h-56 w-56 rounded-full bg-[#7fd6c2]/12 blur-3xl" />
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
            <div className="section-kicker">Contact</div>
            <h2 className="section-title mt-7">Contact</h2>
          </div>

          <p className="section-copy max-w-none xl:pt-14">
            I&apos;m happy to hear from recruiters, collaborators, lecturers, and
            peers who want to discuss project work, software engineering, or
            future opportunities.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lux-panel rounded-[34px] p-7"
          >
            <div className="text-sm uppercase tracking-[0.2em] text-white/42">Reach Me Here</div>
            <h3 className="display-font mt-4 text-4xl text-white">The easiest ways to start a conversation.</h3>
            <p className="mt-4 leading-8 text-white/68">
              Whether it&apos;s feedback on the portfolio, a project opportunity,
              or a junior software role, these are the channels I check most.
            </p>

            <ul className="mt-8 space-y-4">
              {contactItems.map(({ label, value, href, icon: Icon, openInNewTab }) => {
                const shouldOpenInNewTab = Boolean(
                  href && (openInNewTab || href.startsWith("http"))
                );

                return (
                  <li
                    key={label}
                    className="rounded-[24px] border border-white/10 bg-black/18 px-4 py-4"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[rgba(242,107,76,0.24)] bg-[rgba(242,107,76,0.12)] text-[#ff9a76]">
                        <Icon className="h-5 w-5" />
                      </span>

                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-white/40">{label}</div>
                        {href ? (
                          <a
                            href={href}
                            className="mt-2 block font-medium text-white/84 hover:text-white"
                            target={shouldOpenInNewTab ? "_blank" : undefined}
                            rel={shouldOpenInNewTab ? "noreferrer" : undefined}
                          >
                            {value}
                          </a>
                        ) : (
                          <div className="mt-2 font-medium text-white/84">{value}</div>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lux-panel-soft rounded-[34px] p-7"
          >
            <div className="text-sm uppercase tracking-[0.2em] text-white/42">Collaboration Style</div>
            <h3 className="display-font mt-4 text-4xl text-white">Curious, responsive, and excited to keep improving.</h3>
            <p className="mt-4 leading-8 text-white/68">
              I value conversations that are practical, respectful, and
              growth-oriented. If there&apos;s something useful we can build or
              improve together, I&apos;m interested.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Open to internships",
                "Happy to discuss project work",
                "Usually replies within 24 hours",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-white/10 bg-black/18 px-4 py-4 text-sm text-white/72"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-black/18 p-5">
              <div className="text-sm uppercase tracking-[0.2em] text-white/42">Good reasons to reach out</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Internship or junior role discussion",
                  "Portfolio or project feedback",
                  "Frontend and full-stack collaboration",
                  "Academic or peer learning conversations",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 text-white/72"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:nimthera2380@gmail.com?subject=Portfolio%20Inquiry"
                className="lux-button-primary"
              >
                Send Email
              </a>

              <a
                href="https://www.linkedin.com/in/nimthera-gunasena-742810252"
                target="_blank"
                rel="noreferrer"
                className="lux-button-secondary"
              >
                Open LinkedIn
              </a>
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-black/18 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-white/42">GitHub QR</div>
                  <h4 className="display-font mt-3 text-3xl text-white">Scan for a quick profile visit.</h4>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    This opens my GitHub profile directly on mobile for a fast look at repositories and activity.
                  </p>
                </div>

                <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/52 md:block">
                  fast follow-up
                </div>
              </div>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-[24px] border border-white/10 bg-white p-3 transition hover:bg-white/92"
                aria-label="Open GitHub profile"
              >
                <Image
                  src={qrCodeSrc}
                  alt="QR code for Nimthera Gunasena GitHub profile"
                  width={172}
                  height={172}
                  className="h-40 w-40 rounded-lg"
                  unoptimized
                  loading="lazy"
                />
              </a>

              <div className="mt-5 text-xs uppercase tracking-[0.18em] text-white/38">
                Typical reply time: within 24 hours
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
