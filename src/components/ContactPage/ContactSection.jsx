import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactCard = ({ icon, title, content }) => (
  <div
    className='card border-0 shadow p-5'
    style={{ width: "100%", height: "100%" }}
  >
    <div className='d-flex align-items-center mb-2 d-flex flex-column text-center'>
      <div className='icon  mb-3 ' >{icon}</div>
      <h5 className='card-title mb-2'>{title}</h5>
      <p className='card-text '>{content}</p>
    </div>
  </div>
);

const ContactSection = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-4 py-3 '>
          <ContactCard
            icon={<FaMapMarkerAlt style={{fontSize:"30px"}} />}
            title='Address'
            content='Mahuli, Kala Fata Road, Taluka, Parshivni, Nagpur, Maharashtra 441105'
          />
        </div>
        <div className='col-lg-4 py-3'>
          <ContactCard
            icon={<FaEnvelope style={{fontSize:"30px"}} />}
            title='Email'
            content={
              <Link
                to='mailto:info@mahuliagrotourism.in'
                target='_blank'
                rel='noopener noreferrer'
                className='text-black text-decoration-none'
              >
                info@mahuliagrotourism.in
              </Link>
            }
          />
        </div>
        <div className='col-lg-4 py-3'>
          <ContactCard
            icon={<FaPhoneAlt style={{fontSize:"30px"}} />}
            title='Contact'
            content={
              <Link
                className='text-black text-decoration-none'
                to='tel:+919307027399'
              >
                +91 9307027399
              </Link>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
