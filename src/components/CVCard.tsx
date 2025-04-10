import { useState } from "react";

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
        className="card bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 cursor-pointer hover:scale-105 transform"
        onClick={() => setIsModalOpen(true)}
      >
        <figure className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </figure>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 hover:text-primary transition-colors duration-300">
            {title}
          </h2>
          <p className="text-gray-600 mb-5 text-sm">{description}</p>
          <div className="flex justify-end gap-2">
            <button
              className="btn btn-primary gap-2 text-white hover:bg-primary/90 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
            >
              Preview
            </button>
            <button
              className="btn btn-secondary gap-2 text-white hover:bg-secondary/90 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                handleGenerateCV();
              }}
            >
              Generate CV
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <dialog
          open
          className="modal modal-open backdrop-blur-sm bg-black/50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal-box max-w-4xl w-full h-[80vh] overflow-y-auto rounded-lg shadow-lg bg-white relative p-6 transform transition-transform duration-300 scale-100 hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-600 hover:text-white hover:bg-red-500 transition-colors duration-300"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <div className="content-container p-4">{template}</div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default CVCard;
