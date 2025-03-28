
import React, { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  videoSrc?: string;
  fallbackImage?: string;
  onMediaLoaded?: () => void;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoSrc = "/background-nature.mp4",
  fallbackImage,
  onMediaLoaded
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Erro ao reproduzir vídeo:", error);
      });
      
      // Call onMediaLoaded when video can play
      videoRef.current.addEventListener('canplaythrough', () => {
        if (onMediaLoaded) onMediaLoaded();
      }, { once: true });
    }
  }, [onMediaLoaded]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        id="hero-background-video"
      >
        <source src={videoSrc} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
    </div>
  );
};

export default VideoBackground;
