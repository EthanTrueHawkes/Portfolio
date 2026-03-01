import React from "react";
import "./header.css";
import NavBarLink from "../../components/ui/navbar-link";

import { NavLink, useNavigate } from "react-router-dom";
import profileIcon from "../../Assets/Icons/Login-person-SVGicon.svg";

export default function Header({ user }) {
  const navigate = useNavigate();

  function DisplayUsername() {
    if (user) {
      return user;
    } else {
      return "Login";
    }
  }

  React.useEffect(() => {
    function KeyboardNav(e) {
      const tag = document.activeElement?.tagName;

      if (tag === "INPUT" || tag == "TEXTAREA") return;
      else if (e.key === "a") {
        navigate("/about");
      } else if (e.key === "w") {
        navigate("/");
      } else if (e.key === "r") {
        navigate("/resume");
      }
    }
    window.addEventListener("keydown", KeyboardNav);
    return () => {
      window.removeEventListener("keydown", KeyboardNav);
    };
  }, []);

  return (
    <header>
      <nav className="header-nav">
        <div id="logo"></div>

        <ul>
          <li>
            <NavBarLink to="/" title="Work" />
          </li>
          <li>
            <NavBarLink to="/resume" title="Resume" />
          </li>
          <li>
            <NavBarLink to="/about" title="About" />
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
