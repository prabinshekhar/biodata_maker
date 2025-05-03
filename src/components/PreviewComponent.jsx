import React, { useRef,useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PaginatedPreview from './PaginatedPreview';
import qrCodeImage from "./qrcode.jpg";

const A4_WIDTH = 794;
const A4_HEIGHT = 1122;

const PreviewComponent = ({ formData, templateStyle }) => {
  const printRef = useRef(null);
  const [hasPaid, setHasPaid] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const {
    backgroundColor,
    backgroundImage,
    textColor,
    fontFamily,
    fontSize
  } = templateStyle;

  const containerStyle = {
    backgroundColor,
    color: textColor,
    fontFamily,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
  };

  const handleDownloadPDF = async () => {
    const input = printRef.current;
    
    const pages = Array.from(input.children);

    const pdf = new jsPDF('p', 'pt', 'a4');

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], {
        scale: 2,
        useCORS: true,
      });
      const imgData = canvas.toDataURL('image/png');

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      if (i !== 0) pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    }

    pdf.save('biodata.pdf');
  };

  const handlePayNow = () => {
    setShowPaymentModal(true);
  };

  const handleConfirmPayment = () => {
    setHasPaid(true);
    setShowPaymentModal(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-5">
      {!hasPaid ? (
        <button
          onClick={handlePayNow}
          className="px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Pay ₹20 to Unlock Download
        </button>
      ) : (
      <button
        onClick={handleDownloadPDF}
        className="px-6 py-2 bg-maroon text-white rounded hover:bg-red-600"
      > 
        Download as PDF
      </button> )}

      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-lg font-bold mb-2">Pay ₹20 to UPI</h2>
            <img src={qrCodeImage} alt="UPI QR" className="w-full mb-4 rounded" />
            <p className="mb-4 text-sm text-gray-700">
              Scan the QR code above or send ₹20 to <strong>example@upi</strong>
            </p>
            <button
              onClick={handleConfirmPayment}
              className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              I have paid
            </button>
          </div>
        </div>
      )}

      <div ref={printRef}>
        <PaginatedPreview
          formData={formData}
          containerStyle={containerStyle}
          fontSize={fontSize}
        />
      </div>
    </div>
  );
};

export default PreviewComponent;
