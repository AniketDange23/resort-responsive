import React from 'react';

const images = [
    { src: "./images/1.jpg", alt: 'Image 1' },
    { src: "./images/2.jpg", alt: 'Image 2' },
    { src: "./images/3.jpg", alt: 'Image 3' },
    { src: "./images/4.jpg", alt: 'Image 4' },
    { src: "./images/5.jpg", alt: 'Image 5' },
    { src: "./images/6.jpg", alt: 'Image 6' },
    { src: "./images/7.jpg", alt: 'Image 7' },
    { src: "./images/8.jpg", alt: 'Image 8' },
    { src: "./images/9.jpg", alt: 'Image 9' },
    { src: "./images/10.jpg", alt: 'Image 10' },
    { src: "./images/11.jpg", alt: 'Image 11' },
    { src: "./images/12.jpg", alt: 'Image 12' },
    // Add more images here
];

const ImageGallery = () => {
  return (
    <div className="container">
      <span className=' text-primary'>Our Gallery</span>
      <h1 className="fw-light text-center text-lg-start mt-4 mb-4">Gallery</h1>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-6 p-2">
              <img
                className="img-fluid  rounded-2 shadow"
                src={image.src}
                alt={image.alt}
                style={{ width: '400px', height: '320px', objectFit: 'cover' }}
              />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
