import React from "react";
import "./header.css";

import { NavLink } from "react-router-dom";
import profileIcon from "../../Assets/Icons/Login-person-SVGicon.svg";

export default function Header({ user }) {
  function DisplayUsername() {
    if (user) {
      return user;
    } else {
      return "Login";
    }
  }

  return (
    <header>
      <nav className="header-nav">
        <div id="logo"></div>

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

        <div id="nav-content-right">
          {user ? (
            <button id="profile-button">
              <img src={profileIcon} alt="User Icon" />
              <p>{DisplayUsername()}</p>
            </button>
          ) : (
            <NavLink
              to="login"
              title="Log in"
              aria-label="Log in"
              id="profile-button"
            >
              <img src={profileIcon} alt="Log In Icon" />
              <p>{DisplayUsername()}</p>
            </NavLink>
          )}
          <div id="nav-message-button">
            <p className="button-text-primary">Message</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
