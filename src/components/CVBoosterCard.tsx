import {
  faBolt,
  faFlask,
  faFileAlt,
  faRocket,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CVBoosterCard: React.FC = () => {
  return (
    <div className="font-[Inter] bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-[#183DB9] mb-4 tracking-wide">
          CV Booster
        </h1>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Nâng cấp hồ sơ chuyên nghiệp của bạn với sức mạnh của AI. Tạo CV ấn
          tượng chỉ trong vài phút.
        </p>

        {/* Component Card: Tạo CV chuyên nghiệp chỉ với vài bước đơn giản */}
        <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 transform hover:shadow-2xl transition-all duration-300">
          {/* Nội dung bên trái */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 tracking-wide">
              Tạo CV chuyên nghiệp chỉ với vài bước đơn giản
            </h2>
            <ul className="space-y-4 mb-8">
              {[
                "Nhập thông tin cá nhân, kinh nghiệm",
                "Chọn mẫu CV phù hợp với ngành nghề",
                "AI tự động tối ưu hóa nội dung",
                "Tải xuống CV dưới dạng PDF",
              ].map((text, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 group"
                  data-tip="Chỉ mất 2 phút để hoàn thành bước này!"
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 text-lg group-hover:scale-110 transition-transform"
                  />
                  <span className="text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
            {/* Nút CTA với gradient và hiệu ứng nổi bật */}
            <button
              className="btn bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold flex items-center gap-2 hover:from-blue-600 hover:to-blue-800 hover:scale-105 transition-all duration-300 rounded-lg px-6 py-3 outline-none focus:outline-none"
              onClick={() => (window.location.href = "/cvgenerate")}
            >
              Bắt đầu ngay
              <FontAwesomeIcon icon={faRocket} className="fa-spin" />
            </button>
          </div>
          {/* Hình minh họa bên phải - Tăng kích thước */}
          <div className="md:w-1/2 relative scale-110">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-8 shadow-inner">
              <div className="bg-white rounded-lg p-6 shadow-md transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="h-24 bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-lg"></div>
                <div className="h-5 bg-gray-100 rounded mt-4 w-3/4"></div>
                <div className="h-5 bg-gray-100 rounded mt-3 w-5/6"></div>
                <div className="h-5 bg-gray-100 rounded mt-3 w-2/3"></div>
              </div>
            </div>
            {/* Hiệu ứng trang trí */}
            <div className="absolute -top-2 -right-2 h-14 w-14 bg-blue-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-2 -left-2 h-20 w-20 bg-blue-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Component Grid: Tại sao chọn CV Booster? */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-16 tracking-wide">
          Tại sao chọn CV Booster?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: faBolt,
              title: "Nhanh chóng & Dễ dàng",
              text: "Tạo CV chuyên nghiệp chỉ trong vài phút với giao diện trực quan, dễ sử dụng.",
              color: "text-blue-500",
            },
            {
              icon: faFlask,
              title: "Tối ưu bằng AI",
              text: "Công nghệ AI giúp tối ưu hóa nội dung CV, đề xuất cách diễn đạt chuyên nghiệp.",
              color: "text-blue-500",
            },
            {
              icon: faFileAlt,
              title: "Mẫu đẹp & Chuyên nghiệp",
              text: "Nhiều mẫu CV đa dạng, thiết kế chuyên nghiệp phù hợp với nhiều ngành nghề.",
              color: "text-blue-500",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-50 mb-6 mx-auto">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className={`text-2xl ${feature.color}`}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CVBoosterCard;
