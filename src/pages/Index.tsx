
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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);

  // Fallback timer to prevent infinite loading screen
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      if (isLoading) {
        console.warn("Forcing content display after timeout");
        setIsLoading(false);
        setVideoLoaded(true);
        setContentReady(true);
      }
    }, 5000);
    
    return () => clearTimeout(loadingTimeout);
  }, [isLoading]);

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    // Prepare to show content after video is loaded and minimum loading time has passed
    if (videoLoaded) {
      // Add a small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [videoLoaded]);

  useEffect(() => {
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
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '-80px 0px -20% 0px' // Adjust trigger area
      }
    );
    
    // Only observe elements after loading is complete
    if (!isLoading) {
      // Observe all elements with the animate-on-scroll class
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
      
      // Observe all sections for active state tracking
      document.querySelectorAll('section').forEach(el => {
        observer.observe(el);
      });
      
      // Set content ready with a small delay for smoother transition
      const timer = setTimeout(() => {
        setContentReady(true);
      }, 100);
      
      return () => {
        clearTimeout(timer);
        // Cleanup observer
        document.querySelectorAll('.animate-on-scroll, section').forEach(el => {
          observer.unobserve(el);
        });
      };
    }
  }, [isLoading]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

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
        className={`min-h-screen transition-all duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        <Navbar />
        <Hero onVideoLoaded={handleVideoLoaded} />
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
