import { ExternalLink, Linkedin, Twitter, Github, Youtube, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/buntumajaja',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/buntumajaja',
      icon: Twitter,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/buntumajaja',
      icon: Github,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@buntumajaja',
      icon: Youtube,
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Buntu Majaja</h3>
            <p className="text-muted-foreground max-w-md">
              Ecosystem Builder • Strategist • Investor
            </p>
            <p className="text-sm text-muted-foreground">
              Designing and scaling innovation systems that convert vision into ventures across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a 
                href="#about" 
                className="block text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </a>
              <a 
                href="#portfolio" 
                className="block text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Portfolio
              </a>
              <a 
                href="#newsletter" 
                className="block text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#newsletter')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Newsletter
              </a>
              <a 
                href="/src/assets/CV_B_Majaja_v4_2.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Social Links & Book */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
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
                );
              })}
            </div>
            
            {/* Book CTA */}
            <div className="pt-4">
              <Button 
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a 
                  href="https://gumroad.com/buntumajaja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <BookOpen size={16} />
                  Read my Book
                  <ExternalLink size={14} />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Buntu Majaja Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <span className="text-muted-foreground">
              Contact
            </span>
            <a 
              href="https://future-sight-africa.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Substack
            </a>
            <a 
              href="https://linktr.ee/buntumajaja" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Linktree
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
