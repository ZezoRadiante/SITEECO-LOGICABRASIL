
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure scroll works correctly
document.addEventListener('DOMContentLoaded', () => {
  // Enable scroll on body and html
  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = 'auto';
  
  // Remove any height limitations
  document.body.style.height = 'auto';
  document.documentElement.style.height = 'auto';
  
  // Force content to be visible
  setTimeout(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.style.opacity = '1';
      rootElement.style.display = 'block';
    }
    
    // Check if scroll is working
    console.log('Document height:', document.body.scrollHeight, 'Window height:', window.innerHeight);
  }, 500);
});

createRoot(document.getElementById("root")!).render(<App />);
