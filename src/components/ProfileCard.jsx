import { MapPin, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Card from "./Card";

function ActionButton({ href, children, variant = "primary", icon: Icon }) {
  const base =
    "inline-flex min-w-0 items-center justify-center gap-1.5 rounded-2xl px-3 py-2 text-xs font-medium transition-all duration-200 min-[400px]:gap-2 min-[400px]:px-4 min-[400px]:py-2.5 min-[400px]:text-sm";
  const variants = {
    primary:
      "bg-foreground text-surface hover:opacity-90 hover:-translate-y-0.5",
    secondary:
      "bg-surface border border-border text-foreground hover:bg-card hover:-translate-y-0.5",
  };

  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${base} ${variants[variant]}`}
      >
        {Icon && <Icon size={16} />}
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {Icon && <Icon size={16} />}
      {children}
    </a>
  );
}

export default function ProfileCard({ profile }) {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className="flex h-auto flex-col gap-4 !p-4 text-left sm:gap-5 sm:!p-5 lg:h-[calc(100svh-3rem)] lg:min-h-0 lg:justify-between lg:overflow-y-auto xl:!p-6">
      <div className="mx-auto w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[160px] xl:max-w-[220px]">
        {profile.portrait ? (
          <img
            src={profile.portrait}
            alt={profile.name}
            className="aspect-square w-full rounded-[20px] object-cover"
          />
        ) : (
          <div
            className="flex aspect-square w-full items-center justify-center rounded-[20px] bg-gradient-to-br from-zinc-100 to-zinc-200 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-400 dark:from-zinc-800 dark:to-zinc-900 dark:text-zinc-500"
            aria-hidden
          >
            {initials}
          </div>
        )}
      </div>


      <div className="space-y-1">
        <h1 className="text-xl font-semibold tracking-tight text-foreground xl:text-2xl">
          {profile.name}
        </h1>
        <p className="text-sm font-medium text-muted xl:text-base">{profile.role}</p>
        <p className="flex items-center gap-1.5 text-xs text-muted xl:text-sm">
          <MapPin size={14} className="shrink-0" />
          {profile.location}
        </p>
      </div>

      <p className="text-xs leading-relaxed text-muted xl:text-sm">{profile.intro}</p>

      <ul className="space-y-1.5 border-t border-border pt-3">
        {profile.quickInfo.map(({ label, value }) => (
          <li key={label} className="flex justify-between gap-3 text-xs xl:text-sm">
            <span className="shrink-0 text-muted">{label}</span>
            <span className="min-w-0 text-right font-medium break-words text-foreground">
              {value}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {profile.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-foreground transition-colors duration-200 hover:border-foreground/20"
          >
            {tag}
          </span>
        ))}
      </div>

 
    </Card>
  );
}
