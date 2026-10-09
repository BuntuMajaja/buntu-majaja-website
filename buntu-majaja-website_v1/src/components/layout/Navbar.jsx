import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import { nav, person } from '@/content/site'
import { cn, scrollToSection } from '@/lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    scrollToSection(href)
    setIsOpen(false)
  }

  return (
    <nav
      aria-label="Main"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent',
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => go('#home')}
            className="flex-shrink-0 text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            {person.name}
          </button>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {nav.map((item) => (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => go(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen((open) => !open)}
              className="text-foreground hover:text-primary"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md rounded-lg mt-2 border border-border">
              {nav.map((item) => (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => go(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
