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
  link?: string;
  blurb: string;
  description: string;
  stack: string[];
  category: "Full-Stack" | "Frontend" | "Backend";
  links?: { live?: string; github?: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "cryptmaster",
    name: "CryptMaster",
    link: "https://cryptmaster-web.vercel.app/",
    blurb: "Real-time crypto trading simulator with portfolio tracking and live market data.",
    description:
      "A simulated trading environment integrating live market feeds from CoinGecko, with watchlists, portfolio P&L, and historical charting. Designed for learners to practice strategy without financial risk.",
    stack: ["React", "Node.js", "Express", "MongoDB", "CoinGecko API"],
    category: "Full-Stack",
  },
  {
    slug: "Jobber",
    name: "Jobber",
    link: "https://jobber-frontend-two.vercel.app/login",
    blurb: "AI Resume Optimization Agent According to Job Descriptions.",
    description:
      "AI-powered resume optimization agent that analyzes resumes against job descriptions, identifies missing ATS keywords,proposes tailored improvements, and generates ATS- friendly resumes after user approval of changes.",
    stack: ["React", "FastAPI", "Python", "MongoDB", "OpenAI", "Tailwind CSS", "Vite", "OpenRouter", "Huggingface", "groq"],
    category: "Full-Stack",
  },
  {
    slug: "saviour",
    name: "Saviour",
    link: "https://saviour-hazel.vercel.app/",
    blurb: "Zero-knowledge encrypted vault for files and passwords.",
    description:
      "Client-side encrypted storage where keys never leave the device. Server stores only ciphertext — even a full DB breach reveals nothing.",
    stack: ["React", "Node.js", "WebCrypto", "MongoDB"],
    category: "Full-Stack",
  },
  {
    slug: "Edges+",
    name: "Edges+",
    link: "https://edgesplus.com/",
    blurb: "Frontend Application for Startup Edges+ as face web dashboard",
    description:
      "A Face web site for introducing products and services of a startup Edges+. It is built using React and Tailwind CSS, providing a responsive and visually appealing user interface to showcase the company's offerings.",
    stack: ["React", "Tailwind CSS", "Vite", "TypeScript", "MaterialUI"],
    category: "Frontend",
  },
  {
    slug: "ipfy",
    name: "IPfy",
    link: "https://clg-24.vercel.app/",
    blurb: "Decentralized intellectual property registration on-chain.",
    description:
      "Register hashes of creative work on a blockchain for immutable proof of authorship and timestamp, with a clean verification flow for third parties.",
    stack: ["React Js", "Ethers.js"],
    category: "Frontend",
  },
  {
    slug: "tutorsApp",
    name: "Tutors App",
    blurb: "Global tutoring marketplace connecting students and teachers through flexible bidding.",
    description:
      "Collaborative ed-tech platform enabling students to connect with teachers worldwide through a bid-based system. Built to make quality education accessible and affordable by allowing teachers to accept sessions at flexible or zero cost after direct chat discussions. Contributed as a frontend developer, building responsive and user-friendly interfaces.",
    stack: ["React", "Next.js", "Tailwind CSS"],
    category: "Frontend",
  }
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
    title: "Development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Java",
      "Python",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Figma",
    ],
  },
  {
    title: "DevOps & Service Tools",
    skills: [
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub",
      "CI/CD",
      "ServiceNow",
      "Jira",
    ],
  },
  {
    title: "Engineering Practices",
    skills: [
      "System Design",
      "Performance Optimization",
      "Debugging Legacy Code",
      "Production Support",
      "Cross-functional Collaboration",
    ],
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
