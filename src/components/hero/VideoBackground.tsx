
import React, { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  onMediaLoaded: () => void;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoSrc, 
  onMediaLoaded 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    onMediaLoaded();
  };

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
        onLoadedData={handleVideoLoaded}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support HTML5 videos.
      </video>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
    </div>
  );
};

export default VideoBackground;
