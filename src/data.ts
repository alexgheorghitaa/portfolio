import {
  siTypescript,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siTailwindcss,
  siDrizzle,
  siPrisma,
  siDocker,
  siVercel,
  siFirebase,
  siStripe,
  siClaude,
  siGithubactions,
  siPython,
  siGit,
  type SimpleIcon,
} from 'simple-icons'

export const profile = {
  name: 'Alexandru Gheorghiță',
  title: 'Full-Stack + LLM Developer',
  location: 'Timișoara, Romania',
  email: 'gheorghitasandu998@gmail.com',
  github: 'https://github.com/alexgheorghitaa',
  linkedin: 'https://linkedin.com/in/alexandru-gheorghitaa',
  cardBio: 'A full-stack developer shipping production web apps and AI-augmented tools.',
  heroLead:
    'Passionate about building software that actually ships: production marketplaces, dashboards, and LLM-powered developer tools — end-to-end, from schema to deploy.',
  stats: [
    { value: '+3', label: ['years writing', 'software'] },
    { value: '+12', label: ['projects built', '& shipped'] },
    { value: '+1', label: ['marketplace live', 'in production'] },
  ],
}

export type ProjectMedia =
  | { type: 'video'; src: string; poster: string }
  | { type: 'image'; src: string }
  | { type: 'logo'; src: string }

export type Project = {
  title: string
  subtitle: string
  media: ProjectMedia
  href?: string
  status?: string
}

export const projects: Project[] = [
  {
    title: 'MesterLink',
    subtitle: 'Production marketplace for verified home-repair pros — mesterlink.md',
    media: { type: 'video', src: '/projects/mesterlink-demo.mp4', poster: '/projects/mesterlink.jpg' },
    href: 'https://www.mesterlink.md',
  },
  {
    title: 'FinTrack',
    subtitle: 'Personal finance dashboard — Next.js 16, Prisma, AI daily tips',
    media: { type: 'image', src: '/projects/fintrack.jpg' },
    href: 'https://financial-dashboard-three-silk.vercel.app',
  },
  {
    title: 'Prompt Compass',
    subtitle: 'Prompt-engineering workbench — Claude streaming, Neon Postgres',
    media: { type: 'image', src: '/projects/promptcompass.jpg' },
    status: 'In progress',
  },
  {
    title: 'CoffeeShare',
    subtitle: 'Mobile subscription platform — React Native, Stripe (BSc thesis)',
    media: { type: 'image', src: '/projects/coffeeshare.jpg' },
    href: 'https://github.com/alexgheorghitaa/CoffeeShare',
  },
  {
    title: 'Junior MotorSport',
    subtitle: 'Client site for a Romanian karting club — Next.js',
    media: { type: 'image', src: '/projects/juniormotorsport.jpg' },
    status: 'Launching soon',
  },
]

export type Experience = {
  position: string
  company: string
  period: string
  description: string
}

export const experiences: Experience[] = [
  {
    position: 'Freelance Full-Stack Developer',
    company: 'Independent',
    period: '2025 — Present',
    description:
      'Sole developer on MesterLink, a production marketplace: product, data model, API, admin tooling, CI/CD and E2E testing. Client sites on the side. AI-augmented workflow (Claude Code, MCP) as a daily practice.',
  },
  {
    position: 'Software Developer',
    company: 'AUMOVIO (formerly Continental)',
    period: 'Jul 2023 — Jan 2025',
    description:
      '1.5 years writing production C in a large safety-critical codebase — strict timing and memory budgets, zero-tolerance release process. Design reviews, static analysis, integration testing, release sign-off.',
  },
  {
    position: 'MSc Cybersecurity',
    company: 'Politehnica University of Timișoara',
    period: '2025 — Present',
    description:
      'OS kernel internals, memory protection, applied cryptography. Faculty CTF: binary exploitation and reverse engineering.',
  },
  {
    position: 'BSc Computer Science',
    company: 'Politehnica University of Timișoara',
    period: '2022 — 2025',
    description:
      'Faculty of Automation & Computers. Thesis: CoffeeShare — an end-to-end mobile subscription platform built solo.',
  },
  {
    position: 'Communication Coordinator',
    company: 'Asociația Inițiativa Timișoara (NGO)',
    period: '2022 — 2023',
    description:
      'Coordinated volunteers across concurrent projects, owned external communications and event promotion.',
  },
]

export type Tool = { icon: SimpleIcon; name: string; category: string }

export const tools: Tool[] = [
  { icon: siTypescript, name: 'TypeScript', category: 'Primary language' },
  { icon: siReact, name: 'React', category: 'UI library' },
  { icon: siNextdotjs, name: 'Next.js', category: 'Full-stack framework' },
  { icon: siNodedotjs, name: 'Node.js', category: 'Backend runtime' },
  { icon: siPostgresql, name: 'PostgreSQL', category: 'Database' },
  { icon: siTailwindcss, name: 'Tailwind CSS', category: 'Styling' },
  { icon: siDrizzle, name: 'Drizzle', category: 'ORM' },
  { icon: siPrisma, name: 'Prisma', category: 'ORM' },
  { icon: siClaude, name: 'Claude API', category: 'LLM & agent tooling' },
  { icon: siDocker, name: 'Docker', category: 'Containers' },
  { icon: siGithubactions, name: 'GitHub Actions', category: 'CI/CD' },
  { icon: siVercel, name: 'Vercel', category: 'Deployment' },
  { icon: siFirebase, name: 'Firebase', category: 'Mobile backend' },
  { icon: siStripe, name: 'Stripe', category: 'Payments' },
  { icon: siGit, name: 'Git', category: 'Version control' },
  { icon: siPython, name: 'Python', category: 'Scripting & tooling' },
]
