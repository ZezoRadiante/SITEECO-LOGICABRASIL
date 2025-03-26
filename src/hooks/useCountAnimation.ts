
import { useState, useEffect, useRef } from 'react';

export const useCountAnimation = (end: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);
  const [displayValue, setDisplayValue] = useState<number[]>([]);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset the count if end changes to zero
    if (end === 0) {
      setCount(0);
      setDisplayValue([]);
      return;
    }
    
    // Cancel any existing animation
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }
    
    let startTimestamp: number | null = null;
    const startValue = count;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easeOutQuint for a nice acceleration curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = startValue + Math.floor(easeProgress * (end - startValue));
      
      setCount(nextValue);
      
      // Generate display values for carousel effect
      const currentStr = nextValue.toString();
      const values = Array.from({ length: 3 }, (_, i) => {
        const offset = i - 1;
        return Math.max(0, parseInt(currentStr) + offset);
      });
      setDisplayValue(values);
      
      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(step);
      } else {
        setCount(end);
        setDisplayValue([end]);
        frameRef.current = null;
      }
    };
    
    frameRef.current = window.requestAnimationFrame(step);
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration]);

  return { count, displayValue };
};
