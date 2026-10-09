import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Building2 } from 'lucide-react';

const PastEngagementsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const engagements = [
    {
      title: 'African Innovation Summit',
      organization: 'SA Innovation Summit',
      location: 'Johannesburg'
    },
    {
      title: 'Innovation & African Identity',
      organization: 'TEDx',
      location: 'Cape Town'
    },
    {
      title: 'Sustainable Innovation',
      organization: 'Innovation Week',
      location: 'Dar es Salaam'
    },
    {
      title: 'Economic Sovereignty',
      organization: 'African Union',
      location: 'Addis Ababa'
    },
    {
      title: 'AI Convergence',
      organization: 'Tech Summit',
      location: 'Lagos'
    },
    {
      title: 'Ecosystem Building',
      organization: 'Startup Grind',
      location: 'Nairobi'
    },
    {
      title: 'Future of Work',
      organization: 'World Bank',
      location: 'Kigali'
    },
    {
      title: 'Innovation Policy',
      organization: 'Government Forum',
      location: 'Pretoria'
    },
    {
      title: 'Moonshot Thinking',
      organization: 'Corporate Leaders',
      location: 'Dubai'
    },
    {
      title: 'Tech & Capital',
      organization: 'Investment Summit',
      location: 'London'
    }
  ];

  const visibleCards = 3;
  const maxIndex = Math.max(0, engagements.length - visibleCards);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Desktop Navigation Arrows */}
      <div className="hidden md:block">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous engagements"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next engagements"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex gap-4 md:gap-6"
          drag="x"
          dragConstraints={{ left: -maxIndex * 200, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          animate={{ x: -currentIndex * (containerRef.current?.offsetWidth / visibleCards + 16) || 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {engagements.map((engagement, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[300px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="bg-black/80 border border-gray-800 rounded-xl p-4 h-full hover:border-primary/50 transition-colors">
                {/* Icon and Content on same line */}
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <h4 className="font-semibold text-white text-sm leading-tight line-clamp-2">
                      {engagement.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-snug">
                      {engagement.organization} • {engagement.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="md:hidden text-center mt-4">
        <p className="text-xs text-muted-foreground">
          ← Swipe to explore →
        </p>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-primary w-6'
                : 'bg-border hover:bg-border/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PastEngagementsCarousel;
