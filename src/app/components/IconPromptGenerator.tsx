import React, { useMemo, useState } from 'react';
import { CopyIcon, ResetIcon } from './icons';

const LINE_ICON_TEMPLATE_PREFIX = 'Generame un Icono de ';
const LINE_ICON_TEMPLATE_SUFFIX = ', estilo line icon, trazo muy grueso y uniforme, formas con relleno sólido oscuro #000000, todas las esquinas y terminaciones suavemente redondeadas, aislado sobre fondo blanco puro #FFFFFF, diseño vectorial para UI/UX, geometría robusta, relación de aspecto 1:1, debe ser un icono que sintetice el concepto con uno o máximo 3 elementos, para un tamaño de 24 px';

const SOLID_ICON_TEMPLATE_PREFIX = 'Generame un Icono de ';
const SOLID_ICON_TEMPLATE_SUFFIX = ', estilo solid icon, formas con relleno sólido oscuro #000000, todas las esquinas y terminaciones suavemente redondeadas, aislado sobre fondo blanco puro #FFFFFF, diseño vectorial para UI/UX, geometría robusta, relación de aspecto 1:1, debe ser un icono que sintetice el concepto con uno o máximo 3 elementos, para un tamaño de 24 px';

const IconPromptGenerator: React.FC = () => {
  const [descripcion, setDescripcion] = useState('');

  const lineIconPrompt = useMemo(() => {
    const texto = descripcion.trim() || '[editar texto]';
    return `${LINE_ICON_TEMPLATE_PREFIX}${texto}${LINE_ICON_TEMPLATE_SUFFIX}`;
  }, [descripcion]);

  const solidIconPrompt = useMemo(() => {
    const texto = descripcion.trim() || '[editar texto]';
    return `${SOLID_ICON_TEMPLATE_PREFIX}${texto}${SOLID_ICON_TEMPLATE_SUFFIX}`;
  }, [descripcion]);

  const handleCopyLineIcon = () => {
    navigator.clipboard.writeText(lineIconPrompt).catch(() => {});
  };

  const handleCopySolidIcon = () => {
    navigator.clipboard.writeText(solidIconPrompt).catch(() => {});
  };

  const handleReset = () => {
    setDescripcion('');
  };

  return (
    <div className="icon-prompt">
      <header className="icon-header">
        <h1 className="icon-title">Generador de Prompts</h1>
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
            <button className="btn btn-reset" onClick={handleReset} aria-label="Limpiar">
              <ResetIcon className="btn-icon" />
              Limpiar
            </button>
          </div>
        </div>

        <div className="viewer-section">
          <div className="viewer-header">
            <label className="label">Line Icon - Prompt Viewer</label>
            <button className="copy-btn" onClick={handleCopyLineIcon} aria-label="Copiar Line Icon Prompt">
              <CopyIcon className="btn-icon" />
            </button>
          </div>
          <textarea
            className="viewer"
            value={lineIconPrompt}
            readOnly
            placeholder="Enter a description..."
          />
        </div>

        <div className="viewer-section">
          <div className="viewer-header">
            <label className="label">Solid Icon - Prompt Viewer</label>
            <button className="copy-btn" onClick={handleCopySolidIcon} aria-label="Copiar Solid Icon Prompt">
              <CopyIcon className="btn-icon" />
            </button>
          </div>
          <textarea
            className="viewer"
            value={solidIconPrompt}
            readOnly
            placeholder="Enter a description..."
          />
        </div>
      </div>
    </div>
  );
};

export default IconPromptGenerator;