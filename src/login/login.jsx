import React from "react";
import "./login-styles.css";

import { useNavigate } from "react-router-dom";

export function Login({ loginUser }) {
  const [text, setText] = React.useState("");

  function textChange(e) {
    setText(e.target.value);
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
              <p className="field-title">Username:</p>
              <input type="text" placeholder="username" onChange={textChange} />
            </div>

            <div className="form-field">
              <p className="field-title">Password:</p>
              <input type="password" placeholder="password" />
            </div>
          </div>

          <div className="button-group">
            <button
              type="button"
              className="button-primary"
              onClick={() => loginUser(text)}
            >
              Log in
            </button>
            <button className="button-secondary">Create Account</button>
          </div>
        </form>
      </section>
    </main>
  );
}
