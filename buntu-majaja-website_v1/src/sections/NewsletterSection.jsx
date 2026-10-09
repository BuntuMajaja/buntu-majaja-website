import { Coffee, ExternalLink, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import { newsletter } from '@/content/newsletter'
import { links } from '@/content/site'
import { icons } from '@/lib/icons'

export default function NewsletterSection() {
  return (
    <Section id="newsletter" background="card" className="border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <Reveal>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">{newsletter.name}</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">{newsletter.intro}</p>
          </Reveal>

          <Reveal delay={0.2} className="grid grid-cols-3 gap-6">
            {newsletter.stats.map((stat) => {
              const Icon = icons[stat.icon]
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </Reveal>

          <Reveal delay={0.4} className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">{newsletter.subscribeHeading}</h3>
            <div id="newsletter-embed" className="p-6 bg-muted/20 border border-border rounded-xl">
              <iframe
                src={links.substackEmbed}
                width="100%"
                height="320"
                loading="lazy"
                style={{ border: '1px solid #EEE', background: 'white', borderRadius: '0.5rem' }}
                title={`Subscribe to ${newsletter.name}`}
              />
              <p className="text-xs text-muted-foreground mt-3 text-center">{newsletter.subscribeNote}</p>
            </div>
          </Reveal>

          <Reveal delay={0.6} className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" size="lg" href={links.substack}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Read Archives
            </Button>
            <Button variant="outline" size="lg" href={links.buyMeACoffee}>
              <Coffee className="mr-2 h-4 w-4" />
              Support My Work
            </Button>
          </Reveal>
        </div>

        <div className="space-y-6">
          <Reveal>
            <h3 className="text-xl font-semibold text-foreground mb-6">Featured Posts</h3>
          </Reveal>

          <div className="space-y-4">
            {newsletter.featuredPosts.map((post, index) => (
              <Reveal key={post.title} x={20} y={0} delay={index * 0.1} className="group cursor-pointer">
                <div className="p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/20 transition-all duration-200 hover-lift">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{post.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4} className="text-center pt-4">
            <Button variant="ghost" href={links.substack} className="text-primary hover:text-primary/80">
              View All Posts
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
