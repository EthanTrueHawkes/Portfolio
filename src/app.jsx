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
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

        <button className="message-button">
          <img
            src="/Assets/Icons/chat-SVGicon.svg"
            alt="Message True Hawkes Icon"
          />
        </button>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
