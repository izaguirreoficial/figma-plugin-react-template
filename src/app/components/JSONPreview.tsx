import React from 'react';

interface JSONPreviewProps {
  jsonData: Record<string, any>;
  onCopy: () => void;
}

const JSONPreview: React.FC<JSONPreviewProps> = ({ jsonData, onCopy }) => {
  const jsonString = JSON.stringify(jsonData, null, 2);

  return (
    <div className="json-preview">
      <div className="json-preview-content">
        <pre className="json-code">
          <code>{jsonString}</code>
        </pre>
      </div>
      
      <div className="json-preview-actions">
        <button 
          className="copy-button"
          onClick={onCopy}
          title="Copy JSON to clipboard"
        >
          <span className="copy-icon">📋</span>
          Copy JSON
        </button>
      </div>
    </div>
  );
};

export default JSONPreview;