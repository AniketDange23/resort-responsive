import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <>
      <marquee>
        <h4>
          Welcome to Mauli Agro Tourism's Farm!{" "}
          <span> Feel the Rhythm of Rural Life.</span>
        </h4>
      </marquee>
      <div className='container mb-2 py-5 '>
        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5 order-md-1'>
            <div>
              <div className=' mb-4'>
                <h1 className='text-start'>
                  Make Memories that Last at Mahuli Agro Tourism!
                </h1>
              </div>
              <p data-aos='fade-up'>
                Mahuli Farm is more than just a place to stay; it's a
                celebration of sustainable living. We believe in nourishing the
                land that nourishes us. Learn about our composting methods,
                rainwater harvesting techniques, and our commitment to organic
                farming practices.
                <br />  <br />
                Our meals are prepared with love, using the fresh seasonal
                ingredients harvested right from our fields. Our chefs create
                delicious meals that capture the essence of the local cuisine,
                offering a true taste of village life.
              </p>
              <Link to='/contact' className='link'>
                {" "}
                <button className=' align-content-center px-3'>
                  Visiting Our Farm{" "}
                  <IoIosArrowDroprightCircle style={{ fontSize: "25px" }} />
                </button>{" "}
              </Link>
            </div>
          </div>
          <div className='col-lg-6 mb-5 order-lg-2'>
  <div className='row'>
    <div className='col-md-6 mb-2'>
      <div className='img-container text-center'>
        <img src='/about/about.jpg' className='img-fluid img-fluid rounded-2' alt='About' />
      </div>
    </div>
    <div className='col-md-6 mb-2'>
      <div className='img-container text-center   '>
        <img src='/about/about1.jpg' className='img-fluid rounded-2' alt='About' />
      </div>
    </div>
    <div className='col-md-12'>
      <div className='img-container text-center'>
        <img src='/about/about2.jpg' className='img-fluid img-fluid rounded-2' alt='About ' />
      </div>
    </div>
  </div>
</div>


        </div>
      </div>
    </>
  );
}

export default AboutSection;
