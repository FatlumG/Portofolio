import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import HeaderBtn from "./Button";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/githubIcon.svg";
import linkedin from "../assets/icons/linkedin.svg";
import cv from "../assets/downloads/Fatlum Resume.pdf";
import heroImage from "../assets/images/heroImage.jpg";
import "../styles/components/hero.css";

function Hero() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
        <h6 className="text-secondary">Full-stack Developer</h6>
        <div className="line mt-3 mt-lg-4 mb-1 mb-lg-2 bg-secondary"></div>
        <p className="text-secondary fs-6">
          I’m a passionate Full Stack Developer specializing in the MERN stack
          with strong knowledge of MySQL. I love building dynamic, user-focused
          applications that blend functionality with clean design. Currently,
          I’m pursuing a degree in Computer and Electrical Engineering at the
          University of Prishtina, while also learning Java and C++ to
          strengthen my backend and programming skills.
        </p>
        <div className="buttons d-flex gap-3 mt-4">
          <a href={cv} download="Fatlum Gërxhaliu CV">
            <HeaderBtn>Download CV</HeaderBtn>{" "}
          </a>
          <HeaderBtn variant="white" onClick={handleOpen}>
            More Info
          </HeaderBtn>
          <Modal
            className="more-info-modal"
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box className="py-4 px-5 d-flex flex-column justify-content-center">
              <h2 id="parent-modal-title" className="mb-4">
                More about me
              </h2>
              <p id="parent-modal-description">
                A highly motivated and recently qualified Full-Stack MERN
                Developer with a strong foundation in computer science and
                modern development methodologies. Having successfully completed
                high school at SHMT Lutfi Musiqi and intensive training at
                Coding Training Academy, Speeex education and UDEMY, I possess
                hands-on expertise in building dynamic, end-to-end web
                applications.
                <br />
                <br />
                My technical specialization is the MERN stack (MongoDB, Express,
                React, Node.js), complemented by proficiency in MySQL, Java, and
                C++ to ensure robust backend and programming foundations.
                <br />
                <br />
                All training focused on real-world coding practice, utilizing
                professional collaboration tools like GitHub, Trello, and
                Discord to deliver project-based solutions. I am eager to
                leverage this comprehensive skill set to contribute to a
                professional development team.
              </p>
              <Button onClick={handleClose}>Close</Button>
            </Box>
          </Modal>
        </div>
      </div>
      <div className="hero-imgs w-100 d-flex justify-content-end position-relative">
        <img src={heroImage} alt="Hero image" className="w-75" />
        {/* <Image /> */}
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
          <a href="https://github.com/FatlumG">
            <img src={github} alt="Whatsapp Icon" />
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
