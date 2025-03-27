
import React from 'react';
import { cn } from '@/lib/utils';

interface CarouselDotsProps {
  activeIndex: number;
  count: number;
  onClick: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ activeIndex, count, onClick }) => {
  return (
    <div className="flex justify-center space-x-3 mt-4">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={cn(
            "transition-all duration-300 relative",
            index === activeIndex 
              ? "w-8 h-2 bg-eco-400/80 rounded-full shadow-sm" 
              : "w-2 h-2 bg-eco-200/60 rounded-full hover:bg-eco-300/70"
          )}
          aria-label={`Go to slide ${index + 1}`}
        >
          {index === activeIndex && (
            <span className="absolute inset-0 rounded-full animate-pulse-gentle bg-eco-300/30 -z-10"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default CarouselDots;
