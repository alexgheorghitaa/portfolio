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
  siAnthropic,
  siGithubactions,
  siPython,
  siGit,
  siFigma,
  siGooglegemini,
  siSupabase,
  siCoolify,
  siGrafana,
  siSentry,
} from 'simple-icons'

export const profile = {
  name: 'Alexandru Gheorghiță',
  title: 'Full-Stack + LLM Developer',
  location: 'Timișoara, Romania',
  email: 'gheorghitasandu998@gmail.com',
  github: 'https://github.com/alexgheorghitaa',
  linkedin: 'https://linkedin.com/in/alexandru-gheorghitaa',
  availability: 'Available for freelance projects & full-time roles',
  cardBio: 'A full-stack developer shipping production web apps and AI-augmented tools.',
  heroLead:
    'Passionate about building software that actually ships: production marketplaces, dashboards, and LLM-powered developer tools — end-to-end, from schema to deploy.',
  stats: [
    { value: '+3', label: ['years writing', 'software'] },
    { value: '+12', label: ['projects built', '& shipped'] },
    { value: '+1', label: ['marketplace live', 'in production'] },
  ],
}

export type Media = {
  type: 'video' | 'image'
  src: string
  poster?: string
  caption?: string
}

export type Project = {
  title: string
  subtitle: string
  thumb: Media
  gallery: Media[]
  description: string[]
  role: string
  tags: string[]
  live?: string
  repo?: string
  status?: string
}

