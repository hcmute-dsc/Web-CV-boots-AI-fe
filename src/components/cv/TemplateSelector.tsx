import React from "react";
import { TemplateInfo, TemplateType, CVFormData } from "../value/cvTypes";
import CreativeCVTemplate from "../value/CreativeCVTemplate";
import MinimalistCVTemplate from "../value/MinimalistCVTemplate";
import ModernCVTemplate from "../value/ModernCVTemplate";
import { defaultCVData } from "../value/defaultData";

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
  // Dữ liệu mẫu được sử dụng chỉ cho việc xem trước
  const previewData: CVFormData = defaultCVData;

  // Hàm render mẫu thu nhỏ của template
  const renderTemplatePreview = (templateId: TemplateType) => {
    switch (templateId) {
      case TemplateType.MODERN:
        return <ModernCVTemplate formData={previewData} />;
      case TemplateType.MINIMALIST:
        return <MinimalistCVTemplate formData={previewData} />;
      case TemplateType.CREATIVE:
        return <CreativeCVTemplate formData={previewData} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {templateList.map((template) => (
        <div
          key={template.id}
          className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl ${
            selectedTemplate === template.id
              ? "border-4 border-pink-500 shadow-lg scale-[1.02]"
              : "border border-gray-200"
          }`}
          onClick={() => onSelectTemplate(template.id)}
        >
          {/* Khung preview CV */}
          <div className="h-52 bg-gradient-to-br from-blue-50 to-pink-50 p-3 flex items-center justify-center">
            <div className="w-full h-full overflow-hidden relative transform scale-[0.5]">
              {renderTemplatePreview(template.id)}
            </div>
          </div>

          {/* Thông tin bên dưới */}
          <div className="p-4 bg-white text-center">
            <h3 className="font-semibold text-lg text-gray-800 group-hover:text-pink-600 transition">
              {template.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
              {template.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TemplateSelector;
