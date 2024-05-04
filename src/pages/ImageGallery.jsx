import  { useState, useRef, useEffect, useCallback } from "react";
import "./ImageGallery.css"; // Import CSS file for styling
import { CgClose } from "react-icons/cg";

const images = [
  { src: "/gallery/image1.jpg", alt: "Image 1" },
  { src: "/gallery/image2.jpg", alt: "Image 2" },
  { src: "/gallery/image3.jpg", alt: "Image 3" },
  { src: "/gallery/image4.jpg", alt: "Image 4" },
  { src: "/gallery/image5.jpg", alt: "Image 5" },
  { src: "/gallery/image6.jpg", alt: "Image 6" },
  // Add more images here
];

const ImageGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const imageRef = useRef(null); // Ref for the modal image container

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      const nextIndex = (selectedImageIndex + 1) % images.length;
      setSelectedImageIndex(nextIndex);
      setTimeout(() => setIsAnimating(false), 300); // Adjust animation duration as needed
    }
  });

  const handlePrev = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      const prevIndex =
        selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1;
      setSelectedImageIndex(prevIndex);
      setTimeout(() => setIsAnimating(false), 300); // Adjust animation duration as needed
    }
  });

  // Handle keyboard navigation (optional)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (modalOpen) {
        switch (event.key) {
          case "ArrowRight":
            handleNext();
            break;
          case "ArrowLeft":
            handlePrev();
            break;
          case "Escape":
            closeModal();
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, modalOpen]);

  const handleImageClick = (index) => {
    if (modalOpen && index !== selectedImageIndex) {
      setSelectedImageIndex(index);
    }
  };

  return (
    <>
      <div className='bradcam_area breadcam_bg '>
        <h1>Our Gallery</h1>
      </div>
      <div className='container py-3'>
        <h1 className='text-center mt-4 mb-4'>Gallery</h1>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4'>
          {images.map((image, index) => (
            <div key={index} className='col'>
              <img
                className='img-fluid rounded-2 shadow gallery-image'
                src={image.src}
                alt={image.alt}
                onClick={() => openModal(index)} // Open modal on click
                style={{
                  cursor: "pointer",
                  height: "300px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>

        {modalOpen && (
          <div className='modal-container'>
            <div className='modal-overlay' onClick={closeModal}></div>

            <div className='modal-content'>
              <span className='close' onClick={closeModal}>
                {" "}
                <CgClose />{" "}
              </span>

              <div className='modal-image-container' ref={imageRef}>
                <img
                  src={images[selectedImageIndex].src}
                  alt={images[selectedImageIndex].alt}
                  style={{ width: "100%" }}
                  onClick={() => handleImageClick(selectedImageIndex)} // Handle image click within modal
                />
              </div>
              <button className='prev' onClick={handlePrev}>
                &#10094;
              </button>
              <button className='next' onClick={handleNext}>
                &#10095;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageGallery;
