
import React from 'react';
import LogoSvg from '../assets/logo.svg';
import { cn } from '@/lib/utils';

const Logo = ({
  className = "",
  size = 24
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <div className="flex items-center">
      <img 
        src={LogoSvg} 
        width={size} 
        height={size} 
        alt="Eco-logica Brasil" 
        className={cn("h-10 w-10", className)} 
      />
      <span className="ml-2 text-eco-700 font-bold">eco-lógica</span>
    </div>
  );
};

export default Logo;
