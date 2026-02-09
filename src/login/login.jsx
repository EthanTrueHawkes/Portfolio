import React from "react";
import "./login-styles.css";

export function Login() {
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
              <p className="field-title">Email:</p>
              <input type="text" placeholder="johnyappleseed@email.com" />
            </div>

            <div className="form-field">
              <p className="field-title">Password:</p>
              <input type="password" placeholder="****" />
            </div>
          </div>

          <div className="button-group">
            <button type="submit" className="button-primary">
              Log in
            </button>
            <button type="submit" className="button-secondary">
              Create Account
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
