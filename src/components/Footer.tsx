import React from "react";
import { FaFacebookF, FaGithub, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-10">
        {/* Section 1: Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">CV Booster</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Tạo CV chuyên nghiệp và ấn tượng chỉ trong vài phút. Đồng hành cùng
            sinh viên, người đi làm và mọi hành trình sự nghiệp.
          </p>
        </div>

        {/* Section 2: Services */}
        <div>
          <h6 className="text-lg font-semibold mb-4 text-white">Dịch vụ</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Tạo CV
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Mẫu CV
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Gợi ý nội dung
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Phân tích CV
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Công ty */}
        <div>
          <h6 className="text-lg font-semibold mb-4 text-white">Công ty</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Giới thiệu
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/hcmute.dsc"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                Fanpage
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hcmute-dsc"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4: Legal */}
        <div>
          <h6 className="text-lg font-semibold mb-4 text-white">Pháp lý</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Điều khoản sử dụng
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Chính sách Cookie
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center mt-8 px-2">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} CV Booster. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a
            href="https://www.facebook.com/hcmute.dsc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-blue-500 text-white p-2 rounded-full transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/hcmute-dsc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="bg-gray-700 hover:bg-indigo-500 text-white p-2 rounded-full transition duration-300"
          >
            <FaGlobe />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
