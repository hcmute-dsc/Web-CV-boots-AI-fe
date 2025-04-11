import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
interface CVCardProps {
  title: string;
  description: string;
  image: string;
  template: React.ReactNode;
}

const CVCard = ({ title, description, image, template }: CVCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGenerateCV = () => {
    console.log("Generate CV clicked");
  };

  return (
    <>
      <div
        className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-500 border border-gray-100 overflow-hidden cursor-pointer hover:scale-[1.03]"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Hình ảnh */}
        <div className="h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Nội dung */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-500 mt-2 text-sm leading-relaxed">
            {description}
          </p>

          <div className="flex justify-end gap-4 mt-6">
            <button
              className="relative bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-blue-500/50 hover:bg-blue-700 transition duration-300 overflow-hidden hover:scale-105"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
            >
              Xem trước
            </button>
            <button
              className="relative bg-pink-600 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-purple-500/50 hover:bg-purple-700 transition duration-300 overflow-hidden hover:scale-105 flex items-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
                handleGenerateCV();
              }}
            >
              <FontAwesomeIcon icon={faStar} spin />
              Tạo CV
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[85vh] bg-white rounded-xl shadow-2xl overflow-y-auto transform transition duration-300 scale-100 hover:scale-[1.01]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-9 h-9 text-gray-700 hover:text-white bg-gray-200 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <div className="p-6">{template}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default CVCard;
