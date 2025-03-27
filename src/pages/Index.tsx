
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Solucoes from '@/components/Services';
import Projetos from '@/components/Projetos';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Loading } from '@/components/ui/loading';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);

  // Improved loading management with shorter timeout
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      if (isLoading) {
        console.log("Forcing content display after timeout");
        setIsLoading(false);
        setContentReady(true);
      }
    }, 4000); // Increased timeout to give more time for video loading in production
    
    return () => clearTimeout(loadingTimeout);
  }, [isLoading]);

  // Handle video load event from Hero component
  const handleContentLoaded = () => {
    console.log("Content loaded successfully");
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      setIsLoading(false);
      setContentReady(true);
    }, 300);
  };

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    // Only set up observers after loading is complete
    if (!isLoading && contentReady) {
      // Enhanced intersection observer with better options
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add visible class to trigger animation
              entry.target.classList.add('visible');
              
              // For sections, add an attribute to track active section
              if (entry.target.tagName.toLowerCase() === 'section') {
                const sectionId = entry.target.id;
                if (sectionId) {
                  document.body.setAttribute('data-active-section', sectionId);
                }
              }
            }
          });
        },
        { 
          threshold: 0.15,
          rootMargin: '-80px 0px -20% 0px'
        }
      );
      
      // Observe all elements with the animate-on-scroll class
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
      
      // Observe all sections for active state tracking
      document.querySelectorAll('section').forEach(el => {
        observer.observe(el);
      });
      
      return () => {
        // Cleanup observer
        document.querySelectorAll('.animate-on-scroll, section').forEach(el => {
          observer.unobserve(el);
        });
      };
    }
  }, [isLoading, contentReady]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-700">
          <Loading 
            size="lg" 
            variant="eco" 
            text="Carregando experiência sustentável..."
            className="scale-110 transform animate-pulse-gentle"
          />
        </div>
      )}
      
      {/* Background pattern using the new image with very low opacity */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{ 
          backgroundImage: `url('/lovable-uploads/7002d398-a9f7-424a-a14e-12c232731bc1.png')`,
          backgroundSize: '20%',
          backgroundRepeat: 'repeat',
          backgroundBlendMode: 'soft-light',
          filter: 'blur(0.5px)'
        }}
      ></div>
      
      <div 
        ref={sectionsRef}
        className={`min-h-screen transition-all duration-1000 ${!contentReady ? 'opacity-0' : 'opacity-100'}`}
      >
        <Navbar />
        <Hero onVideoLoaded={handleContentLoaded} />
        <Banner />
        <About />
        <Solucoes />
        <Projetos />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
