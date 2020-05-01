import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="nav-bar">
      <nav>
        <Link style={{ textDecoration: "None", color: "gray" }} to="/">
          Register
        </Link>
        <Link style={{ textDecoration: "None", color: "gray" }} to="/login">
          Login
        </Link>
      </nav>
    </div>
  );
}
