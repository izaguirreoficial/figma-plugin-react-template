import React, { useMemo, useState } from 'react';
import { CopyIcon, ResetIcon, InfoIcon, BackIcon } from './icons';

interface YapitoPromptGeneratorProps {
  onNavigate?: (view: 'home' | 'images' | 'yapito' | 'icons') => void;
}

const BASE_YAPITO_TEXT =
  "Generate an illustration of the 'Yapito' mascot. Subject: An anthropomorphic red-pink smartphone. Body: Rectangular smartphone shape with rounded edges, slight 3D perspective. Screen: purple color. Logo: The text 'yape' in white script, with an 'S/' icon in a turquoise speech bubble, all within the purple screen and below the face. Limbs: Simple, flexible red-pink arms and legs. Style: 2D vector illustration, flat colors, minimalist, friendly corporate mascot.";

const YapitoPromptGenerator: React.FC<YapitoPromptGeneratorProps> = ({ onNavigate }) => {
  const [expresion, setExpresion] = useState('');
  const [accion, setAccion] = useState('');
  const [fondo, setFondo] = useState('');
  const [showCopied, setShowCopied] = useState(false);
  const [resetAnimating, setResetAnimating] = useState(false);

  const yapitoPrompt = useMemo(() => {
    const facePart = expresion.trim() ? ` FACE: ${expresion.trim()} red-pink color.` : '';
    const actionPart = accion.trim() ? ` CHARACTER ACTION: ${accion.trim()}.` : '';
    const backgroundPart = fondo.trim() ? ` BACKGROUND: ${fondo.trim()}.` : '';
    return `${BASE_YAPITO_TEXT}${facePart}${actionPart}${backgroundPart}`;
  }, [expresion, accion, fondo]);

  const handleCopy = () => {
    const prompt = yapitoPrompt;
    const copy = async (t: string) => {
      try {
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
          await navigator.clipboard.writeText(t);
        } else {
          throw new Error('clipboard api not available');
        }
      } catch {
        const ta = document.createElement('textarea');
        ta.value = t;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        ta.style.pointerEvents = 'none';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        try { document.execCommand('copy'); } catch {}
        document.body.removeChild(ta);
      }
    };
    copy(prompt).then(() => {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 1600);
    });
  };

  const handleReset = () => {
    setExpresion('');
    setAccion('');
    setFondo('');
    setResetAnimating(true);
    setTimeout(() => setResetAnimating(false), 420);
  };

  return (
    <div className="yapito-prompt">
      <header className="yapito-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 className="yapito-title">Prompt para Yapito</h1>
        <button
          className="btn nav-back-btn"
          aria-label="Volver a Home"
          title="Volver"
          onClick={() => onNavigate && onNavigate('home')}
        >
          <BackIcon className="btn-icon" />
        </button>
      </header>

      <div className="yapito-content">
        <div className="form-section">
          <label className="label">Expresión</label>
          <input
            className="input"
            type="text"
            value={expresion}
            placeholder="ej: Feliz"
            onChange={(e) => setExpresion(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label className="label">Acción</label>
          <input
            className="input"
            type="text"
            value={accion}
            placeholder="ej: Sujetando un helado, sentado"
            onChange={(e) => setAccion(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label className="label">Fondo</label>
          <input
            className="input"
            type="text"
            value={fondo}
            placeholder="ej: En el parque"
            onChange={(e) => setFondo(e.target.value)}
          />
        </div>

        <div className="actions">
          <button className={`btn btn-reset ${resetAnimating ? 'animate' : ''}`} onClick={handleReset} aria-label="Limpiar Todo">
            <ResetIcon className="btn-icon" />
            Limpiar Todo
          </button>
        </div>
        <hr className="divider" />

        <div className="viewers-group">
          <div className="viewer-title">Prompt Viewer</div>

          <div className="viewer-section">
            <div className="viewer-subtitle-row">
              <div className="viewer-subtitle">▲ Yapito Base</div>
              <div className="info-tip" aria-label="Información">
                <InfoIcon className="info-icon" />
                <div className="info-tooltip">Recomendación: GPT 4o mini</div>
              </div>
            </div>
            <div className="viewer-container">
              <textarea className="viewer" value={yapitoPrompt} readOnly placeholder="Enter a description..." />
              <button className="copy-inset-btn" onClick={handleCopy} aria-label="Copiar Yapito Prompt">
                <CopyIcon className="btn-icon" />
              </button>
              <div className={`copy-toast top ${showCopied ? 'show' : ''}`}>prompt copiado</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YapitoPromptGenerator;