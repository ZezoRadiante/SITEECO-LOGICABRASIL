
import React from 'react';
import { cn } from "@/lib/utils";

interface CarouselDotsProps {
  selectedIndex: number;
  dotsCount: number;
  onDotClick: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ 
  selectedIndex, 
  dotsCount, 
  onDotClick 
}) => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: dotsCount }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={cn(
            "w-3 h-3 rounded-full transition-colors duration-300",
            index === selectedIndex 
              ? "bg-sky-700" 
              : "bg-sky-700/30 hover:bg-sky-700/50"
          )}
        />
      ))}
    </div>
  );
};

export default CarouselDots;

