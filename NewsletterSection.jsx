import { motion } from 'framer-motion';
import { Mail, ExternalLink, Coffee, Users, TrendingUp, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Section from './Section';

const NewsletterSection = () => {
  const stats = [
    { icon: Users, number: '2,000+', label: 'Subscribers' },
    { icon: Globe, number: '56', label: 'Countries' },
    { icon: TrendingUp, number: 'Weekly', label: 'Insights' },
  ];

  const featuredPosts = [
    {
      title: 'The Future of African Innovation Ecosystems',
      excerpt: 'Exploring how technology and entrepreneurship are reshaping Africa\'s economic landscape.',
      date: 'Dec 2024',
      readTime: '5 min read'
    },
    {
      title: 'Building Sustainable Venture Capital in Africa',
      excerpt: 'Key insights on creating investment frameworks that work for African startups.',
      date: 'Nov 2024',
      readTime: '7 min read'
    },
    {
      title: 'The Rise of African Tech Hubs',
      excerpt: 'How cities across Africa are becoming centres of innovation and entrepreneurship.',
      date: 'Nov 2024',
      readTime: '6 min read'
    }
  ];

  return (
    <Section id="newsletter" background="card" className="border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">FutureSight Africa</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Weekly notes on innovation & capital across Africa. Join a community of entrepreneurs, 
              investors, and innovators shaping the continent's future.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground">Subscribe for Weekly Insights</h3>
            
            {/* Placeholder for newsletter embed */}
            <div 
              id="newsletter-embed" 
              className="p-6 bg-muted/20 border border-border rounded-xl"
            >
              {/* This is where Beehiiv/Substack embed will go */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1"
                  />
                  <Button className="bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Join 2,000+ subscribers. No spam, unsubscribe anytime.
                </p>
              </div>
              
              {/* Note for implementation */}
              <div className="mt-4 p-3 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="text-xs text-accent">
                  📝 Implementation Note: Replace this section with your Beehiiv or Substack embed code
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a 
                href="https://future-sight-africa.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Read Archives
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a 
                href="https://buymeacoffee.com/buntumajaja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Coffee className="mr-2 h-4 w-4" />
                Support My Work
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Featured Posts */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Featured Posts</h3>
          </motion.div>

          <div className="space-y-4">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/20 transition-all duration-200 hover-lift">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center pt-4"
          >
            <Button 
              variant="ghost" 
              asChild
              className="text-primary hover:text-primary/80"
            >
              <a 
                href="https://future-sight-africa.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                View All Posts
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default NewsletterSection;
