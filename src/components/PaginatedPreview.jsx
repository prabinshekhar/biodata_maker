import React, { useEffect, useRef, useState } from 'react';

const A4_HEIGHT_PX = 1122; // A4 page height at 96dpi
const A4_WIDTH_PX = 794;

const PaginatedPreview = ({ formData, containerStyle, fontSize }) => {
  const fullContentRef = useRef(null);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const generatePages = () => {
      const container = fullContentRef.current;
      if (!container) return;

      const children = Array.from(container.children);
      const currentPages = [];
      let currentPage = [];
      let currentHeight = 0;

      children.forEach((child) => {
        const height = child.offsetHeight;

        if (currentHeight + height > A4_HEIGHT_PX - 100) {
          currentPages.push([...currentPage]);
          currentPage = [child.outerHTML];
          currentHeight = height;
        } else {
          currentPage.push(child.outerHTML);
          currentHeight += height;
        }
      });

      if (currentPage.length) currentPages.push(currentPage);
      setPages(currentPages);
    };

    setTimeout(generatePages, 100); // Wait for DOM render
  }, [formData]);

  return (
    <div>
      {/* Hidden full content for measurement */}
      <div ref={fullContentRef} className="hidden w-[794px] p-20">
        {Object.entries(formData).map(([sectionKey, fields], sectionIndex) => (
          <div key={sectionIndex} className="px-10 py-8">
            <h2 className={`font-bold underline mb-2 capitalize ${fontSize}`}>
              {sectionKey} Details
            </h2>
            <ul className="pl-4 space-y-2">
              {fields
                .filter((field) => field.value?.trim() !== '')
                .map((field, index) => (
                  <li key={index} className={`mb-1 ${fontSize}`}>
                    <strong>{field.label}:</strong> {field.value}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Visible Paginated Pages */}
      {pages.map((pageContent, pageIndex) => (
        <div
          key={pageIndex}
          className="w-[595px] h-[842px] bg-white break-after-page overflow-hidden shadow-lg rounded"
          style={{
            ...containerStyle,
            minHeight: `${A4_HEIGHT_PX}px`,
            width: `${A4_WIDTH_PX}px`,
            pageBreakAfter: 'always',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding:'60px 70px',     
            backgroundPosition: 'center',
          }}
          dangerouslySetInnerHTML={{ __html: pageContent.join('') }}
        />
      ))}
    </div>
  );
};

export default PaginatedPreview;
