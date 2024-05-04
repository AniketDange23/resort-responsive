import React from "react";
import { Link } from "react-router-dom";

function AboutSection() {
  return (



      <div className="container mb-2 py-5 ">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5 order-md-1">
            <div className="about-info">
              <div className="section-title mb-5">
                <h1>Make Memories that Last at Mahuli Agro Tourism!</h1>
              </div>
              <p data-aos="fade-up">
                Welcome to Mauli Agro Tourism, where nature and culture
                converge to offer you a memorable retreat. Nestled amidst lush
                greenery and picturesque landscapes, our tranquil haven invites
                you to reconnect with the simplicity and beauty of rural life.
                Immerse yourself in authentic experiences, from farm tours and
                bullock cart rides to traditional folk performances and
                hands-on agricultural activities. Indulge your taste buds with
                farm-fresh delights prepared with love and care. Whether
                you're seeking a peaceful getaway, a learning adventure, or
                simply a chance to unwind, Mauli Agro Tourism promises an
                enriching escape that rejuvenates mind, body, and spirit
              </p>
              <button>
                <Link to="/contact" className="link">
                  Visiting Our Farm
                </Link>
              </button>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5 order-md-2">
            <div className="img-container text-center">
              <img src="/about/about.jpg" className="img-fluid" alt="About" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default AboutSection;
