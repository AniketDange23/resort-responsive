import React from "react";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div className='about_area'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-5 col-lg-5'>
            <div className='about_info'>
              <div className='section_title mb-20px'>
                <span>About US</span>
                <h3>
                  A Luxuries <b> Resort</b> with Nature
                </h3>
              </div>
              <p>
                Suscipit libero pretium nullam potenti. Interdum, blandit
                phasellus consectetuer dolor ornare dapibus enim ut tincidunt
                rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque
                sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et.
                Rhoncus.
              </p>
              <Link to='/contact' className='btn mb-3'>
                Learn More
              </Link>
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-5'>
            <div className='about_thumb d-flex'>
              <div className='img_1'>
                <img src='/image1.jpg' className=" img-fluid" alt='' />
              </div>
              <div className='img_2'>
                <img src='/image2.jpg ' className="img-fluid" alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
