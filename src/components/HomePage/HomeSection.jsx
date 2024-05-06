import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

function HomeSection() {
  return (
    <section className='about-sectionc mt-5'>
      
      <div className='container py-5'>
        <div className='row'>
          <div className='col-lg-6   mb-5'>
            <div className=' mb-4'>
              <h1>Make Memories that Last at Mahuli Agro Tourism!</h1>
            </div>
            <p>
              Welcome to Mauli Agro Tourism, where nature and culture converge
              to offer you a memorable retreat. Nestled amidst lush greenery and
              picturesque landscapes, our tranquil haven invites you to
              reconnect with the simplicity and beauty of rural life. Immerse
              yourself in authentic experiences, from farm tours and bullock
              cart rides to traditional folk performances and hands-on
              agricultural activities. Indulge your taste buds with farm-fresh
              delights prepared with love and care. Whether you're seeking a
              peaceful getaway, a learning adventure, or simply a chance to
              unwind, Mauli Agro Tourism promises an enriching escape that
              rejuvenates mind, body, and spirit
            </p>
            <Link to='/contact'>
              <button>
                Visiting Our Farm{" "}
                <IoIosArrowDroprightCircle style={{ fontSize: "25px" }} />
              </button>
            </Link>
          </div>
          <div className='col-lg-6 mb-5'>
            <div className='img-container text-center'>
              <img src='/home.png' className='img-fluid' alt='About' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
