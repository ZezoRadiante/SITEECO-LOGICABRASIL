
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Services from '@/components/Services';
import Projetos from '@/components/Projetos';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Loading } from '@/components/ui/loading';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [loadTimeout, setLoadTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    // Set a timeout to ensure loading doesn't hang forever
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setVideoLoaded(true);
    }, 3000); // Reduzido para 3 segundos para evitar espera longa
    
    setLoadTimeout(timeout);
    
    return () => {
      if (loadTimeout) clearTimeout(loadTimeout);
    };
  }, []);

  useEffect(() => {
    // Prepare to show content after video is loaded and minimum loading time has passed
    if (videoLoaded && !isLoading) {
      // Add a small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setContentReady(true);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [videoLoaded, isLoading]);

  useEffect(() => {
    // Initialize intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Only observe elements after loading is complete
    if (!isLoading) {
      // Observe all elements with the animate-on-scroll class
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
      
      return () => {
        // Cleanup observer
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
          observer.unobserve(el);
        });
      };
    }
  }, [isLoading]);

  const handleVideoLoaded = () => {
    if (loadTimeout) clearTimeout(loadTimeout);
    setVideoLoaded(true);
    
    // Don't immediately hide loading screen to ensure smooth transition
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500">
          <Loading 
            size="lg" 
            variant="eco" 
            text="Carregando experiência sustentável..."
            className="scale-110 transform"
          />
        </div>
      )}
      
      <div className={`min-h-screen w-full overflow-auto transition-all duration-1000 ${contentReady ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <Hero onVideoLoaded={handleVideoLoaded} />
        <Banner />
        <About />
        <Services />
        <Projetos />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
