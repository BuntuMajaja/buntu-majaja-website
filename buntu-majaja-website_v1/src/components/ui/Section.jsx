import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const backgrounds = {
  default: 'bg-background',
  card: 'bg-card',
  gradient: 'bg-gradient-to-br from-background via-background to-card',
}

/** Standard page section: background, vertical rhythm, centred container, reveal on scroll. */
export default function Section({ id, background = 'default', className, children }) {
  return (
    <section id={id} className={cn(backgrounds[background], 'section-padding', className)}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
