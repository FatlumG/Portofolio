import React from "react";
import HeaderBtn from "./Button";
import "../styles/components/projects.css";

function Project({
  addText,
  img,
  description,
  title,
  text,
  link,
  emailOrVisit,
}) {
  return (
    <div
      className={`project ${
        addText ? "interested" : ""
      } w-100 rounded-5 p-4 p-md-5 d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center gap-4`}
    >
      <div className="w-50 d-flex justify-content-center">
        {addText ? (
          <div className="text-white m-0 d-flex flex-column justify-content-start">
            <h3 className="m-0 fs-2">{title}</h3>
            <p className="text-secondary fs-6 py-2">{text}</p>
          </div>
        ) : (
          <img src={img} alt="Project Cover Image" className="w-100" />
        )}
      </div>
      <div className="view-project d-flex flex-column flex-lg-row justify-content-md-end w-75 ps-md-5">
        <h3
          className={`m-0 fs-3 fs-lg-2 text-white text-center ${
            addText ? "d-none" : ""
          }`}
        >
          {description}
        </h3>
        <div className="d-flex justify-content-center gap-3">
          <a>
            <HeaderBtn
              variant="white"
              className={` ${addText ? "d-inline-block" : "d-none"}`}
            >
              More Projects
            </HeaderBtn>
          </a>
          <a href={link}>
            <HeaderBtn>{emailOrVisit}</HeaderBtn>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
