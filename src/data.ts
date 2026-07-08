export const profile = {
  name: 'Alexandru Gheorghiță',
  shortName: 'Alexandru',
  title: 'Full-Stack + LLM Developer',
  location: 'Timișoara, Romania',
  email: 'gheorghitasandu998@gmail.com',
  github: 'https://github.com/alexgheorghitaa',
  linkedin: 'https://linkedin.com/in/alexandru-gheorghitaa',
  availability: 'Available for freelance projects & full-time roles',
  heroLead:
    'TypeScript, React/Next.js, Node and PostgreSQL — with Claude API and MCP in the toolbox. Creator of MesterLink, a marketplace running live in production.',
  about: [
    'I build software where reliability matters. My foundation is low-level: 1.5 years writing production C in a large safety-critical codebase — tight memory, strict timing, zero tolerance for failure. That discipline now goes into everything I ship on the web.',
    'Today I work full-stack: production marketplaces, dashboards, and AI-augmented developer tools, end-to-end — from schema design and API contracts to CI/CD pipelines and E2E test suites. I work AI-augmented by default: Claude-driven workflows, Model Context Protocol servers, and LLM features in the product itself.',
    'In parallel, I am doing an MSc in Cybersecurity at Politehnica Timișoara — OS internals, memory protection, applied cryptography. The intersection of web products, systems thinking, and AI is where I want to build long-term.',
  ],
  stats: [
    { value: '3+', label: 'years writing software' },
    { value: '10+', label: 'projects built & shipped' },
    { value: '1', label: 'marketplace live in production' },
  ],
}

export type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  live?: string
  repo?: string
  flagship?: boolean
  status?: string
}

export const projects: Project[] = [
  {
    title: 'MesterLink',
    category: 'Freelance · Production marketplace',
    description:
      'Home-repair and construction marketplace for Moldova, with KYC-verified professionals. Built end-to-end as a pnpm/Turborepo monorepo — customer web app, admin dashboard, and API — with CI/CD pipelines, Playwright E2E suites, and staged test/prod deploys. Sole developer, live in production.',
    tags: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Drizzle',
      'Turborepo',
      'Playwright',
      'Docker',
      'GitHub Actions',
    ],
    live: 'https://www.mesterlink.md',
    flagship: true,
  },
  {
    title: 'FinTrack',
    category: 'Full-Stack · AI features',
    description:
      'Multi-account personal finance dashboard: recurring-transaction engine, live analytics, and AI-generated daily tips. App Router architecture with server actions, Prisma 7 on PostgreSQL, and NextAuth v5.',
    tags: ['Next.js 16', 'React 19', 'Prisma 7', 'PostgreSQL', 'NextAuth v5', 'Tailwind 4', 'Groq LLM'],
    live: 'https://financial-dashboard-three-silk.vercel.app',
    repo: 'https://github.com/alexgheorghitaa/financial-dashboard',
  },
  {
    title: 'CoffeeShare',
    category: 'Mobile · BSc thesis',
    description:
      'Mobile coffee-subscription platform: QR check-in at partner cafés, Stripe payments, AES-256 encrypted local data, Firebase real-time sync. Sole developer from architecture to deployment.',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Stripe', 'AES-256'],
    repo: 'https://github.com/alexgheorghitaa/CoffeeShare',
  },
  {
    title: 'Prompt Compass',
    category: 'Full-Stack + LLM',
    status: 'In progress',
    description:
      'Prompt-engineering workbench: assemble prompts layer by layer (role, domain pack, constraints, input), run them against Claude with streaming output, and compare variants side by side. Per-project prompt libraries with real usage stats.',
    tags: ['Next.js', 'Auth.js', 'Neon Postgres', 'Drizzle', 'Anthropic SDK'],
  },
  {
    title: 'Junior MotorSport',
    category: 'Client work',
    status: 'Launching soon',
    description:
      'Marketing site for a Romanian karting club — content structure, motion design, and performance-focused build. Currently in content validation with the client before public launch.',
    tags: ['Next.js', 'React', 'SEO'],
  },
  {
    title: 'MesterLink Event',
    category: 'Landing page',
    description:
      'Event landing page with an interactive 3D lanyard generator, agenda, and registration flows — customized and shipped from a v0 starting point.',
    tags: ['Next.js', 'v0', 'Three.js'],
    live: 'https://mesterlink-event-i179.vercel.app',
  },
]

export type Experience = {
  position: string
  company: string
  period: string
  description: string
  tags: string[]
}

export const experiences: Experience[] = [
  {
    position: 'Freelance Full-Stack Developer',
    company: 'Independent',
    period: '2025 — Present',
    description:
      'Sole developer on MesterLink, a production marketplace: product, data model, API, admin tooling, CI/CD, and E2E testing. Client marketing sites on the side. AI-augmented workflow (Claude Code, MCP) as a daily practice.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'CI/CD', 'Claude'],
  },
  {
    position: 'Software Developer',
    company: 'AUMOVIO (formerly Continental)',
    period: 'Jul 2023 — Jan 2025',
    description:
      '1.5 years writing production C in a large safety-critical codebase — strict timing and memory budgets, zero-tolerance release process. Full lifecycle ownership: design reviews, static analysis, integration testing, release sign-off, Agile team practice.',
    tags: ['C', 'Static analysis', 'Integration testing', 'Agile'],
  },
  {
    position: 'MSc Cybersecurity',
    company: 'Politehnica University of Timișoara',
    period: '2025 — Present',
    description:
      'OS kernel internals, memory protection, applied cryptography. Faculty CTF: binary exploitation and reverse engineering.',
    tags: ['OS internals', 'Cryptography', 'CTF'],
  },
  {
    position: 'BSc Computer Science',
    company: 'Politehnica University of Timișoara',
    period: '2022 — 2025',
    description:
      'Faculty of Automation & Computers. Thesis: CoffeeShare — an end-to-end mobile subscription platform built solo.',
    tags: ['Algorithms', 'Operating systems', 'Networks'],
  },
  {
    position: 'Communication Coordinator',
    company: 'Asociația Inițiativa Timișoara (NGO)',
    period: '2022 — 2023',
    description:
      'Coordinated volunteers across concurrent projects, owned external communications, and grew community engagement measurably.',
    tags: ['Coordination', 'Communications'],
  },
]

export const stack: { group: string; items: string[] }[] = [
  {
    group: 'Frontend',
    items: ['TypeScript', 'React 19', 'Next.js', 'Tailwind CSS', 'Radix UI', 'Vite', 'React Native'],
  },
  {
    group: 'Backend & Data',
    items: ['Node.js', 'Fastify', 'PostgreSQL', 'Prisma', 'Drizzle', 'Firebase', 'REST APIs'],
  },
  {
    group: 'AI & Tooling',
    items: ['Claude API', 'MCP', 'Anthropic SDK', 'Vercel', 'Docker', 'GitHub Actions', 'Playwright', 'Turborepo'],
  },
  {
    group: 'Foundations',
    items: ['C / C++', 'Linux', 'Git', 'Cryptography', 'OS internals', 'Python'],
  },
]
