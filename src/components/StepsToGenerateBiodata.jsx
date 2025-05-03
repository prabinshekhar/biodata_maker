import React from 'react';
import { CheckCircle } from 'lucide-react'; // optional: install lucide-react

const StepsToGenerateBiodata = () => {
  const steps = [
    {
      title: 'Step 1',
      description: 'Fill in your personal, family, and contact details in the form.',
    },
    {
      title: 'Step 2',
      description: 'Choose your preferred biodata template from available options.',
    },
    {
      title: 'Step 3',
      description: 'Preview and download your biodata as a beautiful PDF.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 py-8 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Steps to Generate Your Marriage Biodata
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-100 to-pink-100 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center mb-4">
              <CheckCircle className="text-green-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-700">{step.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsToGenerateBiodata;
