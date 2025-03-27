
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { fallbackImages } from '@/data/projectData';

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
          ? "h-[500px] md:h-[550px] shadow-xl ring-2 ring-eco-600" 
          : "h-[450px] md:h-[500px] shadow-md"
      )}>
        <img 
          src={imageError ? fallbackImages.default : project.src} 
          alt={`Projeto ${project.title}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={() => setImageError(true)}
        />
      </div>
    </div>
  );
};

export default ProjectItem;
