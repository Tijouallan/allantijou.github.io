import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }) {
  const visibleProjects = projects.slice(0, 2);

  return (
    <section className="space-y-4">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Featured projects
        </h2>
        <p className="mt-2 text-sm text-muted">
          Selected work showcasing backend systems and full-stack applications.
        </p>
      </header>

      <div className="grid gap-4 xl:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
