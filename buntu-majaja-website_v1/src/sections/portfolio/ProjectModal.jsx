import { useEffect, useRef } from 'react'
import { Calendar, ExternalLink, User, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { statusBadge, statusBadgeFallback } from './statusStyles'

function DetailBlock({ title, children }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      {children}
    </div>
  )
}

function BulletList({ items, marker, markerClass }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="text-gray-300 flex items-start space-x-2">
          <span className={cn('mt-1', markerClass)} aria-hidden="true">{marker}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** Full case study overlay. Closes on Escape, the X button, or a click on the backdrop. */
export default function ProjectModal({ project, onClose, onShare }) {
  const closeRef = useRef(null)
  const { details } = project

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400">{project.years}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className={cn('px-3 py-1 rounded-full text-sm font-medium border', statusBadge[project.metaTag] ?? statusBadgeFallback)}>
                {project.metaTag}
              </span>
              <button
                type="button"
                onClick={() => onShare(project)}
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm"
                title="Share this project"
                aria-label="Share this project"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
              <button
                type="button"
                ref={closeRef}
                onClick={onClose}
                className="text-gray-400 hover:text-white p-2"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <h2 id="project-modal-title" className="text-3xl font-bold text-white mb-2">{project.title}</h2>
          <div className="flex items-center space-x-2 mb-4">
            <User className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">{project.role}</span>
          </div>
          <p className="text-xl text-gray-300 mb-6">{project.oneLiner}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">{tag}</span>
            ))}
          </div>
        </div>

        <div className="p-6 space-y-8">
          <DetailBlock title="Context">
            <p className="text-gray-300">{details.context}</p>
          </DetailBlock>
          <DetailBlock title="Actions & Involvement">
            <BulletList items={details.actions} marker="•" markerClass="text-cyan-400" />
          </DetailBlock>
          <DetailBlock title="Results & Impact">
            <BulletList items={details.results} marker="✓" markerClass="text-green-400" />
          </DetailBlock>
          <DetailBlock title="Learning & Reflection">
            <p className="text-gray-300">{details.learning}</p>
          </DetailBlock>
          <DetailBlock title="Leverage & Networks">
            <p className="text-gray-300">{details.leverage}</p>
          </DetailBlock>
          <DetailBlock title="Next Steps / Get Involved">
            <p className="text-gray-300">{details.nextSteps}</p>
          </DetailBlock>
        </div>
      </div>
    </div>
  )
}
