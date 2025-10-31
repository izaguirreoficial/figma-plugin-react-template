import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const init = () => {
  const container = document.getElementById('react-page');
  if (!container) return;
  const root = createRoot(container as HTMLElement);
  root.render(<App />);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  // In environments like Figma, scripts may be executed after DOM is already ready
  init();
}
