import { Link, NavLink } from "react-router-dom";
import { Download } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-foreground">
          Azmi Saleem<span className="text-muted-foreground">.</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-foreground ${isActive ? "text-foreground font-medium" : "text-muted-foreground"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <a
          href="https://drive.google.com/file/d/1DWKiqIGOWJmGJRcTKvqHl_9EgIwITSbu/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="h-3.5 w-3.5" />
          Resume
        </a>
      </div>
    </header>
  );
}
