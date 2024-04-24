import React from 'react'
import AboutSection from '../components/AboutPage/AboutSection'
import AboutMainInfo from './../components/AboutPage/AboutMainInfo';
import ImageGallery from '../components/AboutPage/ImageGallery';

const About = () => {
  return (
    <div>
      <div className="bradcam_area breadcam_bg mt">
      <h3>About Montana</h3>
    </div>
    <AboutSection/>
    <AboutMainInfo/>
    <ImageGallery/>
    </div>
  )
}

export default About