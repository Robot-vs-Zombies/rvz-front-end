import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="nav-bar">
      <nav>
        <Link to="/">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}
