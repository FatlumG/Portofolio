import React from "react";
import "../styles/components/toolsAndSkills.css";

function Skill({ img }) {
  return (
    <div className="skill">
      <img src={img} alt="Skill image" />
    </div>
  );
}

export default Skill;
