import { motion } from 'framer-motion'
import { ArrowDown, Download, Linkedin, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'
import { hero, links, person } from '@/content/site'
import { scrollToSection } from '@/lib/utils'

/** Staggered fade-up used for each block of the hero copy. */
const rise = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

const toChannels = () => scrollToSection('#channels')

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden geometric-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              {...rise(0.2)}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              {hero.badge}
            </motion.div>

            <motion.div {...rise(0.4)} className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text">{person.name}</span>
              </h1>
              <div className="space-y-1">
                {hero.titles.map((title) => (
                  <p key={title} className="text-base md:text-lg text-muted-foreground font-medium">
                    {title}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.p {...rise(0.6)} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {hero.intro}
            </motion.p>

            <motion.blockquote {...rise(0.8)} className="border-l-4 border-accent pl-6 italic text-muted-foreground">
              {hero.quote}
            </motion.blockquote>

            <motion.div {...rise(1.0)} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={toChannels}>
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>

              <div className="flex gap-2">
                <Button variant="outline" size="lg" href={links.cv} external>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button variant="outline" size="lg" disabled className="opacity-50">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
                <Button variant="outline" size="lg" href={links.linkedin}>
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border-4 border-accent/20">
                <img
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fetchPriority="high"
                  className="w-full h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          type="button"
          onClick={toChannels}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="h-5 w-5 animate-bounce group-hover:text-primary" />
        </button>
      </motion.div>
    </section>
  )
}
