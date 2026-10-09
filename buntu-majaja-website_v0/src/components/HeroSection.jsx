import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToChannels = () => {
    document.querySelector('#channels')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden geometric-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              Available for Speaking Engagements
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text">Buntu Majaja</span>
              </h1>
              <div className="space-y-1">
                <p className="text-base md:text-lg text-muted-foreground font-medium">
                  Innovation & Partnerships Lead
                </p>
                <p className="text-base md:text-lg text-muted-foreground font-medium">
                  Venture Development Strategist
                </p>
                <p className="text-base md:text-lg text-muted-foreground font-medium">
                  AI Commercialisation Architect, Global South Markets
                </p>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              I design and scale innovation systems that convert vision into ventures across Africa.
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="border-l-4 border-accent pl-6 italic text-muted-foreground"
            >
              "It does not take time, it takes alignment" (Oct'25)
            </motion.blockquote>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={scrollToChannels}
              >
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                >
                  <a 
                    href="/src/assets/CV_B_Majaja_v4_2.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  disabled
                  className="opacity-50"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://linkedin.com/in/buntumajaja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-accent/20">
                <img 
                  src="/images/buntu-majaja-speaker-profile.webp"
                  alt="Buntu Majaja - Professional Portrait"
                  className="w-full h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToChannels}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="h-5 w-5 animate-bounce group-hover:text-primary" />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
