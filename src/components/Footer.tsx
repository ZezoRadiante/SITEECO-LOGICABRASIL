
import React from 'react';
import { Clover, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background/90 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background to-transparent"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 text-background font-medium mb-6">
              <Clover size={24} className="text-eco-400" />
              <span className="text-xl font-semibold tracking-tight">EcoConsult</span>
            </div>
            <p className="text-background/70 mb-6">
              Providing sustainable environmental solutions with integrity and expertise for a greener tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-eco-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-eco-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-eco-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-eco-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-background/70 hover:text-eco-400 transition-colors duration-300">
                  Environmental Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-eco-400 transition-colors duration-300">
                  Waste Management
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-eco-400 transition-colors duration-300">
                  Environmental Education
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-eco-400 transition-colors duration-300">
                  Sustainability Planning
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-background/70 hover:text-eco-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-eco-400 transition-colors duration-300">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-eco-400 transition-colors duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-eco-400 transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-eco-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-background/70">123 Eco Drive, Green City, EC 12345</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-eco-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-background/70">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-eco-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-background/70">info@ecoconsult.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © {currentYear} EcoConsult. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-background/70 hover:text-eco-400 transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-background/70 hover:text-eco-400 transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
