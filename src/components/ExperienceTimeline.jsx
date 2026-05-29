import Card from "./Card";

export default function ExperienceTimeline({ experience }) {
  return (
    <section id="experience" className="scroll-mt-8 space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Experience
        </h2>
        <p className="mt-2 text-sm text-muted">
          Professional journey and roles.
        </p>
      </header>

      <Card className="p-6 md:p-8">
        <ol className="relative space-y-0">
          {experience.map((item, index) => (
            <li
              key={item.id}
              className={`relative pl-8 pb-10 last:pb-0 ${
                index !== experience.length - 1
                  ? "before:absolute before:left-[11px] before:top-6 before:h-[calc(100%-12px)] before:w-px before:bg-border"
                  : ""
              }`}
            >
              <span
                className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-foreground bg-card"
                aria-hidden
              >
                <span className="h-2 w-2 rounded-full bg-foreground" />
              </span>

              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  {item.duration}
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.position}
                </h3>
                <p className="text-sm font-medium text-muted">{item.company}</p>
                <p className="pt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Card>
    </section>
  );
}
