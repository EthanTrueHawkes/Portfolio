import React from "react";
import "./app.css";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./login/login";
import { Resume } from "./resume/resume";
import { About } from "./about/about";
import { Home } from "./home/home";
import { Notfound } from "./notfound/notfound";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { MessageLaucher } from "./components/ui/button-message";

export default function App() {
  const [user, setUser] = React.useState(localStorage.getItem("user") || null);
  const navigate = useNavigate();

  function logoutUser() {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  }

  function loginUser(text) {
    localStorage.setItem("user", text);
    setUser(text);
    navigate("/");
  }

  return (
    <div className="app">
      <Header logoutUser={logoutUser} user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      <MessageLaucher />

      <Footer />
    </div>
  );
}