export const projects: Project[] = [
  {
    title: 'MesterLink',
    subtitle: 'Production marketplace for verified home-repair pros — mesterlink.md',
    thumb: { type: 'video', src: '/projects/mesterlink-tour.mp4', poster: '/projects/mesterlink-poster.jpg' },
    gallery: [
      {
        type: 'video',
        src: '/projects/mesterlink-tour.mp4',
        poster: '/projects/mesterlink-poster.jpg',
        caption: 'Product tour — homepage & verified pro profile',
      },
      { type: 'image', src: '/projects/mesterlink-home.jpg', caption: 'Homepage — search across 15 service categories' },
      {
        type: 'image',
        src: '/projects/mesterlink-profile.jpg',
        caption: 'Pro profile — identity, documents & background checks',
      },
    ],
    description: [
      'MesterLink is a home-repair and construction marketplace for Moldova where every professional passes KYC verification (identity, documents, background) before going live. Clients describe a job, receive offers within hours and hire with a money-back guarantee backed by legal assistance.',
      'I built it end-to-end as sole developer: a pnpm/Turborepo monorepo with the customer web app, an admin dashboard for verification workflows, and the API — PostgreSQL with Drizzle ORM underneath, Playwright E2E suites, Docker-based integration testing and GitHub Actions pipelines with staged test/prod deploys.',
      'The platform is live in production at mesterlink.md, with real verified professionals, blacklist reporting, legal-assistance content and a bilingual RO/RU interface.',
    ],
    role: 'Sole developer — product, data model, API, admin, CI/CD',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Drizzle', 'Turborepo', 'Playwright', 'Docker', 'GitHub Actions'],
    live: 'https://www.mesterlink.md',
  },
  {
    title: 'ResoLab',
    subtitle: 'Browser audio workstation — React + Rust/WASM DSP engine',
    thumb: { type: 'video', src: '/projects/resolab-demo.mp4', poster: '/projects/resolab-demo-poster.jpg' },
    gallery: [
      {
        type: 'video',
        src: '/projects/resolab-demo.mp4',
        poster: '/projects/resolab-demo-poster.jpg',
        caption: 'Live demo — parametric EQ, compressor & real-time spectrum during playback',
      },
      { type: 'image', src: '/projects/resolab-editor.jpg', caption: 'Mastering chain preset on a drum loop — EQ curve, LUFS metering' },
      { type: 'image', src: '/projects/resolab-effects.jpg', caption: 'Effect rack — EQ bands, dynamics, signal suggestions' },
      { type: 'image', src: '/projects/resolab-app.jpg', caption: 'Guided onboarding — interactive tutorial & keyboard shortcuts' },
    ],
    description: [
      'ResoLab is an educational mini-DAW that runs entirely in the browser: load a track, build an effect chain (parametric EQ, compressor, reverb, saturation, limiter and more), hear it process in real time, and export the result as WAV.',
      'The DSP engine is written in Rust and compiled to WebAssembly, running inside an AudioWorklet for glitch-free real-time audio. The UI adds factory & custom presets, LUFS/peak metering, spectrum and spectrogram analyzers, region editing, A/B bypass and a guided tutorial — in Romanian and English.',
      'I handled build & release engineering: the Rust→WASM build pipeline, cross-origin isolation headers (COOP/COEP) required by the audio engine, and the Vercel production setup with auto-deploys.',
    ],
    role: 'Build & deployment — Rust/WASM pipeline, production hosting (team project)',
    tags: ['React 19', 'TypeScript', 'Rust', 'WebAssembly', 'AudioWorklet', 'Web Audio', 'Zustand', 'Vite'],
    live: 'https://resolab-app.vercel.app',
  },
  {
    title: 'FinTrack',
    subtitle: 'Personal finance dashboard — Next.js 16, Prisma, AI daily tips',
    thumb: { type: 'image', src: '/projects/fintrack.jpg' },
    gallery: [
      { type: 'image', src: '/projects/fintrack-hero.jpg', caption: 'Landing — "Take control of your money"' },
      { type: 'image', src: '/projects/fintrack-features.jpg', caption: 'Feature tour — accounts, analytics, recurring engine' },
      { type: 'image', src: '/projects/fintrack-how.jpg', caption: 'How it works' },
    ],
    description: [
      'FinTrack is a multi-account personal finance dashboard: connect your accounts, categorize spending, and watch a recurring-transaction engine keep balances accurate without manual entry.',
      'It generates AI daily tips from your actual spending patterns (Groq LLM), renders live analytics with Recharts, and runs on the newest stack: Next.js 16 App Router with server actions, React 19, Prisma 7 on PostgreSQL and NextAuth v5.',
    ],
    role: 'Solo project — design, frontend, backend, deploy',
    tags: ['Next.js 16', 'React 19', 'Prisma 7', 'PostgreSQL', 'NextAuth v5', 'Tailwind 4', 'Groq LLM'],
    live: 'https://financial-dashboard-three-silk.vercel.app',
    repo: 'https://github.com/alexgheorghitaa/financial-dashboard',
  },
  {
    title: 'Apex Racing Academy',
    subtitle: 'Concept site for a junior motorsport academy — Next.js 15',
    thumb: { type: 'image', src: '/projects/apexracing.jpg' },
    gallery: [
      { type: 'image', src: '/projects/apex-home.jpg', caption: 'Hero — rotating slideshow, display typography' },
      { type: 'image', src: '/projects/apex-mid.jpg', caption: 'Disciplines — hillclimb, slalom, karting' },
      { type: 'image', src: '/projects/apex-club.jpg', caption: 'Club page — team & season stats' },
    ],
    description: [
      'A complete concept website for a fictional junior motorsport academy — the kind of site a real racing club would ship: club story, junior academy with a parent-focused onboarding flow, season calendar with results archive, partners and contact.',
      'Built with Next.js 15 App Router, fully static and SEO-ready, with an art-directed look: Anton display typography, rotating hero slideshow and CC-licensed motorsport photography with proper attribution.',
    ],
    role: 'Concept, art direction & build',
    tags: ['Next.js 15', 'React 19', 'App Router', 'SEO', 'Art direction'],
    live: 'https://apex-racing-academy.vercel.app',
    repo: 'https://github.com/alexgheorghitaa/apex-racing-academy',
  },
  {
    title: 'CoffeeShare',
    subtitle: 'Mobile subscription platform — React Native, Stripe (BSc thesis)',
    thumb: { type: 'image', src: '/projects/cs-thumb.jpg' },
    gallery: [
      { type: 'image', src: '/projects/cs-real-dashboard.jpg', caption: 'User dashboard — subscription status, favorite cafés, activity' },
      { type: 'image', src: '/projects/cs-real-profile.jpg', caption: 'Profile & account settings' },
      { type: 'image', src: '/projects/cs-real-welcome.jpg', caption: 'Onboarding — QR check-in intro' },
      { type: 'image', src: '/projects/cs-real-login.jpg', caption: 'Sign in — "Bine ai revenit!"' },
      { type: 'image', src: '/projects/cs-real-register.jpg', caption: 'Account creation' },
      { type: 'image', src: '/projects/cs-real-qr.jpg', caption: 'QR check-in — gated until a plan is active' },
    ],
    description: [
      'CoffeeShare is a coffee-subscription platform built as my bachelor’s thesis: subscribe in the app, find partner cafés on the map, check in with a QR code and the cup is logged in real time.',
      'Security was the thesis focus: SSL pinning against man-in-the-middle, AES-256 encrypted local data, signed short-lived QR codes, TOTP one-time codes and server-side validation of every payment and check-in through Firebase Functions. Stripe handles subscriptions; Sentry watches production.',
    ],
    role: 'Sole developer — architecture to deployment',
    tags: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Stripe', 'AES-256', 'Sentry'],
    repo: 'https://github.com/alexgheorghitaa/CoffeeShare',
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
      'Built and shipped MesterLink — a production marketplace with KYC verification — as sole developer, from data model to CI/CD. Every project leaves my desk with tests, monitoring and an automated deploy pipeline. AI-augmented workflow (Claude Code, MCP) as a daily practice, not a buzzword.',
  },
  {
    position: 'Software Developer',
    company: 'AUMOVIO (formerly Continental)',
    period: 'Jul 2023 — Jan 2025',
    description:
      'Wrote production C in a large safety-critical codebase where a bug is a recall, not a hotfix: static-analysis gates, design reviews, integration testing and release sign-off on every change. That discipline — owning code end-to-end under hard constraints — is what I bring to every web project since.',
  },
  {
    position: 'MSc Cybersecurity',
    company: 'Politehnica University of Timișoara',
    period: '2025 — Present',
    description:
      'Graduate-level security engineering: OS kernel internals, memory protection, applied cryptography. Active faculty CTF player — binary exploitation and reverse engineering.',
  },
  {
    position: 'BSc Computer Science',
    company: 'Politehnica University of Timișoara',
    period: '2022 — 2025',
    description:
      'Faculty of Automation & Computers. Thesis: CoffeeShare — a payments-enabled mobile platform designed, built and deployed solo.',
  },
]

