import { motion } from 'framer-motion';
import { Target, Award, Rocket, Download, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Section from './Section';

const AboutSection = () => {
  const achievements = [
    {
      icon: Target,
      title: 'Innovation Leadership',
      description: 'Scaled SA Innovation Summit to 15,000+ attendees across 56 countries, becoming Africa\'s largest startup event.'
    },
    {
      icon: Award,
      title: 'Ecosystem Building',
      description: 'Created platforms that unlock Africa\'s innovation potential, facilitating $22+ million in investment deals.'
    },
    {
      icon: Rocket,
      title: 'Venture Impact',
      description: 'Mentored 200+ founders and supported 3,500 startups to raise $20+ million through TechTribe Accelerator.'
    }
  ];

  const stats = [
    { number: '15,000+', label: 'Event Attendees' },
    { number: '56', label: 'Countries Reached' },
    { number: '$22M+', label: 'Investment Deals' },
    { number: '200+', label: 'Founders Mentored' }
  ];

  return (
    <Section id="about" background="gradient">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building Africa's <span className="gradient-text">Innovation Future</span>
            </h2>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-primary">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe that scalable business models and innovative entrepreneurs build the African economy. 
              At the heart of this is productivity — the endless pursuit of being better and faster at what you do, 
              being more effective and efficient. My mission is to design and scale innovation systems that convert 
              vision into ventures across Africa.
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-primary">Philosophy</h3>
            <blockquote className="border-l-4 border-accent pl-6 italic text-muted-foreground">
              "Go where you are celebrated, not where you are tolerated"
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              My values are rooted in Growth, Positivity, Integrity, Gratitude, and Freedom. I consider myself 
              a warrior against unjust inequality, dreaming to touch millions of African entrepreneurs and 
              living through innovation and investing in innovative solutions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
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
              Email Me
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
          </motion.div>
        </div>

        {/* Achievements & Stats */}
        <div className="space-y-8">
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Achievements */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">Key Achievements</h3>
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-card/50 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
