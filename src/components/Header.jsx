import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import './header.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation(); // Get the current location object from React Router

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg mt g-0  ${isNavOpen ? 'open' : ''}`}>
      <div className="container-fluid   text-center justify-content-between align-content-center ">
        <Link className="navbar-brand" to="/" onClick={closeNav}>
          Navbar
        </Link>
        <button className="navbar-toggler border border-0" type="button" onClick={toggleNav}>
          <FaBars className="navbar-toggler-icon ms-2"/>  
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/" onClick={closeNav}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/rooms' ? 'active' : ''}`} to="/rooms" onClick={closeNav}>
                Rooms
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about" onClick={closeNav}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`} to="/blog" onClick={closeNav}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact" onClick={closeNav}>
                Contact
              </Link>
            </li>
          </ul>
          <button className="btn">
            <Link to="/contact" onClick={closeNav}>Book Now</Link>
          </button>
        </div>       
      </div>
    </nav>
  );
}

export default Header;
