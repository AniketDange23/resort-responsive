import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const initialState = {
    name: '',
    email: '',
    city: '',
    phone: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/contact', formData);
      if (response.status === 200) {
        console.log('Form submitted successfully:', formData, response.data);
        toast.success('Thanks for visiting!');
        setFormData(initialState);
        console.log(response)
      }
    } catch (error) {
      console.error('Form submission failed:', error.message);
      toast.error('Form submission failed. Please try again later.');
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Get In Touch</h2>
      <div className="row">
        <div className="col-md-6  py-5">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d237966.4476140934!2d78.95230241680326!3d21.26252999018951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d21.1158082!2d79.0378241!4m5!1s0x3bd4db387d99039b%3A0x9a238b098f78571e!2smahuli%20agro%20tourism!3m2!1d21.4085711!2d79.1864487!5e0!3m2!1sen!2sin!4v1714549554804!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ boxShadow:"1px 1px 5px  #0000006f"}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-6 py-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <div className="col-sm mb-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-sm mb-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm mb-3">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contact"
                  required
                />
              </div>
              <div className="col-sm mb-3">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                className=" mb-3"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="6"
                required
              />
            </div>
            <button type="submit" >Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
