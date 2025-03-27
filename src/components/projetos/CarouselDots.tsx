
import React from 'react';
import { cn } from '@/lib/utils';

interface CarouselDotsProps {
  activeIndex: number;
  count: number;
  onClick: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ activeIndex, count, onClick }) => {
  return (
    <div className="flex justify-center space-x-3 mt-8">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={cn(
            "transition-all duration-300",
            index === activeIndex 
              ? "w-8 h-3 bg-[#71B707] rounded-full" 
              : "w-3 h-3 bg-eco-200 rounded-full"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
