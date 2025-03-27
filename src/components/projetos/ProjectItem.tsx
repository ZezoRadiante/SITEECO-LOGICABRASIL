
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
        "min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[60%] md:basis-[40%] lg:basis-[30%] px-3 transition-all duration-700",
        distance === 0 
          ? "scale-100 z-20 opacity-100" 
          : distance === 1 
            ? "scale-95 z-10 opacity-85" 
            : "scale-90 opacity-70"
      )}
    >
      <div className={cn(
        "overflow-hidden rounded-2xl transition-all duration-500 relative group",
        distance === 0 
          ? "h-80 md:h-96 shadow-xl ring-2 ring-eco-500" 
          : "h-64 md:h-80 shadow-md"
      )}>
        <img 
          src={project.src} 
          alt={`Projeto ${project.title}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            console.error(`Error loading image: ${project.src}`);
            e.currentTarget.src = '/placeholder.svg'; // Fallback to placeholder
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="block w-10 h-1 bg-eco-400 mb-3 rounded"></span>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-sm md:text-base text-white/90 mb-2">{project.description}</p>
            <p className="text-lg md:text-xl font-semibold text-eco-300">{project.stats}</p>
          </div>
        </div>

        {/* Caption visible by default, hides on hover */}
        <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-4 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
