import React from "react";
const Footer = () => {
  return (
    <footer className=" footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
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
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};
export default Footer;
