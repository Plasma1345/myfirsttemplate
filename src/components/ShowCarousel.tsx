import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ShowCard from './ShowCard';
import { Show } from '../data/index';

interface ShowCarouselProps {
  title: string;
  shows: Show[];
}

export default function ShowCarousel({ title, shows }: ShowCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        direction === 'left'
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });

      setTimeout(() => checkScroll(), 500);
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft <
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10
      );
    }
  };

  React.useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className="relative group/carousel"
    >
      <div className="px-4 sm:px-6 lg:px-8 mb-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      </div>

      {/* Scroll Buttons */}
      {canScrollLeft && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-black/80 rounded-r-lg transition-all duration-200 group-hover/carousel:opacity-100"
        >
          <ChevronLeft size={28} />
        </motion.button>
      )}

      {canScrollRight && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-black/80 rounded-l-lg transition-all duration-200 group-hover/carousel:opacity-100"
        >
          <ChevronRight size={28} />
        </motion.button>
      )}

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex space-x-4 overflow-x-scroll scrollbar-hide px-4 sm:px-6 lg:px-8 scroll-smooth"
      >
        {shows.map((show, i) => (
          <div key={show.id} className="flex-shrink-0 w-72">
            <ShowCard show={show} delay={i * 0.05} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}