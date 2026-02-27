import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarLink({ to, title }) {
  const shortcutKey = title[0].toUpperCase();
  return (
    <NavLink to={to}>
      <div className="keyboard-nav-icon">
        <p className="microcopy">{shortcutKey}</p>
      </div>
      {title}
    </NavLink>
  );
}
