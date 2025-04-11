import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookOpen,
  faBriefcase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { CVFormData } from "../value/cvTypes";
import AIRecommendModal from "./AIRecommendModal";
import { saveCVData, registerSaveNotification, unregisterSaveNotification } from "../value/defaultData";
import SaveNotification from "./SaveNotification";

interface CVFormProps {
  formData: CVFormData;
  setFormData: React.Dispatch<React.SetStateAction<CVFormData>>;
}

const CVForm: React.FC<CVFormProps> = ({ formData, setFormData }) => {
  const [showAIModal, setShowAIModal] = useState(false);
  const [currentModalType, setCurrentModalType] = useState<"Project" | "Experience">("Project");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  
  // Đăng ký thông báo khi lưu
  useEffect(() => {
    // Callback được gọi khi dữ liệu được lưu
    const handleSave = () => {
      setShowSaveNotification(true);
      setTimeout(() => setShowSaveNotification(false), 2000);
    };
    
    registerSaveNotification(handleSave);
    
    // Hủy đăng ký khi component unmount
    return () => {
      unregisterSaveNotification();
    };
  }, []);
  
  // Tự động lưu dữ liệu khi formData thay đổi
  useEffect(() => {
    // Chỉ lưu khi có dữ liệu có ý nghĩa
    if (
      formData.personalInfo.name ||
      formData.personalInfo.email ||
      formData.skills.some(skill => skill.trim() !== "") ||
      formData.education.some(edu => edu.school.trim() !== "" || edu.degree.trim() !== "") ||
      formData.experiences.some(exp => exp.company.trim() !== "" || exp.position.trim() !== "") ||
      formData.projects.some(proj => proj.name.trim() !== "" || proj.description.trim() !== "")
    ) {
      saveCVData(formData);
    }
  }, [formData]);

  const handleChange = (
    section: keyof CVFormData,
    field: string,
    value: string
  ) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section as keyof CVFormData],
        [field]: value,
      },
    });
  };

  const handleSkillChange = (index: number, value: string) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, ""],
    });
  };

  const removeSkill = (index: number) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const handleExperienceChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    };
    setFormData({
      ...formData,
      experiences: updatedExperiences,
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        {
          position: "",
          company: "",
          period: "",
          description: "",
        },
      ],
    });
  };

  const removeExperience = (index: number) => {
    const updatedExperiences = formData.experiences.filter(
      (_, i) => i !== index
    );
    setFormData({
      ...formData,
      experiences: updatedExperiences,
    });
  };

  const handleEducationChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedEducations = [...formData.education];
    updatedEducations[index] = {
      ...updatedEducations[index],
      [field]: value,
    };
    setFormData({
      ...formData,
      education: updatedEducations,
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          degree: "",
          school: "",
          period: "",
        },
      ],
    });
  };

  const removeEducation = (index: number) => {
    const updatedEducations = formData.education.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      education: updatedEducations,
    });
  };

  const handleProjectChange = (index: number, field: string, value: string) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };
    setFormData({
      ...formData,
      projects: updatedProjects,
    });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        {
          name: "",
          description: "",
        },
      ],
    });
  };

  const removeProject = (index: number) => {
    const updatedProjects = formData.projects.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      projects: updatedProjects,
    });
  };

  const openAIModal = (type: "Project" | "Experience", index: number) => {
    setCurrentModalType(type);
    setCurrentIndex(index);
    setShowAIModal(true);
  };

  const handleAIDescriptionSelect = (description: string) => {
    if (currentModalType === "Project") {
      handleProjectChange(currentIndex, "description", description);
    } else {
      handleExperienceChange(currentIndex, "description", description);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-lg bg-gray-100 p-1 mb-6">
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all duration-200
              ${
                selected
                  ? "bg-white shadow text-blue-600"
                  : "text-gray-600 hover:bg-white/[0.4] hover:text-blue-500"
              }
            `
            }
          >
            <div className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faUser} />
              <span>Thông tin cá nhân</span>
            </div>
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all duration-200
              ${
                selected
                  ? "bg-white shadow text-blue-600"
                  : "text-gray-600 hover:bg-white/[0.4] hover:text-blue-500"
              }
            `
            }
          >
            <div className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faBookOpen} />
              <span>Học vấn</span>
            </div>
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all duration-200
              ${
                selected
                  ? "bg-white shadow text-blue-600"
                  : "text-gray-600 hover:bg-white/[0.4] hover:text-blue-500"
              }
            `
            }
          >
            <div className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faBriefcase} />
              <span>Kinh nghiệm</span>
            </div>
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all duration-200
              ${
                selected
                  ? "bg-white shadow text-blue-600"
                  : "text-gray-600 hover:bg-white/[0.4] hover:text-blue-500"
              }
            `
            }
          >
            <div className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faCode} />
              <span>Kỹ năng & Dự án</span>
            </div>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          {/* Thông tin cá nhân */}
          <Tab.Panel>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
 text-black
