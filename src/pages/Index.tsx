
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    // Initialize any carousel indicators (document will be available after component mounts)
    const updateIndicators = () => {
      const activeSlide = document.querySelector('[data-embla-slide-active="true"]');
      if (activeSlide) {
        const index = parseInt(activeSlide.getAttribute('data-index') || '0');
        const indicators = document.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, i) => {
          if (i === index) {
            indicator.setAttribute('data-active', 'true');
          } else {
            indicator.setAttribute('data-active', 'false');
          }
        });
      }
    };
    
    // Add event listener for carousel changes
    const carouselElement = document.querySelector('[data-embla-container]');
    if (carouselElement) {
      carouselElement.addEventListener('emblaChange', updateIndicators);
    }
    
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('emblaChange', updateIndicators);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Banner />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
