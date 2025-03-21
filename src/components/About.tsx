
import React from 'react';
import { Clover, CheckCircle2 } from 'lucide-react';

const About = () => {
  const values = [
    "Ecological Integrity",
    "Sustainability Leadership",
    "Innovation & Expertise",
    "Client Partnership"
  ];

  return (
    <section id="about" className="py-24 bg-secondary/70 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute -left-16 top-1/3 opacity-10">
        <Clover size={300} className="text-eco-600 transform rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-eco-600 bg-eco-50 px-3 py-1 rounded-full text-sm font-medium mb-4 opacity-0 animate-fade-in-right">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in-right" style={{ animationDelay: '0.1s' }}>
              Committed to Environmental Excellence
            </h2>
            
            <p className="text-foreground/70 mb-8 opacity-0 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
              Founded on the principles of ecological stewardship and sustainable development, our team of environmental specialists brings decades of combined expertise to every project. We believe that environmental responsibility and business success can—and should—go hand in hand.
            </p>
            
            <div className="space-y-4 mb-8 opacity-0 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
              {values.map((value, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="text-eco-600 mr-3 flex-shrink-0" />
                  <span>{value}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 border border-eco-600 text-eco-600 rounded-full font-medium hover:bg-eco-600/10 transition-all duration-300 opacity-0 animate-fade-in-right"
              style={{ animationDelay: '0.4s' }}
            >
              Learn More
            </a>
          </div>

          <div className="order-1 lg:order-2 opacity-0 animate-fade-in-left">
            <div className="relative">
              <div className="w-full h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80" 
                  alt="Beautiful natural landscape" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-lg p-4 max-w-xs shadow-lg">
                <div className="flex items-center mb-2">
                  <Clover size={20} className="text-eco-600 mr-2" />
                  <h4 className="font-semibold">Our Mission</h4>
                </div>
                <p className="text-sm text-foreground/70">
                  To drive positive environmental change through innovative solutions and education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
