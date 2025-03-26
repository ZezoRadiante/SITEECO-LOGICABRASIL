
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

// Updated array with all the new project images
const projectImages = [
  '/lovable-uploads/db5ebf76-3193-4c5f-ab32-2a690c3cd81a.png', // Casa dos Ventos
  '/lovable-uploads/8f5f563d-38c4-4b3c-9e59-0e251ed4a68a.png', // Rio do Vento
  '/lovable-uploads/70989846-1815-480c-a4a0-96b303e06c30.png', // Umari
  '/lovable-uploads/1283220f-1c35-4ffb-b19b-8e1836a1abbc.png', // Viveiro Florestal
  '/lovable-uploads/9a834a35-468a-4f25-8f39-df5b938fe6d2.png', // Additional Rio do Vento image
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
    <div className="flex justify-center space-x-3 mt-4">
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
    <section id="projetos" className="py-12 overflow-hidden relative bg-white">
      {/* Removed top gradient */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block text-[#71B707] bg-eco-100 px-4 py-1.5 rounded-full text-sm font-medium mb-2 opacity-0 animate-fade-in shadow-sm">
            Conheça Nosso Trabalho
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 opacity-0 animate-fade-in-delay-1 text-earth-700 text-center">
            Nossos <span className="text-[#71B707]">Projetos</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#71B707] to-eco-300 mx-auto rounded-full mb-4"></div>
          
          <p className="max-w-3xl mx-auto text-lg text-earth-600 opacity-0 animate-fade-in-delay-2 leading-relaxed">
            Confira alguns dos nossos projetos de conservação e sustentabilidade implementados em diferentes ecossistemas.
          </p>
        </div>
      </div>

      {/* Full width carousel - Enhanced with better transitions */}
      <div className="w-full relative overflow-hidden py-4">
        <Carousel>
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {projectImages.map((image, index) => {
                // Calculate the distance from active index (handling loop)
                const count = projectImages.length;
                let distance = Math.abs(index - activeIndex);
                if (distance > count / 2) {
                  distance = count - distance;
                }
                
                return (
                  <div 
                    key={index} 
                    className={cn(
                      "min-w-0 shrink-0 grow-0 basis-[75%] sm:basis-[45%] md:basis-[33.333%] lg:basis-[25%] px-3 transition-all duration-700",
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
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation arrows - Improved */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-eco-100/90 hover:bg-eco-200/90 border-eco-300 text-earth-700" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-eco-100/90 hover:bg-eco-200/90 border-eco-300 text-earth-700" />
        </Carousel>
      </div>

      {/* Indicator dots - Improved */}
      <div className="mt-2">
        <CarouselDots 
          activeIndex={activeIndex} 
          count={projectImages.length} 
          onClick={scrollTo} 
        />
      </div>
      
      {/* Removed bottom gradient */}
    </section>
  );
};

export default Projetos;
