import React from 'react';
import { ImageIcon, StarIcon, PersonIcon } from './icons';

interface HomeProps {
  onSelect: (key: 'images' | 'icons' | 'yapito') => void;
}

const Home: React.FC<HomeProps> = ({ onSelect }) => {
  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-title">Prompt Builder</h1>
        <p className="home-subtitle">Escoge la plantilla para generar imágenes</p>
      </header>

      <div className="home-grid">
        <button className="home-card" onClick={() => onSelect('images')}>
          <div className="home-card-thumb"><ImageIcon size={64} /></div>
          <div className="home-card-title">Prompt para Imágenes</div>
        </button>

        <button className="home-card" onClick={() => onSelect('icons')}>
          <div className="home-card-thumb"><StarIcon size={64} /></div>
          <div className="home-card-title">Prompt para Iconos</div>
        </button>

        <button className="home-card" onClick={() => onSelect('yapito')}>
          <div className="home-card-thumb"><PersonIcon size={64} /></div>
          <div className="home-card-title">Prompt para Yapito</div>
        </button>
      </div>
    </div>
  );
};

export default Home;