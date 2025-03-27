
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselNavigationProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({ 
  onPrevClick, 
  onNextClick 
}) => {
  return (
    <>
      <button 
        onClick={onPrevClick}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full 
                  bg-white/15 backdrop-blur-md hover:bg-eco-100/90 text-earth-700 border border-eco-200/50 
                  shadow-lg flex items-center justify-center transform transition-all duration-300 
                  hover:scale-110 focus:outline-none focus:ring-2 focus:ring-eco-400"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>
      
      <button 
        onClick={onNextClick}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full 
                  bg-white/15 backdrop-blur-md hover:bg-eco-100/90 text-earth-700 border border-eco-200/50 
                  shadow-lg flex items-center justify-center transform transition-all duration-300 
                  hover:scale-110 focus:outline-none focus:ring-2 focus:ring-eco-400"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7" />
      </button>
    </>
  );
};

export default CarouselNavigation;
