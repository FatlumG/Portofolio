import React from "react";
import phone from "../assets/icons/phone.png";
import email from "../assets/icons/email.png";
import footerVector from "../assets/vectors/footerVector.svg";
import "../styles/components/footer.css";

function Footer() {
  return (
    <div
      id="footer"
      className="footer text-white d-flex justify-content-between py-5"
    >
      <div className="my-info">
        <h2>Get In Touch</h2>
        <p>For business and partnership inquiry please contact me below!</p>
        <div className="contact-info mt-4 d-flex flex-column gap-4">
          <div className="contact-item d-flex align-items-center gap-3">
            <img src={phone} alt="Phone Icon" className="h-50" />
            <div className="d-flex flex-column">
              <span className="text-secondary">Phone</span>
              <span>+383 45 714 117</span>
            </div>
          </div>
          <div className="contact-item d-flex align-items-center gap-3">
            <img src={email} alt="Email Icon" className="h-50" />
            <div className="d-flex flex-column">
              <span className="text-secondary">Email</span>
              <span>fatlumg03@gmail.com</span>
            </div>
          </div>
          <p className="text-secondary m-2">&copy; 2024 Fatlum Gëxhaliu</p>
        </div>
      </div>
      <div className="footer-image">
        <img src={footerVector} alt="Footer Vector" className="h-100" />
      </div>
    </div>
  );
}

export default Footer;
