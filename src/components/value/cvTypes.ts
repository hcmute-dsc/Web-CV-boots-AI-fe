// Định nghĩa các types cho CV

// Thông tin cá nhân
export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  website: string;
}

// Học vấn
export interface Education {
  degree: string;
  school: string;
  period: string;
}

// Kinh nghiệm làm việc
export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
}

// Dự án
export interface Project {
  name: string;
  description: string;
}

// Form dữ liệu CV
export interface CVFormData {
  personalInfo: PersonalInfo;
  skills: string[];
  education: Education[];
  experiences: Experience[];
  projects: Project[];
}

// Các loại template
export enum TemplateType {
  MODERN = "modern",
  MINIMALIST = "minimalist",
  CREATIVE = "creative",
}

// Template Info
export interface TemplateInfo {
  id: TemplateType;
  name: string;
  description: string;
} 