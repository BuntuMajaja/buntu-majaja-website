import { motion } from 'framer-motion'
import { Download, Linkedin, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import { about } from '@/content/about'
import { links } from '@/content/site'
import { icons } from '@/lib/icons'

export default function AboutSection() {
  return (
    <Section id="about" background="gradient">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {about.heading.lead} <span className="gradient-text">{about.heading.highlight}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">{about.mission}</p>
          </Reveal>

          <Reveal delay={0.4} className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Philosophy</h3>
            <blockquote className="border-l-4 border-accent pl-6 italic text-muted-foreground">{about.values}</blockquote>
            <p className="text-muted-foreground leading-relaxed">{about.philosophy}</p>
          </Reveal>

          <Reveal delay={0.6} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" href={links.cv} external>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" disabled className="opacity-50">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
            <Button variant="outline" size="lg" href={links.linkedin}>
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </Reveal>
        </div>

        <div className="space-y-8">
          <Reveal className="grid grid-cols-2 gap-6">
            {about.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </Reveal>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">Key Achievements</h3>
            {about.achievements.map((achievement, index) => {
              const Icon = icons[achievement.icon]
              return (
                <Reveal
                  key={achievement.title}
                  x={20}
                  y={0}
                  delay={index * 0.2}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-card/50 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
