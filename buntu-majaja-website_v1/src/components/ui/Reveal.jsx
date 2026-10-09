import { motion } from 'framer-motion'

/** Fade-and-slide in once when scrolled into view. `x`/`y` set the starting offset. */
export default function Reveal({ as = 'div', delay = 0, x = 0, y = 20, scale, className, children, ...props }) {
  const Component = motion[as]
  const initial = { opacity: 0, x, y, ...(scale !== undefined && { scale }) }
  const visible = { opacity: 1, x: 0, y: 0, ...(scale !== undefined && { scale: 1 }) }

  return (
    <Component
      initial={initial}
      whileInView={visible}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  )
}
