import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEye,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

import TemplateSelector from "../components/cv/TemplateSelector";
import CVForm from "../components/cv/CVForm";
import CVPreview from "../components/cv/CVPreview";

import { CVFormData, TemplateType } from "../components/value/cvTypes";
import { defaultCVData, templateList, sampleCVData } from "../components/value/defaultData";

const CVGenerate = () => {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType | null>(null);
  const [formData, setFormData] = useState<CVFormData>(defaultCVData);
  
  // Hàm chuyển bước
  const goToNextStep = () => {
    setStep(step + 1);
  };

  const goToPreviousStep = () => {
    setStep(step - 1);
  };
  
  // Hàm áp dụng dữ liệu mẫu
  const applyExampleData = () => {
    setFormData(sampleCVData);
  };

  // Hàm render nội dung của từng bước
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="py-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              Chọn mẫu CV phù hợp
            </h2>
            <TemplateSelector
              selectedTemplate={selectedTemplate}
              onSelectTemplate={setSelectedTemplate}
              templateList={templateList}
            />
            <div className="flex justify-center">
              <button
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                onClick={goToNextStep}
                disabled={!selectedTemplate}
              >
                <span>Tiếp tục</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="py-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              Nhập thông tin CV
            </h2>
            <div className="flex justify-end mb-4">
              <button
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                onClick={applyExampleData}
              >
                Điền dữ liệu mẫu
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CVForm formData={formData} setFormData={setFormData} />
              <CVPreview template={selectedTemplate} formData={formData} />
            </div>
            <div className="flex justify-between mt-8">
              <button
                className="btn bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md"
                onClick={goToPreviousStep}
              >
                Quay lại
              </button>
              <div className="space-x-4">
                <button className="btn bg-blue-50 hover:bg-blue-100 text-blue-600 px-6 py-2 rounded-md flex items-center">
                  <FontAwesomeIcon icon={faEye} className="mr-2" />
                  <span>Xem trước</span>
                </button>
                <button className="btn bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md flex items-center">
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  <span>Tải xuống PDF</span>
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="py-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
              Tạo CV Chuyên Nghiệp
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Tạo CV ấn tượng chỉ trong vài phút để tăng cơ hội việc làm
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center w-full max-w-3xl">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      step >= 1 ? "bg-blue-600" : "bg-gray-300"
                    } text-white font-bold`}
                  >
                    1
                  </div>
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step >= 2 ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  ></div>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      step >= 2 ? "bg-blue-600" : "bg-gray-300"
                    } text-white font-bold`}
                  >
                    2
                  </div>
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step >= 3 ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  ></div>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      step >= 3 ? "bg-blue-600" : "bg-gray-300"
                    } text-white font-bold`}
                  >
                    3
                  </div>
                </div>
              </div>

              {renderStepContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVGenerate; 