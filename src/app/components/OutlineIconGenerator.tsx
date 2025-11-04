import React, { useState } from 'react';
import { BackIcon, CopyIcon } from './icons';

interface OutlineIconGeneratorProps {
  onNavigate?: (view: 'home' | 'images' | 'yapito' | 'icons' | 'iconGen' | 'guides') => void;
}

// TODO: move to env variable or plugin parameters
const API_KEY = 'AIzaSyD5P_IpEnvfk80aplaTdhRhbCsqoOZcPVI';

const OutlineIconGenerator: React.FC<OutlineIconGeneratorProps> = ({ onNavigate }) => {
  const [prompt, setPrompt] = useState('');
  const [icons, setIcons] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateIcons = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;
      const instruction = `You are an expert icon designer. Generate TWO different SVG icons (24x24 viewBox, black #000 strokes, 2px stroke width, no fill) that represent the following description: "${prompt.trim()}". Return ONLY the SVG code of the two icons, separated by the token \"|||\" with no additional explanation.`;

      const body = {
        contents: [
          {
            role: 'user',
            parts: [{ text: instruction }],
          },
        ],
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error(`API error ${response.status}`);

      const data = await response.json();
      const text: string = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      const snippets = text
        .split('|||')
        .map((s) => s.trim())
        .filter((s) => s.startsWith('<svg'));
      if (snippets.length === 0) throw new Error('No SVG returned');

      setIcons(snippets.slice(0, 2));
    } catch (err) {
      console.error(err);
      alert('Error generando iconos, revisa la consola');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (svg: string) => {
    navigator.clipboard.writeText(svg).catch((e) => console.error(e));
  };

  const handleInsert = (svg: string) => {
    parent.postMessage({ pluginMessage: { type: 'insert-svg', svg, size: 24 } }, '*');
  };

  return (
    <div className="icon-generator-page">
      <header className="icon-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 className="icon-title">✨ Generador de iconos con IA</h1>
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
          <label className="label">¿Qué icono quieres generar?</label>
          <textarea
            className="input"
            rows={3}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe el icono que tienes en mente"
          />
        </div>

        <div className="actions" style={{ marginTop: 8 }}>
          <button className="btn" disabled={loading} onClick={generateIcons}>
            {loading ? 'Generando…' : '✨ Generar iconos'}
          </button>
        </div>

        {icons.length > 0 && (
          <div className="generated-icons" style={{ display: 'flex', gap: 16 }}>
            {icons.map((svg, idx) => (
              <div key={idx} className="icon-preview" style={{ position: 'relative' }}>
                <div
                  className="drag-source"
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData('text/plain', svg);
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: svg }}
                    style={{ width: 72, height: 72 }}
                  />
                </div>
                <button className="btn copy-btn" onClick={() => handleCopy(svg)} title="Copiar SVG">
                  <CopyIcon />
                </button>
                <button className="btn insert-btn" onClick={() => handleInsert(svg)}>
                  Insertar en Figma
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OutlineIconGenerator;