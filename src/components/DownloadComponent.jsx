import React from 'react';
import { jsPDF } from "jspdf";

function DownloadComponent({ formData, selectedTemplate }) {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${formData.name || ''}`, 10, 10);
    doc.text(`Age: ${formData.age || ''}`, 10, 20);
    doc.text(`Education: ${formData.education || ''}`, 10, 30);
    doc.save('biodata.pdf');
  };

  return (
    <button onClick={downloadPDF} className="bg-blue-500 text-white px-4 py-2 rounded">
      Download Biodata
    </button>
  );
}

export default DownloadComponent;
