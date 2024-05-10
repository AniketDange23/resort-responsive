import React from "react";
import ContactForm from "../components/ContactPage/ContactForm";
import ContactSection from "../components/ContactPage/ContactSection";

const Contact = () => {
  return (
    <div>
      <div className='bradcam_area breadcam_bg text-center'>
        <h1 className="title">Get In Touch</h1>
      </div>
      <ContactSection />
      <ContactForm />
    </div>
  );
};

export default Contact;
