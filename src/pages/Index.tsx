
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
    
    // Force content to display after a maximum timeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setVideoLoaded(true);
      setContentReady(true);
    }, 2000); // Reduced to 2 seconds
    
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
      }, 100); // Reduced delay
      
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
    
    // Observe elements regardless of loading state to ensure animations work
    if (document.querySelectorAll('.animate-on-scroll').length > 0) {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
      
      return () => {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
          observer.unobserve(el);
        });
      };
    }
  }, [contentReady]); // Changed to depend on contentReady

  const handleVideoLoaded = () => {
    if (loadTimeout) clearTimeout(loadTimeout);
    setVideoLoaded(true);
    
    // Don't immediately hide loading screen to ensure smooth transition
    setTimeout(() => {
      setIsLoading(false);
      setContentReady(true); // Ensure content becomes visible
    }, 300);
  };

  // Force render content after 3 seconds even if loading states aren't resolved
  useEffect(() => {
    const forceRender = setTimeout(() => {
      setIsLoading(false);
      setVideoLoaded(true);
      setContentReady(true);
    }, 3000);
    
    return () => clearTimeout(forceRender);
  }, []);

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
      
      <div className={`min-h-screen w-full overflow-auto transition-all duration-1000 ${!isLoading ? 'opacity-100' : 'opacity-0'}`}>
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
