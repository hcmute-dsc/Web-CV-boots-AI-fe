import React from "react";
import { TemplateInfo, TemplateType } from "../value/cvTypes";
import CreativeCVTemplate from "../value/CreativeCVTemplate";
import MinimalistCVTemplate from "../value/MinimalistCVTemplate";
import ModernCVTemplate from "../value/ModernCVTemplate";

interface TemplateSelectorProps {
  selectedTemplate: TemplateType | null;
  onSelectTemplate: (template: TemplateType) => void;
  templateList: TemplateInfo[];
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onSelectTemplate,
  templateList,
}) => {
  // Hàm render mẫu thu nhỏ của template
  const renderTemplatePreview = (templateId: TemplateType) => {
    switch (templateId) {
      case TemplateType.MODERN:
        return <ModernCVTemplate />;
      case TemplateType.MINIMALIST:
        return <MinimalistCVTemplate />;
      case TemplateType.CREATIVE:
        return <CreativeCVTemplate />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {templateList.map((template) => (
        <div
          key={template.id}
          className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${
            selectedTemplate === template.id
              ? "border-blue-500 shadow-lg"
              : "border-gray-200"
          }`}
          onClick={() => onSelectTemplate(template.id)}
        >
          <div className="h-48 bg-gray-50 p-2 flex items-center justify-center">
            <div className="w-full h-full overflow-hidden relative transform scale-50">
              {renderTemplatePreview(template.id)}
            </div>
          </div>
          <div className="p-3 bg-white text-center">
            <h3 className="font-medium">{template.name}</h3>
            <p className="text-sm text-gray-500">{template.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TemplateSelector; 