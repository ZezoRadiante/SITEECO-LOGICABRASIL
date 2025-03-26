
import { useState, useEffect, useRef } from 'react';

export const useCountAnimation = (end: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);
  const [digits, setDigits] = useState<string[]>([]);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset the count if end changes to zero
    if (end === 0) {
      setCount(0);
      setDigits([]);
      return;
    }
    
    // Cancel any existing animation
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }
    
    let startTimestamp: number | null = null;
    const startValue = count; // Start from current count for smoother transitions
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easeOutQuint for a nice acceleration curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = startValue + Math.floor(easeProgress * (end - startValue));
      
      setCount(nextValue);
      
      // Generate the carousel effect digits
      if (end > 0) {
        const endDigits = end.toString().split('');
        const currentDigits = nextValue.toString().split('');
        
        // Calculate how many leading zeros we need
        const paddingLength = endDigits.length - currentDigits.length;
        const paddedCurrentDigits = paddingLength > 0 
          ? [...Array(paddingLength).fill('0'), ...currentDigits]
          : currentDigits;
        
        // For each digit position, create a small carousel of digits
        const digitCarousels = paddedCurrentDigits.map((digit, index) => {
          const digitValue = parseInt(digit);
          const targetDigit = parseInt(endDigits[index] || '0');
          
          // For carousel effect - show 3 digits for each position (previous, current, next)
          // If we're at the final value, just show the current digit
          if (progress === 1) {
            return digit;
          } else {
            // Create a "window" of 3 visible digits for the carousel effect
            const prevDigit = (digitValue === 0) ? '9' : (digitValue - 1).toString();
            const nextDigit = (digitValue === 9) ? '0' : (digitValue + 1).toString();
            return `${prevDigit}|${digit}|${nextDigit}`;
          }
        });
        
        setDigits(digitCarousels);
      }
      
      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(step);
      } else {
        // Ensure we end exactly at the target value
        setCount(end);
        setDigits(end.toString().split(''));
        frameRef.current = null;
      }
    };
    
    frameRef.current = window.requestAnimationFrame(step);
    
    // Cleanup function to cancel animation when component unmounts or values change
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration]);

  return { count, digits };
};

