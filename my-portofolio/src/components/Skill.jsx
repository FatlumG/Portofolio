import React from "react";
import "../styles/components/toolsAndSkills.css";

function Skill({ img, styles }) {
  return (
    <div className="skill">
      <img src={img} alt="Skill image" style={styles} />
    </div>
  );
}

export default Skill;
