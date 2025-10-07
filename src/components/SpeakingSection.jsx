import { motion } from 'framer-motion';
import { Mic, Users, Globe, Download, Mail, Phone, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Section from './Section';
import TestimonialCarousel from './TestimonialCarousel';

const SpeakingSection = () => {
  const topics = [
    {
      title: 'African Innovation',
      description: 'How to innovate ourselves, our businesses, and achieve greater impact using technology.',
      icon: Globe
    },
    {
      title: 'Futurism',
      description: 'Equipping audiences with macro trends that will influence scenarios of the future and decision making.',
      icon: TrendingUp
    },
    {
      title: 'Leadership & Operations',
      description: 'How to lead people and manage operations with excellence within business environments.',
      icon: Users
    }
  ];

  const packages = [
    {
      name: 'Package 1',
      price: '20,000 ZAR',
      duration: '30 - 40min keynote incl. Q&A',
      description: 'Existing topic & material from Buntu\'s repertoire',
      bonus: '30 copies of \'The 90 Day Startup\' authored by Buntu Majaja'
    },
    {
      name: 'Package 2',
      price: '30,000 ZAR',
      duration: '60 - 90min keynote incl. Q&A',
      description: 'Existing topic & material from Buntu\'s repertoire, customised to fit objectives of client',
      bonus: '40 copies of \'The 90 Day Startup\' authored by Buntu Majaja'
    },
    {
      name: 'Package 3',
      price: '50,000 ZAR',
      duration: '60 - 90min keynote incl. Q&A',
      description: 'Unique & customised topic, content and material to fit objectives of client',
      bonus: '60 copies of \'The 90 Day Startup\' authored by Buntu Majaja'
    }
  ];

  const clients = [
    'SA Innovation Summit',
    'Nelson Mandela Children\'s Fund',
    'Innovation Festival Durban',
    'TEDx',
    'Innovation Week Tanzania'
  ];

  return (
    <Section id="speaking" background="gradient">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Speaking</span> Engagements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Inspiring audiences across Africa with insights on innovation, leadership, and the future of entrepreneurship
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        {/* Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Global Speaker & Thought Leader</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Buntu is an active voice in our nation, painting a picture of what could be through topics of futurism, 
              innovation and hope, ultimately shaping the African entrepreneurial and leadership landscape.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 italic text-muted-foreground">
              "Entrepreneurs build the continent. They are the warriors that fight against inequality."
            </blockquote>
          </motion.div>

          {/* Speaking Topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-primary mb-4">Main Presentation Topics</h4>
            <div className="space-y-4">
              {topics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <div key={topic.title} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">{topic.title}</h5>
                      <p className="text-sm text-muted-foreground">{topic.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-primary">For Bookings Contact:</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:buntumajaja@gmail.com" className="text-foreground hover:text-primary transition-colors">
                  buntumajaja@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+27833846879" className="text-foreground hover:text-primary transition-colors">
                  +27 83 384 6879
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Speaker Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden bg-slate-700">
            <div className="w-full h-64 flex items-center justify-center">
              <Mic className="w-16 h-16 text-cyan-400" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Speaking Packages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold text-center mb-8">Speaking Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 hover-lift"
            >
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-accent mb-2">{pkg.name}</h4>
                <div className="text-3xl font-bold gradient-text mb-2">{pkg.price}</div>
                <p className="text-sm text-primary font-medium">{pkg.duration}</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground">{pkg.bonus}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            *All packages include publishable key-take outs, case studies, pitch deck and permission to record | *Excludes travel costs
          </p>
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold text-center mb-8">
          What <span className="gradient-text">Clients Say</span>
        </h3>
        <TestimonialCarousel />
      </motion.div>

      {/* Previous Clients */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-xl font-semibold text-primary mb-8">Previous Speaking Engagements & Clients</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {clients.map((client) => (
            <div key={client} className="text-sm text-muted-foreground font-medium">
              {client}
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="space-y-4">
          <Button 
            size="lg"
            asChild
          >
            <a 
              href="/src/assets/20230530-BuntuMajajaSpeakerProfilevv1.2.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Speaker Profile
            </a>
          </Button>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a 
                href="mailto:buntumajaja@gmail.com?subject=Speaking Engagement Inquiry"
                className="inline-flex items-center"
              >
                <Mail className="mr-2 h-4 w-4" />
                Book Speaking Engagement
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default SpeakingSection;
