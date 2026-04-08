import React from "react";
import "./header.css";
import NavBarLink from "../../components/ui/navbar-link";

import { NavLink, useNavigate } from "react-router-dom";
import profileIcon from "../../Assets/Icons/Login-person-SVGicon.svg";
import sendIcon from "../../Assets/Icons/Send.svg";
import logoutIcon from "../../Assets/Icons/Logout.svg";
import { chatNotifier, ChatEvent } from "./chatNotifier";

export default function Header({ handleLogout, user }) {
  const navigate = useNavigate();
  const [isMessagesOpen, setIsMessagesOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([]);

  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

  function DisplayUsername() {
    if (user) {
      return user;
    } else {
      return "Login";
    }
  }

  React.useEffect(() => {
    function handleEvent(event) {
      setMessages((prev) => [...prev, event]);
    }

    chatNotifier.addHandler(handleEvent);

    return () => {
      chatNotifier.removeHandler(handleEvent);
    };
  }, []);

  function sendMessage(e) {
    e.preventDefault();

    const role = user === "owner" ? "owner" : "visitor";
    const from = user || "Guest";

    chatNotifier.broadcastEvent(from, role, {
      msg: messageInput,
    });

    setMessageInput("");
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
    <header id="nav-header">
      <nav className="header-nav-container">
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
            <button
              id="profile-button"
              onClick={() => {
                setIsSettingsOpen((prev) => !prev);
                isMessagesOpen && setIsMessagesOpen(false);
              }}
            >
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

          {isSettingsOpen && (
            <>
              <div className="nav-settings-dropdown">
                <button
                  className="nav-button"
                  onClick={() => {
                    setIsSettingsOpen(false);
                    handleLogout();
                  }}
                >
                  <img src={logoutIcon} alt="Logout Icon" />
                  <p className="button-text-secondary">Logout</p>
                </button>
              </div>
            </>
          )}

          <button
            id="nav-message-button"
            onClick={() => {
              setIsMessagesOpen((prev) => !prev);
              isSettingsOpen && setIsSettingsOpen(false);
            }}
          >
            <p className="button-text-primary">Message</p>
          </button>
          {isMessagesOpen && (
            <>
              <div className="nav-message-dropdown-container">
                <div className="nav-message-dropdown-chat">
                  {messages.length > 0 && (
                    <div className="nav-message-owner">
                      <p>{messages}</p>
                    </div>
                  )}
                </div>
                <form onSubmit={sendMessage}>
                  <input
                    type="text"
                    placeholder="Enter message..."
                    className="nav-message-dropdown-input"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                  />
                  <button type="submit" className="nav-message-dropdown-send">
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
