import React from "react";
import "./app.css";

export default function App() {
  return (
    <div className="app">
      <header>
        <nav>
          <ul>
            <li>
              <a href="index.html">Projects</a>
            </li>
            <li>
              <a href="resume.html">Resume</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
          </ul>

          <a
            href="login.html"
            class="login-button"
            title="Log in"
            aria-label="Log in"
          >
            <img
              src="Assets/Icons/Login-person-SVGicon.svg"
              alt="Log In Icon"
            />
          </a>
        </nav>
      </header>

      <footer>
        <p>By Ethan Hawkes</p>
        <a href="https://github.com/EthanTrueHawkes/Portfolio.git">
          GitHub Repository
        </a>
      </footer>
    </div>
  );
}
