import React from "react";
import logo from "../images/logo_dsc.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-blue-400 text-base-content px-10 py-4">
        <aside>
          <img
            src={logo}
            alt="Company Logo"
            width="50"
            height="50"
            className="object-contain"
          />
        </aside>
        <nav className="flex gap-4 ml-auto text-black">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/hcmute.dsc"
            className="link link-hover"
          >
            Fanpage
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/hcmute-dsc"
            className="link link-hover"
          >
            Github
          </a>
        </nav>
      </footer>
    </div>
  );
};
export default Footer;
