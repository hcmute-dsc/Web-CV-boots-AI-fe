import React, { useState } from "react";

type FAQItemProps = {
  title: string;
  children: React.ReactNode;
};

const FAQItem: React.FC<FAQItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl mb-6 transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100">
      <div
        className="flex justify-between items-center p-5 cursor-pointer rounded-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <span
          className={`text-gray-500 transition-transform duration-500 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>

      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen p-5" : "max-h-0 p-0"
        }`}
      >
        <div className="text-gray-700 text-base leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const CVBoosterFAQ: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            Câu hỏi thường gặp
          </h1>
          <p className="text-lg text-gray-600">
            Tìm câu trả lời cho những câu hỏi phổ biến về CV Booster
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          <FAQItem title="CV Booster là gì?">
            <p>
              CV Booster là công cụ hỗ trợ tạo CV chuyên nghiệp và hiệu quả.
            </p>
          </FAQItem>

          <FAQItem title="Tôi có phải trả phí để sử dụng CV Booster không?">
            <p>
              Chúng tôi cung cấp cả phiên bản miễn phí và trả phí với các tính
              năng khác nhau.
            </p>
          </FAQItem>

          <FAQItem title="Làm thế nào để bắt đầu tạo CV?">
            <p>
              Chọn mẫu CV, điền thông tin cá nhân, và tùy chỉnh theo nhu cầu của
              bạn.
            </p>
          </FAQItem>

          <FAQItem title="CV Booster có bao nhiêu mẫu CV?">
            <p>Chúng tôi hiện có hơn 50 mẫu CV cho các ngành nghề khác nhau.</p>
          </FAQItem>

          <FAQItem title="Tôi có thể tải CV xuống dưới định dạng nào?">
            <p>Bạn có thể tải CV xuống các định dạng PDF, DOCX, và HTML.</p>
          </FAQItem>

          <FAQItem title="Làm thế nào để CV của tôi nổi bật hơn?">
            <p>
              Sử dụng các mẹo và công cụ chỉnh sửa chuyên nghiệp của chúng tôi.
            </p>
          </FAQItem>

          <FAQItem title="CV Booster có lưu trữ thông tin của tôi không?">
            <p>
              Chúng tôi bảo vệ thông tin cá nhân của bạn với các biện pháp bảo
              mật cao.
            </p>
          </FAQItem>

          <FAQItem title="Tôi có thể sử dụng CV Booster trên điện thoại di động không?">
            <p>
              Có, CV Booster hoàn toàn tương thích với các thiết bị di động.
            </p>
          </FAQItem>

          <FAQItem title="Làm thế nào để liên hệ với đội ngũ hỗ trợ?">
            <p>
              Bạn có thể liên hệ qua Facebook:
              <a
                href="https://www.facebook.com/hcmute.dsc"
                className="text-blue-500 hover:underline"
              >
                https://www.facebook.com/hcmute.dsc
              </a>
            </p>
          </FAQItem>
        </div>

        <div className="text-center mt-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Bạn có câu hỏi khác?
          </h1>
          <p className="text-gray-600 mb-5 text-lg">
            Nếu bạn không tìm thấy câu trả lời cho câu hỏi của mình, hãy liên hệ
            với chúng tôi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CVBoosterFAQ;
