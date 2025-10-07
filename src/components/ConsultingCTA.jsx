import { motion } from 'framer-motion';
import { MessageSquare, Calendar, CheckCircle, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Section from './Section';

const ConsultingCTA = () => {
  return (
    <Section background="card" className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to <span className="gradient-text">Collaborate</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm currently available for consulting on innovation strategy, ecosystem building, 
              and technology projects across Africa. Let's explore how we can work together.
            </p>
          </div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
          >
            <CheckCircle className="w-4 h-4" />
            Available for New Projects
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8"
          >
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Innovation Strategy</h3>
              <p className="text-sm text-muted-foreground">
                Design systems that convert vision into scalable ventures
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Ecosystem Building</h3>
              <p className="text-sm text-muted-foreground">
                Create platforms that unlock innovation potential
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Economic Sovereignty</h3>
              <p className="text-sm text-muted-foreground">
                Develop technology solutions for African economic independence
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Start Conversation
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              disabled
              className="opacity-50"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Call
            </Button>

            <Button 
              size="lg"
              variant="default"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href="#speaking" className="inline-flex items-center">
                <Mic className="mr-2 h-4 w-4" />
                Book Speaking Engagement
              </a>
            </Button>
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            Contact form coming soon. For now, reach out via LinkedIn for consulting inquiries.
          </motion.p>
        </motion.div>
      </div>
    </Section>
  );
};

export default ConsultingCTA;
