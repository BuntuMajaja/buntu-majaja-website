import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const VISIBLE_CARDS = 3
const CARD_GAP = 16

const arrowClass =
  'absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed'

export default function PastEngagementsCarousel({ engagements }) {
  const [index, setIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)
  const maxIndex = Math.max(0, engagements.length - VISIBLE_CARDS)
  const step = (containerRef.current?.offsetWidth ?? 0) / VISIBLE_CARDS + CARD_GAP

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="hidden md:block">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className={cn(arrowClass, 'left-0 -translate-x-12')}
          aria-label="Previous engagements"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
          disabled={index >= maxIndex}
          className={cn(arrowClass, 'right-0 translate-x-12')}
          aria-label="Next engagements"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="overflow-hidden" ref={containerRef}>
        <motion.ul
          className="flex gap-4 md:gap-6"
          drag="x"
          dragConstraints={{ left: -maxIndex * 200, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          animate={{ x: -index * step || 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {engagements.map((engagement, i) => (
            <motion.li
              key={engagement.title}
              className="flex-shrink-0 w-[280px] md:w-[300px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="bg-black/80 border border-gray-800 rounded-xl p-4 h-full hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <h4 className="font-semibold text-white text-sm leading-tight line-clamp-2">{engagement.title}</h4>
                    <p className="text-xs text-gray-400 leading-snug">
                      {engagement.organization} • {engagement.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="md:hidden text-center mt-4">
        <p className="text-xs text-muted-foreground">← Swipe to explore →</p>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }, (_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => setIndex(i)}
            className={cn('w-2 h-2 rounded-full transition-all', i === index ? 'bg-primary w-6' : 'bg-border hover:bg-border/60')}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  )
}