"
                    value={formData.personalInfo.name}
                    onChange={(e) =>
                      handleChange("personalInfo", "name", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vị trí ứng tuyển
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
"
                    value={formData.personalInfo.title}
                    onChange={(e) =>
                      handleChange("personalInfo", "title", e.target.value)
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tóm tắt bản thân
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
"
                  rows={4}
                  value={formData.personalInfo.summary}
                  onChange={(e) =>
                    handleChange("personalInfo", "summary", e.target.value)
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
"
                    value={formData.personalInfo.email}
                    onChange={(e) =>
                      handleChange("personalInfo", "email", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
"
                    value={formData.personalInfo.phone}
                    onChange={(e) =>
                      handleChange("personalInfo", "phone", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
"
                    value={formData.personalInfo.location}
                    onChange={(e) =>
                      handleChange("personalInfo", "location", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Website
                  </label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
"
                    value={formData.personalInfo.website}
                    onChange={(e) =>
                      handleChange("personalInfo", "website", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </Tab.Panel>

          {/* Học vấn */}
          <Tab.Panel>
            <div className="space-y-6">
              {formData.education.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg relative"
                >
                  <button
                    type="button"
                    className="absolute top-3 right-3 text-red-500"
                    onClick={() => removeEducation(index)}
                  >
                    ×
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bằng cấp/Chuyên ngành
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
"
                        value={edu.degree}
                        onChange={(e) =>
                          handleEducationChange(index, "degree", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Trường
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
"
                        value={edu.school}
                        onChange={(e) =>
                          handleEducationChange(index, "school", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Thời gian
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
"
                      placeholder="VD: 2018-2022"
                      value={edu.period}
                      onChange={(e) =>
                        handleEducationChange(index, "period", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="w-full py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors duration-200"
                onClick={addEducation}
              >
                + Thêm học vấn
              </button>
            </div>
          </Tab.Panel>

          {/* Kinh nghiệm làm việc */}
          <Tab.Panel>
            <div className="space-y-6">
              {formData.experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg relative"
                >
                  <button
                    type="button"
                    className="absolute top-3 right-3 text-red-500"
                    onClick={() => removeExperience(index)}
                  >
                    ×
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Vị trí
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
"
                        value={exp.position}
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "position",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Công ty
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
"
                        value={exp.company}
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "company",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Thời gian
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
"
                      placeholder="VD: 2020 - Hiện tại"
                      value={exp.period}
                      onChange={(e) =>
                        handleExperienceChange(index, "period", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mô tả công việc
                    </label>
                    <div className="relative">
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        rows={3}
                        placeholder="Mô tả công việc và thành tựu của bạn"
                        value={exp.description}
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                      />
                      <button
                        type="button"
                        className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                        onClick={() => openAIModal("Experience", index)}
                      >
                        Viết mô tả với AI
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="w-full py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors duration-200"
                onClick={addExperience}
              >
                + Thêm kinh nghiệm
              </button>
            </div>
          </Tab.Panel>

          {/* Kỹ năng & Dự án */}
          <Tab.Panel>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Kỹ năng</h3>
                {formData.skills.map((skill, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
"
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                    />
                    <button
                      type="button"
                      className="ml-2 text-red-500"
                      onClick={() => removeSkill(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="w-full py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors duration-200"
                  onClick={addSkill}
                >
                  + Thêm kỹ năng
                </button>
              </div>

              <div>
                <h3 className="font-medium text-gray-700 mb-3">Dự án</h3>
                {formData.projects.map((project, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg relative mb-4"
                  >
                    <button
                      type="button"
                      className="absolute top-3 right-3 text-red-500"
                      onClick={() => removeProject(index)}
                    >
                      ×
                    </button>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tên dự án
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
"
                        value={project.name}
                        onChange={(e) =>
                          handleProjectChange(index, "name", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mô tả dự án
                      </label>
                      <div className="relative">
                        <textarea
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                          rows={3}
                          value={project.description}
                          onChange={(e) =>
                            handleProjectChange(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                        />
                        <button
                          type="button"
                          className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                          onClick={() => openAIModal("Project", index)}
                        >
                          Viết mô tả với AI
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="w-full py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors duration-200"
                  onClick={addProject}
                >
                  + Thêm dự án
                </button>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <AIRecommendModal
        isOpen={showAIModal}
        onClose={() => setShowAIModal(false)}
        onSelect={handleAIDescriptionSelect}
        type={currentModalType}
      />
      
      <SaveNotification show={showSaveNotification} />
    </div>
  );
};

export default CVForm;
