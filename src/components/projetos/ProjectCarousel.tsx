
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ProjectItem from './ProjectItem';
import { projectImages } from '@/data/projectData';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselDots from './CarouselDots';

const ProjectCarousel: React.FC = () => {
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

  // Calculate the distance from active index (handling loop)
  const getDistance = (index: number) => {
    const count = projectImages.length;
    let distance = Math.abs(index - activeIndex);
    if (distance > count / 2) {
      distance = count - distance;
    }
    return distance;
  };

  return (
    <>
      <div className="w-full relative overflow-hidden py-12">
        <Carousel>
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {projectImages.map((project, index) => (
                <ProjectItem 
                  key={index} 
                  project={project} 
                  distance={getDistance(index)} 
                />
              ))}
            </div>
          </div>

          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-eco-100/90 hover:bg-eco-200/90 border-eco-300 text-earth-700" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-eco-100/90 hover:bg-eco-200/90 border-eco-300 text-earth-700" />
        </Carousel>
      </div>

      <div className="mt-4">
        <CarouselDots 
          activeIndex={activeIndex} 
          count={projectImages.length} 
          onClick={scrollTo} 
        />
      </div>
    </>
  );
};

export default ProjectCarousel;
