
import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ProjectItem from './ProjectItem';
import { projectImages } from '@/data/projectData';
import CarouselDots from './CarouselDots';
import CarouselNavigation from './CarouselNavigation';

const ProjectCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    inViewThreshold: 0.7,
  }, [Autoplay({ delay: 8000, stopOnInteraction: true, rootNode: (emblaRoot) => emblaRoot.parentElement })]);

  // Update active index when the carousel scrolls
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect(); // Call once to set initial state
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Function to handle dot click and scroll to respective slide
  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setActiveIndex(index);
    }
  }, [emblaApi]);

  // Calculate the distance from active index (handling loop)
  const getDistance = (index: number) => {
    const count = projectImages.length;
    let distance = Math.abs(index - activeIndex);
    if (distance > count / 2) {
      distance = count - distance;
    }
    return distance;
  };

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="w-full relative overflow-hidden py-20">
      <div className="max-w-8xl mx-auto px-4">
        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex py-10">
              {projectImages.map((project, index) => (
                <ProjectItem 
                  key={index} 
                  project={project} 
                  distance={getDistance(index)}
                  isActive={index === activeIndex}
                />
              ))}
            </div>
          </div>

          {/* Custom Navigation Buttons */}
          <CarouselNavigation 
            onPrevClick={scrollPrev}
            onNextClick={scrollNext}
          />
        </div>

        {/* Pagination Dots */}
        <div className="mt-12">
          <CarouselDots 
            activeIndex={activeIndex} 
            count={projectImages.length} 
            onClick={scrollTo} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
