
import React from 'react';
import LogoSvg from '../assets/logo.svg';

const Logo = ({
  className = "",
  size = 32
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <img 
      src={LogoSvg} 
      width={size * 3} 
      height={size} 
      alt="Eco-logica Brasil" 
      className={`h-[${size}px] w-auto object-contain ${className}`} 
    />
  );
};

export default Logo;
