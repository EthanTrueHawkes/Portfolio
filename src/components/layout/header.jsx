import React from "react";
import { NavLink } from "react-router-dom";
import profileIcon from "../../Assets/Icons/Login-person-SVGicon.svg";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>

        <NavLink
          to="login"
          className="login-button"
          title="Log in"
          aria-label="Log in"
        >
          <img src={profileIcon} alt="Log In Icon" />
        </NavLink>
      </nav>
    </header>
  );
}
