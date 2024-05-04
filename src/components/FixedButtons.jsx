import React, { useState, useEffect } from 'react';
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiArrowUp } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import './FixedButtons.css';

const FixedButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const threshold = 400;
    setIsVisible(scrollTop > threshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919307027399';
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <button className="fixed-btn call-btn" onClick={handleCallClick} >
        <BiSolidPhoneCall />
      </button>

      {isVisible && (
        <button className="fixed-btn back-to-top-btn" onClick={scrollToTop}>
          <HiArrowUp />
        </button>
      )}
    </div>
  );
};

export default FixedButtons;
