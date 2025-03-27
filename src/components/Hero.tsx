
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
  const [showFallbackImage, setShowFallbackImage] = useState(false);
  
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
    
    const handleLoadedData = () => {
      console.log("Video loaded successfully");
      setIsVideoLoaded(true);
      setShowFallbackImage(false);
      if (onVideoLoaded) onVideoLoaded();
    };
    
    const handleError = (e: any) => {
      console.error("Video failed to load:", e);
      console.error("Video source was:", heroImages.video);
      setShowFallbackImage(true);
      setIsVideoLoaded(true); // Consider it "loaded" to remove loading screen
      if (onVideoLoaded) onVideoLoaded();
    };
    
    // Função para tentar carregar o vídeo com vários caminhos
    const tryLoadVideo = () => {
      if (!videoElement) return;
      
      const possiblePaths = [
        heroImages.video,
        './background-nature.mp4',
        '/background-nature.mp4',
        'background-nature.mp4'
      ];
      
      // Tentar carregar o vídeo com o primeiro caminho
      videoElement.src = possiblePaths[0];
      
      // Se falhar, tentar os próximos caminhos
      videoElement.addEventListener('error', function tryNextPath(e) {
        console.warn("Video load failed for path:", videoElement.src);
        const currentIndex = possiblePaths.indexOf(videoElement.src);
        if (currentIndex < possiblePaths.length - 1) {
          // Tente o próximo caminho
          videoElement.src = possiblePaths[currentIndex + 1];
        } else {
          // Todos os caminhos falharam, use a imagem de fallback
          console.warn("Video load timeout, using fallback");
          videoElement.removeEventListener('error', tryNextPath);
          setShowFallbackImage(true);
          setIsVideoLoaded(true);
          if (onVideoLoaded) onVideoLoaded();
        }
      }, { once: false });
    };
    
    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleLoadedData);
      
      // Inicie o processo de carregamento com vários caminhos
      tryLoadVideo();
      
      // Check if video is already loaded
      if (videoElement.readyState >= 3) {
        handleLoadedData();
      }
      
      // Fallback se o vídeo demorar muito para carregar (5 segundos)
      const timeoutId = setTimeout(() => {
        if (!isVideoLoaded) {
          console.warn("Video load timeout, using fallback");
          setShowFallbackImage(true);
          setIsVideoLoaded(true);
          if (onVideoLoaded) onVideoLoaded();
        }
      }, 5000);
      
      return () => {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
        clearTimeout(timeoutId);
      };
    } else {
      // Se o elemento de vídeo não estiver disponível por algum motivo
      console.warn("Video element not available, triggering fallback");
      setShowFallbackImage(true);
      setIsVideoLoaded(true);
      if (onVideoLoaded) onVideoLoaded();
    }
  }, [onVideoLoaded, isVideoLoaded]);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video or Fallback Image with Enhanced Transitions */}
      <div className="absolute inset-0">
        {showFallbackImage ? (
          // Fallback image when video fails to load
          <div className={cn(
            "absolute inset-0 w-full h-full z-0 transition-opacity duration-1000",
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          )}>
            <img 
              src={heroImages.fallback || "./lovable-uploads/5b48fe05-0bbc-4168-b053-956b46e28792.jpg"}
              alt="Background" 
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error("Fallback image failed to load, trying alternative path");
                // Se a imagem falhar, tente um caminho alternativo
                (e.target as HTMLImageElement).src = "./lovable-uploads/5b48fe05-0bbc-4168-b053-956b46e28792.jpg";
              }}
            />
          </div>
        ) : (
          // Video background
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
            {/* Não usamos mais source tags, carregamos dinamicamente via JS */}
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-eco-700/60 via-eco-600/30 to-transparent z-10 transition-all duration-1000"></div>
      </div>

      {/* Content only shows when video is loaded */}
      <div className={cn(
        "relative z-30 max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center space-y-6 py-0 my-0 transition-all duration-700",
        isVideoLoaded ? 'opacity-100' : 'opacity-0'
      )}>        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
          <span className="text-white block mb-3 drop-shadow-xl hover:text-eco-50 transition-colors duration-500">Eco-lógica Brasil</span>
          <span className="font-light italic drop-shadow-xl text-sky-700 transition-all duration-700 hover:text-eco-500">Consultoria Ambiental</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-delay-3 mt-10 transition-all duration-700">
          <Button 
            variant="green" 
            asChild 
            className="rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 text-base sm:text-lg px-8 py-6 transition-all duration-500"
          >
            <a href="#contact">Entre em Contato</a>
          </Button>
          <Button 
            variant="outline" 
            asChild 
            className="border-2 border-white/60 text-white rounded-full hover:bg-[#E2FCB3] hover:text-earth-800 hover:border-transparent shadow-lg hover:shadow-xl hover:-translate-y-1 text-base sm:text-lg px-8 py-6 transition-all duration-500"
          >
            <a href="#about">Saiba Mais</a>
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
