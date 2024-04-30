import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons
import { CiLocationOn } from 'react-icons/ci';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">Address</h3>
                <p className="footer_text" > <CiLocationOn/> Mahuli, Parshivni, Maharashtra 441105</p>
                <Link to="#" >Get Direction</Link>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">Reservation</h3>
                <p className="footer_text"> 8668440938. <br />mauliagro@gmail.com.com</p>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-lg-2">
              <div className="footer_widget">
                <h3 className="footer_title">Navigation</h3>
                <ul>
                  <li><Link to="#">Home</Link></li>
                  <li><Link to="#">Rooms</Link></li>
                  <li><Link to="#">About</Link></li>
                  <li><Link to="#">News</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="footer_widget">
                <h3 className="footer_title">Newsletter</h3>
                <form action="#" className="newsletter_form">
                  <input type="text" placeholder="Enter your mail" />
                  <button type="submit">Sign Up</button>
                </form>
                <p className="newsletter_text">Subscribe newsletter to get updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right_text">
        <div className="container">
          <div className="footer_border"></div>
          <div className="row">
            <div className="col-xl-8 col-md-7 col-lg-9">
              <p className="copy_right">Copyright &copy;{new Date().getFullYear()} All rights reserved | 
              This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by  Aniket 
              </p>
            </div>
            <div className="col-xl-4 col-md-5 col-lg-3">
              <div className="socail_links">
                <ul>
                  <li>
                    <Link href="#">
                      <FaFacebookSquare   style={{ fontSize:"30px"}} /> {/* Replace with React Icons component */}
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaTwitter style={{ fontSize:"30px"}} /> {/* Replace with React Icons component */}
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaInstagram style={{ fontSize:"30px"}} /> {/* Replace with React Icons component */}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
