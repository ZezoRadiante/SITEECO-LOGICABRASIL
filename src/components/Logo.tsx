
import React from 'react';

const Logo = ({
  className = "",
  size = 24
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <div className={className}>
      <svg width={size} height={size} viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10C26.0751 10 31 14.9249 31 21C31 27.0751 26.0751 32 20 32C13.9249 32 9 27.0751 9 21C9 14.9249 13.9249 10 20 10Z" fill="#71B707"/>
        <path d="M35 15H90V18H35V15Z" fill="#71B707"/>
        <path d="M35 21H80V24H35V21Z" fill="#71B707"/>
        <path d="M35 27H70V30H35V27Z" fill="#71B707"/>
      </svg>
      <span className="text-eco-900 font-bold text-xl ml-2">eco-logica</span>
    </div>
  );
};

export default Logo;
