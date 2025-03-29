import React from "react";
import toolsAndSkills from "../assets/backgrounds/toolsAndSkills.png";
import Skill from "./Skill";
import html from "../assets/skills/htmlIcon.svg";
import css from "../assets/skills/cssIcon.svg";
import bootstrap from "../assets/skills/bootstrapIcon.svg";
import tailwind from "../assets/skills/tailwindIcon.svg";
import javascript from "../assets/skills/javascriptIcon.svg";
import typescript from "../assets/skills/typescript.svg";
import react from "../assets/skills/reactIcon.svg";
import redux from "../assets/skills/redux.svg";
import firebase from "../assets/skills/firebase.svg";
import nodejs from "../assets/skills/nodeJs.svg";
import express from "../assets/skills/express.svg";
import mongodb from "../assets/skills/mongoDb.svg";
import mysql from "../assets/skills/mysqlIcon.svg";
import github from "../assets/skills/github.svg";
import figma from "../assets/skills/figmaIcon.svg";

import "../styles/components/toolsAndSkills.css";

function ToolsAndSkills() {
  return (
    <div className="tools-and-skills py-5">
      <img
        src={toolsAndSkills}
        alt="Tools and Skills Background"
        className="mt-5 position-absolute"
      />
      <h3 className="text-center text-white fs-2 text-capitalize mb-0">
        Tools and Skills
      </h3>
      <div className="tools-and-skills-container d-flex flex-wrap gap-5 justify-content-center">
        <Skill img={html} />
        <Skill img={css} />
        <Skill img={bootstrap} />
        <Skill img={tailwind} />
        <Skill img={javascript} />
        <Skill img={typescript} />
        <Skill img={react} />
        <Skill img={redux} />
        <Skill img={firebase} />
        <Skill img={nodejs} />
        <Skill img={express} />
        <Skill img={mongodb} />
        <Skill img={mysql} />
        <Skill img={figma} />
        <Skill img={github} />
      </div>
    </div>
  );
}

export default ToolsAndSkills;
