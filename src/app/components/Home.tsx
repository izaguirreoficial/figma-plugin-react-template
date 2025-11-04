import React from 'react';
import { ImageIcon, StarIcon, PersonIcon } from './icons';

interface HomeProps {
  onSelect: (key: 'images' | 'icons' | 'yapito' | 'iconGen' | 'guides') => void;
}

const Home: React.FC<HomeProps> = ({ onSelect }) => {
  return (
    <div className="home">
      {/* Sección Generador */}
      <section className="home-section">
        <header className="home-header">
          <h2 className="home-title">Generador</h2>
          <p className="home-subtitle">Elige qué quieres crear hoy</p>
        </header>
        <div className="home-grid one-column">
          <button className="home-card" onClick={() => onSelect('iconGen')}>
            <div className="home-card-thumb"><StarIcon size={24} /></div>
            <div className="home-card-title">Generador de Iconos</div>
          </button>
+        <div className="home-grid one-column">
+          <button className="home-card" onClick={() => onSelect('iconGen')}>
+            <div className="home-card-thumb"><StarIcon size={24} /></div>
+            <div className="home-card-title">Generador de Iconos</div>
+          </button>
+          <button className="home-card" onClick={() => onSelect('images')}>
+            <div className="home-card-thumb"><ImageIcon size={24} /></div>
+            <div className="home-card-title">Generar Ilustraciones</div>
+          </button>
+          <button className="home-card" onClick={() => onSelect('yapito')}>
+            <div className="home-card-thumb"><PersonIcon size={24} /></div>
+            <div className="home-card-title">Generar Yapito</div>
+          </button>
        </div>
      </section>

      {/* Sección Prompt Builder */}
      <section className="home-section">
        <header className="home-header">
          <h2 className="home-title">Prompt Builder</h2>
          <p className="home-subtitle">Escoge la plantilla para generar imágenes</p>
        </header>
        <div className="home-grid one-column">
          <button className="home-card" onClick={() => onSelect('icons')}>
            <div className="home-card-thumb"><StarIcon size={24} /></div>
            <div className="home-card-title">Prompt para Iconos</div>
          </button>
          <button className="home-card" onClick={() => onSelect('images')}>
            <div className="home-card-thumb"><ImageIcon size={24} /></div>
            <div className="home-card-title">Prompt para Imágenes</div>
          </button>
          <button className="home-card" onClick={() => onSelect('yapito')}>
            <div className="home-card-thumb"><PersonIcon size={24} /></div>
            <div className="home-card-title">Prompt para Yapito</div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;