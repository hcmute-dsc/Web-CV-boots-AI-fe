import React, { useEffect } from "react";
import { CVFormData, TemplateType } from "../value/cvTypes";
import CreativeCVTemplate from "../value/CreativeCVTemplate";
import MinimalistCVTemplate from "../value/MinimalistCVTemplate";
import ModernCVTemplate from "../value/ModernCVTemplate";

// Thêm CSS toàn cục cho chế độ in
const printStyles = `
  @media print {
    @page {
      size: A4;
      margin: 0;
    }
    body {
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
      print-color-adjust: exact !important;
      background-color: white !important;
    }
    * {
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    
    /* Ẩn tất cả mọi thứ ngoại trừ CV */
    body > *:not(.print-cv-container) {
      display: none !important;
    }
    
    .print-cv-container {
      display: block !important;
      position: absolute !important;
      left: 0 !important;
      top: 0 !important;
      width: 100% !important;
      height: 100% !important;
      padding: 0 !important;
      margin: 0 !important;
      background: white !important;
    }
  }
`;

interface CVPreviewProps {
  template: TemplateType | null;
  formData: CVFormData;
}

const CVPreview: React.FC<CVPreviewProps> = ({ template, formData }) => {
  // Debug: Kiểm tra dữ liệu được truyền vào
  useEffect(() => {
    console.log("CV Preview - Template:", template);
    console.log("CV Preview - FormData:", formData);
    
    // Thêm style cho chế độ in
    const styleElement = document.createElement('style');
    styleElement.innerHTML = printStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      // Dọn dẹp khi unmount
      document.head.removeChild(styleElement);
    };
  }, [template, formData]);

  const renderTemplate = () => {
    switch (template) {
      case TemplateType.MODERN:
        return <ModernCVTemplate formData={formData} />;
      case TemplateType.MINIMALIST:
        return <MinimalistCVTemplate formData={formData} />;
      case TemplateType.CREATIVE:
        return <CreativeCVTemplate formData={formData} />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">Chọn mẫu CV để xem trước</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4 h-full overflow-auto print:overflow-visible print:p-0 print:bg-white">
      <div className="bg-white shadow-lg rounded-lg transform scale-90 origin-top print:scale-100 print:shadow-none print:rounded-none">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default CVPreview; 