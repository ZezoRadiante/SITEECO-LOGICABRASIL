
import React from 'react';
import LogoSvg from '../assets/logo.svg';

const Logo = ({ className = "", size = 24 }: { className?: string; size?: number }) => {
  return (
    <img 
      src={LogoSvg} 
      width={size} 
      height={size} 
      className={className} 
      alt="Eco-logica Brasil" 
    />
  );
};

export default Logo;
