import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Share2, X } from 'lucide-react'

function Block({ title, children }) {
  return (
    <div className="grid gap-2 border-t border-line py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
      <h3 className="text-[15px] font-semibold">{title}</h3>
      <div className="text-ink/80">{children}</div>
    </div>
  )
}

function List({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-earth" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** Full case study as a side sheet. Closes on Escape, the close button, or a click on the backdrop. */
export default function ProjectModal({ project, onClose, onShare }) {
  const closeRef = useRef(null)
  const still = useReducedMotion()
  const { details } = project

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex justify-end bg-ink/40 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        initial={still ? { opacity: 0 } : { x: '100%' }}
        animate={still ? { opacity: 1 } : { x: 0 }}
        exit={still ? { opacity: 0 } : { x: '100%' }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full max-w-3xl overflow-y-auto bg-paper"
      >
        <div className="sticky top-0 z-10 flex justify-end gap-1 bg-paper/85 p-3 backdrop-blur-md">
          <button
            type="button"
            onClick={() => onShare(project)}
            aria-label="Share this project"
            className="flex h-11 w-11 items-center justify-center rounded-full text-slate transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <Share2 className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-11 w-11 items-center justify-center rounded-full text-slate transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="cut mx-6 aspect-[16/9] overflow-hidden bg-manila sm:mx-10" style={{ '--cut': '48px' }}>
          <img src={project.image} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="px-6 pb-16 pt-8 sm:px-10">
          <p className="text-sm text-slate">
            {project.years}, {project.metaTag}
          </p>
          <h2 id="project-title" className="t-h2 mt-3">{project.title}</h2>
          <p className="mt-2 font-medium text-earth">{project.role}</p>
          <p className="t-lede mt-6">{project.oneLiner}</p>

          <div className="mt-10">
            <Block title="Context"><p>{details.context}</p></Block>
            <Block title="What I did"><List items={details.actions} /></Block>
            <Block title="Results"><List items={details.results} /></Block>
            <Block title="What I learned"><p>{details.learning}</p></Block>
            <Block title="Networks"><p>{details.leverage}</p></Block>
            <Block title="Get involved"><p>{details.nextSteps}</p></Block>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
