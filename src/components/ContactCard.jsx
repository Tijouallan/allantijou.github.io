import { Mail, Globe, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Card from "./Card";

const linkRows = [
  { key: "email", label: "Email", icon: Mail, getHref: (c) => `mailto:${c.email}` },
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: FaLinkedin,
    getHref: (c) => c.linkedin,
  },
  { key: "github", label: "GitHub", icon: FaGithub, getHref: (c) => c.github },
  {
    key: "portfolio",
    label: "Portfolio",
    icon: Globe,
    getHref: (c) => c.portfolio,
  },
];

export default function ContactCard({ contact }) {
  return (
    <section id="contact" className="scroll-mt-8 space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Contact
        </h2>
        <p className="mt-2 text-sm text-muted">
          Reach out for collaborations, opportunities, or questions.
        </p>
      </header>

      <Card className="space-y-6">
        <ul className="space-y-3">
          {linkRows.map(({ key, label, icon: Icon, getHref }) => {
            const href = getHref(contact);
            const display =
              key === "email" ? contact.email : href.replace(/^https?:\/\//, "");
            return (
              <li key={key}>
                <a
                  href={href}
                  target={key !== "email" ? "_blank" : undefined}
                  rel={key !== "email" ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-4 py-3 transition-all duration-200 hover:border-foreground/20 hover:-translate-y-0.5"
                >
                  <span className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <Icon size={18} className="text-muted" />
                    <span>
                      <span className="block text-xs text-muted">{label}</span>
                      {display}
                    </span>
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-muted transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={`mailto:${contact.email}?subject=Let's work together`}
          className="flex w-full items-center justify-center gap-2 rounded-[24px] bg-foreground py-4 text-base font-semibold text-surface transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
        >
          Let&apos;s work together
          <ArrowRight size={18} />
        </a>
      </Card>
    </section>
  );
}
