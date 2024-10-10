import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from 'emailjs-com';

const ContactFormComponent = () => {
  // Define the Zod schema
  const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    subject: z.string().min(1, 'Subject is required'),
    message: z.string().min(5, 'Message should be at least 5 characters'),
  });

  // Use React Hook Form with Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [status, setStatus] = useState('');

  // Function to send email
  const sendEmail = (data) => {
    const emailData = {
      to_name: 'Abdul Wassay', // Recipient (you) - Hardcoded or dynamic
      from_name: data.name, // Sender (the person filling the form)
      message: data.message, // Message content
      from_email: data.email, // Sender's email
      subject: data.subject, // Subject of the email
      to_email: 'info@compumaxllc.com', // The email where you want to receive messages
    };

    emailjs
      .send(
        'service_4ek7mpv',
        'template_teb9pt5',
        emailData,
        'gi_7zJBvVewbpFThN'
      )
      .then(
        (response) => {
          setStatus('Email sent successfully');
        },
        (error) => {
          setStatus('Failed to send email');
          console.log('FAILED...', error);
        }
      );
  };

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Form data:', data);
    sendEmail(data);
  };

  return (
    <section className="service_section section_space xb-hidden pt-5 pb-5">
      <div className="container">
        <div className="heading_block text-center">
          <h2 className="heading_text mb-0">Contact Form</h2>
        </div>
        <div className="row justify-content-center">
          {/* Form Column */}
          <div className="col-lg-6 col-md-12">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="contact-form p-4 rounded shadow bg-white"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  {...register('name')}
                />
                {errors.name && (
                  <p className="text-danger">{errors.name.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter the subject"
                  {...register('subject')}
                />
                {errors.subject && (
                  <p className="text-danger">{errors.subject.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message here"
                  {...register('message')}
                ></textarea>
                {errors.message && (
                  <p className="text-danger">{errors.message.message}</p>
                )}
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-5">
                  <span className="btn_label" data-text="Submit Form">
                    Submit Form
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </button>
                {status && <p className="mt-3 text-success">{status}</p>}
              </div>
            </form>
          </div>

          {/* Map Column */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
            <div className="map-container shadow rounded bg-white p-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.6393165217473!2d-73.8608286248367!3d41.57705018421076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd381394d7e207%3A0x283655de4ef5d2d8!2s341%20All%20Angels%20Hill%20Rd%2C%20Wappingers%20Falls%2C%20NY%2012590%2C%20USA!5e0!3m2!1sen!2sin!4v1728576838594!5m2!1sen!2sin"
                width="100%"
                height="535"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormComponent;
