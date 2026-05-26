import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/profile";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-foreground/30 hover:shadow-sm">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
            {project.category}
          </p>
          <h3 className="font-display text-xl font-semibold text-foreground">
            {project.name}
          </h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3 border-t border-border pt-4 text-xs">
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5" /> Code
          </a>
        )}
        {project.links?.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
          >
            Live demo →
          </a>
        )}
      </div>
    </article>
  );
}
