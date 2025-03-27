
import React from 'react';
import ProjectsHeader from './projetos/ProjectsHeader';
import ProjectCarousel from './projetos/ProjectCarousel';

const Projetos: React.FC = () => {
  return (
    <section id="projetos" className="py-24 overflow-hidden relative bg-gradient-to-b from-eco-50/40 via-eco-100/30 to-eco-200/20">
      {/* Top decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-eco-100/50 to-transparent z-10"></div>
      <div className="absolute top-10 left-10 w-24 h-24 bg-eco-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-eco-300/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ProjectsHeader />
      </div>

      {/* Full width carousel */}
      <ProjectCarousel />
      
      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-sky-50/40 to-transparent"></div>
      <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-eco-100/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Projetos;
