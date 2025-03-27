
import React from 'react';
import ProjectsHeader from './ProjectsHeader';
import ProjectCarousel from './ProjectCarousel';
import ProjectsDecorations from './ProjectsDecorations';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projetos" className="py-24 overflow-hidden relative bg-gradient-to-b from-eco-50/40 via-eco-100/30 to-eco-200/20">
      <ProjectsDecorations />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ProjectsHeader />
      </div>

      {/* Full width carousel */}
      <ProjectCarousel />
    </section>
  );
};

export default ProjectsSection;
