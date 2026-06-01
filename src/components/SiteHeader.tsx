import { Link, NavLink } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { resumeDownload } from "@/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;



export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const handleResumeDownload = () => {11
    resumeDownload();
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-lg font-semibold tracking-tight text-black"
        >
          Azmi Saleem<span className="text-gray-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-gray-600 transition-colors hover:text-black"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Desktop Resume Button */}
          <button
            onClick={handleResumeDownload}

            className="hidden items-center gap-2 rounded-md bg-black px-3.5 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-black hover:bg-gray-100 md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="border-t border-gray-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-gray-600 transition-colors hover:text-black"
              >
                {n.label}
              </Link>
            ))}

            {/* Mobile Resume Button */}
            <button
              onClick={handleResumeDownload}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-black px-3.5 py-2.5 text-xs font-medium text-white sm:hidden"
            >
              <Download className="h-3.5 w-3.5" />
              Download Resume
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}