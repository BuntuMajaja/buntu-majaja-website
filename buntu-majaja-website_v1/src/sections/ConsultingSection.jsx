import { motion } from 'framer-motion'
import { Calendar, CheckCircle, MessageSquare, Mic } from 'lucide-react'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import { consulting } from '@/content/consulting'

export default function ConsultingSection() {
  return (
    <Section background="card" className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              {consulting.heading.lead} <span className="gradient-text">{consulting.heading.highlight}</span>
              {consulting.heading.trail}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{consulting.intro}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
          >
            <CheckCircle className="w-4 h-4" />
            {consulting.badge}
          </motion.div>

          <Reveal delay={0.3} className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {consulting.services.map((service) => (
              <div key={service.title} className="space-y-2">
                <h3 className="font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" disabled>
              <MessageSquare className="mr-2 h-4 w-4" />
              Start Conversation
            </Button>
            <Button variant="outline" size="lg" disabled className="opacity-50">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Call
            </Button>
            <Button size="lg" href="#speaking" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Mic className="mr-2 h-4 w-4" />
              Book Speaking
            </Button>
          </Reveal>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            {consulting.note}
          </motion.p>
        </Reveal>
      </div>
    </Section>
  )
}
