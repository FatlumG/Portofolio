import React from "react";
import HeaderBtn from "./Button";
import "../styles/components/projects.css";

function Project({ addText, img, description, title, text, link }) {
  return (
    <div
      className={`project ${
        addText ? "interested" : ""
      } w-100 rounded-5 p-5 d-flex justify-content-between align-items-center`}
    >
      {addText ? (
        <div className="text-white m-0 d-flex flex-column justify-content-start">
          <h3 className="m-0 fs-2">{title}</h3>
          <p className="text-secondary fs-6 py-2">{text}</p>
        </div>
      ) : (
        <img src={img} alt="Project Cover Image" />
      )}
      <h3 className={`m-0 text-white ${addText ? "d-none" : ""}`}>
        {description}
      </h3>
      <div className="d-flex gap-4">
        <HeaderBtn
          variant="white"
          className={` ${addText ? "d-block" : "d-none"}`}
        >
          More Projects
        </HeaderBtn>
        <a href={link}>
          <HeaderBtn>Visit Project</HeaderBtn>
        </a>
      </div>
    </div>
  );
}

export default Project;
