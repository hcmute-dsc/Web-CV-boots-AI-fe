import React from "react";

interface QuoteTipProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "error"; // Thêm type "error"
}

const QuoteTip: React.FC<QuoteTipProps> = ({ children, type = "info" }) => {
  // Định nghĩa màu sắc dựa trên type
  const bgColor =
    type === "info"
      ? "bg-blue-50 border-blue-500 text-blue-800"
      : type === "warning"
      ? "bg-amber-50 border-amber-500 text-amber-800"
      : "bg-red-50 border-red-500 text-red-800"; // Thêm màu đỏ cho type="error"

  return (
    <div
      className={`border-l-3 p-4 my-5 text-sm rounded-r ${bgColor} transition-transform duration-200 hover:scale-[1.02] will-change-transform`}
    >
      <div className="relative">
        <span className="text-lg font-serif absolute -top-2 -left-2 opacity-30 select-none pointer-events-none">
          "
        </span>
        {children}
        <span className="text-lg font-serif absolute -bottom-3 -right-1 opacity-30 select-none pointer-events-none">
          "
        </span>
      </div>
    </div>
  );
};

export default React.memo(QuoteTip);
