import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import sliderBg1 from "/silder/image1.jpg";
import sliderBg2 from "/silder/image2.jpg";
import sliderBg3 from "/silder/image3.jpg";
import sliderBg4 from "/silder/image4.jpg";

function Slider() {
  useEffect(() => {
    AOS.init();
  }, []);

  // Define arrays of titles and descriptions
  const titles = [
    "Flavors of India, Adventures Await",
    "Savor, Play, Repeat",
    "Where Food Meets Fun",
    "Taste, Play, Thrive",
  ];

  const descriptions = [
    "Experience the vibrant tapestry of Indian cuisine and thrilling adventures at Muli Agro-Tourism.",
    " Dive into a world of taste sensations and endless fun at Muli Agro-Tourism. With delectable dining options and exciting activities, every moment is an opportunity for joy and exploration.",
    "Join us at Muli Agro-Tourism for a delightful fusion of mouthwatering cuisine and exhilarating games. Whether you're a foodie or a thrill-seeker, there's something here to satisfy every craving.",
    "Indulge your senses and unleash your adventurous spirit at Muli Agro-Tourism. With tantalizing flavors and exciting activities, immerse yourself in a world of taste and play.",
  ];

  // Function to randomly select an item from an array
  const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  return (
    <div className='slider_area'>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        stopOnHover={true}
        transitionTime={1000}
        className='slider_active'
      >
        {/* Render slides with random titles and descriptions */}
        {[sliderBg1, sliderBg2, sliderBg3, sliderBg4].map(
          (backgroundImage, index) => (
            <div
              key={index}
              className='single_slider d-flex align-items-center justify-content-center'
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
              }}
              data-aos='zoom-out'
            >
              <div className='container'>
                <div className='row'>
                  <div className='col-xl-12'>
                    <div className='slider_text text-center'>
                      <h3>{getRandomItem(titles)}</h3>
                      <p>{getRandomItem(descriptions)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
}

export default Slider;
