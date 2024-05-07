import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Slider.css"; // Import CSS file for Slider styling

const Slider = () => {
  return (
    <div className="container-fluid mt-7 slider-container">
      <div className="row">
        <div className="col-lg-12 g-0 slider-image">
          <img src="/image9-min.jpg" alt="" className="img-fluid cover-image" />
        </div>
        <div className="col-md-4 d-flex justify-content-center align-content-center  text-center slider-content ">
        <div className="py-3 bg  ">
            <h1 className="mb-3 pt-3 px-2">माहुलीचा परिसस्पर्श, मनाचे समाधान!</h1>
          <h6 className="descriptions px-3">
            निसर्गरम्य वातावरणाचा आजच अनुभव घ्या माहुली ऍग्रो टुरिझम या
          </h6> <div className="buttons text-center justify-content-center">
            <Link to="/contact" className="button-link">
              <button className="contact-button">Contact US</button>
            </Link>
            <Link to="/contact" className="button-link">
              <button className="whatsapp-button">
                <FaWhatsapp style={{ fontSize: "23px" }} />
              </button>
            </Link>
          </div>
        </div>
             
        </div>
         
         
        </div>
    </div>
  );
};

export default Slider;
