import React from "react";
import { CVFormData } from "./cvTypes";

interface ModernCVTemplateProps {
  formData: CVFormData;
}

const ModernCVTemplate: React.FC<ModernCVTemplateProps> = ({ formData }) => {
  // Lấy chữ cái đầu tên và họ để hiển thị hình đại diện
  const getInitials = () => {
    const { name } = formData.personalInfo;
    if (!name) return "CV";
    
    const nameParts = name.split(" ");
    if (nameParts.length === 1) return nameParts[0].charAt(0).toUpperCase();
    
    const firstInitial = nameParts[0].charAt(0);
    const lastInitial = nameParts[nameParts.length - 1].charAt(0);
    return (firstInitial + lastInitial).toUpperCase();
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white text-gray-800 p-10 rounded-xl shadow-2xl">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <div className="md:w-1/3 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg shadow-lg">
          {/* Avatar */}
          <div className="avatar mb-8 flex justify-center">
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-inner">
              <span className="text-5xl text-gray-700 font-extrabold">{getInitials()}</span>
            </div>
          </div>

          {/* Contact Information */}
          <h2 className="text-2xl font-bold mb-6 text-gray-700">
            Thông tin liên hệ
          </h2>
          <div className="divider my-3"></div>
          {formData.personalInfo.email && (
            <p className="mb-3">
              <span className="font-semibold">Email:</span> {formData.personalInfo.email}
            </p>
          )}
          {formData.personalInfo.phone && (
            <p className="mb-3">
              <span className="font-semibold">SĐT:</span> {formData.personalInfo.phone}
            </p>
          )}
          {formData.personalInfo.location && (
            <p className="mb-6">
              <span className="font-semibold">Địa chỉ:</span> {formData.personalInfo.location}
            </p>
          )}
          {formData.personalInfo.website && (
            <p className="mb-6">
              <span className="font-semibold">Website:</span> {formData.personalInfo.website}
            </p>
          )}

          {/* Skills */}
          {formData.skills.length > 0 && formData.skills[0] !== "" && (
            <>
              <h2 className="text-2xl font-bold mb-6 text-gray-700">Kỹ năng</h2>
              <div className="divider my-3"></div>
              <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
                {formData.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </>
          )}

          {/* Education */}
          {formData.education.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-6 text-gray-700">Học vấn</h2>
              <div className="divider my-3"></div>
              <div className="text-gray-600 space-y-4">
                {formData.education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-semibold">{edu.degree}</p>
                    <p>{edu.school}{edu.period ? `, ${edu.period}` : ""}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Main Content */}
        <div className="md:w-2/3">
          {/* Header */}
          <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
            {formData.personalInfo.name || "Tên của bạn"}
          </h1>
          <p className="text-2xl text-gray-500 mb-8">
            {formData.personalInfo.title || "Chức danh của bạn"}
          </p>

          {/* Profile */}
          {formData.personalInfo.summary && (
            <>
              <h2 className="text-2xl font-bold mb-6 text-gray-700">Giới thiệu</h2>
              <div className="divider my-3"></div>
              <p className="mb-8 text-gray-600 leading-relaxed">
                {formData.personalInfo.summary}
              </p>
            </>
          )}

          {/* Work Experience */}
          {formData.experiences.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-6 text-gray-700">
                Kinh nghiệm làm việc
              </h2>
              <div className="divider my-3"></div>

              {formData.experiences.map((exp, index) => (
                <div key={index} className="mb-10">
                  <h3 className="font-bold text-xl text-gray-800">
                    {exp.position}
                  </h3>
                  <p className="text-gray-500">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                  {exp.description && (
                    <p className="text-gray-600">{exp.description}</p>
                  )}
                </div>
              ))}
            </>
          )}

          {/* Projects */}
          {formData.projects.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-6 text-gray-700">Dự án</h2>
              <div className="divider my-3"></div>

              {formData.projects.map((project, index) => (
                <div key={index} className="mb-8">
                  <h3 className="font-semibold text-gray-800">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernCVTemplate;
