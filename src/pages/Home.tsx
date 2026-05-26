import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PROJECTS, SKILL_GROUPS, CONTACT } from "@/lib/profile";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

const featured = PROJECTS.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Azmi Saleem — Backend-focused Full-Stack Engineer</title>
        <meta name="description" content="Backend-focused full-stack engineer building enterprise healthcare systems at TCS. Node.js, Java, React, Python." />
        <meta property="og:title" content="Azmi Saleem — Backend-focused Full-Stack Engineer" />
        <meta property="og:description" content="Backend-focused full-stack engineer. Enterprise healthcare at TCS for Johnson & Johnson and Stryker." />
        <link rel="canonical" href="/" />
      </Helmet>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for new opportunities
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            Azmi Saleem.
            <br />
            <span className="text-muted-foreground">
              Backend-focused full-stack engineer.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I build reliable, production-grade systems. Currently at{" "}
            <span className="text-foreground">Tata Consultancy Services</span>, shipping
            enterprise healthcare applications for Johnson & Johnson and Stryker.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View projects <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="/azmi-saleem-resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Download className="h-4 w-4" /> Download résumé
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:text-muted-foreground"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Thrissur, India
            </span>
            <a className="inline-flex items-center gap-1.5 hover:text-foreground" href={`mailto:${CONTACT.email}`}>
              <Mail className="h-3.5 w-3.5" /> Email
            </a>
            <a className="inline-flex items-center gap-1.5 hover:text-foreground" href={CONTACT.github} target="_blank" rel="noreferrer">
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
            <a className="inline-flex items-center gap-1.5 hover:text-foreground" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {[
            { k: "2+ yrs", v: "at TCS" },
            { k: "6+", v: "projects shipped" },
            { k: "J&J · Stryker", v: "enterprise clients" },
            { k: "B.Tech CSE", v: "GEC Thrissur" },
          ].map((s) => (
            <div key={s.v}>
              <p className="font-display text-2xl font-semibold text-foreground">{s.k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core stack */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Core stack"
            title="What I reach for."
            description="The tools I use day-to-day. Grouped by where they live in the stack."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {SKILL_GROUPS.map((g) => (
              <div key={g.title}>
                <h3 className="mb-3 text-sm font-semibold text-foreground">{g.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <span key={s} className="rounded-md border border-border bg-card px-2.5 py-1 text-xs text-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between">
            <SectionHeading eyebrow="Selected work" title="Featured projects." />
            <Link to="/projects" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline-flex">
              All projects →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">
              All projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-foreground md:text-4xl">
            Have a backend that needs care, or a product to ship?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            I'm open to full-time roles and selective contract work.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
              <Mail className="h-4 w-4" /> {CONTACT.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
