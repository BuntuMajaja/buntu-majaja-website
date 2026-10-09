import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Footer from '@/components/layout/Footer'
import GlassNav from '@/components/layout/GlassNav'
import ThankYouNotice from '@/components/ui/ThankYouNotice'
import About from '@/pages/About'
import Explore from '@/pages/Explore'
import Home from '@/pages/Home'
import Masterclasses from '@/pages/Masterclasses'
import NotFound from '@/pages/NotFound'
import Speaker from '@/pages/Speaker'

/** Routes. Keep in sync with `nav` in src/content/site.js and scripts/postbuild.js. */
export default function App() {
  const location = useLocation()
  const still = useReducedMotion()
  const isHome = location.pathname === '/'

  // New page starts at the top, unless it is a link to a section (#hash).
  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper">
        Skip to content
      </a>
      <GlassNav />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          id="content"
          initial={still ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.35 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/speaker" element={<Speaker />} />
            <Route path="/masterclasses" element={<Masterclasses />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {!isHome && <Footer />}
        </motion.div>
      </AnimatePresence>
      <ThankYouNotice />
    </>
  )
}
