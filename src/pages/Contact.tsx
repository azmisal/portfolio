import { Helmet } from "react-helmet-async";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/profile";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  const items = [
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: CONTACT.location },
    { icon: Github, label: "GitHub", value: CONTACT.github.replace("https://", ""), href: CONTACT.github },
    { icon: Linkedin, label: "LinkedIn", value: CONTACT.linkedin.replace("https://www.", ""), href: CONTACT.linkedin },
  ];

  return (
    <section>
      <Helmet>
        <title>Contact — Azmi Saleem</title>
        <meta name="description" content="Get in touch with Azmi Saleem — email, phone, GitHub, and LinkedIn." />
        <meta property="og:title" content="Contact — Azmi Saleem" />
        <meta property="og:description" content="Open to full-time roles and selective contract work." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="mx-auto max-w-3xl px-6 py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk."
          description="The fastest way to reach me is email. I usually reply within a day."
        />

        <div className="divide-y divide-border rounded-lg border border-border bg-card">
          {items.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-4 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="truncate text-sm font-medium text-foreground hover:underline"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="truncate text-sm font-medium text-foreground">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Prefer something formal? Send a brief intro to{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-foreground underline underline-offset-4">
            {CONTACT.email}
          </a>{" "}
          with what you're working on.
        </p>
      </div>
    </section>
  );
}
