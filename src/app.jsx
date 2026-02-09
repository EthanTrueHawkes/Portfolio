import React from "react";
import "./app.css";

import {
  BrowserRouter,
  NavLink,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { Login } from "./login/login";
import { Resume } from "./resume/resume";
import { About } from "./about/about";
import { Home } from "./home/home";
import { Notfound } from "./notfound/notfound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
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
              <img
                src="Assets/Icons/Login-person-SVGicon.svg"
                alt="Log In Icon"
              />
            </NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

        <footer>
          <p>By Ethan Hawkes</p>
          <a href="https://github.com/EthanTrueHawkes/Portfolio.git">
            GitHub Repository
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}
