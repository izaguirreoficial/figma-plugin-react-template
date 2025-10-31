import React from 'react';
import { PromptTemplate, PromptField } from '../data/promptTemplates';

interface FieldBuilderProps {
  template: PromptTemplate;
  values: Record<string, string>;
  onChange: (fieldName: string, value: string) => void;
}

const FieldBuilder: React.FC<FieldBuilderProps> = ({ template, values, onChange }) => {
  const renderField = (field: PromptField) => {
    const value = values[field.name] || '';

    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            className="field-input"
          />
        );
      
      case 'textarea':
        return (
          <textarea
            value={value}
            onChange={(e) => onChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            className="field-textarea"
            rows={4}
          />
        );
      
      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => onChange(field.name, e.target.value)}
            className="field-select"
          >
            {field.options?.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="field-builder">
      {template.fields.map(field => (
        <div key={field.name} className="field-group">
          <label className="field-label">
            {field.label}
          </label>
          {renderField(field)}
        </div>
      ))}
    </div>
  );
};

export default FieldBuilder;