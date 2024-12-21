import React from "react";
import HeaderBtn from "./Button";
import { FiAlignJustify } from "react-icons/fi";
import "../styles/components/header.css";

function Header() {
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
            <HeaderBtn variant="header">Contact Me</HeaderBtn>
          </a>
          <FiAlignJustify className="text-white fs-3 d-block d-xl-none" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
