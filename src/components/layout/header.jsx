import React from "react";
import "./header.css";
import NavBarLink from "../../components/ui/navbar-link";

import { NavLink, useNavigate } from "react-router-dom";
import profileIcon from "../../Assets/Icons/Login-person-SVGicon.svg";
import sendIcon from "../../Assets/Icons/Send.svg";

export default function Header({ user }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([]);

  function DisplayUsername() {
    if (user) {
      return user;
    } else {
      return "Login";
    }
  }

  React.useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      setMessages(
        "Hello, thanks for visiting my portfolio. Feel free to reach out!",
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, [isOpen]);

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
          <button id="nav-message-button" onClick={() => setIsOpen(!isOpen)}>
            <p className="button-text-primary">Message</p>
          </button>
          {isOpen && (
            <>
              <div className="nav-message-dropdown-container">
                <div className="nav-message-dropdown-chat">
                  {messages.length > 0 && (
                    <div className="nav-message-owner">
                      <p>{messages}</p>
                    </div>
                  )}
                </div>
                <form>
                  <input
                    type="text"
                    placeholder="Enter message..."
                    className="nav-message-dropdown-input"
                  />
                  <button className="nav-message-dropdown-send">
                    <img src={sendIcon} alt="Send Message" />
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
