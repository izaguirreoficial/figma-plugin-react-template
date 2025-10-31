import React, { useState, useEffect } from 'react';
import { promptTemplates, PromptTemplate, getTemplateById } from '../data/promptTemplates';
import FieldBuilder from './FieldBuilder';
import JSONPreview from './JSONPreview';

interface JSONPrompterProps {}

const JSONPrompter: React.FC<JSONPrompterProps> = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate | null>(null);
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [jsonOutput, setJsonOutput] = useState<Record<string, any>>({});

  // Initialize with the first template
  useEffect(() => {
    if (promptTemplates.length > 0) {
      const defaultTemplate = promptTemplates[0];
      setSelectedTemplate(defaultTemplate);
      
      // Initialize field values with default values
      const initialValues: Record<string, string> = {};
      defaultTemplate.fields.forEach(field => {
        initialValues[field.name] = field.defaultValue || '';
      });
      setFieldValues(initialValues);
    }
  }, []);

  // Update JSON output when field values change
  useEffect(() => {
    if (selectedTemplate) {
      const newJsonOutput = { ...selectedTemplate.jsonStructure };
      Object.keys(fieldValues).forEach(key => {
        if (fieldValues[key] !== undefined) {
          newJsonOutput[key] = fieldValues[key];
        }
      });
      setJsonOutput(newJsonOutput);
    }
  }, [fieldValues, selectedTemplate]);

  const handleTemplateChange = (templateId: string) => {
    const template = getTemplateById(templateId);
    if (template) {
      setSelectedTemplate(template);
      
      // Reset field values with new template defaults
      const newValues: Record<string, string> = {};
      template.fields.forEach(field => {
        newValues[field.name] = field.defaultValue || '';
      });
      setFieldValues(newValues);
    }
  };

  const handleFieldChange = (fieldName: string, value: string) => {
    setFieldValues(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleCopyJSON = () => {
    const jsonString = JSON.stringify(jsonOutput, null, 2);
    navigator.clipboard.writeText(jsonString).then(() => {
      // Could add a toast notification here
      console.log('JSON copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy JSON:', err);
    });
  };

  return (
    <div className="json-prompter">
      <header className="json-prompter-header">
        <div className="logo-section">
          <div className="logo-icon">✨</div>
          <h1 className="logo-text">JSON Prompter</h1>
        </div>
        
        <div className="template-selector">
          <select 
            value={selectedTemplate?.id || ''} 
            onChange={(e) => handleTemplateChange(e.target.value)}
            className="template-dropdown"
          >
            {promptTemplates.map(template => (
              <option key={template.id} value={template.id}>
                {template.name}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div className="json-prompter-content">
        <div className="field-builder-section">
          <h2 className="section-title">Field Builder</h2>
          {selectedTemplate && (
            <FieldBuilder
              template={selectedTemplate}
              values={fieldValues}
              onChange={handleFieldChange}
            />
          )}
        </div>

        <div className="json-preview-section">
          <h2 className="section-title">JSON Preview</h2>
          <JSONPreview 
            jsonData={jsonOutput} 
            onCopy={handleCopyJSON}
          />
        </div>
      </div>
    </div>
  );
};

export default JSONPrompter;