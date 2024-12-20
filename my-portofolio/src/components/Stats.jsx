import React from "react";
import "../styles/components/stats.css";

function Stats() {
  return (
    <div id="about" className="stats d-flex justify-content-center align-items-center gap-3 text-white">
      <div className="statistic d-flex flex-column justify-content-center align-items-center">
        <h2 className="fs-1 fw-bold">4.5</h2>
        <p>Stars Rating</p>
      </div>
      <div className="statistic d-flex flex-column justify-content-center align-items-center">
        <h2 className="fs-1 fw-bold">06</h2>
        <p>Completed Projects</p>
      </div>
      <div className="statistic d-flex flex-column justify-content-center align-items-center">
        <h2 className="fs-1 fw-bold">3+</h2>
        <p>Years of Experience</p>
      </div>
    </div>
  );
}

export default Stats;
