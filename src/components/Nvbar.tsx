import { Link } from "react-router-dom";

const Nvbar = () => {
  return (
    <nav className="z-50">
      <div className="h-10vh flex justify-between lg:py-5 px-20 py-20 border-b">
        <div className="flex items-center flex-1">
          <h2 className="text-3xl font-bold text-black-500">CV Booster</h2>
        </div>
        <div>
          <ul className="flex gap-8 mr-16 text-[18px] text-gray-400">
            <Link to="/">
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
