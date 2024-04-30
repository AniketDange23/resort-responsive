import React from 'react';
import { FaSwimmingPool, FaSpa, FaUtensils, FaChess, FaCoffee } from 'react-icons/fa';
import { GiWaveSurfer } from "react-icons/gi";

const Offers = () => {
  // Define an array of objects containing the icon components and titles
  const amenities = [
    { icon: <FaSwimmingPool size={60}  />, title: 'Swimming Pool' },
    { icon: <FaSpa size={60} />, title: 'Ayurvedic Spa' },
    { icon: <FaUtensils size={60}  />, title: 'Fine Dining' },
    { icon: <FaChess size={60} />, title: 'Indoor Games' },
    { icon: <FaCoffee size={60}  />, title: 'Coffee Machine' },
    { icon: <GiWaveSurfer size={60}  />, title: 'Serene Lake' }


  ];

  return (
    <div className='offers_area py-5'>
      <div className='container align-content-center justify-content-center text-center'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='section_title text-center mb-100'>
              <h3>Amenities</h3>
            </div>
          </div>
        </div>
        <div className='row'>
          {/* Use map function to iterate over the amenities array */}
          {amenities.map((amenity, index) => (
            <div className='col-xl-4 col-md-4 d-flex mb-5 align-content-center justify-content-center' key={index}>
              <div className='single_offers '>
                <div className='about_thumb svg-box '>
                  {amenity.icon}
                </div>
                <h3>{amenity.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
