import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Azmi Saleem. Built with care.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a aria-label="Email" href={`mailto:${CONTACT.email}`} className="hover:text-foreground transition-colors">
            <Mail className="h-4 w-4" />
          </a>
          <a aria-label="GitHub" href={CONTACT.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            <Github className="h-4 w-4" />
          </a>
          <a aria-label="LinkedIn" href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
