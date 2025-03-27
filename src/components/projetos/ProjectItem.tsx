
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectItemProps {
  project: {
    src: string;
    title: string;
    description: string;
    stats: string;
  };
  distance: number;
  isActive: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, distance, isActive }) => {
  const [imageError, setImageError] = useState(false);
  
  // Fallback images from public folder
  const fallbackImage = '/placeholder.svg';
  
  return (
    <div 
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[60%] md:basis-[42%] lg:basis-[32%] px-3 transition-all duration-700",
        isActive 
          ? "scale-100 z-20 opacity-100" 
          : distance === 1 
            ? "scale-95 z-10 opacity-85" 
            : "scale-90 opacity-70"
      )}
    >
      <div className={cn(
        "overflow-hidden rounded-3xl transition-all duration-500 relative group",
        isActive 
          ? "h-[450px] md:h-[500px] shadow-xl ring-2 ring-eco-600" 
          : "h-[400px] md:h-[450px] shadow-md"
      )}>
        <img 
          src={imageError ? fallbackImage : project.src} 
          alt={`Projeto ${project.title}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            console.error(`Error loading image: ${project.src}`);
            setImageError(true);
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/40 to-transparent opacity-100 transition-opacity duration-300">
          {/* Text content container */}
          <div className="absolute bottom-0 left-0 w-full p-6 text-left">
            {/* Heading and stats */}
            <div className="space-y-2 mb-2">
              <h3 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h3>
              <div className="w-20 h-1.5 bg-eco-400 rounded-full mb-3"></div>
              <p className="text-md text-white/80 font-light">{project.description}</p>
              <p className="text-2xl md:text-3xl font-semibold text-eco-300 mt-2">{project.stats}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
