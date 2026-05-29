import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Card from "./Card";

export default function ProjectCard({ project }) {
  return (
    <Card className="group  p-0">
      <div className="aspect-[16/8] w-full  bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm font-medium text-zinc-400">
            Project preview
          </div>
        )}
      </div>

      <div className="space-y-3 p-5">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-border px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-foreground/30 hover:-translate-y-0.5"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-foreground px-4 py-2 text-sm font-medium text-surface transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            >
              <ExternalLink size={16} />
              Live demo
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
