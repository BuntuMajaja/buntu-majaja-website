import { BookOpen, ExternalLink } from 'lucide-react'
import Button from '@/components/ui/Button'
import { footer, links, person } from '@/content/site'
import { icons } from '@/lib/icons'
import { scrollToSection } from '@/lib/utils'

const linkClass = 'block text-muted-foreground hover:text-primary transition-colors'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">{person.name}</h3>
            <p className="text-muted-foreground max-w-md">{person.tagline}</p>
            <p className="text-sm text-muted-foreground">{footer.blurb}</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {footer.quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={linkClass}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a href={links.cv} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Download CV
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              {footer.social.map((link) => {
                const Icon = icons[link.icon]
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
            <div className="pt-4">
              <Button href={links.book} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <BookOpen size={16} />
                Read my Book
                <ExternalLink size={14} />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {year} {footer.copyrightHolder} All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <span className="text-muted-foreground">Contact</span>
            <a href={links.substack} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              Substack
            </a>
            <a href={links.linktree} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              Linktree
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
