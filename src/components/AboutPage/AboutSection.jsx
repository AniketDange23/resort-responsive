import React from "react";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div className="about_area">
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-5">
            <div className="about_thumb">
              <div className="img_1">
                <img
                  src="/about/about.jpg"
                  className="img-fluid "
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="about_info px-5">
              <div className="section_title mb-5">
                <h1>Welcome to Mauli Agro Tourism</h1>
              </div>
              <p>
                A home away from home. We welcome you to relive village life in
                the lap of nature, away from the hustle and bustle of the city. A
                perfect weekend getaway from <b>Mumbai to Thane @ 115 Km or 2.20
                Hrs drive.</b>
              Mauli Agro Tourism is 7.5 acres of land located at Varor
                Village, Dahanu in Palghar district. (On Boisar- Dahanu Road
                near Chinchani Village) The land was mainly purchased for
                preservation and protection of trees, flora and fauna, to
                protect Mother Nature’s blessings and by enhancing the greenery
                and its biodiversity. </p>
               
              <button>
                  <Link to="/contact" >
                Learn More
              </Link>
              </button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
