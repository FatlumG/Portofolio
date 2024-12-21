import React from "react";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
// } from "@nextui-org/modal";
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
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [backdrop, setBackdrop] = React.useState("opaque");

  // const backdrops = ["opaque", "blur", "transparent"];

  // const handleOpen = (backdrop) => {
  //   setBackdrop(backdrop);
  //   onOpen();
  // };

  return (
    <div id="home" className="hero d-flex py-5 position-relative">
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
        <div className="buttons d-flex gap-3 mt-4">
          <a href={cv} download="Fatlum Gërxhaliu CV">
            <HeaderBtn>Download CV</HeaderBtn>{" "}
          </a>
          <HeaderBtn
            // key={b}
            // className="capitalize"
            // color="warning"
            // onPress={() => handleOpen(b)}
            variant="white"
          >
            More Info
          </HeaderBtn>
          {/* <Modal backdrop={backdrop} isOpen={false} onClose={onClose}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Modal Title
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor
                      cupidatat consequat elit dolor adipisicing. Mollit dolor
                      eiusmod sunt ex incididunt cillum quis. Velit duis sit
                      officia eiusmod Lorem aliqua enim laboris do dolor
                      eiusmod. Et mollit incididunt nisi consectetur esse
                      laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                      deserunt nostrud ad veniam.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal> */}
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
  );
}

export default Hero;
