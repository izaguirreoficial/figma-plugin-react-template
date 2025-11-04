import React from 'react';
import { BackIcon } from './icons';

interface IconGuidesProps {
  onNavigate?: (v: 'home' | 'guides' | 'iconGen' | 'icons' | 'images' | 'yapito') => void;
}

const pdfContext = (require as any).context('../assets/knowledge-base/guides', false, /\.pdf$/);
const pdfs: string[] = pdfContext.keys().map(pdfContext);

const IconGuides: React.FC<IconGuidesProps> = ({ onNavigate }) => {
  return (
    <div className="icon-guides-page">
      <header className="yapito-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 className="yapito-title">Guías de Iconografía</h1>
        <button className="btn nav-back-btn" aria-label="Volver a Home" title="Volver" onClick={() => onNavigate && onNavigate('home')}>
          <BackIcon className="btn-icon" />
        </button>
      </header>

      <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {pdfs.length === 0 && <p>No hay guías PDF aún. Sube tus archivos a la carpeta <code>assets/knowledge-base/guides</code>.</p>}
        {pdfs.map((src, idx) => (
          <embed key={idx} src={src} type="application/pdf" width="100%" height="480px" />
        ))}
      </div>
    </div>
  );
};

export default IconGuides;