import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Perform form submission logic here, such as sending data to backend
    // For demonstration purposes, let's just show a success toast and reset the form
    toast.success('Thank you for contacting us!');
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 mb-3">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383131.26951719914!2d79.17425038807275!3d21.149874728454147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4db387d99039b%3A0x9a238b098f78571e!2sMahuli%20Agro%20Tourism!5e0!3m2!1sen!2sin!4v1714493879917!5m2!1sen!2sin"
              className="embed-responsive-item"
              allowFullScreen=""
              loading="lazy"

              width="100%" 
              height="400px"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-lg-6 px-3">
          <ToastContainer position="bottom-right" />
          <h2 className="contact-title mb-5">Get in Touch</h2>
          <Formik
            initialValues={{ name: '', email: '', contact: '', city: '', message: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = 'Required';
              }
              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
              if (!values.contact) {
                errors.contact = 'Required';
              }
              if (!values.city) {
                errors.city = 'Required';
              }
              if (!values.message) {
                errors.message = 'Required';
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="container contact-form" noValidate>
                <div className="row">
                  <div className="col-sm-6 mb-4">
                    <div className="form-group">
                      <Field className="form-control" type="text" name="name" placeholder="Enter your name" />
                      <ErrorMessage name="name" component="div" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <div className="form-group">
                      <Field className="form-control" type="email" name="email" placeholder="Email" />
                      <ErrorMessage name="email" component="div" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <div className="form-group">
                      <Field className="form-control" type="text" name="contact" placeholder="Contact" />
                      <ErrorMessage name="contact" component="div" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <div className="form-group">
                      <Field className="form-control" type="text" name="city" placeholder="City" />
                      <ErrorMessage name="city" component="div" className="error" />
                    </div>
                  </div>
                  <div className="col-12 mb-4">
                    <div className="form-group">
                      <Field className="form-control" as="textarea" name="message" rows="4" placeholder="Message" />
                      <ErrorMessage name="message" component="div" className="error" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mt-3">
                      <button type="submit"  disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send'}
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
