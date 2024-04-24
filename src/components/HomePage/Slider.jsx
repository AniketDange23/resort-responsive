import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sliderBg1 from "/blog/1.jpg"; // Import your background images
import sliderBg2 from "/blog/2.jpg";
import sliderBg3 from "/blog/3.jpg";
import sliderBg4 from "/blog/4.jpg";

function Slider() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='slider_area'>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        transitionTime={1000}
        className='slider_active'
      >
        <div
          className='single_slider d-flex align-items-center justify-content-center'
          style={{
            backgroundImage: `url(${sliderBg1})`,
            backgroundSize: "cover",
          }}
          data-aos='zoom-out'
        >
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='slider_text text-center '>
                  <h3>Life is Beautiful</h3>
                  <p>Unlock to enjoy the view of Martine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='single_slider d-flex align-items-center justify-content-center'
          style={{
            backgroundImage: `url(${sliderBg2})`,
            backgroundSize: "cover",
          }}
          data-aos='zoom-out'
        >
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='slider_text text-center '>
                  <h3>Life is Beautiful</h3>
                  <p>Unlock to enjoy the view of Martine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='single_slider d-flex align-items-center justify-content-center'
          style={{
            backgroundImage: `url(${sliderBg3})`,
            backgroundSize: "cover",
          }}
          data-aos="zoom-out"
        >
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='slider_text text-center '>
                  <h3>Life is Beautiful</h3>
                  <p>Unlock to enjoy the view of Martine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='single_slider d-flex align-items-center justify-content-center'
          style={{
            backgroundImage: `url(${sliderBg4})`,
            backgroundSize: "cover",
          }}
          data-aos="zoom-out"
        >
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='slider_text text-center '>
                  <h3>Life is Beautiful</h3>
                  <p>Unlock to enjoy the view of Martine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add more slides with suitable background images as needed */}
      </Carousel>
    </div>
  );
}

export default Slider;
