
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const forestImages = [
  '/lovable-uploads/d2ed2b6b-6558-4a93-8c71-95038edaa049.png',
  '/lovable-uploads/5b48fe05-0bbc-4168-b053-956b46e28792.jpg',
  '/lovable-uploads/b2251703-230b-4fb3-adfd-7249f11d3483.jpg',
  '/lovable-uploads/d2ed2b6b-6558-4a93-8c71-95038edaa049.png',
];

const CarouselDots = ({ 
  activeIndex, 
  count, 
  onClick 
}: { 
  activeIndex: number; 
  count: number; 
  onClick: (index: number) => void;
}) => {
  return (
    <div className="flex justify-center space-x-2 mt-6">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={cn(
            "w-3 h-3 rounded-full transition-all duration-300",
            index === activeIndex ? "bg-[#71B707]" : "bg-eco-200"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

const Projetos = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  // Update active index when the carousel scrolls
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Function to handle dot click and scroll to respective slide
  const scrollTo = React.useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setActiveIndex(index);
    }
  }, [emblaApi]);

  return (
    <section id="projetos" className="py-24 overflow-hidden relative eco-gradient-light">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-earth-100/50 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[#71B707] bg-eco-100 px-3 py-1 rounded-full text-sm font-medium mb-4 opacity-0 animate-fade-in">
            Conheça Nosso Trabalho
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in-delay-1 text-earth-700 text-center">
            Nossos <span className="text-[#71B707]">Projetos</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-earth-600 opacity-0 animate-fade-in-delay-2">
            Confira alguns dos nossos projetos de conservação e sustentabilidade implementados em diferentes ecossistemas.
          </p>
        </div>
      </div>

      {/* Full width carousel */}
      <div className="w-full relative overflow-hidden py-12">
        <Carousel>
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {forestImages.map((image, index) => {
                // Calculate the distance from active index (handling loop)
                const count = forestImages.length;
                let distance = Math.abs(index - activeIndex);
                if (distance > count / 2) {
                  distance = count - distance;
                }
                
                return (
                  <div 
                    key={index} 
                    className={cn(
                      "min-w-0 shrink-0 grow-0 basis-[75%] sm:basis-[45%] md:basis-[33.333%] lg:basis-[25%] px-2 transition-all duration-500",
                      distance === 0 
                        ? "scale-110 z-20 opacity-100" 
                        : distance === 1 
                          ? "scale-95 z-10 opacity-90" 
                          : "scale-90 opacity-70"
                    )}
                  >
                    <div className={cn(
                      "overflow-hidden shadow-md rounded-lg border-2 transition-all duration-500",
                      distance === 0 
                        ? "h-72 md:h-96 border-eco-500" 
                        : "h-60 md:h-80 border-eco-200"
                    )}>
                      <img 
                        src={image} 
                        alt={`Projeto de conservação ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation arrows */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-eco-100/80 hover:bg-eco-200/80 border-eco-300" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-eco-100/80 hover:bg-eco-200/80 border-eco-300" />
        </Carousel>
      </div>

      {/* Indicator dots */}
      <div className="mt-4">
        <CarouselDots 
          activeIndex={activeIndex} 
          count={forestImages.length} 
          onClick={scrollTo} 
        />
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-eco-200/40 to-transparent"></div>
    </section>
  );
};

export default Projetos;
