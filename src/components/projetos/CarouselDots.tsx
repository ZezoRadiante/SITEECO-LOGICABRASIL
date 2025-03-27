
import React from 'react';
import { cn } from '@/lib/utils';

interface CarouselDotsProps {
  activeIndex: number;
  count: number;
  onClick: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ activeIndex, count, onClick }) => {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={cn(
            "transition-all duration-300 relative",
            index === activeIndex 
              ? "w-12 h-3 bg-[#71B707] rounded-full shadow-md" 
              : "w-3 h-3 bg-eco-200 rounded-full hover:bg-eco-300"
          )}
          aria-label={`Go to slide ${index + 1}`}
        >
          {index === activeIndex && (
            <span className="absolute inset-0 rounded-full animate-pulse-gentle bg-eco-300/50 -z-10"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default CarouselDots;
