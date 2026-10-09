import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Download } from 'lucide-react'
import { SocialLinks } from '@/components/layout/Footer'
import { home } from '@/content/home'
import { links, person } from '@/content/site'
import { loadKit } from '@/lib/kit'
import { usePageMeta } from '@/lib/usePageMeta'

const ease = [0.22, 1, 0.36, 1]

/** One line of the name, revealed upward from behind a mask. */
function NameLine({ children, delay, still }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={still ? false : { y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  )
}

function DownloadProfile() {
  return (
    <a
      href={links.speakerProfile}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-full py-1 pr-4"
    >
      <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-ink text-paper transition-colors duration-300 group-hover:bg-earth">
        <Download className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-y-[3px]" aria-hidden="true" />
        <span className="absolute inset-0 rounded-full ring-1 ring-ink/20 transition-transform duration-500 ease-out group-hover:scale-125 group-hover:opacity-0" />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-medium">{home.download}</span>
        <span className="block text-sm text-slate">Speaker profile, PDF</span>
      </span>
    </a>
  )
}

export default function Home() {
  usePageMeta(null, 'Buntu Majaja designs and scales innovation systems that turn vision into ventures across Africa. Keynotes, masterclasses and advisory.')
  const still = useReducedMotion()

  useEffect(loadKit, [])

  return (
    <main className="relative min-h-svh overflow-hidden lg:min-h-[max(100svh,720px)]">
      {/* The photograph: right side on desktop, top on mobile. One orchestrated reveal on load. */}
      <div className="cut-bl relative h-[62svh] w-full overflow-hidden bg-ink lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[56%]" style={{ '--cut': '96px' }}>
        <motion.picture
          className="absolute inset-0 block"
          initial={still ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease }}
        >
          <source media="(max-width: 1023px)" srcSet={home.image.srcMobile} />
          <img
            src={home.image.src}
            alt={home.image.alt}
            fetchPriority="high"
            className="h-full w-full object-cover object-[50%_30%] lg:object-[43%_35%]"
          />
        </motion.picture>
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 origin-left bg-paper"
          initial={still ? false : { scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.15 }}
        />
      </div>

      {/* The words */}
      <div className="gutter relative flex flex-col pb-10 pt-10 lg:min-h-[max(100svh,720px)] lg:pb-6 lg:pt-24">
        <div className="lg:w-[44%] lg:pr-12">
          <motion.p
            initial={still ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-6 flex items-center gap-2.5 text-sm text-slate"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-bright opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            Available for speaking and advisory
          </motion.p>

          <h1 className="t-display" aria-label={person.name}>
            <NameLine delay={0.35} still={still}>{person.firstName}</NameLine>
            <NameLine delay={0.47} still={still}>{person.lastName}</NameLine>
          </h1>

          <motion.p
            initial={still ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
            className="mt-6 max-w-[34ch] text-slate"
          >
            {person.role}
          </motion.p>

          <motion.div
            initial={still ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-9"
          >
            {home.buyers.map((buyer) => (
              <div key={buyer.who}>
                <p className="text-sm font-medium text-earth">{buyer.who}</p>
                <p className="mt-2 text-[17px] leading-snug">{buyer.line}</p>
                <Link
                  to={buyer.cta.to}
                  className="mt-3 inline-flex min-h-11 items-center text-[15px] font-medium underline decoration-ink/25 underline-offset-[6px] transition-colors hover:decoration-ink"
                >
                  {buyer.cta.label}
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={still ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 lg:mt-auto lg:pt-8"
        >
          <DownloadProfile />
          <span className="hidden h-8 w-px bg-line sm:block" aria-hidden="true" />
          <SocialLinks className="-ml-3 sm:ml-0" />
        </motion.div>
      </div>
    </main>
  )
}
