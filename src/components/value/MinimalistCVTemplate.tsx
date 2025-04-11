import React from "react";
import { CVFormData } from "./cvTypes";

interface MinimalistCVTemplateProps {
  formData: CVFormData;
}

const MinimalistCVTemplate: React.FC<MinimalistCVTemplateProps> = ({ formData }) => {
  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-light mb-2">{formData.personalInfo.name || "TÊN CỦA BẠN"}</h1>
        <p className="text-lg text-gray-500">{formData.personalInfo.title || "Chức danh của bạn"}</p>
        <div className="divider mx-auto w-24 my-4"></div>
        <div className="flex justify-center gap-4 text-sm flex-wrap">
          {formData.personalInfo.email && <p>{formData.personalInfo.email}</p>}
          {formData.personalInfo.email && formData.personalInfo.phone && <p>•</p>}
          {formData.personalInfo.phone && <p>{formData.personalInfo.phone}</p>}
          {(formData.personalInfo.email || formData.personalInfo.phone) && formData.personalInfo.location && <p>•</p>}
          {formData.personalInfo.location && <p>{formData.personalInfo.location}</p>}
          {(formData.personalInfo.email || formData.personalInfo.phone || formData.personalInfo.location) && formData.personalInfo.website && <p>•</p>}
          {formData.personalInfo.website && <p>{formData.personalInfo.website}</p>}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-6">
          {/* Education Section */}
          {formData.education.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-3">HỌC VẤN</h2>
              {formData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-sm">{edu.school}</p>
                  {edu.period && <p className="text-sm text-gray-500">{edu.period}</p>}
                </div>
              ))}
            </div>
          )}
          
          {/* Skills Section */}
          {formData.skills.length > 0 && formData.skills[0] !== "" && (
            <div>
              <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-3">KỸ NĂNG</h2>
              <div className="space-y-2">
                {formData.skills.map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-6 md:col-span-2">
          {/* Summary Section */}
          {formData.personalInfo.summary && (
            <div>
              <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-3">GIỚI THIỆU</h2>
              <p className="text-sm text-gray-600 mb-6">{formData.personalInfo.summary}</p>
            </div>
          )}
          
          {/* Experience Section */}
          {formData.experiences.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-3">KINH NGHIỆM</h2>
              {formData.experiences.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <p className="font-medium text-gray-800">{exp.position}</p>
                    {exp.period && <p className="text-sm text-gray-500">{exp.period}</p>}
                  </div>
                  <p className="text-sm">{exp.company}</p>
                  {exp.description && <p className="text-sm text-gray-600 mt-2">{exp.description}</p>}
                </div>
              ))}
            </div>
          )}
          
          {/* Projects Section */}
          {formData.projects.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-3">DỰ ÁN</h2>
              {formData.projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <p className="font-medium">{project.name}</p>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MinimalistCVTemplate;
