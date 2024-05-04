import React, { useState, useEffect } from 'react';
import { BiSolidPhoneCall } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import './FixedButtons.css';
import { IoIosArrowUp } from 'react-icons/io';

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
      <button className={`fixed-btn call-btn`} onClick={handleCallClick}>
        <BiSolidPhoneCall />
      </button>

      <button
        className={`fixed-btn back-to-top-btn ${isVisible ? 'active' : ''}`}
        onClick={scrollToTop}
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
};

export default FixedButtons;
