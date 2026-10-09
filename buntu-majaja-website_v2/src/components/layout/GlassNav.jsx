import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Lock, Menu, X } from 'lucide-react'
import { explore } from '@/content/explore'
import { links, nav, person } from '@/content/site'
import { cn } from '@/lib/utils'

const spring = { type: 'spring', stiffness: 420, damping: 34 }

function ExploreItem({ item, onNavigate }) {
  if (item.locked) {
    return (
      <div className="flex items-start justify-between gap-4 rounded-xl px-4 py-3 text-ink/45" aria-disabled="true">
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm">Coming soon</p>
        </div>
        <Lock className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
      </div>
    )
  }
  return (
    <Link
      to={`/explore#${item.key}`}
      onClick={onNavigate}
      className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/70"
    >
      <p className="font-medium">{item.name}</p>
      <p className="text-sm text-slate">{item.description}</p>
    </Link>
  )
}

/** Floating frosted-glass navigation with an animated active pill and an Explore menu. */
export default function GlassNav() {
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const exploreRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on navigation.
  useEffect(() => {
    setExploreOpen(false)
    setMobileOpen(false)
  }, [pathname])

  // Close the Explore menu on outside click or Escape.
  useEffect(() => {
    if (!exploreOpen && !mobileOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setExploreOpen(false)
        setMobileOpen(false)
      }
    }
    const onClick = (e) => exploreRef.current && !exploreRef.current.contains(e.target) && setExploreOpen(false)
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [exploreOpen, mobileOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  const panel = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: -8, scale: 0.97, filter: 'blur(6px)' },
        animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
        exit: { opacity: 0, y: -6, scale: 0.98, filter: 'blur(4px)', transition: { duration: 0.15 } },
      }

  const exploreActive = pathname.startsWith('/explore')

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.nav
        aria-label="Main"
        animate={{ maxWidth: scrolled ? 920 : 1120 }}
        transition={spring}
        className={cn(
          'glass pointer-events-auto flex w-full items-center justify-between gap-4 rounded-2xl px-3 py-2 transition-shadow duration-300 sm:px-4',
          scrolled && 'shadow-[0_18px_50px_-18px_rgba(26,26,26,0.35)]',
        )}
      >
        <Link to="/" className="rounded-full px-2 py-1.5 text-[17px] font-semibold tracking-tight">
          {person.name}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <NavLink key={item.path} to={item.path} className="relative rounded-full px-4 py-2 text-[15px] font-medium">
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span layoutId="nav-pill" transition={spring} className="absolute inset-0 rounded-full bg-ink" />
                  )}
                  <span className={cn('relative transition-colors', isActive ? 'text-paper' : 'text-ink/75 hover:text-ink')}>
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}

          <div ref={exploreRef} className="relative">
            <button
              type="button"
              aria-expanded={exploreOpen}
              aria-controls="explore-menu"
              onClick={() => setExploreOpen((open) => !open)}
              className="relative flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium"
            >
              {exploreActive && (
                <motion.span layoutId="nav-pill" transition={spring} className="absolute inset-0 rounded-full bg-ink" />
              )}
              <span className={cn('relative flex items-center gap-1', exploreActive ? 'text-paper' : 'text-ink/75 hover:text-ink')}>
                Explore
                <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', exploreOpen && 'rotate-180')} aria-hidden="true" />
              </span>
            </button>

            <AnimatePresence>
              {exploreOpen && (
                <motion.div
                  id="explore-menu"
                  {...panel}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="glass absolute right-0 top-[calc(100%+12px)] w-80 origin-top-right rounded-2xl p-2"
                >
                  {explore.items.map((item) => (
                    <ExploreItem key={item.key} item={item} onNavigate={() => setExploreOpen(false)} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={links.speakingForm}
            className="hidden min-h-11 items-center rounded-full bg-ink px-5 text-[15px] font-medium text-paper transition-colors hover:bg-earth sm:inline-flex"
          >
            Check availability
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full md:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="glass pointer-events-auto fixed inset-2 z-50 flex flex-col rounded-3xl p-6 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="text-[17px] font-semibold tracking-tight">{person.name}</Link>
              <button type="button" onClick={() => setMobileOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-full" aria-label="Close menu">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-10 flex flex-col gap-1">
              {nav.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => cn('t-h2 py-2', isActive ? 'text-ink' : 'text-ink/55')}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
            <p className="mt-10 text-sm text-slate">Explore</p>
            <div className="mt-2 -mx-4">
              {explore.items.map((item) => (
                <ExploreItem key={item.key} item={item} onNavigate={() => setMobileOpen(false)} />
              ))}
            </div>
            <a href={links.speakingForm} className="mt-auto flex min-h-12 items-center justify-center rounded-full bg-ink text-paper">
              Check speaker availability
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
