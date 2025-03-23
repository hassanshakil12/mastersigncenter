import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import "./css/Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Master Signs Logo" />
        </Link>

        {/* Right-side menu */}
        <div className="navbar-menu">
          <button className="navbar-btn primary-btn">
            Call for Design Help
          </button>
          <Link to="/create-account" className="navbar-btn secondary-btn">
            SignUp
          </Link>
          <Link to="/login" className="navbar-btn secondary-btn">
            Login
          </Link>
          <button className="navbar-icon">
            <FiShoppingCart size={28} />
          </button>
          <button className="navbar-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <ul className="nav-row">
          <NavItem to="/" label="Home" />
          <NavItem to="/expo-display" label="Expo/Display" />
          <NavItem to="/laser-engraving" label="Laser Engraving" />
          <NavItem to="/decals-stickers" label="Decals/Stickers" />
          <NavItem to="/banners-flag" label="Banners/Flag" />
          <NavItem to="/signs" label="Signs" />
          <NavItem to="/privacy-security" label="Privacy/Security Films" />
          <NavItem to="/marketing" label="Marketing" />
          <NavItem to="/promo" label="Promo" />
        </ul>

        <ul className="nav-row">
          <NavItem to="/electric-signs" label="Electric Signs" />
          <NavItem to="/vehicle-trailer" label="Vehicle & Trailer" />
          <NavItem to="/indoor-signs" label="Indoor Signs" />
          <NavItem to="/outdoor-signs" label="Outdoor Signs" />
          <NavItem to="/accessories" label="Accessories" />
          <NavItem to="/blog" label="Blog" />
          <NavItem to="/testimonials" label="Testimonials" />
          <NavItem to="/gallery" label="Gallery" />
          <NavItem to="/contact" label="Contact Us" />
          <NavItem to="/careers" label="Careers" />
        </ul>
      </div>
    </nav>
  );
};

// Reusable Nav Item Component
const NavItem = ({ to, label }) => (
  <li>
    <Link to={to} className="nav-link">
      {label}
    </Link>
  </li>
);

export default Navbar;
