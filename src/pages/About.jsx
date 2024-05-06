import React from "react";
import AboutSection from "../components/AboutPage/AboutSection";
import AboutMainInfo from "./../components/AboutPage/AboutMainInfo";

const About = () => {
  return (
    <div>
      <div className='bradcam_area breadcam_bg '>
          <h1>About us</h1> 
  </div>


      <AboutSection />
      <AboutMainInfo />
    </div>
  );
};

export default About;
