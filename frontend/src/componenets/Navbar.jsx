import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () =>{
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <NavLink to="/" className="navbar-brand">
          Conference Manager
        </NavLink>
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          ☰ 
        </button>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink 
            to="/register" 
            activeClassName="active-link"
            onClick={closeMenu}
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink 
            to="/participant-dashboard" 
            activeClassName="active-link"
            onClick={closeMenu}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
            to="/admin-dashboard" 
            activeClassName="active-link"
            onClick={closeMenu}
            >
              Admin
            </NavLink>
          </li>
        </ul>
        {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </div>
    </nav>
  );
}

export default Navbar;
