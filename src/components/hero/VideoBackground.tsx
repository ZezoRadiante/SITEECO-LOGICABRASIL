
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImage: string;
  onMediaLoaded: () => void;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  fallbackImage,
  onMediaLoaded
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    const handleLoadedData = () => {
      console.log("Video loaded successfully");
      setIsLoaded(true);
      setShowFallback(false);
      onMediaLoaded();
    };
    
    // Lista de possíveis caminhos para o vídeo em diferentes ambientes
    const possibleVideoPaths = [
      videoSrc,
      './background-nature.mp4',
      '/background-nature.mp4',
      'background-nature.mp4'
    ];
    
    let currentPathIndex = 0;
    let videoLoaded = false;
    
    const tryNextVideoPath = () => {
      if (!videoElement || videoLoaded || currentPathIndex >= possibleVideoPaths.length) {
        // Se todas as tentativas falharam, mostrar imagem fallback
        if (!videoLoaded) {
          console.warn("Video loading failed for all paths, using fallback image");
          setShowFallback(true);
          setIsLoaded(true);
          onMediaLoaded();
        }
        return;
      }
      
      const path = possibleVideoPaths[currentPathIndex];
      console.log(`Trying to load video from path: ${path}`);
      
      videoElement.src = path;
      
      // Removendo qualquer listener anterior antes de adicionar um novo
      videoElement.removeEventListener('loadeddata', handleVideoSuccess);
      videoElement.removeEventListener('error', handleVideoError);
      
      // Adicionando novos listeners
      videoElement.addEventListener('loadeddata', handleVideoSuccess, { once: true });
      videoElement.addEventListener('error', handleVideoError, { once: true });
      
      // Tentar carregar explicitamente
      videoElement.load();
      
      currentPathIndex++;
    };
    
    const handleVideoSuccess = () => {
      console.log(`Video loaded successfully from path: ${videoElement?.src}`);
      videoLoaded = true;
      handleLoadedData();
    };
    
    const handleVideoError = (e: Event) => {
      console.error(`Video failed to load from path: ${videoElement?.src}`, e);
      // Tentar o próximo caminho
      tryNextVideoPath();
    };
    
    if (videoElement) {
      // Iniciar o processo de tentativas
      tryNextVideoPath();
      
      // Fallback com timeout (caso nenhuma tentativa dispare evento)
      const timeoutId = setTimeout(() => {
        if (!videoLoaded) {
          console.warn("Video load timeout after 5 seconds, using fallback");
          setShowFallback(true);
          setIsLoaded(true);
          onMediaLoaded();
        }
      }, 5000);
      
      return () => {
        // Limpar listeners e timeout ao desmontar
        videoElement.removeEventListener('loadeddata', handleVideoSuccess);
        videoElement.removeEventListener('error', handleVideoError);
        clearTimeout(timeoutId);
      };
    } else {
      // Se o elemento de vídeo não estiver disponível
      console.warn("Video element not available, triggering fallback");
      setShowFallback(true);
      setIsLoaded(true);
      onMediaLoaded();
    }
  }, [videoSrc, fallbackImage, onMediaLoaded]);

  return (
    <div className="absolute inset-0">
      {showFallback ? (
        // Fallback image when video fails to load
        <div className={cn(
          "absolute inset-0 w-full h-full z-0 transition-opacity duration-1000",
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}>
          <img 
            src={fallbackImage}
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
            isLoaded ? 'opacity-100' : 'opacity-0'
          )} 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
          style={{ objectFit: 'cover' }}
        >
          Your browser does not support the video tag.
        </video>
      )}
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-eco-700/60 via-eco-600/30 to-transparent z-10 transition-all duration-1000"></div>
    </div>
  );
};

export default VideoBackground;
