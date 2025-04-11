import { CVFormData, TemplateInfo, TemplateType } from './cvTypes';

// Dữ liệu mặc định cho form CV
export const defaultCVData: CVFormData = {
  personalInfo: {
    name: "",
    title: "",
    summary: "",
    email: "",
    phone: "",
    location: "",
    website: "",
  },
  skills: [""],
  education: [
    {
      degree: "",
      school: "",
      period: "",
    },
  ],
  experiences: [
    {
      position: "",
      company: "",
      period: "",
      description: "",
    },
  ],
  projects: [
    {
      name: "",
      description: "",
    },
  ],
};

// Dữ liệu mẫu cho form CV
export const sampleCVData: CVFormData = {
  personalInfo: {
    name: "Nguyễn Văn A",
    title: "Frontend Developer",
    summary: "Frontend developer với 3 năm kinh nghiệm làm việc với React, TypeScript và các công nghệ web hiện đại. Chuyên về xây dựng UI/UX đẹp và tối ưu hiệu suất ứng dụng web.",
    email: "nguyenvana@example.com",
    phone: "0123456789",
    location: "Hà Nội, Việt Nam",
    website: "nguyenvana.dev",
  },
  skills: [
    "HTML/CSS", 
    "JavaScript/TypeScript", 
    "React", 
    "Redux", 
    "Tailwind CSS", 
    "Git", 
    "Responsive Design"
  ],
  education: [
    {
      degree: "Kỹ sư Công nghệ thông tin",
      school: "Đại học Bách Khoa Hà Nội",
      period: "2015-2019",
    },
    {
      degree: "Chứng chỉ Frontend Development",
      school: "F8 Academy",
      period: "2020",
    },
  ],
  experiences: [
    {
      position: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Hiện tại",
      description: "Phát triển giao diện người dùng cho các ứng dụng web sử dụng React và TypeScript. Tối ưu hóa hiệu suất trang web và cải thiện trải nghiệm người dùng.",
    },
    {
      position: "Junior Web Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Xây dựng và duy trì websites cho khách hàng. Làm việc với HTML, CSS, JavaScript và WordPress.",
    },
  ],
  projects: [
    {
      name: "E-commerce Platform",
      description: "Xây dựng giao diện người dùng cho nền tảng thương mại điện tử sử dụng React, Redux và Tailwind CSS. Cải thiện tốc độ tải trang và tối ưu SEO.",
    },
    {
      name: "Task Management App",
      description: "Phát triển ứng dụng quản lý công việc với tính năng kéo thả, thông báo real-time và tích hợp với các dịch vụ bên thứ ba.",
    },
  ],
};

// Thông tin các mẫu CV
export const templateList: TemplateInfo[] = [
  {
    id: TemplateType.MODERN,
    name: "Mẫu Chuyên Nghiệp",
    description: "Phù hợp cho ngành IT, kinh doanh",
  },
  {
    id: TemplateType.MINIMALIST,
    name: "Mẫu Tối Giản",
    description: "Phù hợp cho mọi ngành nghề, đơn giản và dễ đọc",
  },
  {
    id: TemplateType.CREATIVE,
    name: "Mẫu Sáng Tạo",
    description: "Phù hợp cho ngành thiết kế, nghệ thuật, marketing",
  },
];

// Biến theo dõi trạng thái lưu
let lastSaved = 0;
let saveCallback: (() => void) | null = null;

// Hàm lấy dữ liệu CV từ localStorage
export const loadCVData = (): CVFormData => {
  try {
    const savedData = localStorage.getItem('cv_form_data');
    if (savedData) {
      return JSON.parse(savedData);
    }
  } catch (error) {
    console.error("Lỗi khi đọc dữ liệu CV từ localStorage:", error);
  }
  return defaultCVData;
};

// Hàm lưu dữ liệu CV vào localStorage
export const saveCVData = (data: CVFormData, onSave?: () => void): void => {
  try {
    localStorage.setItem('cv_form_data', JSON.stringify(data));
    console.log("Đã lưu dữ liệu CV thành công");
    
    // Đảm bảo không gọi callback quá thường xuyên
    const now = Date.now();
    if (now - lastSaved > 1000) { // Giới hạn chỉ hiển thị thông báo mỗi giây
      lastSaved = now;
      if (onSave) onSave();
      // Chạy callback đã đăng ký nếu có
      if (saveCallback) saveCallback();
    }
  } catch (error) {
    console.error("Lỗi khi lưu dữ liệu CV:", error);
  }
};

// Đăng ký callback cho thông báo lưu
export const registerSaveNotification = (callback: () => void): void => {
  saveCallback = callback;
};

// Hủy đăng ký callback
export const unregisterSaveNotification = (): void => {
  saveCallback = null;
}; 