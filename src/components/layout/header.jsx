import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="">Projects</NavLink>
          </li>
          <li>
            <NavLink to="resume">Resume</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>

        <NavLink
          to="login"
          class="login-button"
          title="Log in"
          aria-label="Log in"
        >
          <img src="Assets/Icons/Login-person-SVGicon.svg" alt="Log In Icon" />
        </NavLink>
      </nav>
    </header>
  );
}
