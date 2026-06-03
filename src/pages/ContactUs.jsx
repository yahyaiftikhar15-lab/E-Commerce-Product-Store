import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck, Clock } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container page-content">
      <div className="page-header">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">Have questions or feedback? We would love to hear from you. Our team is here to help.</p>
      </div>

      <div className="contact-layout">
        {/* Contact Info Sidebar */}
        <div className="contact-info-panel">
          <div className="contact-card info-card">
            <h2 className="contact-section-title">Contact Information</h2>
            <p className="contact-section-desc">Reach out to us directly through any of the channels below.</p>
            
            <div className="contact-details">
              <a href="mailto:yahyaiftikhar15@gmail.com" className="contact-item-link">
                <div className="contact-icon-wrapper">
                  <Mail className="contact-page-icon" />
                </div>
                <div className="contact-item-text">
                  <span className="contact-label">Email Us</span>
                  <span className="contact-value">yahyaiftikhar15@gmail.com</span>
                </div>
              </a>

              <a href="tel:+923405454481" className="contact-item-link">
                <div className="contact-icon-wrapper">
                  <Phone className="contact-page-icon" />
                </div>
                <div className="contact-item-text">
                  <span className="contact-label">Call Us</span>
                  <span className="contact-value">+92 340 5454481</span>
                </div>
              </a>

              <div className="contact-item-link static-item">
                <div className="contact-icon-wrapper">
                  <MapPin className="contact-page-icon" />
                </div>
                <div className="contact-item-text">
                  <span className="contact-label">Our Address</span>
                  <span className="contact-value">LuxeStore HQ, Suite 404, Silicon Heights, Islamabad, Pakistan</span>
                </div>
              </div>
            </div>

            <hr className="contact-divider" />

            <div className="support-features">
              <div className="support-feature-item">
                <Clock className="support-icon" />
                <div>
                  <h4>Response Time</h4>
                  <p>We typically respond within 24 business hours.</p>
                </div>
              </div>
              <div className="support-feature-item">
                <ShieldCheck className="support-icon" />
                <div>
                  <h4>Secure Support</h4>
                  <p>Your personal information is always protected.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-panel">
          <div className="contact-card form-card">
            {submitted ? (
              <div className="contact-success-state">
                <div className="contact-success-icon-wrapper">
                  <Send className="success-icon" />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting LuxeStore. One of our support representatives will get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-primary mt-4">
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="contact-section-title">Send a Message</h2>
                <p className="contact-section-desc">Fill out the form below, and we will get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows="5"
                      className="form-textarea"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block submit-btn">
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
