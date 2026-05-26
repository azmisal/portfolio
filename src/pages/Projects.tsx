import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PROJECTS } from "@/lib/profile";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Azmi Saleem" },
      { name: "description", content: "Selected projects by Azmi Saleem: trading simulators, AI tools, encrypted vaults, blockchain IP and more." },
      { property: "og:title", content: "Projects — Azmi Saleem" },
      { property: "og:description", content: "A selection of full-stack and backend projects." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const CATEGORIES = ["All", "Backend", "Full-Stack", "Frontend"] as const;
type Cat = (typeof CATEGORIES)[number];

function ProjectsPage() {
  const [active, setActive] = useState<Cat>("All");
  const visible = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built."
          description="A mix of full-stack apps, backend systems, and frontend work — built to learn, to ship, and to solve real problems."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                active === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
