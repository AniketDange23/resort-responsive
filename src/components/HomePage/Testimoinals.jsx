import React from "react";
import OwlCarousel from "react-owl-carousel";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./testimoinals.css";

const testimonialData = [
  {
    name: "Priya Sharma",
    content:
      "Visiting Mahuli Agro Tourism was an unforgettable experience! The serene surroundings and warm hospitality made our stay truly delightful. Highly recommend!",
    rating: 5,
    userSrc: "/users/1.jpg",
    city: "Assam",
    Date: "21 April 2024",
  },
  {
    name: "Rahul Patel",
    content:
      "Our family had a fantastic time at Mahuli Agro Tourism. From exploring the farm to enjoying delicious local cuisine, every moment was memorable. Will definitely visit again!",
    rating: 4.5,
    userSrc: "/users/3.jpg",
    city: "Nagpur",
    Date: "21 April 2024",
  },
  {
    name: "Sneha Desai",
    content:
      "Mahuli Agro Tourism offers a perfect escape from the hustle and bustle of city life. The tranquil atmosphere and eco-friendly practices make it an ideal destination for nature lovers.",
    rating: 5,
    userSrc: "/users/2.jpg",
    city: "Goa",
    Date: "02 May 2024",
  },
  {
    name: "Anil Kumar",
    content:
      "I was amazed by the variety of activities available at Mahuli Agro Tourism. From bullock cart rides to pottery making, there's something for everyone.",
    rating: 4.8,
    userSrc: "/users/4.jpg",
    city: "Mumbai",
    Date: "02 April 2024",
  },
  {
    name: "Neha Singh",
    content:
      "Mahuli Agro Tourism exceeded all our expectations! The staff went above and beyond to ensure we had a memorable stay. Can't wait to return!",
    rating: 5,
    userSrc: "/users/5.jpg",
    city: "Delhi",
    Date: "06 April 2024",
  },
  {
    name: "Alisha Gupta",
    content:
      "My stay at Mahuli Agro Tourism was nothing short of magical. The picturesque surroundings, comfortable accommodations, and delicious farm-fresh meals made it a perfect getaway. Highly recommended!",
    rating: 4.9,
    userSrc: "/users/6.jpg",
    city: "Pune",
    Date: "11 April 2024",
  },
];

const Testimonials = () => {
  return (
    <div className='container-fluid py-3 testimonial'>
      <div className='section-title container'>
        <h4>Testimonials</h4>
        <h1 className='mb-5'>What Customers Say?</h1>
        <div className='row'>
          <div className='col-lg-12'>
            <OwlCarousel
              className='testimonial-slider owl-carousel owl-theme'
              loop
              autoplay
              autoplayTimeout={3000}
              dots
              // animateOut='fadeOut'
              // animateIn='fadeIn'
              responsive={{
                0: { items: 1 },
                768: { items: 1 },
                992: { items: 1 },
                1200: { items: 2 },
              }}
            >
              {testimonialData.map((testimonial, index) => (
                <div className='testimonial-item py-2' key={index}>
                  <div className='d-flex align-items-center justify-content-center text-center mb-3'>
                    <img
                      src={testimonial.userSrc}
                      alt='Testimonial Logo'
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h5>{testimonial.name}</h5>
                  <span> City: {testimonial.city} </span>
<br />
                    <span> Date: {testimonial.Date} </span>


                  <p>{testimonial.content}</p>
                  <div className='ti-author'>
                    <div className='rating'>
                      {Array.from(
                        { length: Math.floor(testimonial.rating) },
                        (_, i) => (
                          <FaStar key={i} className='icon_star text-warning' />
                        )
                      )}
                      {testimonial.rating % 1 !== 0 && (
                        <FaStarHalfAlt className='icon_star-half_alt text-warning' />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
