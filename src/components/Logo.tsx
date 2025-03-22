
import React from 'react';

// Quando você tiver o seu próprio SVG, pode importá-lo aqui e usá-lo no lugar do SVG atual
// import CustomLogoSVG from '../assets/logo.svg';

const Logo = ({ className = "", size = 24 }: { className?: string; size?: number }) => {
  // Se você tiver um arquivo SVG personalizado:
  // return <img src={CustomLogoSVG} width={size} height={size} className={className} alt="Eco-logica Brasil" />;
  
  // SVG temporário até que você forneça o seu próprio logo
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M24 4C18.5 4 14 8.5 14 14C14 14.5 14 15 14.1 15.5C11.1 17 9 20.3 9 24C9 29.5 13.5 34 19 34C19.5 34 20 34 20.5 33.9C22 36.9 25.3 39 29 39C34.5 39 39 34.5 39 29C39 28.5 39 28 38.9 27.5C41.9 26 44 22.7 44 19C44 13.5 39.5 9 34 9C33.5 9 33 9 32.5 9.1C31 6.1 27.7 4 24 4Z" 
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="M24 18C26.2091 18 28 16.2091 28 14C28 11.7909 26.2091 10 24 10C21.7909 10 20 11.7909 20 14C20 16.2091 21.7909 18 24 18Z" 
        fill="none" 
        stroke="white"
        strokeWidth="2"
      />
      <path 
        d="M34 28C36.2091 28 38 26.2091 38 24C38 21.7909 36.2091 20 34 20C31.7909 20 30 21.7909 30 24C30 26.2091 31.7909 28 34 28Z" 
        fill="none" 
        stroke="white"
        strokeWidth="2"
      />
      <path 
        d="M24 38C26.2091 38 28 36.2091 28 34C28 31.7909 26.2091 30 24 30C21.7909 30 20 31.7909 20 34C20 36.2091 21.7909 38 24 38Z" 
        fill="none" 
        stroke="white"
        strokeWidth="2"
      />
      <path 
        d="M14 28C16.2091 28 18 26.2091 18 24C18 21.7909 16.2091 20 14 20C11.7909 20 10 21.7909 10 24C10 26.2091 11.7909 28 14 28Z" 
        fill="none" 
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Logo;
