// Central content for the portfolio. Everything the founder reads lives here.

export const profile = {
  name: "Giusippi Apa",
  role: "Full-stack engineer",
  tagline: "Builder of full systems",
  email: "giusippi.apaii@gmail.com",
  status: "Available · Remote · Full-time",
  intro:
    "Full-stack web apps and automations — built, secured, and kept running. End to end.",
};

// The signature: the stack you'd own. Each layer maps to a job requirement.
export type Layer = {
  id: string;
  name: string;
  capability: string;
  tech: string[];
};

export const layers: Layer[] = [
  {
    id: "interface",
    name: "Interface",
    capability: "Portals and dashboards — client, staff, and investor views.",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: "logic",
    name: "Logic",
    capability: "APIs, serverless functions, and the business rules behind them.",
    tech: ["Node", "TypeScript", "Serverless"],
  },
  {
    id: "data",
    name: "Data",
    capability: "Postgres schema, migrations, and the queries that hold up.",
    tech: ["Supabase", "Postgres", "SQL"],
  },
  {
    id: "automation",
    name: "Automation",
    capability: "Cron jobs, webhooks, job queues, and AI-driven workflows.",
    tech: ["Cron", "Webhooks", "Queues", "LLM APIs"],
  },
  {
    id: "security",
    name: "Security",
    capability: "Auth, row-level security, access control, secrets, audit logs.",
    tech: ["RLS", "Keycloak", "JWT"],
  },
  {
    id: "delivery",
    name: "Delivery",
    capability: "Deploy, monitor, back up — and keep the whole thing running.",
    tech: ["Netlify", "Vercel", "GitOps"],
  },
];

export type Project = {
  id: string;
  name: string;
  kicker: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  badge?: string;
  images?: string[]; // files in public/shots/ — first is the main shot
  phone?: boolean; // portrait phone screenshots → show as a scroll strip
};

export const projects: Project[] = [
  {
    id: "uprank",
    name: "UpRank Lead Manager",
    kicker: "Solo build · live in production",
    role: "Sole engineer — design, build, run",
    summary:
      "A lead-generation and SEO platform for trades businesses: client onboarding, automated Google Business Profile management, AI review replies, a WordPress site builder, and reporting — all in one portal.",
    highlights: [
      "Automated Google Business Profile posting, media, and ledger reconciliation",
      "AI-generated review replies and content, wired through OpenAI",
      "Domain, DNS, cPanel and WordPress provisioning automated end to end",
      "Background job queue and pipeline driving the recurring work",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Postgres",
      "Serverless",
      "Google APIs",
      "OpenAI",
      "Playwright",
    ],
    images: [
      "/shots/uprank-dashboard.jpeg",
      "/shots/uprank-builder.jpeg",
      "/shots/uprank-portal.png",
    ],
  },
  {
    id: "solaire-cfm",
    name: "Solaire — Cash Float Management",
    kicker: "Regulated financial system",
    role: "Engineer — access control & backend",
    summary:
      "Cash handling for a casino floor: float bags, counts, and cage operations, governed by strict role-based permissions and a complete audit trail.",
    highlights: [
      "Keycloak RBAC with granular permissions (manage float bags, view, audit logs)",
      "Permissions enforced server-side on every endpoint",
      "Roles as named bundles of capabilities, mapped cleanly to job functions",
    ],
    stack: ["Spring Boot", "Java", "Keycloak", "Postgres", "Angular"],
    images: [
      "/shots/solaire-templates.png",
      "/shots/solaire-roles.png",
      "/shots/solaire-reports.png",
    ],
  },
  {
    id: "mystica",
    name: "Mystica",
    kicker: "Shipped on Google Play",
    role: "Solo — architecture to release",
    summary:
      "An AI tarot & divination Android app: GPT-4-powered personalized readings, real-time camera-based palm analysis, and a freemium subscription — taken from architecture through Play Store release and maintenance.",
    highlights: [
      "GPT-4 readings plus real-time AI image analysis via CameraX and Firebase Cloud Functions",
      "Offline-first Room database with Firestore cloud sync",
      "Subscriptions with Google Play Billing; GDPR-compliant auth via Firebase",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "GPT-4", "CameraX"],
    badge: "Live on Google Play",
    phone: true,
    images: [
      "/shots/mystica-home.png",
      "/shots/mystica-explore.png",
      "/shots/mystica-card.png",
      "/shots/mystica-reading.png",
      "/shots/mystica-spread.png",
    ],
  },
  {
    id: "slack-assistant",
    name: "Slack AI Assistant",
    kicker: "Conversational agent · in development",
    role: "Solo — design & build",
    summary:
      "A Slack bot you chat with in plain English. It reasons with Google Gemini and acts across Gmail and Calendar — searching and drafting email, checking the schedule, booking meetings — and always asks before doing anything irreversible.",
    highlights: [
      "Tool-using agent loop: Gemini picks a tool, the bot runs it and feeds the result back until the task is done",
      "Six tools across Gmail and Calendar — search, read, send, list events, find free time, create event",
      "Send and book actions gated behind a Slack confirm button — nothing irreversible without an explicit OK",
      "Slack Bolt over Socket Mode — a persistent WebSocket, no public URL, runs anywhere",
    ],
    stack: [
      "TypeScript",
      "Node",
      "Slack Bolt",
      "Gemini",
      "Gmail API",
      "Google Calendar",
      "OAuth",
    ],
    badge: "In development",
    // images: drop Slack shots in public/shots/ named slack-*.png, then list them here
  },
];

// How I work — the outcome, not the steps. Agentic AI workflow → shipped, fast, right.
export const pillars = [
  {
    k: "Shipped",
    body: "Features go out the door — built, integrated, and running. Not stuck at “almost done.”",
  },
  {
    k: "Quality",
    body: "Tested, secured, and documented — so it holds up and never becomes a black box.",
  },
  {
    k: "Fast",
    body: "Agents work in parallel, so weeks of work compress into days.",
  },
];

export const experience = [
  {
    role: "Freelance Full-stack Engineer",
    org: "UpRank Lead Manager",
    period: "Jan 2026 — Present",
    body: "Sole engineer on a lead-generation & SEO platform — client portal, automations, and third-party integrations, built on Next.js + Supabase.",
    tech: ["Next.js", "Supabase", "TypeScript", "Automations"],
  },
  {
    role: "Software Engineer",
    org: "Exist Software Labs",
    period: "2025",
    body: "Built enterprise systems for clients: casino cash-float management (Solaire), government permits (MACEA), and HR systems — Spring Boot with Keycloak role-based access and audit logging.",
    tech: ["Spring Boot", "Java", "Keycloak", "Postgres"],
  },
];

export const education = {
  school: "De La Salle University",
  degree: "B.S. Computer Science, Major in Software Technology",
  period: "2025",
  place: "Manila",
};

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#process", label: "How I work" },
  { href: "#contact", label: "Contact" },
];
