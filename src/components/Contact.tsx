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
      value: "Scan to connect quickly",
      href: qrCodeSrc,
      icon: IoQrCodeOutline,
      openInNewTab: true,
    },
  ];

  return (
    <section id="contact" className="section-shell overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-10 h-48 w-48 rounded-full bg-[#d6b07c]/10 blur-3xl" />
        <div className="absolute right-[8%] top-24 h-56 w-56 rounded-full bg-[#7cc7c1]/10 blur-3xl" />
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
            <h2 className="section-title mt-7">A cleaner way to connect around projects, feedback, and collaboration.</h2>
          </div>

          <p className="section-copy max-w-none xl:pt-14">
            Reach out for portfolio feedback, academic discussion, or future
            collaboration in software engineering. The contact area is now
            structured like the rest of the portfolio and easier to scan.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lux-panel rounded-[34px] p-7"
          >
            <div className="text-sm uppercase tracking-[0.2em] text-white/42">Contact Information</div>
            <h3 className="display-font mt-4 text-4xl text-white">Main channels I use.</h3>
            <p className="mt-4 leading-8 text-white/68">
              These are the best ways to reach me for academic discussions,
              project feedback, and future technical collaboration.
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
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[rgba(214,176,124,0.24)] bg-[rgba(214,176,124,0.08)] text-[#f0d4a8]">
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
            <div className="text-sm uppercase tracking-[0.2em] text-white/42">Let&apos;s Connect</div>
            <h3 className="display-font mt-4 text-4xl text-white">Open to feedback and thoughtful conversations.</h3>
            <p className="mt-4 leading-8 text-white/68">
              I welcome conversations around academic projects, portfolio
              reviews, technical learning, and future software engineering
              opportunities.
            </p>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-black/18 p-5">
              <div className="text-sm uppercase tracking-[0.2em] text-white/42">Best reasons to reach out</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Portfolio feedback",
                  "Academic project discussion",
                  "Peer learning and collaboration",
                  "Technical networking",
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
                href="mailto:nimthera2380@gmail.com?subject=Academic%20Portfolio%20Inquiry"
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
                Connect on LinkedIn
              </a>
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-black/18 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-white/42">GitHub QR</div>
                  <h4 className="display-font mt-3 text-3xl text-white">Scan for a quick profile visit.</h4>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Scan this code to open my GitHub profile instantly on mobile.
                  </p>
                </div>

                <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/52 md:block">
                  24h reply window
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
