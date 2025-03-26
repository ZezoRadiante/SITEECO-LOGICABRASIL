
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/animations.css';

// Garantir que o scroll funcione corretamente
document.addEventListener('DOMContentLoaded', () => {
  // Verificar se a página está sendo bloqueada
  setTimeout(() => {
    if (window.scrollY === 0 && document.body.scrollHeight > window.innerHeight) {
      console.log('Scroll está disponível, altura do documento:', document.body.scrollHeight);
    }
  }, 1000);
});

createRoot(document.getElementById("root")!).render(<App />);
