import React from 'react';
import LogoSvg from '../assets/logo.svg';
const Logo = ({
  className = "",
  size = 24
}: {
  className?: string;
  size?: number;
}) => {
  return <img src={LogoSvg} width={size} height={size} alt="Eco-logica Brasil" className="h-[100px] w-[500px]" />;
};
export default Logo;