import { useEffect, useRef, useState } from 'react'
import { profile, projects, experiences, tools, type Project, type Media } from './data'
import { Reveal } from './Reveal'

/* ---------- view routing (hash-based page switching) ---------- */

const VIEWS = ['top', 'projects', 'experience', 'tools', 'contact'] as const
type View = (typeof VIEWS)[number]

function viewFromHash(hash: string): View {
  const raw = hash.replace(/^#/, '')
  if (raw === '' || raw === 'top') return 'top'
  return (VIEWS as readonly string[]).includes(raw) ? (raw as View) : 'top'
}

function useHashView(): View {
  const [view, setView] = useState<View>(() =>
    viewFromHash(typeof window !== 'undefined' ? window.location.hash : ''),
  )
  useEffect(() => {
    const onHash = () => setView(viewFromHash(window.location.hash))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return view
}

/* ---------- small icons ---------- */

const GithubIcon = ({ className = 'size-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const LinkedinIcon = ({ className = 'size-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
)

const MailIcon = ({ className = 'size-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

const ArrowUpRight = ({ className = 'size-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className} aria-hidden>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
)

const BoltIcon = ({ className = 'size-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2Z" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

/* ---------- floating nav ---------- */

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5" aria-hidden>
    <path d="m3 11 9-8 9 8" />
    <path d="M5 9.5V21h14V9.5" />
  </svg>
)
const FolderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5" aria-hidden>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
  </svg>
)
const CaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5" aria-hidden>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18" />
  </svg>
)
const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5" aria-hidden>
    <path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.6L3 17.6V21h3.4l5.7-5.7a4.5 4.5 0 0 0 5.6-6l-3 3-2.8-.7-.7-2.8 3-3-.5-.5Z" />
  </svg>
)
const PenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5" aria-hidden>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z" />
  </svg>
)

function Nav({ view }: { view: View }) {
  const items: [string, string, View, () => React.ReactElement][] = [
    ['Home', '#top', 'top', HomeIcon],
    ['Projects', '#projects', 'projects', FolderIcon],
    ['Experience', '#experience', 'experience', CaseIcon],
    ['Tools', '#tools', 'tools', WrenchIcon],
    ['Contact', '#contact', 'contact', PenIcon],
  ]
  return (
    <header className="fixed top-5 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-1 rounded-2xl border border-white/10 bg-[#1c1c1c]/95 px-2 py-2 shadow-xl shadow-black/40 backdrop-blur-md">
        {items.map(([label, href, key, Icon]) => {
          const active = view === key
          return (
            <a
              key={href}
              href={href}
              aria-label={label}
              title={label}
              aria-current={active ? 'page' : undefined}
              className={`rounded-xl px-3 py-2 transition ${
                active ? 'bg-white/10 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon />
            </a>
          )
        })}
      </nav>
    </header>
  )
}

/* ---------- lanyard profile card ---------- */

const FlipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden>
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
)

/** The exact profile card — unchanged. */
function CardFront({ onFlip }: { onFlip: () => void }) {
  return (
    <div className="relative flex h-full flex-col rounded-3xl bg-white p-6 text-center">
      <img
        src="/avatar.jpg"
        alt={profile.name}
        className="pointer-events-none aspect-square w-full rounded-2xl object-cover select-none"
        width={460}
        height={460}
        draggable={false}
      />
      <h2 className="mt-6 text-[27px] font-bold tracking-tight text-neutral-900">{profile.name}</h2>
      <div className="my-4 flex items-center justify-center gap-3" aria-hidden>
        <span className="h-px w-10 border-t border-dashed border-orange" />
        <span className="flex size-8 items-center justify-center rounded-full bg-orange text-white">
          <BoltIcon />
        </span>
        <span className="h-px w-10 border-t border-dashed border-orange" />
      </div>
      <p className="text-[15px] leading-relaxed text-neutral-500">{profile.cardBio}</p>
      <div className="mt-6 flex items-center justify-center gap-5 text-orange">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:opacity-70">
          <GithubIcon className="size-6" />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:opacity-70">
          <LinkedinIcon className="size-6" />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:opacity-70">
          <MailIcon className="size-6" />
        </a>
      </div>
      <button
        type="button"
        onClick={onFlip}
        onPointerDown={(e) => e.stopPropagation()}
        aria-label="Flip card"
        title="Flip"
        className="absolute right-4 bottom-4 flex size-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition hover:bg-orange hover:text-white"
      >
        <FlipIcon />
      </button>
    </div>
  )
}

/** Back of the badge — marketing pitch + quick contact form. */
function CardBack({ onFlip }: { onFlip: () => void }) {
  const [sent, setSent] = useState(false)
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(`Project inquiry — ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }
  const field =
    'w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition focus:border-orange'
  return (
    <div className="relative flex h-full flex-col rounded-3xl bg-white p-6">
      <p className="text-[11px] font-semibold tracking-widest text-orange uppercase">Let&apos;s work together</p>
      <h3 className="mt-1 text-xl leading-tight font-extrabold text-neutral-900">
        Have a project? <br />I ship it — fast &amp; tested.
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">
        Freelance or full-time. Production web apps &amp; AI tools, end-to-end.
      </p>
      <form onSubmit={onSubmit} className="mt-4 flex flex-1 flex-col gap-2.5">
        <input name="name" required placeholder="Your name" className={field} onPointerDown={(e) => e.stopPropagation()} />
        <input name="email" type="email" required placeholder="your@email.com" className={field} onPointerDown={(e) => e.stopPropagation()} />
        <textarea
          name="message"
          required
          rows={2}
          placeholder="What do you need built?"
          className={`${field} flex-1 resize-none`}
          onPointerDown={(e) => e.stopPropagation()}
        />
        <button
          type="submit"
          onPointerDown={(e) => e.stopPropagation()}
          className="rounded-lg bg-orange py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
        >
          {sent ? 'Opening your email…' : 'Send message'}
        </button>
        <a
          href="#contact"
          onPointerDown={(e) => e.stopPropagation()}
          className="text-center text-xs font-medium text-neutral-500 underline decoration-neutral-300 underline-offset-2 transition hover:text-orange"
        >
          or open the full contact form →
        </a>
      </form>
      <button
        type="button"
        onClick={onFlip}
        onPointerDown={(e) => e.stopPropagation()}
        aria-label="Flip card back"
        title="Flip"
        className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition hover:bg-orange hover:text-white"
      >
        <FlipIcon />
      </button>
    </div>
  )
}

function LanyardCard() {
  const swingRef = useRef<HTMLDivElement>(null)
  const strapRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const [flipped, setFlipped] = useState(false)

  // physics state (kept in refs so the rAF loop never triggers re-renders)
  const theta = useRef(0.12)
  const omega = useRef(0)
  const drag = useRef<{ active: boolean; prevT: number; last: number }>({ active: false, prevT: 0.12, last: 0 })

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const BASE_L = 46
    const MAX_EXTRA = 150
    const K = 20 // pendulum stiffness
    const D = 1.3 // damping
    let raf = 0
    let prev = 0

    const pivot = () => {
      const el = pinRef.current
      if (!el) return { x: 0, y: 0 }
      const r = el.getBoundingClientRect()
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 }
    }

    const onMove = (e: PointerEvent) => {
      if (!drag.current.active) return
      const p = pivot()
      let t = Math.atan2(e.clientX - p.x, Math.max(e.clientY - p.y, 1))
      t = Math.max(-1.35, Math.min(1.35, t))
      theta.current = t
    }
    const onUp = () => {
      drag.current.active = false
      document.body.style.userSelect = ''
    }
    const onDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a,button,input,textarea,select,label')) return
      drag.current.active = true
      drag.current.prevT = theta.current
      drag.current.last = e.timeStamp
      document.body.style.userSelect = 'none'
    }

    const badge = swingRef.current
    badge?.addEventListener('pointerdown', onDown)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)

    const tick = (now: number) => {
      const dt = Math.min((now - (prev || now)) / 1000, 0.033)
      prev = now

      // strap grows with scroll → the "continuous vertical line" effect
      const L = BASE_L + Math.min(window.scrollY * 0.16, MAX_EXTRA)
      if (strapRef.current) strapRef.current.style.height = `${L}px`

      if (drag.current.active) {
        // throw velocity from how fast the pointer swings the card
        if (dt > 0) omega.current = Math.max(-9, Math.min(9, (theta.current - drag.current.prevT) / dt))
        drag.current.prevT = theta.current
      } else if (!reduce) {
        const alpha = -K * Math.sin(theta.current) - D * omega.current
        omega.current += alpha * dt
        theta.current += omega.current * dt
      } else {
        theta.current += (0 - theta.current) * 0.2
        omega.current = 0
      }

      if (swingRef.current) swingRef.current.style.transform = `rotate(${theta.current}rad)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      badge?.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [])

  return (
    <aside className="self-start lg:sticky lg:top-24">
      <div className="relative flex justify-center overflow-visible pt-1">
        <div ref={swingRef} className="flex flex-col items-center will-change-transform" style={{ transformOrigin: 'top center' }}>
          {/* pin at the pivot */}
          <div ref={pinRef} className="relative z-10 size-4 rounded-full border-[3px] border-neutral-500 bg-neutral-800" />
          {/* lanyard strap */}
          <div
            ref={strapRef}
            className="w-[7px] rounded-full bg-gradient-to-b from-orange to-orange/60 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
            style={{ height: 46 }}
          />
          {/* clip */}
          <div className="-mt-px flex h-4 w-8 items-center justify-center rounded-b-md rounded-t-sm bg-neutral-300">
            <div className="h-2 w-5 rounded-full bg-neutral-400" />
          </div>
          {/* badge (flip container) */}
          <div className="mt-1 w-[300px] max-w-[82vw] cursor-grab touch-none active:cursor-grabbing" style={{ perspective: '1400px' }}>
            <div
              className="relative transition-transform duration-500"
              style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
              <div style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                <CardFront onFlip={() => setFlipped(true)} />
              </div>
              <div
                className="absolute inset-0"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <CardBack onFlip={() => setFlipped(false)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

/* ---------- section heading ---------- */

function Heading({ line1, line2 }: { line1: string; line2: string }) {
  return (
    <Reveal>
      <h2 className="mb-14 text-[52px] leading-[0.95] font-extrabold tracking-tight uppercase sm:text-[68px]">
        <span className="block text-white">{line1}</span>
        <span className="block text-dim">{line2}</span>
      </h2>
    </Reveal>
  )
}

/* ---------- hero ---------- */

function Hero() {
  return (
    <section id="top" className="pt-8">
      <Reveal>
        <h1 className="text-[52px] leading-[0.95] font-extrabold tracking-tight uppercase sm:text-[68px]">
          <span className="block text-white">Full-Stack</span>
          <span className="block text-dim">Developer</span>
        </h1>
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-neutral-400">{profile.heroLead}</p>
      </Reveal>
      <Reveal delay={160}>
        <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
          {profile.stats.map((s) => (
            <div key={s.value}>
              <dd className="text-[46px] leading-none font-extrabold text-white">{s.value}</dd>
              <dt className="mt-2 text-[11px] tracking-widest text-neutral-500 uppercase">
                {s.label[0]}
                <br />
                {s.label[1]}
              </dt>
            </div>
          ))}
        </dl>
      </Reveal>
      <Reveal delay={240}>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <a
            href="#projects"
            className="group flex h-44 flex-col justify-between rounded-3xl bg-orange p-6 text-white transition hover:brightness-105"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-8" aria-hidden>
              <path d="m12 3 9 5-9 5-9-5 9-5Z" />
              <path d="m3 13 9 5 9-5" />
            </svg>
            <div className="flex items-end justify-between gap-4">
              <p className="max-w-45 text-[17px] leading-snug font-bold tracking-wide uppercase">
                Production apps, AI-augmented tools
              </p>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20 transition group-hover:bg-white/30">
                <ArrowUpRight />
              </span>
            </div>
          </a>
          <a
            href="#tools"
            className="group flex h-44 flex-col justify-between rounded-3xl bg-lime p-6 text-neutral-900 transition hover:brightness-105"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-8" aria-hidden>
              <rect x="3" y="3" width="8" height="8" rx="2" />
              <rect x="13" y="3" width="8" height="8" rx="2" />
              <rect x="3" y="13" width="8" height="8" rx="2" />
              <rect x="13" y="13" width="8" height="8" rx="2" />
            </svg>
            <div className="flex items-end justify-between gap-4">
              <p className="max-w-45 text-[17px] leading-snug font-bold tracking-wide uppercase">
                TypeScript, React, Next.js, PostgreSQL
              </p>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-900/10 transition group-hover:bg-neutral-900/20">
                <ArrowUpRight />
              </span>
            </div>
          </a>
        </div>
      </Reveal>
    </section>
  )
}

/* ---------- projects ---------- */

function MediaView({ media, className, active = true }: { media: Media; className: string; active?: boolean }) {
  if (media.type === 'video') {
    return (
      <video
        key={media.src + (active ? '-on' : '-off')}
        className={className}
        src={media.src}
        poster={media.poster}
        autoPlay={active}
        muted
        loop
        playsInline
        controls={false}
        aria-label={media.caption ?? 'Video'}
      />
    )
  }
  return <img src={media.src} alt={media.caption ?? ''} className={className} loading="lazy" />
}

function ProjectRow({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button type="button" onClick={onOpen} className="group relative flex w-full items-center gap-6 text-left">
      <MediaView media={project.thumb} className="size-24 shrink-0 rounded-2xl object-cover ring-1 ring-white/10 sm:size-28" />
      <div className="min-w-0 pr-14">
        <h3 className="text-[22px] font-bold text-white sm:text-2xl">{project.title}</h3>
        <p className="mt-1 text-sm text-neutral-500">{project.subtitle}</p>
        <span className="mt-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-400 transition group-hover:border-orange/40 group-hover:text-orange">
          View project — photos, video & details
        </span>
      </div>
      <span className="absolute top-1 right-0 text-orange transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowUpRight />
      </span>
    </button>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [idx, setIdx] = useState(0)
  const current = project.gallery[idx]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-100 overflow-y-auto bg-black/75 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#1b1b1b] p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight text-white uppercase">{project.title}</h3>
            <p className="mt-1 text-sm text-neutral-500">{project.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full border border-white/10 p-2 text-neutral-400 transition hover:border-white/30 hover:text-white"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl bg-black ring-1 ring-white/10">
          <MediaView media={current} className="mx-auto max-h-105 w-full object-contain" />
        </div>
        {current.caption && <p className="mt-2 text-center text-xs text-neutral-500">{current.caption}</p>}

        {project.gallery.length > 1 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {project.gallery.map((m, i) => (
              <button
                key={m.src}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={m.caption ?? `Media ${i + 1}`}
                className={`overflow-hidden rounded-xl ring-2 transition ${
                  i === idx ? 'ring-orange' : 'ring-white/10 hover:ring-white/30'
                }`}
              >
                <MediaView media={m} active={false} className="size-16 object-cover sm:size-20" />
              </button>
            ))}
          </div>
        )}

        <div className="mt-8 space-y-4">
          {project.description.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-neutral-400">
              {p}
            </p>
          ))}
        </div>

        <p className="mt-6 text-sm text-neutral-500">
          <span className="font-semibold text-orange">Role:</span> {project.role}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Live site <ArrowUpRight className="size-4" />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              <GithubIcon className="size-4" /> Code & README
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  return (
    <section id="projects" className="pt-8">
      <Heading line1="Recent" line2="Projects" />
      <div className="space-y-12">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <ProjectRow project={p} onOpen={() => setSelected(p)} />
          </Reveal>
        ))}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

/* ---------- experience ---------- */

function ExperienceSection() {
  return (
    <section id="experience" className="pt-8">
      <Heading line1="3+ Years of" line2="Experience" />
      <div className="space-y-12">
        {experiences.map((e, i) => (
          <Reveal key={e.position + e.period} delay={i * 60}>
            <article>
              <h3 className="text-xl font-bold text-white">{e.position}</h3>
              <p className="mt-0.5 text-sm font-medium text-orange">{e.company}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-500">{e.description}</p>
              <p className="mt-3 text-xs tracking-widest text-neutral-600 uppercase">{e.period}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------- tools ---------- */

function Tools() {
  return (
    <section id="tools" className="pt-8">
      <Heading line1="Tools &" line2="Stack" />
      <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
        {tools.map((t, i) => (
          <Reveal key={t.name} delay={(i % 2) * 60}>
            <div className="flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white">
                <svg viewBox="0 0 24 24" className="size-8" role="img" aria-label={t.name}>
                  <path d={t.icon.path} fill={`#${t.icon.hex}`} />
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">{t.name}</h3>
                <p className="text-sm text-neutral-500">{t.category}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------- contact ---------- */

function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const budget = String(data.get('budget') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(`Project inquiry — ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})${budget ? `\nBudget: ${budget}` : ''}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const field =
    'w-full rounded-lg border border-white/5 bg-field px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-orange'

  return (
    <section id="contact" className="pt-8">
      <Heading line1="Let's work" line2="Together" />
      <Reveal>
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs text-neutral-400">Name</span>
              <input name="name" required placeholder="Your Name" className={field} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs text-neutral-400">Email</span>
              <input name="email" type="email" required placeholder="your@email.com" className={field} />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-xs text-neutral-400">Budget</span>
            <select name="budget" defaultValue="" className={field}>
              <option value="" disabled>
                Select…
              </option>
              <option>Under €500</option>
              <option>€500 — €2,000</option>
              <option>€2,000 — €5,000</option>
              <option>Full-time role</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs text-neutral-400">Message</span>
            <textarea name="message" required rows={5} placeholder="Tell me about your project…" className={field} />
          </label>
          <button
            type="submit"
            className="w-full rounded-lg bg-orange py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Submit
          </button>
          {sent && (
            <p className="text-center text-sm text-neutral-400">
              Your email client should open now — or write me directly at{' '}
              <a href={`mailto:${profile.email}`} className="text-orange">
                {profile.email}
              </a>
              .
            </p>
          )}
        </form>
      </Reveal>
    </section>
  )
}

/* ---------- app ---------- */

export default function App() {
  const view = useHashView()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [view])

  return (
    <div className="mx-auto max-w-[1150px] px-5 pt-28 pb-16 lg:pt-32">
      <Nav view={view} />
      <div className="grid gap-14 lg:grid-cols-[370px_1fr] lg:gap-20">
        <LanyardCard />
        <main key={view} className="min-w-0">
          {view === 'top' ? (
            <div className="space-y-24">
              <Hero />
              <Projects />
              <ExperienceSection />
              <Tools />
              <Contact />
            </div>
          ) : (
            <>
              {view === 'projects' && <Projects />}
              {view === 'experience' && <ExperienceSection />}
              {view === 'tools' && <Tools />}
              {view === 'contact' && <Contact />}
            </>
          )}
        </main>
      </div>
      <footer className="mt-28 border-t border-white/5 pt-8 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} {profile.name} · {profile.location} — Built with React + Vite, deployed on
        Vercel.
      </footer>
    </div>
  )
}
