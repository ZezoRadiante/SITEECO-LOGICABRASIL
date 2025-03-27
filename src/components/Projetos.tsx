
import React from 'react';
import ProjectsHeader from './projetos/ProjectsHeader';
import ProjectCarousel from './projetos/ProjectCarousel';

const Projetos: React.FC = () => {
  return (
    <section id="projetos" className="py-24 overflow-hidden relative bg-gradient-to-b from-eco-50/40 via-eco-100/30 to-eco-200/20">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-eco-100/50 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ProjectsHeader />
      </div>

      {/* Full width carousel */}
      <ProjectCarousel />
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-sky-50/40 to-transparent"></div>
    </section>
  );
};

export default Projetos;
