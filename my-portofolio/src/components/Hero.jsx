import React from "react";
import HeaderBtn from "./Button";
import purpleBg from "../assets/vectors/purpleBg.svg";
import fadingCircle from "../assets/vectors/fadingCircle.svg";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import whatsapp from "../assets/icons/whatsapp.png";
import linkedin from "../assets/icons/linkedin.png";
import cv from "../assets/downloads/cv.pdf";
import "../styles/components/hero.css";

function Hero() {
  return (
    <div
      id="home"
      className="hero d-flex flex-column flex-md-row py-2 py-lg-5 position-relative justify-content-start justify-content-lg-between"
    >
      <div className="hero-text w-100 w-md-100 d-flex flex-column py-5">
        <h3 className="text-white">Hello Everyone</h3>
        <h1 className="text-white fs-1">
          I am <span className="fg">Fatlum Gëxhaliu</span>
        </h1>
        <h6 className="text-secondary">Front-end Developer</h6>
        <div className="line mt-3 mt-lg-4 mb-1 mb-lg-2 bg-secondary"></div>
        <p className="text-secondary fs-6">
          I'm a person who has a keen interest in the design layout. I think
          presenting an attractive design is a matter of concern in developing a
          branding of products. To creates a good design, I focus on proper
          composition and visual decoration details in order to make it more
          professional. For the time being, I’m developing the skill for
          acquiring the UI/UX design for dynamic application and web
          development.
        </p>
        <div className="buttons d-flex gap-3 mt-4">
          <a href={cv} download="Fatlum Gërxhaliu CV">
            <HeaderBtn>Download CV</HeaderBtn>{" "}
          </a>
          <HeaderBtn variant="white">More Info</HeaderBtn>
        </div>
      </div>
      <div className="hero-imgs w-100 d-flex justify-content-end position-relative">
        <img
          src={purpleBg}
          alt="Purple Background"
          className="position-absolute w-75"
        />
        <img
          src={fadingCircle}
          alt="Fading Circle"
          className="position-absolute w-25"
        />
      </div>

      <div className="contacts position-absolute d-flex flex-column flex-lg-row justify-content-between gap-3">
        <h3 className="text-white text-center fs-5 fw-bold text-capitalize pe-3">
          Find me on
        </h3>
        <div className="d-flex gap-2">
          <a href="https://www.facebook.com/fatlum.fatlum.716">
            <img src={facebook} alt="Facebook Icon" />
          </a>
          <a href="https://www.instagram.com/fatlum_gerxhaliu/">
            <img src={instagram} alt="Instagram Icon" />
          </a>
          <a href="#">
            <img src={whatsapp} alt="Whatsapp Icon" />
          </a>
          <a href="https://www.linkedin.com/in/fatlum-g%C3%ABrxhaliu-053bba302/">
            <img src={linkedin} alt="LinkedIn Icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
