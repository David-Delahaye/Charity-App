import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/">Charity</NavLink>
      <div className="rightNav">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Search">Search</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
