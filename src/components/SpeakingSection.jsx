import { motion } from 'framer-motion';
import { Cpu, Globe2, TrendingUp, Network, Download, Mail, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Section from './Section';
import TestimonialCarousel from './TestimonialCarousel';

const SpeakingSection = () => {
  const topics = [
    {
      title: 'The Convergence Crisis: AI, Robotics & Batteries',
      hook: 'Technology Optimist: "We\'re building tomorrow with yesterday\'s playbook"',
      description: 'Your competitors are already leveraging AI, robotics, and battery breakthroughs—but most organizations struggle to connect the dots between these converging technologies. Buntu explores the unprecedented convergence reshaping every industry and provides frameworks for leaders to navigate this transformation and harness convergence for competitive advantage rather than disruption.',
      audience: 'Tech executives, corporate strategists, innovation teams, venture capitalists',
      icon: Cpu
    },
    {
      title: 'Economic Sovereignty: How Money, Land & Ideas Really Work',
      hook: 'African Economic Thesis: "Money flows through colonial pipelines - here\'s how Africa breaks free"',
      description: 'African economies remain trapped in dependency cycles despite decades of independence—wealth still aggregates in London, New York, and Paris. Buntu delivers a macro examination of how money flows through colonial structures and unpacks why Africa must master resource extraction and idea generation to achieve true economic sovereignty and break free from these persistent patterns.',
      audience: 'Development agencies, African leaders, economic forums, policy makers',
      icon: Globe2
    },
    {
      title: '2026 Foresight: Tech & Innovation Predictions',
      hook: 'Annual Predictions: "What every leader needs to know about next year"',
      description: 'Strategic planning fails when leaders miss the early signals of technological and market shifts that reshape entire industries overnight. Buntu shares his data-informed predictions for technology, innovation, and macro trends that will define 2026. Using African and global insights, he examines opportunities and challenges that leaders need to prepare for in the year ahead.',
      audience: 'Corporate leaders, investors, innovation managers, conference audiences',
      icon: TrendingUp
    },
    {
      title: 'Innovation Ecosystems: The Complexity That Impacts Everything',
      hook: 'Systems Thinking: "Why most moonshots crash before takeoff"',
      description: 'Innovation budgets get wasted on initiatives that fail because leaders underestimate ecosystem complexity and default to linear thinking. Buntu inspires teams to embrace systems thinking, pursue moonshot goals, and build exponential innovation ecosystems that drive transformational outcomes rather than incremental improvements.',
      audience: 'Innovation teams, government officials, development agencies, corporate executives',
      icon: Network
    }
  ];

  const pastEngagements = [
    {
      event: 'SA Innovation Summit',
      year: '2020-2024',
      description: 'Annual keynote speaker at Africa\'s largest startup event'
    },
    {
      event: 'TEDx',
      year: '2019',
      description: 'Exploring the intersection of innovation and African identity'
    },
    {
      event: 'Innovation Week Tanzania',
      year: '2023',
      description: 'Keynote on building sustainable innovation ecosystems'
    }
  ];

  return (
    <Section id="speaking" background="gradient">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Speaking</span> Engagements
          </h2>
          <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto mb-4">
            Buntu delivers keynotes that challenge conventional thinking and equip leaders with frameworks to navigate complexity. His presentations blend African insights with global macro trends, offering audiences actionable strategies for innovation, economic transformation, and systems-level change.
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Ideal for conferences, corporate events, innovation summits, and leadership forums seeking thought-provoking content that inspires action and reframes how audiences think about technology, economics, and the future.
          </p>
        </motion.div>
      </div>

      {/* Video Placeholder Area - Designed for future video integration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="relative bg-card border-2 border-dashed border-border rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Play className="w-10 h-10 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Speaking Reel Video Coming Soon
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Speaking Topics - Single Column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h3 className="text-2xl font-bold text-center mb-12">
          Speaking <span className="gradient-text">Topics</span>
        </h3>
        <div className="max-w-4xl mx-auto space-y-6">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 hover-lift"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-2 leading-tight">{topic.title}</h4>
                    <p className="text-sm text-accent italic font-medium">{topic.hook}</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {topic.description}
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">Typically speaks to:</span> {topic.audience}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h3 className="text-2xl font-bold text-center mb-8">
          What <span className="gradient-text">Clients Say</span>
        </h3>
        <TestimonialCarousel />
      </motion.div>

      {/* Past Engagements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-xl font-semibold text-primary text-center mb-8">Past Speaking Engagements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pastEngagements.map((engagement, index) => (
            <motion.div
              key={engagement.event}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 border border-border rounded-xl p-5 text-center"
            >
              <h4 className="font-semibold text-foreground mb-2">{engagement.event}</h4>
              <p className="text-xs text-accent font-medium mb-2">{engagement.year}</p>
              <p className="text-xs text-muted-foreground">{engagement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Speaking Fees & CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-sm text-muted-foreground mb-6">
          Speaking fees start at $1,550 (excl. taxes and hard costs)
        </p>
        
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
                Book Me to Speak
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default SpeakingSection;
