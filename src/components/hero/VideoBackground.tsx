
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
  const loadAttemptRef = useRef(0);

  useEffect(() => {
    // Preload the fallback image in case we need it
    const preloadFallbackImage = new Image();
    preloadFallbackImage.src = fallbackImage;
    
    const videoElement = videoRef.current;
    
    const handleVideoSuccess = () => {
      console.log(`Video loaded successfully from path: ${videoElement?.src}`);
      setIsLoaded(true);
      setShowFallback(false);
      onMediaLoaded();
    };
    
    // Lista de possíveis caminhos para o vídeo em diferentes ambientes
    const possibleVideoPaths = [
      videoSrc,
      './background-nature.mp4',
      '/background-nature.mp4',
      'background-nature.mp4',
      '/public/background-nature.mp4',
      'https://storage.googleapis.com/lovable-static/background-nature.mp4',
    ];
    
    if (!videoElement) {
      console.warn("Video element not available, triggering fallback");
      setShowFallback(true);
      setIsLoaded(true);
      onMediaLoaded();
      return;
    }
    
    // Better error tracking
    const handleVideoError = (e: Event) => {
      const currentAttempt = loadAttemptRef.current;
      console.error(`Video failed to load attempt ${currentAttempt + 1}/${possibleVideoPaths.length} from path: ${videoElement?.src}`, e);
      
      // Try next path or fallback to image
      if (currentAttempt < possibleVideoPaths.length - 1) {
        loadAttemptRef.current += 1;
        const nextPath = possibleVideoPaths[loadAttemptRef.current];
        console.log(`Trying next video path: ${nextPath}`);
        
        // Remove and add event listeners to ensure they're fresh
        cleanupEventListeners();
        addEventListeners();
        
        // Set new source and load
        videoElement.src = nextPath;
        
        // Use low quality first to get faster initial load
        videoElement.preload = "auto";
        videoElement.load();
      } else {
        console.warn("All video paths failed, using fallback image");
        setShowFallback(true);
        setIsLoaded(true);
        onMediaLoaded();
      }
    };
    
    // Create a single function to add event listeners
    const addEventListeners = () => {
      videoElement.addEventListener('loadeddata', handleVideoSuccess, { once: true });
      videoElement.addEventListener('canplaythrough', handleVideoSuccess, { once: true });
      videoElement.addEventListener('error', handleVideoError, { once: true });
    };
    
    // Create a single function to remove event listeners
    const cleanupEventListeners = () => {
      videoElement.removeEventListener('loadeddata', handleVideoSuccess);
      videoElement.removeEventListener('canplaythrough', handleVideoSuccess);
      videoElement.removeEventListener('error', handleVideoError);
    };
    
    // Setup initial event listeners
    addEventListeners();
    
    // Start with the first path
    videoElement.src = possibleVideoPaths[0];
    videoElement.preload = "auto";
    videoElement.load();
    
    // Fallback timeout - shorter than before for better UX
    const timeoutId = setTimeout(() => {
      if (!isLoaded) {
        console.warn("Video load timeout after 3 seconds, using fallback");
        setShowFallback(true);
        setIsLoaded(true);
        onMediaLoaded();
      }
    }, 3000);
    
    return () => {
      cleanupEventListeners();
      clearTimeout(timeoutId);
    };
  }, [videoSrc, fallbackImage, onMediaLoaded, isLoaded]);

  return (
    <div className="absolute inset-0">
      {showFallback ? (
        // Fallback image with improved error handling
        <div className={cn(
          "absolute inset-0 w-full h-full z-0 transition-opacity duration-1000",
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}>
          <img 
            src={fallbackImage}
            alt="Background" 
            className="w-full h-full object-cover"
            onLoad={() => {
              console.log("Fallback image loaded successfully");
              setIsLoaded(true);
              onMediaLoaded();
            }}
            onError={(e) => {
              console.error("Fallback image failed to load, trying alternative path");
              // Try a more reliable fallback path
              (e.target as HTMLImageElement).src = "./lovable-uploads/5b48fe05-0bbc-4168-b053-956b46e28792.jpg";
            }}
          />
        </div>
      ) : (
        // Video background with improved loading attributes
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
          poster={fallbackImage} // Use fallback as poster for better perceived performance
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
