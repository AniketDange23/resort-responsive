import React from 'react';

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

const ImageGallery = () => {
  return (
    <div className="container">
      <span className='text-primary'>Our Gallery</span>
      <h1 className="fw-light text-center text-lg-start mt-4 mb-4">Gallery</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {images.map((image, index) => (
          <div key={index} className="col p-2">
            <img
              className="img-fluid rounded-2 shadow"
              src={image.src}
              alt={image.alt}
              style={{ Width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
