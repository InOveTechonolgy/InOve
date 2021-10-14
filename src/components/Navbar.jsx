import React from "react";
import "./Navbar.css";
import logo from "../assets/imgs/logov2.png";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
function Navbar({ isToogle }) {
  return (
    <div className="navbar">
      <a href="#home" className="brand-logo">
        <img src={logo} alt="brand-logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#technology">Technology</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#join" className="dropdown-container">
              Join us {isToogle ? <BiUpArrow /> : <BiDownArrow />}
              <div className={`dropdown ${isToogle ? "toggle_enable" : null}`}>
                <span>
                  <a href="#interm">Intern</a>
                </span>
                <span>
                  <a href="#member">Member</a>
                </span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
