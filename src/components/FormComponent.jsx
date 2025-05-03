import React,{useState,useEffect} from 'react';
import { FaTrash, FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function FormComponent({ formData, setFormData }) {

  const [sections, setSections] = useState(formData); 

  useEffect(() => {
    setSections(formData);
  }, [formData]);
  const handleChange = (section, index, value) => {
    const updated = [...sections[section]];
    updated[index].value = value;
    setFormData(prev=> ({ ...prev, [section]: updated }));
  };

  const moveField = (section, index, direction) => {
    const updated = [...sections[section]];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex >= 0 && targetIndex < updated.length) {
      [updated[index], updated[targetIndex]] = [updated[targetIndex], updated[index]];
      setFormData(prev=>({ ...prev, [section]: updated }));
    }
  };

  const deleteField = (section, index) => {
    const field = sections[section][index];
    if (field.required) {
      alert('Cannot delete a mandatory field.');
      return;
    }
    const updated = [...sections[section]];
    updated.splice(index, 1);
    setFormData(prev=>({ ...prev, [section]: updated }));
  };

  const addField = (section) => {
    const label = prompt('Enter new field name:');
    if (label) {
      const updated = [...sections[section], { label, value: '', required: false }];
      setFormData({ ...sections, [section]: updated });
    }
  };

  const renderSection = (sectionKey, title) => (
    <div className="mb-8">
      <h2 className="text-3xl text-red-700 font-bold mb-4">{title}</h2>
      {sections[sectionKey].map((field, index) => (
        <div key={index} className="flex flex-col items-center gap-2 mb-2 w-full">
          <label className="p-5 shadow-lg bg-gray-200 w-full font-semibold">
            {field.label} {field.required && <span className="text-red-500 text-xs">Required</span>}
          </label>
          <div className='w-full flex flex-auto'>
          <input
            type={field.label === "Date of Birth" ? "date" : "text"}
            value={field.value}
            onChange={(e) => handleChange(sectionKey, index, e.target.value)}
            required={field.required}
            className="flex-1 border border-gray-300 p-2 rounded font-semibold"
          />
          <button
            onClick={() => moveField(sectionKey, index, 'up')}
            className="p-1 hover:text-blue-600"
            title="Move Up"
          >
            <FaArrowUp />
          </button>
          <button
            onClick={() => moveField(sectionKey, index, 'down')}
            className="p-1 hover:text-blue-600"
            title="Move Down"
          >
            <FaArrowDown />
          </button>
          {!field.required && (
            <button
              onClick={() => deleteField(sectionKey, index)}
              className="p-1 hover:text-red-600"
              title="Delete"
            >
              <FaTrash />
            </button>
          )}
          </div>
        </div>
      ))}
      <button
        onClick={() => addField(sectionKey)}
        className="mt-2 px-4 py-1 bg-gray-300 text-blue-800 rounded-lg hover:bg-gray-400"
      >
        + Add More Fields
      </button>
    </div>
  );

  return (
    <div className="mx-auto">
      <div className="bg-gradient-to-r from-blue-300 to-pink-300 p-5 shadow-lg">
         <p className="text-gray-800 text-center text-4xl font-bold">Start creating your Biodata</p>
     </div>
    <div className='p-5 m-5 max-w-4xl mx-auto'>
    {sections && renderSection('personal', 'Personal Details')}
      {sections && renderSection('family', 'Family Details')}
      {sections && renderSection('contact', 'Contact Details')}
    </div>
      
    </div>
  );
}
