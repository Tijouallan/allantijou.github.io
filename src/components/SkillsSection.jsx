import Card from "./Card";

export default function SkillsSection({ skills }) {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="scroll-mt-8 space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Skills
        </h2>
        <p className="mt-2 text-sm text-muted">
          Technologies and tools grouped by domain.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map(([category, items]) => (
          <Card key={category} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-2xl bg-surface px-3 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-border/50"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
