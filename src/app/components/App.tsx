import React, { useState } from 'react';
import IconPromptGenerator from './IconPromptGenerator';
import YapitoPromptGenerator from './YapitoPromptGenerator';
import Home from './Home';
import '../styles/ui.css';

function App() {
  const [view, setView] = useState<'home' | 'icons' | 'images' | 'yapito'>('home');

  return (
    <div className="app">
      {view === 'home' && (
        <Home onSelect={(key) => setView(key)} />
      )}

      {view === 'icons' && (
        <IconPromptGenerator onNavigate={(v) => setView(v)} />
      )}

      {view === 'images' && (
        <div className="placeholder">
          <h2>Generación de Imágenes</h2>
          <p>Próximamente…</p>
          <button className="btn" onClick={() => setView('home')}>Volver</button>
        </div>
      )}

      {view === 'yapito' && (
        <YapitoPromptGenerator onNavigate={(v) => setView(v)} />
      )}
    </div>
  );
}

export default App;
