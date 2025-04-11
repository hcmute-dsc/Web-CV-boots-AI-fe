import { Link } from "react-router-dom";
import logo from "../assets/logo_dsc.png";

const Nvbar = () => {
  return (
    <nav className="z-50 w-full bg-white shadow-md fixed top-0">
      <div className="flex justify-between items-center px-8 lg:px-20 py-4 border-b border-gray-200">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Company Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Menu */}
        <ul className="flex gap-6 text-[16px] lg:text-[18px] font-medium text-gray-600">
          <li>
            <Link to="/" className="hover:text-blue-500 transition">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link to="/cvgenerate" className="hover:text-blue-500 transition">
              Tạo CV
            </Link>
          </li>
          <li>
            <Link to="/cvsamples" className="hover:text-blue-500 transition">
              Mẫu CV
            </Link>
          </li>
          <li>
            <Link to="/cvtips" className="hover:text-blue-500 transition">
              Mẹo viết CV
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-blue-500 transition">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nvbar;
