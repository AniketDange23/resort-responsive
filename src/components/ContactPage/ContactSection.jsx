
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactCard = ({ icon, title, content }) => (
  <div className="card   border-1 border-success  py-2 my-3  ">
      <div className="d-flex align-items-center mb-2 d-flex flex-column text-center  ">
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
        <div className="col-lg-4  ">
          <ContactCard
            icon={<FaMapMarkerAlt />}
            title="Address"
            content="Buttonwood, California. Rosemead, CA 91770"
          />
        </div>
        <div className="col-lg-4">
          <ContactCard
            icon={<FaEnvelope />}
            title="Email"
            content={<a href="mailto:support@colorlib.com">support@colorlib.com</a>}
          />
        </div>
        <div className="col-lg-4">
          <ContactCard
            icon={<FaPhoneAlt />}
            title="Contact"
            content="+1 253 565 2365"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
