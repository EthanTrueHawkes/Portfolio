import React from "react";
import "./app.css";

import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
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
  const location = useLocation();

  function handleLogout() {
    fetch("api/auth", {
      method: "DELETE",
    });
    navigate("/login");
  }

  async function createAuth(method, email, password) {
    const res = await fetch("api/auth", {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    await res.json();
    if (res.ok) {
      navigate("/");
    } else {
      alert("Authentication failed");
    }
  }

  return (
    <div className="app">
      {location.pathname !== "/login" && (
        <Header handleLogout={handleLogout} user={user} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login createAuth={createAuth} />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      <MessageLaucher />

      <Footer />
    </div>
  );
}
