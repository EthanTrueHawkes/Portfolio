import React from "react";
import "./app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./login/login";
import { Resume } from "./resume/resume";
import { About } from "./about/about";
import { Home } from "./home/home";
import { Notfound } from "./notfound/notfound";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/footer";
import { MessageLaucher } from "./components/ui/button-message";

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

        <MessageLaucher />

        <Footer />
      </div>
    </BrowserRouter>
  );
}
