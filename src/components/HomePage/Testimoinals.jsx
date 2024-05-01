import OwlCarousel from "react-owl-carousel";
import {
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./testimoinals.css";

const testimonialData = [
  {
    text: "The service at Grand View Hotel was exceptional. The staff went above and beyond to make our stay enjoyable. We highly recommend this hotel for anyone visiting the city.",
    author: "Sarah Thomas",
    rating: 5,
    userSrc: "./users/1.jpg", // Replace with image path
  },
  {
    text: "We had a wonderful experience at Ocean Paradise Resort. The facilities were top-notch, the activities were fun, and the food was delicious. We will definitely be back!",
    author: "Michael Brown",
    rating: 3,
    userSrc: "./users/2.jpg", // Replace with image path
  },
  {
    text: "My visit to City Lights Museum was truly inspiring. The exhibits were well-curated and informative, and the staff was knowledgeable and friendly. A must-see for any art lover!",
    author: "Jessica Jones",
    rating: 4,
    userSrc: "./users/3.jpg", // Replace with image path
  },
  {
    text: "Learning a new skill at Tech Academy was a great decision. The instructors were patient and supportive, and I feel confident in my new abilities. Highly recommended!",
    author: "William Lee",
    rating: 5,
    userSrc: "./users/4.jpg", // Replace with image path
  },
  {
    text: "My online shopping experience at ShopEasy was seamless. Easy navigation, great selection, and fast delivery. I'll definitely be shopping there again soon!",
    author: "Jennifer Garcia",
    rating: 4.2,
    userSrc: "./users/5.jpg", // Replace with image path
  },
];

const Testimonials = () => {
  return (
    <section className='testimonial-section spad'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='section-title'>
              <span>Testimonials</span>
              <h2>What Customers Say?</h2>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 '>
              <OwlCarousel
                className='testimonial-slider owl-carousel owl-theme'
                loop
                margin={10}
                autoplay
                autoplayTimeout={3000}
                nav
                
                navText={[<FaArrowLeft />, <FaArrowRight />]}
              
              >
                {testimonialData.map((testimonial, index) => (
                  <div className='ts-item' key={index}>
                    <div className=' d-flex align-items-center justify-content-center text-center mb-3'>
                      <img
                        src={testimonial.userSrc}
                        alt='Testimonial Logo'
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "80px",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <p>{testimonial.text}</p>
                    <div className='ti-author'>
                      <div className='rating'>
                        {Array.from(
                          { length: Math.floor(testimonial.rating) },
                          (_, i) => (
                            <FaStar
                              key={i}
                              className='icon_star text-warning'
                            />
                          )
                        )}
                        {testimonial.rating % 1 !== 0 && (
                          <FaStarHalfAlt className='icon_star-half_alt text-warning' />
                        )}
                      </div>
                      <h5>{testimonial.author}</h5>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
