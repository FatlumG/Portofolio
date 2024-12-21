import React, { useState } from "react";
import HeaderBtn from "./Button";
import { FiAlignJustify } from "react-icons/fi";
import { MdOutlineExitToApp } from "react-icons/md";
import "../styles/components/header.css";

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible((prevState) => !prevState);
    console.log(isVisible);
  };

  return (
    <header className="header d-flex justify-content-between align-items-center">
      <h2 className="text-white">
        Lum<span>Gërxhaliu</span>
      </h2>
      <nav className="d-flex gap-5">
        <ul className="nav-bar d-none d-xl-flex justify-content-center align-items-center gap-5 m-0 list-unstyled">
          <li className="position-relative py-1 px-2">
            <a href="#home" className="text-decoration-none text-white fw-bold">
              Home
            </a>
          </li>
          <li className="position-relative py-1 px-2">
            <a
              href="#about"
              className="text-decoration-none text-white fw-bold"
            >
              About
            </a>
          </li>
          <li className="position-relative py-1 px-2">
            <a
              href="#projects"
              className="text-decoration-none text-white fw-bold"
            >
              Projects
            </a>
          </li>
          <li className="position-relative py-1 px-2">
            <a href="#blog" className="text-decoration-none text-white fw-bold">
              Blog
            </a>
          </li>
        </ul>
        <div className="d-flex align-items-center gap-3">
          <a href="#footer">
            <HeaderBtn variant="header" className="d-none d-sm-inline-block">
              Contact Me
            </HeaderBtn>
          </a>
          <FiAlignJustify
            onClick={toggleSidebar}
            className="text-white fs-3 d-block d-xl-none"
          />
        </div>
      </nav>

      <ul
        className={`sidebar ${
          isVisible ? "show" : ""
        } d-flex flex-column justify-content-center align-items-center gap-5 m-0 list-unstyled position-fixed`}
      >
        <li className="nav-item position-relative py-1 px-2">
          <MdOutlineExitToApp
            onClick={toggleSidebar}
            className="exit-icon fs-3 text-white"
          />
        </li>
        <li className="nav-item position-relative py-1 px-2">
          <a
            href="#home"
            onClick={toggleSidebar}
            className="text-decoration-none text-white fw-bold"
          >
            Home
          </a>
        </li>
        <li className="nav-item position-relative py-1 px-2">
          <a
            href="#about"
            onClick={toggleSidebar}
            className="text-decoration-none text-white fw-bold"
          >
            About
          </a>
        </li>
        <li className="nav-item position-relative py-1 px-2">
          <a
            href="#projects"
            className="text-decoration-none text-white fw-bold"
            onClick={toggleSidebar}
          >
            Projects
          </a>
        </li>
        <li className="nav-item position-relative py-1 px-2">
          <a
            href="#blog"
            className="text-decoration-none text-white fw-bold"
            onClick={toggleSidebar}
          >
            Blog
          </a>
        </li>
        <a href="#footer">
          <HeaderBtn
            variant="header"
            className="d-inline-block d-sm-none"
            onClick={toggleSidebar}
          >
            Contact Me
          </HeaderBtn>
        </a>
      </ul>
    </header>
  );
}

export default Header;
