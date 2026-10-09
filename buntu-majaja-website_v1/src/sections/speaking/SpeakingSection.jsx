import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Download, Mail, Play } from 'lucide-react'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import { links } from '@/content/site'
import { speaking } from '@/content/speaking'
import { icons } from '@/lib/icons'
import PastEngagementsCarousel from './PastEngagementsCarousel'
import TestimonialCarousel from './TestimonialCarousel'

function TopicCard({ topic, delay }) {
  const Icon = icons[topic.icon]
  return (
    <Reveal delay={delay} className="bg-card border border-border rounded-2xl p-6 hover-lift">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-foreground mb-2 leading-tight">{topic.title}</h4>
          <p className="text-sm text-accent italic font-medium">{topic.hook}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{topic.description}</p>
      <div className="pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-primary">Typically speaks to:</span> {topic.audience}
        </p>
      </div>
    </Reveal>
  )
}

export default function SpeakingSection() {
  const [showPast, setShowPast] = useState(false)
  const Chevron = showPast ? ChevronUp : ChevronDown

  return (
    <Section id="speaking" background="gradient">
      <Reveal className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="gradient-text">Speaking</span>
        </h2>
        <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto mb-4">{speaking.intro}</p>
        <p className="text-base text-muted-foreground max-w-3xl mx-auto">{speaking.audience}</p>
      </Reveal>

      {/* Placeholder until a speaking reel exists */}
      <Reveal className="mb-20">
        <div className="relative bg-card border-2 border-dashed border-border rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Play className="w-10 h-10 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">{speaking.reelPlaceholder}</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mb-20">
        <h3 className="text-2xl font-bold text-center mb-12">
          Speaking <span className="gradient-text">Topics</span>
        </h3>
        <div className="max-w-4xl mx-auto space-y-6">
          {speaking.topics.map((topic, i) => (
            <TopicCard key={topic.title} topic={topic} delay={i * 0.1} />
          ))}
        </div>
      </Reveal>

      <Reveal className="mb-20">
        <h3 className="text-2xl font-bold text-center mb-8">
          What <span className="gradient-text">Clients Say</span>
        </h3>
        <TestimonialCarousel testimonials={speaking.testimonials} />
      </Reveal>

      <Reveal className="mb-16">
        <div className="text-center mb-8">
          <button
            type="button"
            onClick={() => setShowPast((open) => !open)}
            aria-expanded={showPast}
            aria-controls="past-speaking"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
          >
            <span className="font-medium">Past Speaking</span>
            <Chevron
              className={`w-4 h-4 transition-transform ${showPast ? 'group-hover:translate-y-[-2px]' : 'group-hover:translate-y-[2px]'}`}
            />
          </button>
        </div>
        <AnimatePresence>
          {showPast && (
            <motion.div
              id="past-speaking"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <PastEngagementsCarousel engagements={speaking.pastEngagements} />
            </motion.div>
          )}
        </AnimatePresence>
      </Reveal>

      <Reveal className="text-center">
        <p className="text-sm text-muted-foreground mb-6">{speaking.fees}</p>
        <div className="space-y-4">
          <Button size="lg" href={links.speakerProfile} external>
            <Download className="mr-2 h-4 w-4" />
            Download Speaker Profile
          </Button>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" href={links.speakingEmail}>
              <Mail className="mr-2 h-4 w-4" />
              Book Speaking
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
