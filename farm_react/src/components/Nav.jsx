import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBoxOpen, FaInfoCircle, FaUserPlus, FaSignInAlt } from "react-icons/fa";
import "../css/Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="/images/homeicon.png" alt="Field2Home logo" className="logo-icon" />
            Field2Home</div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="menu-icon">{isOpen ? "✖" : "☰"}</span>
          </button>
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
              <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>
                <FaHome className="icon" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="nav-link" onClick={() => setIsOpen(false)}>
                <FaBoxOpen className="icon" /> Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
                <FaInfoCircle className="icon" /> About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Register" className="nav-link" onClick={() => setIsOpen(false)}>
                <FaUserPlus className="icon" /> Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="nav-link" onClick={() => setIsOpen(false)}>
                <FaSignInAlt className="icon" /> Log In
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
