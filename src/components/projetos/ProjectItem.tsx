
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectItemProps {
  project: {
    src: string;
    title: string;
    description: string;
    stats: string;
  };
  distance: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, distance }) => {
  return (
    <div 
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[60%] md:basis-[50%] lg:basis-[35%] px-3 transition-all duration-700",
        distance === 0 
          ? "scale-110 z-20 opacity-100" 
          : distance === 1 
            ? "scale-95 z-10 opacity-90" 
            : "scale-90 opacity-70"
      )}
    >
      <div className={cn(
        "overflow-hidden rounded-lg border-2 transition-all duration-500 relative",
        distance === 0 
          ? "h-72 md:h-96 border-eco-500" 
          : "h-60 md:h-80 border-eco-200"
      )}>
        <img 
          src={project.src} 
          alt={`Projeto ${project.title}`} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          onError={(e) => {
            console.error(`Error loading image: ${project.src}`);
            e.currentTarget.src = '/placeholder.svg'; // Fallback to placeholder
          }}
        />
        
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-1 text-white">{project.title}</h3>
          <p className="text-sm md:text-base text-white/90">{project.description}</p>
          <p className="text-lg md:text-xl font-semibold text-eco-300">{project.stats}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
