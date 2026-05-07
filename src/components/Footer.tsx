import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const links = [
  {
    href: "mailto:nimthera2380@gmail.com",
    label: "Email",
    icon: FiMail,
  },
  {
    href: "https://www.linkedin.com/in/nimthera-gunasena-742810252",
    label: "LinkedIn",
    icon: FiLinkedin,
  },
  {
    href: "https://github.com/NimtheraGunasena",
    label: "GitHub",
    icon: FiGithub,
  },
];

export default function Footer() {
  return (
    <footer className="section-shell pb-10 pt-6">
      <div className="section-inner">
        <div className="lux-panel rounded-[34px] px-6 py-8 md:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-white/42">
                Built With Intention
              </div>
              <h3 className="display-font mt-4 text-4xl text-white">Nimthera Gunasena</h3>
              <p className="mt-3 max-w-xl leading-8 text-white/66">
                A software engineering portfolio shaped around practical work,
                better presentation, and steady progress toward professional
                readiness.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {links.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/62 hover:border-[rgba(242,107,76,0.24)] hover:text-[#ff9a76]"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="section-rule mt-8" />

          <div className="mt-6 flex flex-col gap-2 text-sm text-white/44 md:flex-row md:items-center md:justify-between">
            <div>Portfolio for projects, reflection, and future software engineering opportunities.</div>
            <div>&copy; {new Date().getFullYear()} Nimthera Gunasena. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
