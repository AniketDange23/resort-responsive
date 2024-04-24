import React from "react";
import { Link } from "react-router-dom";

const Food = () => {
  return (
    <div className='about_area'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-7 col-lg-7'>
            <div className='about_thumb2 d-flex'>
              <div className='img_1'>
                <img src='/about/1.png' alt='' />
              </div>
              <div className='img_2'>
                <img src='/about/2.png' alt='' />
              </div>
            </div>
          </div>
          <div className='col-xl-5 col-lg-5'>
            <div className='about_info'>
              <div className='section_title mb-20px'>
                <span>Delicious Food</span>
                <h3>
                  We Serve Fresh and <br /> Delicious Food
                </h3>
              </div>
              <p>
                Suscipit libero pretium nullam potenti. Interdum, blandit
                phasellus consectetuer dolor ornare dapibus enim ut tincidunt
                rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque
                sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et.
                Rhoncus.
              </p>
              <Link href='/contact' className="btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Food;
