import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import PreviewComponent from './components/PreviewComponent';
import Front1 from './components/Front1';
import MovingText from './components/MovingText';
import StepsToGenerateBiodata from './components/StepsToGenerateBiodata';
import TemplateSelector from './components/TemplateSelector';

const App = () => {
  const initialSections = {
    personal: [
      { label: 'Name', value: '', required: true },
      { label: 'Date of Birth', value: '', required: true },
      { label: 'Place of Birth', value: '', required: true },
      { label: 'Complexion', value: '', required: false },
      { label: 'Height', value: '', required: false },
      { label: 'Religion', value: '', required: false },
      { label: 'Caste', value: '', required: false },
      { label: 'SubCaste', value: '', required: false },
      { label: 'Gotra', value: '', required: false },
      { label: 'Highest Education', value: '', required: false },
      { label: 'Occupation', value: '', required: false },
    ],
    family: [
      { label: "Father's Name", value: '', required: false },
      { label: "Father's Occupation", value: '', required: false },
      { label: "Mother's Name", value: '', required: false },
      { label: "Mother's Occupation", value: '', required: false },
      { label: 'Siblings', value: '', required: false },
    ],
    contact: [
      { label: 'Contact Name', value: '', required: true },
      { label: 'Contact Number', value: '', required: true },
      { label: 'Email', value: '', required: false },
    ]
  };

  const [formData, setFormData] = useState(initialSections);
  const [selectedTemplate, setSelectedTemplate] = useState({
    backgroundColor: '#fffbe6',
    textColor: '#1a202c',
    fontFamily: 'Georgia, serif',
    fontSize: 'text-base',
    backgroundImage: '',
  });

  return (
    <div className="min-h-screen bg-gray-100">
      
      <MovingText/>
      <Front1/>
      <StepsToGenerateBiodata/>
      <FormComponent formData={formData} setFormData={setFormData} />
      <div>
          <TemplateSelector
            selectedTemplate={selectedTemplate}
            onTemplateSelect={setSelectedTemplate}
          />
        </div>
        <PreviewComponent formData={formData} templateStyle={selectedTemplate} />
    </div>
  );
};

export default App;
