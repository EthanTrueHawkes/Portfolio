import React from "react";
import "./login-styles.css";

import { useNavigate } from "react-router-dom";

export function Login({ createAuth }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [usernameText, setUsernameText] = React.useState("");

  function handleLogin() {
    createAuth("PUT", email, password);
  }

  function handleRegistration() {
    createAuth("POST", email, password);
  }
  return (
    <main className="login-page">
      <section className="login-section">
        <header>
          <h1>Log In to True's Portfolio</h1>
          <p className="title-subtext">
            Doing so will grant access to locked work
          </p>
        </header>

        <form method="get" action="index.html" className="login-form">
          <div className="field-group">
            <div className="form-field">
              <p className="field-title">username:</p>
              <input
                type="text"
                placeholder="username"
                onChange={(e) => setUsernameText(e.target.value)}
              />
            </div>

            <div className="form-field">
              <p className="field-title">email:</p>
              <input
                type="email"
                placeholder="janedoe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-field">
              <p className="field-title">Password:</p>
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="button-group">
            <button
              type="button"
              className="button-primary"
              disabled={!(email && password)}
              onClick={() => handleLogin()}
            >
              Log in
            </button>
            <button
              className="button-secondary"
              id="createAccount-notImplemented"
              disabled={!(email && password)}
              onClick={() => handleRegistration}
            >
              Create Account
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
