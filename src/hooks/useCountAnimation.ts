
import { useState, useEffect, useRef } from 'react';

export const useCountAnimation = (end: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset the count if end changes to zero
    if (end === 0) {
      setCount(0);
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
      
      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(step);
      } else {
        // Ensure we end exactly at the target value
        setCount(end);
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

  return count;
};
