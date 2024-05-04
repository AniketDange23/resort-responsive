import { Link, useLocation } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoMail } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./Footer.css";

function Footer() {
  const location = useLocation();
  const currentYear = new Date().getFullYear();


  return (
    <>
    <div className="container-fluid  footer text-white">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6 col-sm-12 p-3 text-center">
          <img src="/logo.png" alt="" style={{ width: "100px" }} />
          <p className="text-white py-2">
            Embrace nature's bounty at Mahuli Agro Tourism. Where every moment
            is a harvest of serenity.
          </p>
          <div className="">
            <h4 className="text-white text-center">Social Links</h4>
            <ul className="social-icons  ">
              <li>
                <a href="https://www.facebook.com/people/Mahuli-Agro-Tourism/100089468910050/">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/invites/contact/?i=8uf2ngzi9ql6&amp;utm_content=uajryz8">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=+91%209307027399&text=Hello">
                  <BsWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 p-3 text-center">
          <h3 className="text-white">Quick Links</h3>
          <ul className="list-unstyled">
            <li>
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${
                  location.pathname === "/activities" ? "active" : ""
                }`}
                to="/activities"
              >
                Activities
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${
                  location.pathname === "/package" ? "active" : ""
                }`}
                to="/package"
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${
                  location.pathname === "/gallery" ? "active" : ""
                }`}
                to="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 p-3 ">
          <h3 className="text-white">Address</h3>
          <ul className="list-unstyled">
            <li>
              <Link to="mailto:info@mahuliagrotourism.in">
                <CiLocationOn /> Mahuli, Kala Fata Road, Taluka, Parshivni,
                Nagpur, Maharashtra 441105
              </Link>
            </li>
            <li>
              <Link to="mailto:info@mahuliagrotourism.in">
                <IoMail className="mx-2" />
                info@mahuliagrotourism.in
              </Link>
            </li>
            <li>
              <Link to="tel:+919307027399">
                <MdLocalPhone className="mx-2" />
                +91 9307027399
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
     
    </div>
    <div className="container-fluid bottom-footer">
      <div className="col-lg-12  text-center py-2">
      <b>       COPYRIGHT © {currentYear} ALL RIGHTS RESERVED THIS WEBSITE DESIGN AND DEVELOPED BY ANIKET DANGE.
</b>
      </div>
    </div>
      </>
  );
}

export default Footer;
