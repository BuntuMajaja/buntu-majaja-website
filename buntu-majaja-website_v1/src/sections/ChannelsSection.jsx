import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import { channels } from '@/content/site'
import { icons } from '@/lib/icons'
import { scrollToSection } from '@/lib/utils'

function ChannelCard({ title, description, icon, target, delay }) {
  const Icon = icons[icon]
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group cursor-pointer text-left block w-full h-full"
      onClick={() => scrollToSection(target)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 geometric-pattern p-8 h-full">
        <div className="mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
          <span className="text-sm font-medium mr-2">Explore</span>
          <ArrowRight size={16} />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.button>
  )
}

export default function ChannelsSection() {
  return (
    <Section id="channels" background="card" className="border-t border-border">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {channels.heading.lead} <span className="gradient-text">{channels.heading.highlight}</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{channels.intro}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {channels.items.map((channel, index) => (
          <ChannelCard key={channel.title} {...channel} delay={index * 0.2} />
        ))}
      </div>
    </Section>
  )
}
