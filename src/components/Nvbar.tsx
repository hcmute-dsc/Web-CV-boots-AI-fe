import { Link } from "react-router-dom";
import logo from "../assets/logo_dsc.png";

const Nvbar = () => {
  return (
    <nav className="z-50">
      <div className="h-10vh flex justify-between lg:py-5 px-20 py-20 border-b-2 border-b-black">
        <div className="flex items-center gap-5">
          <img
            src={logo}
            alt="Company Logo"
            width="100"
            height="100"
            className="object-contain mr-auto"
          />
          <h2 className="text-3xl font-bold text-black">CV Booster</h2>
        </div>
        <div>
          <ul className="flex gap-8 mr-16 text-[18px] text-gray-400">
            <Link to="/home">
              <li className="hover:text-blue-400 border-white cursor-pointer">
                Trang chủ
              </li>
            </Link>
            <Link to="/cvgenerate">
              <li className="hover:text-blue-400 border-white cursor-pointer">
                Tạo CV
              </li>
            </Link>
            <Link to="/cvsamples">
              <li className="hover:text-blue-400 border-white cursor-pointer">
                Mẫu CV
              </li>
            </Link>
            <Link to="/cvtips">
              <li className="hover:text-blue-400 border-white cursor-pointer">
                Mẹo viết CV
              </li>
            </Link>
            <Link to="/faq">
              <li className="hover:text-blue-400 border-white cursor-pointer">
                FAQ
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nvbar;
