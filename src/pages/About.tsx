import SEO from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { EXPERIENCE, SKILL_GROUPS, EDUCATION, ACHIEVEMENTS } from "@/lib/profile";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About — Azmi Saleem"
        description="About Azmi Saleem: experience at TCS, MetaShot, and Mezmo Solutions, plus skills and education."
        canonical="/about"
      />
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            About
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Engineer first. Pragmatist always.
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a full-stack developer with{" "}
              <span className="text-foreground">2+ years of experience</span> building
              enterprise-grade applications at Tata Consultancy Services for Fortune 500
              clients in the healthcare space.
            </p>
            <p>
              My focus is the backend — designing APIs, modeling data, and keeping
              production systems reliable. I'm equally comfortable across the stack:
              from React and Next.js frontends to Node.js, Java, and Python services
              with MongoDB or PostgreSQL behind them.
            </p>
            <p>
              I care about systems that don't fail when it matters. Healthcare platforms
              for Johnson & Johnson and Stryker, crypto trading simulators, AI-powered
              productivity tools — I build where precision matters.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <SectionHeading eyebrow="Experience" title="Where I've worked." />
          <ol className="relative space-y-10 border-l border-border pl-6">
            {EXPERIENCE.map((e) => (
              <li key={e.company} className="relative">
                <span className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full border-2 border-background bg-foreground" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {e.role} · {e.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">{e.location}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{e.dates}</p>
                </div>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-muted-foreground/50">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <SectionHeading eyebrow="Skills" title="Tools of the trade." />
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

      {/* Education + Achievements */}
      <section>
        <div className="mx-auto grid max-w-4xl gap-12 px-6 py-16 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Education
            </h3>
            <p className="font-display text-lg font-semibold text-foreground">{EDUCATION.degree}</p>
            <p className="text-muted-foreground">{EDUCATION.institution}</p>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Beyond code
            </h3>
            {ACHIEVEMENTS.map((a) => (
              <div key={a.title} className="mb-3">
                <p className="font-display text-lg font-semibold text-foreground">{a.title}</p>
                <p className="text-sm text-muted-foreground">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
