
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
    const startValue = 0; // Always start from zero for slot machine effect
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easeOutExpo for a nice slot machine effect
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const nextValue = Math.floor(startValue + easeProgress * (end - startValue));
      
      setCount(nextValue);
      
      // Generate the slot machine effect with digits
      if (end > 0) {
        const currentDigits = nextValue.toString().split('');
        const endDigits = end.toString().split('');
        
        // Pad with zeros if needed to match target length
        while (currentDigits.length < endDigits.length) {
          currentDigits.unshift('0');
        }
        
        // Create digit carousel for each position
        const slotDigits = currentDigits.map((digit, index) => {
          // For complete animation, just return the digit
          if (progress === 1) {
            return digit;
          }
          
          // For slot machine effect, create a small window of visible digits
          const currentDigitValue = parseInt(digit);
          const prevDigit = (currentDigitValue === 0) ? '9' : (currentDigitValue - 1).toString();
          const nextDigit = (currentDigitValue === 9) ? '0' : (currentDigitValue + 1).toString();
          
          return `${prevDigit}|${digit}|${nextDigit}`;
        });
        
        setDigits(slotDigits);
      }
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        // Ensure we end at the exact target value
        setCount(end);
        setDigits(end.toString().split(''));
        frameRef.current = null;
      }
    };
    
    frameRef.current = requestAnimationFrame(step);
    
    // Cleanup function
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration]);

  return { count, digits };
};
