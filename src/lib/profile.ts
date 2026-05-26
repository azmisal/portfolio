export const CONTACT = {
  email: "azmisaleem96@gmail.com",
  phone: "+91 9072760818",
  location: "Thrissur, Kerala, India",
  github: "https://github.com/azmisaleem",
  linkedin: "https://www.linkedin.com/in/azmi-saleem",
};

export type Project = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  stack: string[];
  category: "Backend" | "Full-Stack" | "Frontend";
  links?: { live?: string; github?: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "cryptmaster",
    name: "CryptMaster",
    blurb: "Real-time crypto trading simulator with portfolio tracking and live market data.",
    description:
      "A simulated trading environment integrating live market feeds from CoinGecko, with watchlists, portfolio P&L, and historical charting. Designed for learners to practice strategy without financial risk.",
    stack: ["React", "Node.js", "Express", "MongoDB", "CoinGecko API"],
    category: "Full-Stack",
  },
  {
    slug: "focuspilot",
    name: "FocusPilot",
    blurb: "AI task manager that auto-generates subtasks and tracks productivity.",
    description:
      "Productivity tool that uses an LLM to decompose high-level goals into actionable subtasks, with intelligent prioritization and focus-session analytics.",
    stack: ["React", "FastAPI", "Python", "MongoDB", "OpenAI"],
    category: "Full-Stack",
  },
  {
    slug: "saviour",
    name: "Saviour",
    blurb: "Zero-knowledge encrypted vault for files and passwords.",
    description:
      "Client-side encrypted storage where keys never leave the device. Server stores only ciphertext — even a full DB breach reveals nothing.",
    stack: ["React", "Node.js", "WebCrypto", "MongoDB"],
    category: "Backend",
  },
  {
    slug: "runner",
    name: "Runner",
    blurb: "Online coding platform with sandboxed multi-language execution.",
    description:
      "Browser-based IDE that executes user code in isolated Docker containers with resource limits, supporting multiple languages and real-time output streaming.",
    stack: ["React", "Node.js", "Docker", "WebSockets"],
    category: "Backend",
  },
  {
    slug: "ipfy",
    name: "IPfy",
    blurb: "Decentralized intellectual property registration on-chain.",
    description:
      "Register hashes of creative work on a blockchain for immutable proof of authorship and timestamp, with a clean verification flow for third parties.",
    stack: ["Solidity", "React", "Node.js", "Ethers.js"],
    category: "Full-Stack",
  },
  {
    slug: "offcet",
    name: "Offcet / Edges+",
    blurb: "Carbon offsetting dashboards built for MetaShot clients.",
    description:
      "Client-facing dashboards visualizing environmental impact metrics, contribution history, and offset certificates with responsive, accessible UI.",
    stack: ["React", "Next.js", "Tailwind CSS"],
    category: "Frontend",
  },
];

export const EXPERIENCE = [
  {
    company: "Tata Consultancy Services",
    role: "System Engineer",
    dates: "Jul 2024 — Present",
    location: "India",
    bullets: [
      "Build and maintain enterprise healthcare applications for Johnson & Johnson and Stryker.",
      "Full-stack development on production-critical medical systems with strict reliability requirements.",
      "Collaborate across globally distributed teams through code reviews, design discussions, and on-call rotations.",
    ],
  },
  {
    company: "MetaShot Technologies",
    role: "Frontend Developer Intern",
    dates: "Jul 2023 — Oct 2023",
    location: "Remote",
    bullets: [
      "Built Offcet and Edges+ carbon-offsetting platforms with React and Next.js.",
      "Implemented responsive, accessible client-facing dashboards for environmental impact metrics.",
    ],
  },
  {
    company: "Mezmo Solutions",
    role: "Full Stack Developer",
    dates: "Mar 2022 — Dec 2023",
    location: "Remote",
    bullets: [
      "Delivered end-to-end web applications for multiple clients across industries.",
      "Owned database design, REST API development, and deployment using a Node.js + React stack.",
    ],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Backend & Infrastructure",
    skills: ["Node.js", "Express", "Java", "Python", "FastAPI", "REST APIs", "MongoDB", "PostgreSQL", "MySQL", "Docker"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Three.js / R3F"],
  },
  {
    title: "Engineering Practice",
    skills: ["System Design", "Performance Optimization", "Debugging Legacy Code", "Production Support", "Git", "CI/CD", "Cross-functional Collaboration"],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Web Master — ISTE",
    description: "Led web initiatives for the Indian Society for Technical Education student chapter.",
  },
];

export const EDUCATION = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "Government Engineering College, Thrissur",
};
