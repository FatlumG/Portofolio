import React from "react";
import HeaderBtn from "./Button";
import purpleBg from "../assets/vectors/purpleBg.svg";
import fadingCircle from "../assets/vectors/fadingCircle.svg";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import whatsapp from "../assets/icons/whatsapp.png";
import linkedin from "../assets/icons/linkedin.png";
import "../styles/components/hero.css";

function Hero() {
  return (
    <div className="hero d-flex py-5 position-relative">
      <div className="hero-text w-50 py-5">
        <h3 className="text-white">Hello Everyone</h3>
        <h1 className="text-white">
          I am <span className="fg">Fatlum Gëxhaliu</span>
        </h1>
        <h6 className="text-secondary">Front-end Developer</h6>
        <div className="line mt-5 mb-3 bg-secondary"></div>
        <p className="text-secondary">
          I'm a person who has a keen interest in the design layout. I think
          presenting an attractive design is a matter of concern in developing a
          branding of products. To creates a good design, I focus on proper
          composition and visual decoration details in order to make it more
          professional. For the time being, I’m developing the skill for
          acquiring the UI/UX design for dynamic application and web
          development.
        </p>
        <div className="buttons d-flex gap-3">
          <HeaderBtn>Download CV</HeaderBtn>
          <HeaderBtn variant="white">More Info</HeaderBtn>
        </div>
      </div>
      <div className="hero-imgs w-50 d-flex justify-content-end position-relative">
        <img
          src={purpleBg}
          alt="Purple Background"
          className="position-absolute"
        />
        <img
          src={fadingCircle}
          alt="Fading Circle"
          className="position-absolute"
        />
      </div>
      <div className="contacts position-absolute d-flex justify-content-between gap-3">
        <h3 className="text-white fs-5 fw-bold text-capitalize pe-3">
          Find me on
        </h3>
        <a href="#">
          <img src={facebook} alt="Facebook Icon" />
        </a>
        <a href="#">
          <img src={instagram} alt="Instagram Icon" />
        </a>
        <a href="#">
          <img src={whatsapp} alt="Whatsapp Icon" />
        </a>
        <a href="#">
          <img src={linkedin} alt="LinkedIn Icon" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
