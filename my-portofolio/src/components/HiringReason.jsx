import React from "react";
import "../styles/components/whyHireMe.css";

function HiringReason({ img, title, text, style }) {
  return (
    <div
      className={`hiring-reason d-flex flex-column align-items-center ${style}`}
    >
      <div className="outer-border d-flex justify-content-center align-items-center me-3">
        <div className="inner-border d-flex justify-content-center align-items-center">
          <img src={img} alt="" className="w-25 h-25" />
        </div>
      </div>
      <h3 className="text-white text-center mt-3">{title}</h3>
      <p className="text-secondary text-left">{text}</p>
    </div>
  );
}

export default HiringReason;
