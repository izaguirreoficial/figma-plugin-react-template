import React, { useMemo, useState } from 'react';
import { CopyIcon, ResetIcon, InfoIcon, BackIcon } from './icons';

const LINE_ICON_TEMPLATE_PREFIX = 'Icon of ';
const LINE_ICON_TEMPLATE_SUFFIX = ', line icon style, very thick and uniform stroke, dark stroke color #000000, no fill, all corners and endings smoothly rounded, isolated on pure white background #FFFFFF, vector design for UI/UX, robust geometry, 1:1 aspect ratio, synthesizes the concept with one or maximum 3 elements, optimized for 24 px.';

const SOLID_ICON_TEMPLATE_PREFIX = 'Icon of ';
const SOLID_ICON_TEMPLATE_SUFFIX = ', solid icon style, base shape with solid dark fill #000000, \'knockout\' details in white negative space #FFFFFF, all corners and endings smoothly rounded, isolated on pure white background #FFFFFF, vector design for UI/UX, robust geometry, 1:1 aspect ratio, optimized for 24 px.';

interface IconPromptGeneratorProps {
  onNavigate?: (view: 'home' | 'images' | 'yapito' | 'icons') => void;
}

const IconPromptGenerator: React.FC<IconPromptGeneratorProps> = ({ onNavigate }) => {
  const [descripcion, setDescripcion] = useState('');
  const [showLineCopied, setShowLineCopied] = useState(false);
  const [showSolidCopied, setShowSolidCopied] = useState(false);
  const [resetAnimating, setResetAnimating] = useState(false);

  const lineIconPrompt = useMemo(() => {
    const texto = descripcion.trim() || '[Editar aquí]';
    return `${LINE_ICON_TEMPLATE_PREFIX}${texto}${LINE_ICON_TEMPLATE_SUFFIX}`;
  }, [descripcion]);

  const solidIconPrompt = useMemo(() => {
    const texto = descripcion.trim() || '[Editar aquí]';
    return `${SOLID_ICON_TEMPLATE_PREFIX}${texto}${SOLID_ICON_TEMPLATE_SUFFIX}`;
  }, [descripcion]);

  const handleCopyLineIcon = () => {
    const texto = descripcion.trim() || '[Editar aquí]';
    const prompt = `${LINE_ICON_TEMPLATE_PREFIX}${texto}${LINE_ICON_TEMPLATE_SUFFIX}`;
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
      setShowLineCopied(true);
      setTimeout(() => setShowLineCopied(false), 1600);
    });
  };

  const handleCopySolidIcon = () => {
    const texto = descripcion.trim() || '[Editar aquí]';
    const prompt = `${SOLID_ICON_TEMPLATE_PREFIX}${texto}${SOLID_ICON_TEMPLATE_SUFFIX}`;
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
      setShowSolidCopied(true);
      setTimeout(() => setShowSolidCopied(false), 1600);
    });
  };

  const handleReset = () => {
    setDescripcion('');
    setResetAnimating(true);
    setTimeout(() => setResetAnimating(false), 420);
  };

  // Ya no se ofrece control de ancho desde la UI; se deja en tamaño compacto.
  // El plugin puede seguir manejando mensajes de resize desde otras fuentes si existieran.
  
  return (
    <div className="icon-prompt">
      <header className="icon-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
         <h1 className="icon-title">Prompt para Iconos</h1>
        <button
          className="btn nav-back-btn"
          aria-label="Volver a Home"
          title="Volver"
          onClick={() => onNavigate && onNavigate('home')}
        >
          <BackIcon className="btn-icon" />
        </button>
      </header>

      <div className="icon-content">
        <div className="form-section">
          <label className="label">Describe tu icono</label>
          <input
            className="input"
            type="text"
            value={descripcion}
            placeholder="Ej: Crédito aprobado"
            onChange={(e) => setDescripcion(e.target.value)}
          />

          <div className="actions">
            <button className={`btn btn-reset ${resetAnimating ? 'animate' : ''}`} onClick={handleReset} aria-label="Limpiar">
              <ResetIcon className="btn-icon" />
              Limpiar
            </button>
          </div>
          <hr className="divider" />
        </div>

        <div className="viewers-group">
          <div className="viewer-title">Prompt Viewer</div>

          <div className="viewer-section">
            <div className="viewer-subtitle-row">
              <div className="viewer-subtitle">✩ Line Icon</div>
              <div className="info-tip" aria-label="Información">
                <InfoIcon className="info-icon" />
                <div className="info-tooltip">Recomedación: GPT Image 1 Mini</div>
              </div>
            </div>
            <div className="viewer-container">
              <textarea
                className="viewer"
                value={lineIconPrompt}
                readOnly
                placeholder="Enter a description..."
              />
              <button className="copy-inset-btn" onClick={handleCopyLineIcon} aria-label="Copiar Line Icon Prompt">
                <CopyIcon className="btn-icon" />
              </button>
              <div className={`copy-toast top ${showLineCopied ? 'show' : ''}`}>prompt copiado</div>
            </div>
          </div>

          <div className="viewer-section">
            <div className="viewer-subtitle-row">
              <div className="viewer-subtitle">✪ Solid Icon</div>
              <div className="info-tip" aria-label="Información">
                <InfoIcon className="info-icon" />
                <div className="info-tooltip">Recomedación: GPT Image 1 Mini</div>
              </div>
            </div>
            <div className="viewer-container">
              <textarea
                className="viewer"
                value={solidIconPrompt}
                readOnly
                placeholder="Enter a description..."
              />
              <button className="copy-inset-btn" onClick={handleCopySolidIcon} aria-label="Copiar Solid Icon Prompt">
                <CopyIcon className="btn-icon" />
              </button>
              <div className={`copy-toast top ${showSolidCopied ? 'show' : ''}`}>prompt copiado</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconPromptGenerator;