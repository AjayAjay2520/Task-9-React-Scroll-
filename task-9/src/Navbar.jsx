import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { Link } from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="navbar navbar-expand-md fixed-top ">
      <div className="container">
        <div className="logo navbar-brand text-dark fw-bold fs-2">
          <Link smooth to="#Home">
            GO GO
          </Link>
        </div>
        <button
          className="navbar-toggler text-dark"
          type="button"
          onClick={handleNav}
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        <div className={`collapse navbar-collapse ${nav ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto gap-2 ">
            <li className="nav-item">
              <Link smooth to="#home" className="nav-link text-dark fst-italic fw-bold">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="#career" className="nav-link text-dark fst-italic fw-bold">
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="#about" className="nav-link text-dark fst-italic fw-bold">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="#contact" className="nav-link text-dark fst-italic fw-bold ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
