import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      quote: "Buntu's insights on African innovation are transformative. His ability to connect macro trends with actionable strategies is unparalleled.",
      author: "Dr. Sarah Nkosi",
      role: "CEO, Innovation Hub Africa",
      organization: "Innovation Hub Africa"
    },
    {
      quote: "A powerful speaker who brings both vision and practical wisdom. Buntu inspired our entire leadership team to think differently about the future.",
      author: "Michael Chen",
      role: "Director of Strategy",
      organization: "Global Tech Solutions"
    },
    {
      quote: "Buntu's presentation at our summit was the highlight of the event. His passion for entrepreneurship and innovation is truly infectious.",
      author: "Amina Mohammed",
      role: "Event Director",
      organization: "SA Innovation Summit"
    },
    {
      quote: "His futurism keynote equipped our team with the frameworks needed to navigate uncertainty and make better strategic decisions.",
      author: "James Williams",
      role: "Chief Innovation Officer",
      organization: "Enterprise Growth Partners"
    },
    {
      quote: "Buntu doesn't just speak—he transforms audiences. His leadership insights have had a lasting impact on our organization.",
      author: "Thandiwe Dlamini",
      role: "Head of Talent Development",
      organization: "Nelson Mandela Children's Fund"
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      {/* Carousel Container */}
      <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 overflow-hidden min-h-[300px] flex items-center">
        {/* Quote Icon */}
        <div className="absolute top-6 left-6 opacity-10">
          <Quote className="w-16 h-16 text-accent" />
        </div>

        {/* Testimonial Content */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextTestimonial();
              } else if (swipe > swipeConfidenceThreshold) {
                prevTestimonial();
              }
            }}
            className="w-full"
          >
            <div className="text-center space-y-6">
              {/* Quote */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Author Info */}
              <div className="space-y-1">
                <p className="font-semibold text-primary text-lg">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-sm text-accent font-medium">
                  {testimonials[currentIndex].organization}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons - Desktop */}
        <div className="hidden md:block">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background border border-border"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background border border-border"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-2 bg-accent'
                : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Navigation Hint */}
      <p className="text-center text-xs text-muted-foreground mt-4 md:hidden">
        Swipe left or right to navigate
      </p>
    </div>
  );
};

export default TestimonialCarousel;
