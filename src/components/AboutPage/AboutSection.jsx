import React from 'react';
import { Link } from 'react-router-dom';

function AboutSection() {
  return (
    <div className="about_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="about_info">
              <div className="section_title mb-20px">
                <span>About Us</span>
                <h3>A Luxuries Hotel <br />with Nature</h3>
              </div>
              <p>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare
                dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque
                sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
              <Link to="/contact" className='btn mb-3'>Learn More</Link>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="about_thumb d-flex">
              <div className="img_1">
                <img src="/image1.jpg" alt="" />
              </div>
              <div className="img_2">
                <img src="/image2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
