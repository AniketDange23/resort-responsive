import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const images = [
    { src: "/gallery/image1.jpg", alt: 'Image 1' },
    { src: "/gallery/image2.jpg", alt: 'Image 2' },
    { src: "/gallery/image3.jpg", alt: 'Image 3' },
    { src: "/gallery/image4.jpg", alt: 'Image 4' },
    { src: "/gallery/image5.jpg", alt: 'Image 5' },
    { src: "/gallery/image6.jpg", alt: 'Image 6' },
    { src: "/gallery/image7.jpg", alt: 'Image 7' },
    { src: "/gallery/image8.jpg", alt: 'Image 8' },
    { src: "/gallery/image9.jpg", alt: 'Image 9' },
    { src: "/gallery/image10.jpg", alt: 'Image 10' },
    { src: "/gallery/image11.jpg", alt: 'Image 11' },
    { src: "/gallery/image12.jpg", alt: 'Image 12' },
    // Add more images here
  ];
  

const OurCollection = () => {

  return (
    <div className='container-fluid py-2'>
      <div className='row'>
        <h1 className="text-center mb-4" data-aos="fade-up">Our Recent Activities</h1>
        <div className='col-lg-12 '>
          <OwlCarousel
            loop
            autoplay
            dots // Show dots navigation
            autoplayTimeout={2000}
            animateOut={"fadeOut"}
            animateIn={"fadeIn"}
            responsive={{
              0: { items: 1 }, // Responsive settings for devices less than 768px
              768: { items: 2 }, // Responsive settings for devices between 768px and 992px
              992: { items: 3 }, // Responsive settings for devices between 992px and 1200px
              1200: { items: 3 }, // Responsive settings for devices greater than 1200px
            }}
          >
            {images.map((image, index) => (
              <div className='ts-item px-2 ' key={index}>
                <img
                data-aos="fade-down"
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "100%",
                    cursor:"pointer",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius:"10px",
                    boxShadow:"1px 3px 5px #0000002b"
                  }}
                />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default OurCollection;
