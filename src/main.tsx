
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/animations.css';

// Ensure scroll works correctly
document.addEventListener('DOMContentLoaded', () => {
  // Enable scroll on body
  document.body.style.overflow = 'auto';
  
  // Check if scroll is working
  setTimeout(() => {
    if (window.scrollY === 0 && document.body.scrollHeight > window.innerHeight) {
      console.log('Document height:', document.body.scrollHeight, 'Window height:', window.innerHeight);
    }
  }, 1000);
});

createRoot(document.getElementById("root")!).render(<App />);
