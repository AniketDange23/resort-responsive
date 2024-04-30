import React from "react";
import ContactForm from "../components/ContactPage/ContactForm";
import ContactSection from "../components/ContactPage/ContactSection";

const Contact = () => {
  return (
    <div>
      <div className='bradcam_area  mt breadcam_bg_1 text-center'>
      <div >
      <h3>Get In Touch</h3>

      </div>
      </div>
      <ContactSection/>
      <ContactForm />
    </div>
  );
};

export default Contact;
