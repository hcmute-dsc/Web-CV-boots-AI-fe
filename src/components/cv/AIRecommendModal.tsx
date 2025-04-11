import React, { useState } from "react";

interface AIRecommendModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (description: string) => void;
  type: "Project" | "Experience";
}

const AIRecommendModal: React.FC<AIRecommendModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  type,
}) => {
  const [initialDescription, setInitialDescription] = useState("");
  const [generatedDescription, setGeneratedDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setGeneratedDescription("");

    try {
      const response = await fetch("https://apifit.andyanh.id.vn/api/cvs/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: type,
          initial_description: initialDescription,
        }),
      });

      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi tạo mô tả");
      }

      const data = await response.json();
      setGeneratedDescription(data.initial_description);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Đã xảy ra lỗi");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUseDescription = () => {
    onSelect(generatedDescription);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {type === "Project" ? "Viết mô tả dự án với AI" : "Viết mô tả công việc với AI"}
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mô tả sơ lược
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              rows={4}
              value={initialDescription}
              onChange={(e) => setInitialDescription(e.target.value)}
              placeholder={type === "Project" 
                ? "Nhập vài từ khóa về dự án của bạn (công nghệ sử dụng, mục tiêu, thành tựu...)" 
                : "Nhập vài từ khóa về công việc của bạn (trách nhiệm, kỹ năng, thành tựu...)"}
              required
            />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="flex justify-between mb-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 disabled:bg-blue-400"
            >
              {isLoading ? "Đang xử lý..." : "Tạo mô tả"}
            </button>
          </div>
        </form>

        {generatedDescription && (
          <div className="mt-4 border-t pt-4">
            <h3 className="font-medium text-gray-700 mb-2">Kết quả</h3>
            <div className="p-3 bg-gray-50 rounded-md mb-4 text-black">
              {generatedDescription}
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(generatedDescription)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200"
              >
                Sao chép
              </button>
              <button
                type="button"
                onClick={handleUseDescription}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
              >
                Sử dụng mô tả này
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIRecommendModal; 