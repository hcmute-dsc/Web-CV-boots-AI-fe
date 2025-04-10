import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface TipCardProps {
  icon: IconDefinition;
  title: string;
  children: React.ReactNode;
  iconBgColor?: string;
}

const TipCard: React.FC<TipCardProps> = ({
  icon,
  title,
  children,
  iconBgColor = "bg-blue-100",
}) => {
  return (
    <div className="tip-card max-w-full mb-10 transform transition-all duration-300 hover:scale-102 hover:shadow-lg bg-white rounded-lg shadow-md">
      <div className="tip-card-content p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-start gap-3 mb-4 md:mb-5">
          <div
            className={`${iconBgColor} p-3 rounded-full self-start transform transition-all duration-300 hover:scale-110`}
          >
            <FontAwesomeIcon icon={icon} className="text-primary h-4 w-4" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-primary">
            {title}
          </h3>
        </div>
        <div className="md:ml-12 text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default TipCard;
