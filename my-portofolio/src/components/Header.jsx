import React from "react";
import HeaderBtn from "./Button";
import "../styles/components/header.css";

function Header() {
  return (
    <header className="header d-flex justify-content-between align-items-center">
      <h2 className="text-white">
        Lum<span>Gërxhaliu</span>
      </h2>
      <ul className="nav-bar d-flex justify-content-center align-items-center gap-5 m-0 list-unstyled">
        <li className="position-relative py-1 px-2">
          <a href="#home" className="text-decoration-none text-white fw-bold">
            Home
          </a>
        </li>
        <li className="position-relative py-1 px-2">
          <a href="#about" className="text-decoration-none text-white fw-bold">
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
        <a href="#footer">
          <HeaderBtn variant="header">Contact Me</HeaderBtn>
        </a>
      </ul>
    </header>
  );
}

export default Header;
