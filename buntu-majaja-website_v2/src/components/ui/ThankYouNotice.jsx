import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { CircleCheck, X } from 'lucide-react'
import { speaking } from '@/content/speaking'

const AUTO_HIDE_MS = 12000

function cameFromEnquiry() {
  return new URLSearchParams(window.location.search).get('thanks') === 'speaking'
}

/** Confirmation pop-up for visitors the Tally speaking form sends back here (`/?thanks=speaking`). */
export default function ThankYouNotice() {
  const [open, setOpen] = useState(cameFromEnquiry)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('thanks') !== 'speaking') return
    params.delete('thanks')
    params.delete('topic')
    const search = params.toString()
    // Clean the URL so a refresh or a shared link does not show the notice again.
    window.history.replaceState(null, '', window.location.pathname + (search ? `?${search}` : '') + window.location.hash)
  }, [])

  useEffect(() => {
    if (!open || paused) return
    const timer = setTimeout(() => setOpen(false), AUTO_HIDE_MS)
    return () => clearTimeout(timer)
  }, [open, paused])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const hidden = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }

  return (
    <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={hidden}
            animate={{ opacity: 1, y: 0 }}
            exit={hidden}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className="glass pointer-events-auto flex w-full max-w-md items-start gap-3 rounded-2xl p-4"
          >
            <CircleCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" aria-hidden="true" />
            <p className="flex-1 text-[15px] leading-relaxed text-ink">{speaking.thanks}</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Dismiss"
              className="-m-2 flex h-11 w-11 items-center justify-center rounded-full text-slate transition-colors hover:text-ink"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
