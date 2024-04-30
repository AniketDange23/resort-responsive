import React from "react";
import { Link } from "react-router-dom";

const Food = () => {
  return (
    <div className="about_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about_thumb2 d-flex" >
              <div className="img_1">
                <img
                  src="./about/cooking.jpg"
                  alt="Cooking"
                  className="img-fluid"
                  style={{ height:"300px" , width:"300px"
             , objectFit:"cover"
            }}></img>
              </div>
              <div className="img_2">
                <img
                  src="./about/food2.jpg"
                  alt="Food"
                  className="img-fluid"
                  style={{ height:"300px" , width:"300px"
             , objectFit:"cover"
            }}></img>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_info">
              <div className="section_title mb-20px">
                <h1>Delicious Food</h1>
                <h4>We Serve Fresh and Delicious Food</h4>
              </div>
              <p>
                Suscipit libero pretium nullam potenti. Interdum, blandit
                phasellus consectetuer dolor ornare dapibus enim ut tincidunt
                rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque
                sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et.
                Rhoncus.
              </p>
              <button>
                <Link to="/contact">Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
