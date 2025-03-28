
import React, { useEffect, useRef, useState } from 'react';

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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Erro ao reproduzir vídeo:", error);
        setUseFallback(true);
      });
    }
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    onMediaLoaded();
  };

  const handleImageLoaded = () => {
    onMediaLoaded();
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {!useFallback ? (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          id="hero-background-video"
          onLoadedData={handleVideoLoaded}
          onError={() => setUseFallback(true)}
        >
          <source src={videoSrc} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      ) : (
        <img 
          src={fallbackImage} 
          alt="Background Nature" 
          className="absolute top-0 left-0 w-full h-full object-cover"
          onLoad={handleImageLoaded}
        />
      )}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
    </div>
  );
};

export default VideoBackground;
