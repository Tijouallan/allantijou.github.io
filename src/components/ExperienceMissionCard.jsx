import Card from "./Card";

export default function ExperienceMissionCard({ mission }) {
  return (
    <Card className="!p-5 sm:!p-6">
      <div className="space-y-4">
        <header className="space-y-1 border-b border-border pb-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            {mission.period}
            {mission.location ? ` · ${mission.location}` : ""}
          </p>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {mission.role}
          </h3>
          <p className="text-sm font-medium text-muted">{mission.company}</p>
        </header>

        <div className="space-y-3 text-sm leading-relaxed">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-foreground">
              Contexte
            </p>
            <p className="text-muted">{mission.context}</p>
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-foreground">
              Problématique
            </p>
            <p className="text-muted">{mission.problem}</p>
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-foreground">
              Solution apportée
            </p>
            <p className="text-foreground">{mission.solution}</p>
          </div>
        </div>

        {mission.highlights?.length > 0 && (
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
              Missions clés
            </p>
            <ul className="space-y-1.5 text-sm text-muted">
              {mission.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 border-t border-border pt-4">
          {mission.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
