import React from "react";

const Mission = () => {
  return (
    <div className='container-fluid black-bg '>
      <div className='container py-5'>
          <h2 className='text-white text-center mb-5'>
            Our Mission & Vision
          </h2>
          <div className='row justify-content-center gap-5 ' data-aos="zoom-in">
            <div className='col-lg-5 col-md-8 col-sm-10 col-12 bg-white p-4 rounded-2 mb-3'>
              <h3>Mission</h3>
              <p>
                Mahuli Agro-tourism is dedicated to providing visitors with a unique
                and memorable agro-tourism experience. We offer the opportunity to
                immerse yourself in the beauty of rural life, learn about
                sustainable agriculture practices, and connect with nature. Located
                in Maharashtra, India, our farm offers a variety of activities and
                comfortable accommodations for a truly unforgettable getaway.
              </p>
            </div>
            <div className='col-lg-5 col-md-8 col-sm-10 col-12 bg-white p-4 rounded-2 mb-3' data-aos="zoom-in">
              <h3>Vision</h3>
              <p>
                Our greatest strength lies in fostering a collaborative environment
                where diverse ideas and strategies are shared freely. By combining
                this collective expertise, we strive to deliver the most
                comprehensive and effective agro-tourism experiences for our guests.
                We're committed to staying ahead of the curve and are always
                changing to accommodate new trends and consumer preferences in the
                agro-tourism sector.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Mission;
