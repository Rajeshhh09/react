// src/pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to the backend
    alert('Message sent! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you!</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div className="card" style={{ padding: '30px' }}>
              <h3>Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>

            <div>
              <div className="card" style={{ padding: '25px', marginBottom: '20px' }}>
                <h3>Get in Touch</h3>
                <div style={{ marginBottom: '20px' }}>
                  <h4>Address</h4>
                  <p>123 Bakery Street, Sweet City, SC 12345</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4>Phone</h4>
                  <p>(123) 456-7890</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4>Email</h4>
                  <p>info@adscakeshop.com</p>
                </div>

                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 8:00 PM</p>
                  <p>Sunday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="card" style={{ padding: '25px', marginBottom: '20px' }}>
                <h3>Follow Us</h3>
                <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                  <a href="#" style={{ display: 'flex', alignItems: 'center', padding: '10px 15px', backgroundColor: '#e0e0e0', borderRadius: '5px', textDecoration: 'none', color: '#333' }}>
                    Facebook
                  </a>
                  <a href="#" style={{ display: 'flex', alignItems: 'center', padding: '10px 15px', backgroundColor: '#e0e0e0', borderRadius: '5px', textDecoration: 'none', color: '#333' }}>
                    Instagram
                  </a>
                  <a href="#" style={{ display: 'flex', alignItems: 'center', padding: '10px 15px', backgroundColor: '#e0e0e0', borderRadius: '5px', textDecoration: 'none', color: '#333' }}>
                    Twitter
                  </a>
                </div>
              </div>

              <div className="card" style={{ padding: '25px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
                <p>Map would appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;