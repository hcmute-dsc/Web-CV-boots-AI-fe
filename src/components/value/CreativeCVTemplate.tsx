import React from "react";
import { CVFormData } from "./cvTypes";

interface CreativeCVTemplateProps {
  formData: CVFormData;
}

const CreativeCVTemplate: React.FC<CreativeCVTemplateProps> = ({ formData }) => {
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
    <div className="bg-white overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              {formData.personalInfo.name || "Tên của bạn"}
            </h1>
            <h2 className="text-xl md:text-2xl font-light opacity-90 mb-4">
              {formData.personalInfo.title || "Chức danh của bạn"}
            </h2>
            {formData.personalInfo.summary && (
              <p className="max-w-xl text-indigo-100 leading-relaxed">
                {formData.personalInfo.summary}
              </p>
            )}
          </div>
          <div className="mt-6 md:mt-0">
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-4xl font-bold shadow-lg border-4 border-white/30">
              {getInitials()}
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Info */}
      <div className="bg-indigo-900 text-white px-8 py-3">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
          {formData.personalInfo.email && (
            <div className="flex items-center">
              <span className="mr-2">✉️</span>
              <span>{formData.personalInfo.email}</span>
            </div>
          )}
          {formData.personalInfo.phone && (
            <div className="flex items-center">
              <span className="mr-2">📱</span>
              <span>{formData.personalInfo.phone}</span>
            </div>
          )}
          {formData.personalInfo.location && (
            <div className="flex items-center">
              <span className="mr-2">📍</span>
              <span>{formData.personalInfo.location}</span>
            </div>
          )}
          {formData.personalInfo.website && (
            <div className="flex items-center">
              <span className="mr-2">🌐</span>
              <span>{formData.personalInfo.website}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Experience Section */}
            {formData.experiences.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-indigo-200">
                  <span className="text-indigo-600">Kinh nghiệm</span> làm việc
                </h2>
                
                <div className="space-y-6">
                  {formData.experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-indigo-200">
                      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-indigo-600 -translate-x-[6px]"></div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                      <div className="text-indigo-600 font-medium">{exp.company}</div>
                      <div className="text-sm text-gray-500 mb-3">{exp.period}</div>
                      {exp.description && <p className="text-gray-600">{exp.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Projects Section */}
            {formData.projects.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-indigo-200">
                  <span className="text-indigo-600">Dự án</span> nổi bật
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formData.projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{project.name}</h3>
                      <p className="text-gray-600 text-sm">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* Education Section */}
            {formData.education.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-indigo-200">
                  <span className="text-indigo-600">Học</span> vấn
                </h2>
                
                <div className="space-y-4">
                  {formData.education.map((edu, index) => (
                    <div key={index} className="bg-indigo-50 rounded-lg p-4">
                      <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                      <div className="text-indigo-600">{edu.school}</div>
                      {edu.period && <div className="text-sm text-gray-500">{edu.period}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Skills Section */}
            {formData.skills.length > 0 && formData.skills[0] !== "" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-indigo-200">
                  <span className="text-indigo-600">Kỹ</span> năng
                </h2>
                
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeCVTemplate;
