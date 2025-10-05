import { motion } from 'framer-motion';

const Section = ({ 
  id, 
  children, 
  className = '', 
  background = 'default',
  padding = 'default'
}) => {
  const backgroundClasses = {
    default: 'bg-background',
    card: 'bg-card',
    muted: 'bg-muted/20',
    gradient: 'bg-gradient-to-br from-background via-background to-card'
  };

  const paddingClasses = {
    default: 'section-padding',
    large: 'py-20 md:py-32',
    small: 'py-12 md:py-16',
    none: ''
  };

  return (
    <section 
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
