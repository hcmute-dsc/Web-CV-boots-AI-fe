import { useState, useEffect, useRef } from "react";
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
  loadCVData,
  saveCVData,
} from "../components/value/defaultData";

// LocalStorage key
const CV_DATA_KEY = "cv_form_data";
const CV_TEMPLATE_KEY = "cv_template";

const CVGenerate = () => {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType | null>(
    null
  );
  const [formData, setFormData] = useState<CVFormData>(() => loadCVData());
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  // Khôi phục template từ localStorage khi component được mount
  useEffect(() => {
    const savedTemplate = localStorage.getItem(CV_TEMPLATE_KEY);

    if (savedTemplate) {
      setSelectedTemplate(savedTemplate as TemplateType);
    }
  }, []);

  // Lưu template vào localStorage khi selectedTemplate thay đổi
  useEffect(() => {
    if (selectedTemplate) {
      localStorage.setItem(CV_TEMPLATE_KEY, selectedTemplate);
    }
  }, [selectedTemplate]);

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
    saveCVData(sampleCVData);
  };

  // Hàm bật/tắt chế độ xem trước
  const togglePreviewMode = () => {
    // Đảm bảo dữ liệu được lưu trước khi xem trước
    saveCVData(formData);
    console.log("Chuyển chế độ xem trước, dữ liệu CV:", formData);
    setIsPreviewMode(!isPreviewMode);
  };

  // Hàm tải xuống PDF
  const downloadPDF = () => {
    if (!previewRef.current) {
      console.error("Không tìm thấy phần tử để tạo PDF");
      alert("Lỗi: Không thể tạo tệp PDF. Vui lòng thử lại.");
      return;
    }

    setIsDownloading(true);
    console.log("Bắt đầu quá trình in...");

    // Sử dụng window.print() để in trực tiếp
    setTimeout(() => {
      const originalTitle = document.title;
      document.title = `CV-${formData.personalInfo.name || "My-CV"}`;

      // Hiển thị thông báo hướng dẫn
      alert(
        "Hộp thoại in sẽ mở ra. Chọn 'Lưu dưới dạng PDF' hoặc 'Save as PDF' để tải xuống CV của bạn."
      );

      // Gắn một event listener tạm thời để biết khi nào in xong
      const mediaQueryList = window.matchMedia("print");
      const handlePrintChange = () => {
        if (!mediaQueryList.matches) {
          // In đã hoàn tất
          document.title = originalTitle;
          setIsDownloading(false);
          mediaQueryList.removeEventListener("change", handlePrintChange);

          // Hiển thị thông báo thành công
          setTimeout(() => {
            alert("Tạo PDF thành công!");
          }, 500);
        }
      };

      mediaQueryList.addEventListener("change", handlePrintChange);

      window.print();

      // Fallback nếu sự kiện không được kích hoạt
      setTimeout(() => {
        if (isDownloading) {
          setIsDownloading(false);
          document.title = originalTitle;
        }
      }, 5000);
    }, 200);
  };

  // Hàm render nội dung của từng bước
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="py-12 px-4 md:px-10 bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 drop-shadow-md animate-pulse">
              ✨ Chọn mẫu CV phù hợp ✨
            </h2>

            <TemplateSelector
              selectedTemplate={selectedTemplate}
              onSelectTemplate={setSelectedTemplate}
              templateList={templateList}
            />

            <div className="flex justify-center mt-12">
              <button
                className={`relative group transition-all duration-300 ease-in-out px-10 py-3 rounded-full font-bold text-white bg-gradient-to-r from-fuchsia-600 to-pink-500 shadow-xl hover:from-pink-500 hover:to-yellow-400 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
                onClick={goToNextStep}
                disabled={!selectedTemplate}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Tiếp tục
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </button>
            </div>
          </div>
        );
      case 2:
        if (isPreviewMode) {
          return (
            <div className="py-8">
              <h2 className="text-2xl font-bold text-center mb-8 text-blue-800">
                Xem trước CV
              </h2>
              <div className="mb-4">
                <button
                  className="text-blue-700 hover:text-blue-900 text-sm font-medium"
                  onClick={togglePreviewMode}
                >
                  ← Quay lại chỉnh sửa
                </button>
              </div>
              <div className="max-w-4xl mx-auto">
                <div
                  ref={previewRef}
                  className="bg-white shadow-lg rounded-lg print-cv-container"
                >
                  <CVPreview template={selectedTemplate} formData={formData} />
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex items-center gap-2"
                  onClick={downloadPDF}
                  disabled={isDownloading}
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <span>{isDownloading ? "Đang tạo..." : "Tải xuống PDF"}</span>
                </button>
              </div>
            </div>
          );
        }

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
              <div className="hidden lg:block">
                <div
                  ref={previewRef}
                  className="bg-white shadow-lg rounded-lg print-cv-container"
                >
                  <CVPreview template={selectedTemplate} formData={formData} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6">
              <button
                className="bg-gradient-to-r from-gray-800 to-black text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                onClick={goToPreviousStep}
              >
                Quay lại
              </button>

              <div className="flex items-center gap-4">
                <button
                  className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex items-center gap-2"
                  onClick={togglePreviewMode}
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>Xem trước</span>
                </button>

                <button
                  className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex items-center gap-2"
                  onClick={downloadPDF}
                  disabled={isDownloading}
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <span>{isDownloading ? "Đang tạo..." : "Tải xuống PDF"}</span>
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
            <h1 className="text-3xl font-extrabold text-center text-blue-800 mb-3 leading-snug drop-shadow-sm tracking-tight">
              🌟 Tạo CV Chuyên Nghiệp
            </h1>
            <p className="text-center text-gray-600 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Hoàn thiện một bản CV chỉn chu, ấn tượng trong vài phút – mở rộng
              cánh cửa nghề nghiệp mơ ước của bạn!
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
