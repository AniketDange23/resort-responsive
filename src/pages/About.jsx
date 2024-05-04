import React from "react";
import AboutSection from "../components/AboutPage/AboutSection";
import AboutMainInfo from "./../components/AboutPage/AboutMainInfo";
import Rooms from './../components/Accommodation/Rooms';

const About = () => {
  return (
    <div>
      <div className='bradcam_area breadcam_bg '>
          <h1>About us</h1> 
  </div>


      <AboutSection />
      <AboutMainInfo />
      <Rooms/>
    </div>
  );
};

export default About;
