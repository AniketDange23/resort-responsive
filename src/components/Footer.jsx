import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"; // Import icons from react-icons
import { CiLocationOn } from "react-icons/ci";

import { IoMail } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { BsWhatsapp, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <footer className='footer black-bg text-white'>
      <div className='footer_top'>
        <div className='container footer'>
          <div className='row'>
            <div className='col-xl-3 col-md-6 col-lg-3 pt-3'>
              <div className='footer_widget'>
                <h3 className='text-white'>Reservation</h3>
                <p className='text-white'>
                  <Link to='tel:+919307027399'>
                    <MdLocalPhone  className="mx-2" style={{  fontSize: "24px"}}/>
                    +91 9307027399
                  </Link>
                </p>
                <p className='text-white '>
                  <Link to=''>
                    <IoMail className="mx-2" style={{  fontSize: "24px"}} />
                    info@mahuliagrotourism.in
                  </Link>
                </p>
                <ul className='social-icons'>
                  <li>
                    <Link href='#'>
                      <FaFacebookSquare style={{ fontSize: "30px" }} />{" "}
                    </Link>
                    <Link href='#'>
                      <BsWhatsapp style={{ fontSize: "30px" }} />{" "}
                    </Link>
                    <Link href='#'>
                      <BsYoutube style={{ fontSize: "30px" }} />{" "}
                    </Link>

                    <Link to='#'>
                      <FaInstagram style={{ fontSize: "30px" }} />{" "}
                    </Link>
                  </li>
                </ul>{" "}
              </div>
            </div>

            <div className='col-xl-3 col-md-6 col-lg-2 pt-3'>
              <div className='footer_widget'>
                <h3 className='text-white'>Navigation</h3>
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>
                  {/* <li>
                    <Link to='/accommodation'>Accommodation</Link>
                  </li> */}
                  <li>
                    <Link to='/activities'>Activities</Link>
                  </li>
                  <li>
                    <Link to='/package'>Package</Link>
                  </li>{" "}
                  <li>
                    <Link to='/gallery'>Gallery</Link>
                  </li>
                  <li>
                    <Link to='/Contact'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-6 col-md-6 col-lg-6 pt-3'>
              <div className='footer_widget'>
                <h3 className='text-white '>Address</h3>
                <p className='text-white'>
                  {" "}
                  <CiLocationOn /> Mahuli, Kala Fata Road, Taluka,
                  Parshivni,Nagpur, Maharashtra 441105
                </p>
                <h5 className='py-2 text-white'>Get Direction</h5>
                <div className='map-container'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14633.674558461002!2d79.17736396595805!3d21.40723096269719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4db387d99039b%3A0x9a238b098f78571e!2sMahuli%20Agro%20Tourism!5e1!3m2!1sen!2sin!4v1714642872348!5m2!1sen!2sin'
                    width='100%'
                    height='250'
                    style={{ border: "0" }}
                    allowFullScreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <hr />
        <div className='row'>
          <div className='col-xl-12 col-md-7 col-lg-9'>
            <p className='copy_right text-white-50 text-center'>
              Copyright &copy;{new Date().getFullYear()} All rights reserved |
              This template is made with{" "}
              <i className='fa fa-heart-o' aria-hidden='true'></i> by Aniket
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
