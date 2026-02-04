import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-left">
        <li>Story</li>
        <li>Journey</li>
        <li>Scenes</li>
      </ul>

      <div className="nav-center">
        PENGUIN
      </div>

      <ul className="nav-right">
        <li>About</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
