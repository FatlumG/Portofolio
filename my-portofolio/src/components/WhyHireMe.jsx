import React from "react";
import whyHireMe from "../assets/backgrounds/whyHireMe.png";
import HiringReason from "./HiringReason";
import bagClock from "../assets/icons/bagClock.png";
import chat from "../assets/icons/chat.png";
import cooperative from "../assets/icons/cooperative.png";
import visionary from "../assets/icons/visionary.png";
import "../styles/components/whyHireMe.css";

function WhyHireMe() {
  return (
    <div id="blog" className="why-hire-me pt-5">
      <img
        src={whyHireMe}
        alt="My Projects Background"
        className="mt-5 position-absolute"
      />
      <h3 className="text-center text-white fs-2 text-capitalize">
        Why Hire Me
      </h3>
      <div className="hiring-reasons px-3 px-lg-5 px-xl-0 row gap-5 justify-content-between">
        <HiringReason
          style="col-12 col-md-5 col-lg-5 col-xl-2"
          img={bagClock}
          title="Hardworker"
          text="I’m a kind of person who can’t just stand around and doing nothing. I have a tendency to do something productive."
        />
        <HiringReason
          style="col-12 col-md-5 col-lg-5 col-xl-2"
          img={chat}
          title="Communicative"
          text="I possess strong verbal and written communication skills, enabling me to deliver clear messages and foster effective collaboration."
        />
        <HiringReason
          style="col-12 col-md-5 col-lg-5 col-xl-2"
          img={cooperative}
          title="Cooperative"
          text="I believe in the power of teamwork. My ability to collaborate ensures smooth workflows and helps achieve collective goals efficiently."
        />
        <HiringReason
          style="col-12 col-md-5 col-lg-5 col-xl-2"
          img={visionary}
          title="Visionary"
          text="I strive for excellence in every task I undertake, ensuring that the outcome is both flawless and impactful."
        />
      </div>
    </div>
  );
}

export default WhyHireMe;
