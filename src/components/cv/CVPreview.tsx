import React from "react";
import { CVFormData, TemplateType } from "../value/cvTypes";
import CreativeCVTemplate from "../value/CreativeCVTemplate";
import MinimalistCVTemplate from "../value/MinimalistCVTemplate";
import ModernCVTemplate from "../value/ModernCVTemplate";

interface CVPreviewProps {
  template: TemplateType | null;
  formData: CVFormData;
}

const CVPreview: React.FC<CVPreviewProps> = ({ template, formData }) => {
  const renderTemplate = () => {
    switch (template) {
      case TemplateType.MODERN:
        return <ModernCVTemplate />;
      case TemplateType.MINIMALIST:
        return <MinimalistCVTemplate />;
      case TemplateType.CREATIVE:
        return <CreativeCVTemplate />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">Chọn mẫu CV để xem trước</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4 h-full overflow-auto">
      <div className="bg-white shadow-lg rounded-lg transform scale-90 origin-top">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default CVPreview; 