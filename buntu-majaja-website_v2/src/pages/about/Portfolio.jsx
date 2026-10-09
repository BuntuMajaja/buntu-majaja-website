import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { projects } from '@/content/portfolio'
import { cn, slugify } from '@/lib/utils'
import ProjectModal from './ProjectModal'

const statuses = ['All', ...new Set(projects.map((p) => p.metaTag))]

function projectFromUrl() {
  const slug = new URLSearchParams(window.location.search).get('project')
  return slug ? projects.find((p) => slugify(p.title) === slug) ?? null : null
}

/** Native share sheet where available, otherwise copy the deep link. Returns true if copied. */
async function shareProject(project) {
  const url = `${window.location.origin}/about?project=${slugify(project.title)}`
  if (navigator.share) {
    try {
      await navigator.share({ title: project.title, url })
      return false
    } catch {
      // Dismissed or unavailable: fall back to copying.
    }
  }
  try {
    await navigator.clipboard.writeText(url)
    return true
  } catch {
    return false
  }
}

function ProjectCard({ project, onOpen, index }) {
  return (
    <button type="button" onClick={() => onOpen(project)} className="group block w-full text-left">
      <div
        className={cn('relative aspect-[4/3] overflow-hidden bg-manila', index % 2 ? 'cut-bl' : 'cut')}
        style={{ '--cut': '40px' }}
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          width="1200"
          height="800"
          className="h-full w-full object-cover grayscale-[35%] transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
        />
      </div>
      <p className="mt-5 text-sm text-slate">
        {project.years}, {project.metaTag}
      </p>
      <h3 className="t-h3 mt-1.5 transition-colors group-hover:text-earth">{project.title}</h3>
      <p className="mt-1 text-[15px] text-slate">{project.role}</p>
    </button>
  )
}

export default function Portfolio() {
  const [status, setStatus] = useState('All')
  const [selected, setSelected] = useState(projectFromUrl)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 3000)
    return () => clearTimeout(t)
  }, [copied])

  const close = useCallback(() => setSelected(null), [])
  const share = useCallback(async (project) => {
    if (await shareProject(project)) setCopied(true)
  }, [])

  const visible = status === 'All' ? projects : projects.filter((p) => p.metaTag === status)

  return (
    <section id="work" className="gutter pt-28 sm:pt-40" aria-labelledby="work-title">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 id="work-title" className="t-h1">Work</h2>
          <p className="t-lede mt-5">Systems, not one-off events. Sixteen projects across innovation, investment and policy.</p>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by status">
          {statuses.map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={status === name}
              onClick={() => setStatus(name)}
              className={cn(
                'min-h-11 rounded-full border px-4 text-[14px] font-medium transition-colors',
                status === name ? 'border-ink bg-ink text-paper' : 'border-line text-ink/70 hover:border-ink/40 hover:text-ink',
              )}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelected} index={i} />
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={close} onShare={share} />}
      </AnimatePresence>

      <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center">
        {copied && <p className="glass rounded-full px-5 py-3 text-[15px]">Link copied</p>}
      </div>
    </section>
  )
}
