import { useCallback, useEffect, useState } from 'react'
import { Calendar, ExternalLink, User } from 'lucide-react'
import { categoryFilters, portfolio, projects } from '@/content/portfolio'
import { cn, slugify } from '@/lib/utils'
import ProjectModal from './ProjectModal'
import { statusBadge, statusBadgeFallback, statusFilterActive, statusFilterActiveFallback, statusFilterInactive } from './statusStyles'

const MAX_CARD_TAGS = 4
const statusFilters = ['All', ...new Set(projects.map((p) => p.metaTag))]

/** Project linked via ?project=<slug>, if any. */
function projectFromUrl() {
  const slug = new URLSearchParams(window.location.search).get('project')
  return slug ? projects.find((p) => slugify(p.title) === slug) ?? null : null
}

/** Share via the native share sheet, falling back to copying the link. Returns true if copied. */
async function shareProject(project) {
  const url = `${window.location.origin}${window.location.pathname}?project=${slugify(project.title)}`
  if (navigator.share) {
    try {
      await navigator.share({ title: project.title, text: `Check out this project: ${project.title}`, url })
      return false
    } catch {
      // Share sheet dismissed or unavailable: fall through to copying the link.
    }
  }
  try {
    await navigator.clipboard.writeText(url)
    return true
  } catch {
    return false
  }
}

function ProjectCard({ project, onOpen }) {
  const extraTags = project.tags.length - MAX_CARD_TAGS
  return (
    <article className="bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 group">
      <div className="aspect-video w-full overflow-hidden bg-gray-800/50">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          width="1200"
          height="800"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">{project.years}</span>
          </div>
          <span className={cn('px-3 py-1 rounded-full text-xs font-medium border', statusBadge[project.metaTag] ?? statusBadgeFallback)}>
            {project.metaTag}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <div className="flex items-center space-x-2 mb-3">
          <User className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">{project.role}</span>
        </div>
        <p className="text-gray-300 mb-4">{project.oneLiner}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, MAX_CARD_TAGS).map((tag) => (
            <span key={tag} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">{tag}</span>
          ))}
          {extraTags > 0 && <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">+{extraTags} more</span>}
        </div>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm"
        >
          <span>View Details</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </article>
  )
}

export default function PortfolioSection() {
  const [status, setStatus] = useState('All')
  const [category, setCategory] = useState('All')
  const [selected, setSelected] = useState(projectFromUrl)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (!showToast) return
    const timer = setTimeout(() => setShowToast(false), 3000)
    return () => clearTimeout(timer)
  }, [showToast])

  const close = useCallback(() => setSelected(null), [])
  const share = useCallback(async (project) => {
    if (await shareProject(project)) setShowToast(true)
  }, [])

  const visible = projects.filter(
    (p) => (status === 'All' || p.metaTag === status) && (category === 'All' || p.tags.includes(category)),
  )

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">{portfolio.heading}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{portfolio.intro}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Filter by Status</h3>
          <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by status">
            {statusFilters.map((name) => (
              <button
                type="button"
                key={name}
                aria-pressed={status === name}
                onClick={() => setStatus(name)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border',
                  status === name ? statusFilterActive[name] ?? statusFilterActiveFallback : statusFilterInactive,
                )}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-white mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by category">
            {categoryFilters.map((name, index) => (
              <button
                type="button"
                key={name}
                aria-pressed={category === name}
                onClick={() => setCategory(name)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  category === name
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700',
                )}
              >
                {name}
                <span className="ml-2 text-xs opacity-70">{index + 1}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </div>

        {selected && <ProjectModal project={selected} onClose={close} onShare={share} />}

        {showToast && (
          <div role="status" className="fixed bottom-4 right-4 bg-cyan-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
            <div className="flex items-center space-x-2">
              <ExternalLink className="w-4 h-4" />
              <span>Link to This Case Copied!</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
