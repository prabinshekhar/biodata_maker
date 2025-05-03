import React, { useState } from 'react';
import Basic from "./basic.jpg";
import GoldBasic from "./gold-basic.jpg";
import RedBasic from "./red-basic.jpg";


const templates = [
  {
    id: 'classic',
    name: 'Classic',
    backgroundColor: '#fffaf0',
    textColor: '#1a202c',
    fontFamily: 'Georgia, serif',
    fontSize: '30px',
    backgroundImage: Basic,
  },
  {
    id: 'royal',
    name: 'Golden Shine',
    backgroundColor: '#c99200',
    textColor: 'blue',
    fontFamily: 'Times New Roman, serif',
    fontSize: '30px',
    backgroundImage: GoldBasic,
  },
  {
    id: 'minimal',
    name: 'Maroon Festive',
    backgroundColor: '#800000',
    textColor: '#ffffff',
    fontFamily: 'Georgia',
    fontSize: '30px',
    backgroundImage: RedBasic,
  },
];

const TemplateSelector = ({ onTemplateSelect }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0].id);

  const handleSelect = (templateId) => {
    setSelectedTemplate(templateId);
    const selected = templates.find((t) => t.id === templateId);
    onTemplateSelect(selected); // Send template style to parent
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Select Biodata Template</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`cursor-pointer border-2 rounded-lg p-4 text-center transition ${
              selectedTemplate === template.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-300 hover:border-blue-300'
            }`}
            onClick={() => handleSelect(template.id)}
            style={{
              backgroundColor: template.backgroundColor,
              color: template.textColor,
              fontFamily: template.fontFamily,
              backgroundImage: template.backgroundImage,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h3 className="font-bold text-lg mb-2">{template.name}</h3>
            <p className="text-sm">Font: {template.fontFamily.split(',')[0]}</p>
            <p className="text-sm">Font Size: {template.fontSize}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
