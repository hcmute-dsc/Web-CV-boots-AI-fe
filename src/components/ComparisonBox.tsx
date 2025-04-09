import React from "react";

interface ComparisonBoxProps {
  badExample: string;
  goodExample: string;
}

const ComparisonBox: React.FC<ComparisonBoxProps> = ({
  badExample,
  goodExample,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
      {/* Bad Example */}
      <div className="card bg-red-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white">
        <h4 className="font-bold text-red-600 mb-2 text-sm">Không hiệu quả:</h4>
        <p className="text-sm md:text-base text-gray-700">"{badExample}"</p>
      </div>

      {/* Good Example */}
      <div className="card bg-green-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white">
        <h4 className="font-bold text-green-600 mb-2 text-sm">Hiệu quả:</h4>
        <p className="text-sm md:text-base text-gray-700">"{goodExample}"</p>
      </div>
    </div>
  );
};

export default ComparisonBox;
