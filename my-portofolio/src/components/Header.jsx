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
          <a href="#" className="text-decoration-none text-white fw-bold">
            Home
          </a>
        </li>
        <li className="position-relative py-1 px-2">
          <a href="#" className="text-decoration-none text-white fw-bold">
            About
          </a>
        </li>
        <li className="position-relative py-1 px-2">
          <a href="#" className="text-decoration-none text-white fw-bold">
            Projects
          </a>
        </li>
        <li className="position-relative py-1 px-2">
          <a href="#" className="text-decoration-none text-white fw-bold">
            Blog
          </a>
        </li>
        <HeaderBtn variant="header">Contact Me</HeaderBtn>
      </ul>
    </header>
  );
}

export default Header;
