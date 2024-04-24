import React from "react";

const Offers = () => {
  return (
    <div className='offers_area py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='section_title text-center mb-100'>
              <span>Our Offers</span>
              <h3>Ongoing Offers</h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-4 col-md-4'>
            <div className='single_offers'>
              <div className='about_thumb'>
                <img src='/offers/1.png' alt='' />
              </div>
              <h3>
                Up to 35% savings on Club <br /> rooms and Suites
              </h3>
              <ul>
                <li>Luxaries condition</li>
                <li>3 Adults & 2 Children size</li>
                <li>Sea view side</li>
              </ul>
              <a href='#' className='book_now'>
                book now
              </a>
            </div>
          </div>
          <div className='col-xl-4 col-md-4'>
            <div className='single_offers'>
              <div className='about_thumb'>
                <img src='/offers/2.png' alt='' />
              </div>
              <h3>
                Up to 35% savings on Club <br /> rooms and Suites
              </h3>
              <ul>
                <li>Luxaries condition</li>
                <li>3 Adults & 2 Children size</li>
                <li>Sea view side</li>
              </ul>
              <a href='#' className='book_now'>
                book now
              </a>
            </div>
          </div>
          <div className='col-xl-4 col-md-4'>
            <div className='single_offers'>
              <div className='about_thumb'>
                <img src='/offers/3.png' alt='' />
              </div>
              <h3>
                Up to 35% savings on Club <br /> rooms and Suites
              </h3>
              <ul>
                <li>Luxaries condition</li>
                <li>3 Adults & 2 Children size</li>
                <li>Sea view side</li>
              </ul>
              <a href='#' className='book_now'>
                book now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
