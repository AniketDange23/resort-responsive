import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css';
import { FaBars } from "react-icons/fa";

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
    <nav className={`navbar navbar-expand-lg  g-0  ${isNavOpen ? 'open' : ''}`}>
      <div className="container flex-end  ">
        <Link className="navbar-brand" to="/" onClick={closeNav}>
          <img src="/logo.png" style={{ width:"60px"}} alt="" />
        </Link>
        <button className="navbar-toggler " type="button" onClick={toggleNav}>
          <span className=" "> <FaBars/></span>
        </button>
      
        <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mb-3">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/" onClick={closeNav}>
                Home
              </Link>
            </li>  <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about" onClick={closeNav}>
                About
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/accommodation' ? 'active' : ''}`} to="/accommodation" onClick={closeNav}>
              Accommodation
              </Link>
            </li> */}
          
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/activities' ? 'active' : ''}`} to="/activities" onClick={closeNav}>
              Activities

              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/package' ? 'active' : ''}`} to="/package" onClick={closeNav}>
              Packages

              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`} to="/gallery" onClick={closeNav}>
              Gallery

              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact" onClick={closeNav}>
                Contact
              </Link>
            </li>
          </ul>
          <button className="contact-btn">
            <Link to="/contact" onClick={closeNav}>Book Now</Link>
          </button>
        </div>       
      </div>
    </nav>
  );
}

export default Header;
