import "../styles/components/stats.css";

function Stats() {
  return (
    <div
      id="about"
      className="stats d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 text-white px-5 py-4 py-md-0"
    >
      <div className="statistic d-flex flex-column justify-content-center align-items-center">
        <h2 className="fs-1 fw-bold">10+</h2>
        <p>Technologies learned</p>
      </div>
      <div className="statistic d-flex flex-column justify-content-center align-items-center">
        <h2 className="fs-1 fw-bold">2+</h2>
        <p>
          Key Skills: <b>Full-Stack</b> & <b>Networking</b>
        </p>
      </div>
      <div className="statistic d-flex flex-column justify-content-center align-items-center">
        <h2 className="fs-1 fw-bold">10+</h2>
        <p>Completed Projects</p>
      </div>
    </div>
  );
}

export default Stats;
