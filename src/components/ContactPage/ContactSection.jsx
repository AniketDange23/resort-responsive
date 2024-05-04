import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactCard = ({ icon, title, content }) => (
  <div className="card border-0 shadow p-5" style={{ width: '100%', height: '100%' }}>
    <div className="d-flex align-items-center mb-2 d-flex flex-column text-center">
      <div className="icon mb-3">{icon}</div>
      <h5 className="card-title mb-2">{title}</h5>
      <p className="card-text">{content}</p>
    </div>
  </div>
);

const ContactSection = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4">
          <ContactCard
            icon={<FaMapMarkerAlt />}
            title="Address"
            content="Mahuli, Kala Fata Road, Taluka, Parshivni, Nagpur, Maharashtra 441105"
          />
        </div>
        <div className="col-lg-4">
          <ContactCard
            icon={<FaEnvelope />}
            title="Email"
            content={<a href="mailto:info@mahuliagrotourism.in" target="_blank" rel="noopener noreferrer">info@mahuliagrotourism.in</a>}
          />
        </div>
        <div className="col-lg-4">
          <ContactCard
            icon={<FaPhoneAlt />}
            title="Contact"
            content={<a href="tel:+919307027399">+91 9307027399</a>}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
