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
import {
  defaultCVData,
  templateList,
  sampleCVData,
} from "../components/value/defaultData";

const CVGenerate = () => {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType | null>(
    null
  );
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
            <h2 className="text-2xl font-bold text-center mb-8 text-blue-800 ">
              Chọn mẫu CV phù hợp
            </h2>
            <TemplateSelector
              selectedTemplate={selectedTemplate}
              onSelectTemplate={setSelectedTemplate}
              templateList={templateList}
            />
            <div className="flex justify-center">
              <button
                className="btn bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md flex items-center space-x-2 disabled:bg-gray-500 disabled:cursor-not-allowed"
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
            <h2 className="text-2xl font-bold text-center mb-8 text-blue-800">
              Nhập thông tin CV
            </h2>
            <div className="flex justify-end mb-4">
              <button
                className="text-blue-700 hover:text-blue-900 text-sm font-medium"
                onClick={applyExampleData}
              >
                Điền dữ liệu mẫu
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CVForm formData={formData} setFormData={setFormData} />
              <CVPreview template={selectedTemplate} formData={formData} />
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6">
              <button
                className="bg-gradient-to-r from-gray-800 to-black text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                onClick={goToPreviousStep}
              >
                Quay lại
              </button>

              <div className="flex items-center gap-4">
                <button className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex items-center gap-2">
                  <FontAwesomeIcon icon={faEye} />
                  <span>Xem trước</span>
                </button>

                <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex items-center gap-2">
                  <FontAwesomeIcon icon={faDownload} />
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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="py-8">
            <h1 className="text-3xl font-bold text-center text-blue-900 mb-2">
              Tạo CV Chuyên Nghiệp
            </h1>
            <p className="text-center text-gray-800 mb-8">
              Tạo CV ấn tượng chỉ trong vài phút để tăng cơ hội việc làm
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center w-full max-w-3xl">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      step >= 1 ? "bg-blue-700" : "bg-gray-400"
                    } text-white font-bold`}
                  >
                    1
                  </div>
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step >= 2 ? "bg-blue-700" : "bg-gray-400"
                    }`}
                  ></div>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      step >= 2 ? "bg-blue-700" : "bg-gray-400"
                    } text-white font-bold`}
                  >
                    2
                  </div>
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step >= 3 ? "bg-blue-700" : "bg-gray-400"
                    }`}
                  ></div>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      step >= 3 ? "bg-blue-700" : "bg-gray-400"
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
