import { Link } from 'react-router-dom';
import './header.css';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg g-0 fixed-top ${isNavOpen ? 'open' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="#" onClick={closeNav}>
          <img src="/logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler p-"
          type="button"
          onClick={toggleNav}
        >
          <FaBars className="text-white" />
        </button>
        <div className={`collapse navbar-collapse align-content-center m0 justify-content-end ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-2">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/" onClick={closeNav}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about" onClick={closeNav}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/activities' ? 'active' : ''}`} to="/activities" onClick={closeNav}>
                Activities
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/package' ? 'active' : ''}`} to="/package" onClick={closeNav}>
                Package
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`} to="/gallery" onClick={closeNav}>
                Gallery
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`} to="/blog" onClick={closeNav}>
                Blogs
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/Contact' ? 'active' : ''}`} to="/contact" onClick={closeNav}>
                Contact
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/contact" onClick={closeNav}>
                <button type="button" className="contact-btn">
                  Book Now
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
