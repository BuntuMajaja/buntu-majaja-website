import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const AUTO_ADVANCE_MS = 6000
const SWIPE_THRESHOLD = 10000

const slide = {
  enter: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }),
}

export default function TestimonialCarousel({ testimonials }) {
  const [[index, direction], setPosition] = useState([0, 0])
  const count = testimonials.length

  const go = useCallback((step) => setPosition(([i]) => [(i + step + count) % count, step]), [count])
  const goTo = (target) => setPosition(([i]) => [target, target > i ? 1 : -1])

  // Auto-advance; restarts whenever the slide changes so manual navigation resets the timer.
  useEffect(() => {
    const timer = setInterval(() => go(1), AUTO_ADVANCE_MS)
    return () => clearInterval(timer)
  }, [index, go])

  const current = testimonials[index]

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 overflow-hidden min-h-[300px] flex items-center">
        <div className="absolute top-6 left-6 opacity-10">
          <Quote className="w-16 h-16 text-accent" />
        </div>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x
              if (swipe < -SWIPE_THRESHOLD) go(1)
              else if (swipe > SWIPE_THRESHOLD) go(-1)
            }}
            className="w-full"
          >
            <figure className="text-center space-y-6">
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">"{current.quote}"</blockquote>
              <figcaption className="space-y-1">
                <p className="font-semibold text-primary text-lg">{current.author}</p>
                <p className="text-sm text-muted-foreground">{current.role}</p>
                <p className="text-sm text-accent font-medium">{current.organization}</p>
              </figcaption>
            </figure>
          </motion.div>
        </AnimatePresence>

        <div className="hidden md:block">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background border border-border"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background border border-border"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mt-6">
        {testimonials.map((t, i) => (
          <button
            type="button"
            key={t.author}
            onClick={() => goTo(i)}
            className={cn(
              'transition-all duration-300 rounded-full',
              i === index ? 'w-8 h-2 bg-accent' : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50',
            )}
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-4 md:hidden">Swipe left or right to navigate</p>
    </div>
  )
}
