
import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { heroImages } from '@/data/projectData';

const Hero = ({
  onVideoLoaded
}: {
  onVideoLoaded?: () => void;
}) => {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const scrollToNextSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetSection = document.querySelector('#services');
    if (targetSection) {
      window.scrollTo({
        top: (targetSection as HTMLElement).offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
        if (onVideoLoaded) onVideoLoaded();
      };
      videoElement.addEventListener('loadeddata', handleLoadedData);

      // Check if video is already loaded
      if (videoElement.readyState >= 3) {
        handleLoadedData();
      }
      return () => {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [onVideoLoaded]);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video with Enhanced Transitions */}
      <div className="absolute inset-0">
        <video 
          ref={videoRef} 
          className={cn(
            "absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000",
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          )} 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
          style={{ objectFit: 'cover' }}
        >
          <source src={heroImages.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-eco-700/60 via-eco-600/30 to-transparent z-10 transition-all duration-1000"></div>
      </div>

      {/* Content only shows when video is loaded */}
      <div className={cn(
        "relative z-30 max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center space-y-6 py-0 my-0 transition-all duration-700",
        isVideoLoaded ? 'opacity-100' : 'opacity-0'
      )}>        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
          <span className="text-white block mb-3 drop-shadow-xl hover:text-eco-50 transition-colors duration-500 px-[72px]"></span>
          <span className="font-light italic drop-shadow-xl text-sky-700 transition-all duration-700 hover:text-eco-500"></span>
        </h1>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-delay-3 mt-10 transition-all duration-700">
          <Button 
            variant="green" 
            asChild 
            className="rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 text-base sm:text-lg px-8 py-6 transition-all duration-500"
          >
            
          </Button>
          <Button 
            variant="outline" 
            asChild 
            className="border-2 border-white/60 text-white rounded-full hover:bg-[#E2FCB3] hover:text-earth-800 hover:border-transparent shadow-lg hover:shadow-xl hover:-translate-y-1 text-base sm:text-lg px-8 py-6 transition-all duration-500"
          >
            
          </Button>
        </div>
      </div>

      {/* Enhanced scroll indicator with better interaction */}
      <div className={cn(
        "absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-delay-3 z-30",
        isVideoLoaded ? '' : 'hidden'
      )}>
        <a 
          href="#services" 
          onClick={scrollToNextSection} 
          className="flex flex-col items-center text-white hover:text-sky-300 transition-all duration-500 group"
        >
          <span className="text-sm sm:text-base mb-2 group-hover:-translate-y-2 transition-transform duration-500 font-medium drop-shadow-md">
            Descubra Mais
          </span>
          <div className="relative overflow-hidden rounded-full transition-all duration-500 group-hover:bg-sky-400/30">
            <ArrowDown className="animate-bounce bg-black/30 backdrop-blur-sm p-1.5 rounded-full group-hover:text-white group-hover:bg-sky-400/70 transition-all duration-500 w-8 h-8 group-hover:scale-110" />
          </div>
        </a>
      </div>
      
      {/* Enhanced bottom gradient transition to Banner section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20 transition-all duration-1000"></div>
    </section>
  );
};

export default Hero;
