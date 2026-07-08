import { profile, projects, experiences, stack, type Project } from './data'
import { Reveal } from './Reveal'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
)

function Nav() {
  const links = [
    ['Projects', '#projects'],
    ['Experience', '#experience'],
    ['Stack', '#stack'],
    ['Contact', '#contact'],
  ]
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="serif-accent text-2xl text-white">
          AG<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-accent"
        >
          Hire me
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-36 pb-20 sm:pt-44">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(600px 320px at 70% 10%, rgba(251,191,36,0.08), transparent 70%), radial-gradient(500px 300px at 20% 30%, rgba(56,130,246,0.07), transparent 70%)',
        }}
      />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="mb-4 text-sm tracking-widest text-zinc-500 uppercase">
            {profile.name} · {profile.location}
          </p>
          <h1 className="max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight text-white sm:text-7xl">
            I build <span className="serif-accent text-accent">production-grade</span> web apps and{' '}
            <span className="serif-accent text-accent">AI-augmented</span> tools.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">{profile.heroLead}</p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
            >
              See my work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Get in touch
            </a>
            <div className="ml-1 flex items-center gap-4 text-zinc-400">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-white">
                <GithubIcon />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
                <LinkedinIcon />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-white">
                <MailIcon />
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={320}>
          <dl className="mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-4xl font-bold text-white">
                  {s.value}
                  <span className="mt-1 block text-sm font-normal text-zinc-500">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

function SectionHeading({ kicker, title }: { kicker: string; title: React.ReactNode }) {
  return (
    <Reveal>
      <p className="mb-3 text-sm tracking-widest text-accent uppercase">{kicker}</p>
      <h2 className="mb-12 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
    </Reveal>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">{children}</span>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-accent transition hover:brightness-110"
        >
          Live site <ArrowIcon />
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-zinc-300 transition hover:text-white"
        >
          <GithubIcon /> Code
        </a>
      )}
      {!project.live && !project.repo && project.status && (
        <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
          {project.status}
        </span>
      )}
    </div>
  )
}

function Flagship({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="grid overflow-hidden rounded-3xl border border-white/10 bg-surface lg:grid-cols-2">
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <p className="mb-3 text-sm tracking-widest text-accent uppercase">{project.category}</p>
          <h3 className="mb-4 text-4xl font-bold text-white">{project.title}</h3>
          <p className="text-zinc-400">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <ProjectLinks project={project} />
        </div>
        <div className="relative flex items-center justify-center bg-gradient-to-br from-sky-950 via-ink to-ink p-8 sm:p-12">
          <video
            className="max-h-130 rounded-2xl border border-white/10 shadow-2xl shadow-black/60"
            src="/projects/mesterlink-demo.mp4"
            poster="/projects/mesterlink.jpg"
            autoPlay
            muted
            loop
            playsInline
            aria-label="MesterLink product demo"
          />
        </div>
      </article>
    </Reveal>
  )
}

function Projects() {
  const flagship = projects.find((p) => p.flagship)!
  const rest = projects.filter((p) => !p.flagship)
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Selected work"
          title={
            <>
              Projects that <span className="serif-accent text-accent">ship</span>, not demos.
            </>
          }
        />
        <Flagship project={flagship} />
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 80}>
              <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-surface p-8 transition hover:border-white/20">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm tracking-widest text-accent uppercase">{p.category}</p>
                  {p.status && (
                    <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
                      {p.status}
                    </span>
                  )}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">{p.title}</h3>
                <p className="text-sm text-zinc-400">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className="mt-auto">
                  <ProjectLinks project={p} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="About"
          title={
            <>
              Reliability first, <span className="serif-accent text-accent">AI-augmented</span> always.
            </>
          }
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {profile.about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="rounded-3xl border border-white/10 bg-surface p-8 text-zinc-400">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Experience"
          title={
            <>
              Where the <span className="serif-accent text-accent">discipline</span> comes from.
            </>
          }
        />
        <ol className="space-y-4">
          {experiences.map((e, i) => (
            <Reveal key={e.position + e.period} delay={i * 60}>
              <li className="grid gap-4 rounded-3xl border border-white/10 bg-surface p-8 sm:grid-cols-[180px_1fr]">
                <p className="text-sm text-zinc-500">{e.period}</p>
                <div>
                  <h3 className="text-xl font-bold text-white">{e.position}</h3>
                  <p className="mb-3 text-sm text-accent">{e.company}</p>
                  <p className="text-sm text-zinc-400">{e.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section id="stack" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Stack"
          title={
            <>
              Tools I <span className="serif-accent text-accent">reach for</span> daily.
            </>
          }
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {stack.map((group, i) => (
            <Reveal key={group.group} delay={(i % 2) * 80}>
              <div className="h-full rounded-3xl border border-white/10 bg-surface p-8">
                <h3 className="mb-4 text-sm tracking-widest text-accent uppercase">{group.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-surface to-ink p-10 text-center sm:p-16">
            <p className="mb-3 text-sm tracking-widest text-accent uppercase">Contact</p>
            <h2 className="mx-auto mb-6 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Have a project in mind? <span className="serif-accent text-accent">Let&apos;s talk.</span>
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-zinc-400">
              Open to freelance work and full-time roles — remote or in {profile.location}. I usually reply within a
              day.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink transition hover:brightness-110"
              >
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/40"
              >
                <GithubIcon /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/40"
              >
                <LinkedinIcon /> LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-zinc-500">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <p>
          Built with React, Vite & Tailwind — deployed on Vercel.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <ExperienceSection />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