type IconShape = { title: string; hex: string; path: string }

const codexIcon: IconShape = {
  title: 'Codex',
  hex: '0D0D0D',
  path: 'M4.7 5.3 11.4 12l-6.7 6.7-1.4-1.4L8.6 12 3.3 6.7l1.4-1.4Zm7.3 12.7h9v2h-9v-2Z',
}

export type Tool = { icon: IconShape; name: string; category: string }

export const tools: Tool[] = [
  { icon: siTypescript, name: 'TypeScript', category: 'Primary language' },
  { icon: siReact, name: 'React', category: 'UI library' },
  { icon: siNextdotjs, name: 'Next.js', category: 'Full-stack framework' },
  { icon: siNodedotjs, name: 'Node.js', category: 'Backend runtime' },
  { icon: siPostgresql, name: 'PostgreSQL', category: 'Database' },
  { icon: siTailwindcss, name: 'Tailwind CSS', category: 'Styling' },
  { icon: siClaude, name: 'Claude Code', category: 'AI pair-programmer' },
  { icon: codexIcon, name: 'Codex', category: 'AI coding agent' },
  { icon: siAnthropic, name: 'Claude API', category: 'LLM integration' },
  { icon: siGooglegemini, name: 'Nano Banana', category: 'AI image generation' },
  { icon: siFigma, name: 'Figma', category: 'Design & prototyping' },
  { icon: siDrizzle, name: 'Drizzle', category: 'ORM' },
  { icon: siPrisma, name: 'Prisma', category: 'ORM' },
  { icon: siSupabase, name: 'Supabase', category: 'Postgres backend' },
  { icon: siFirebase, name: 'Firebase', category: 'Mobile backend' },
  { icon: siStripe, name: 'Stripe', category: 'Payments' },
  { icon: siDocker, name: 'Docker', category: 'Containers' },
  { icon: siGithubactions, name: 'GitHub Actions', category: 'CI/CD' },
  { icon: siVercel, name: 'Vercel', category: 'Deployment' },
  { icon: siCoolify, name: 'Coolify', category: 'Self-hosted PaaS' },
  { icon: siGrafana, name: 'Grafana', category: 'Monitoring & dashboards' },
  { icon: siSentry, name: 'Sentry', category: 'Error tracking' },
  { icon: siGit, name: 'Git', category: 'Version control' },
  { icon: siPython, name: 'Python', category: 'Scripting & tooling' },
]
