import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarLink({ to, title }) {
  const shortcutKey = title[0].toUpperCase();
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "navbar-link-active" : "navbar-link-inactive"
      }
    >
      {({ isActive }) => {
        const textClass = isActive
          ? "button-text-secondary"
          : "button-text-muted";
        return (
          <>
            <div className="keyboard-nav-icon">
              <p className="microcopy">{shortcutKey}</p>
            </div>
            <span className={textClass}>{title}</span>
          </>
        );
      }}
    </NavLink>
  );
}
