import  { useState, useEffect } from 'react';
import './backtoTop.css'; // Import CSS file for styling
import {  BiUpArrowAlt } from 'react-icons/bi';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when user scrolls down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`back-to-top-btn ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
<BiUpArrowAlt className="icon"/>   </div>
  );
};

export default BackToTopButton;
