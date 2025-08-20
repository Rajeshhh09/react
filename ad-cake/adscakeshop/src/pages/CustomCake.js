// src/pages/CustomCake.js
import React, { useState } from 'react';

const CustomCake = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    flavor: '',
    size: '',
    designDescription: '',
    specialRequests: ''
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
    alert('Custom cake order submitted! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: '',
      flavor: '',
      size: '',
      designDescription: '',
      specialRequests: ''
    });
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Custom Cake Order</h2>
            <p>Create your perfect cake for any special occasion</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
            <div className="card" style={{ padding: '30px' }}>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
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
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="eventDate">Event Date *</label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label htmlFor="eventType">Event Type *</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select Event Type</option>
                      <option value="birthday">Birthday</option>
                      <option value="wedding">Wedding</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="flavor">Preferred Flavor *</label>
                    <select
                      id="flavor"
                      name="flavor"
                      value={formData.flavor}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select Flavor</option>
                      <option value="chocolate">Chocolate</option>
                      <option value="vanilla">Vanilla</option>
                      <option value="red-velvet">Red Velvet</option>
                      <option value="lemon">Lemon</option>
                      <option value="strawberry">Strawberry</option>
                      <option value="carrot">Carrot</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label htmlFor="size">Cake Size *</label>
                    <select
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select Size</option>
                      <option value="6-inch">6-inch (Serves 6-8)</option>
                      <option value="8-inch">8-inch (Serves 10-12)</option>
                      <option value="10-inch">10-inch (Serves 15-20)</option>
                      <option value="12-inch">12-inch (Serves 25-30)</option>
                      <option value="tiered">Tiered Cake</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="designDescription">Design Description *</label>
                    <textarea
                      id="designDescription"
                      name="designDescription"
                      value={formData.designDescription}
                      onChange={handleChange}
                      className="form-control"
                      rows="3"
                      placeholder="Describe your ideal cake design..."
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="specialRequests">Special Requests</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    className="form-control"
                    rows="3"
                    placeholder="Any special dietary requirements or additional requests..."
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Upload Design Reference (Optional)</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                  />
                </div>

                <button type="submit" className="btn" style={{ width: '100%' }}>Submit Custom Cake Request</button>
              </form>
            </div>

            <div>
              <div className="card" style={{ padding: '25px', marginBottom: '20px' }}>
                <h3>Custom Cake Process</h3>
                <ol>
                  <li>Fill out the form with your cake requirements</li>
                  <li>Our designer will contact you within 24 hours</li>
                  <li>Review design sketches and make adjustments</li>
                  <li>Confirm final design and pricing</li>
                  <li>Pay deposit to secure your date</li>
                  <li>We create your custom masterpiece!</li>
                </ol>
              </div>

              <div className="card" style={{ padding: '25px' }}>
                <h3>Important Notes</h3>
                <ul>
                  <li>Custom cake orders require at least 7 days notice</li>
                  <li>Deposits are non-refundable</li>
                  <li>Prices start at $35 for basic custom cakes</li>
                  <li>Complex designs may have additional charges</li>
                  <li>We can accommodate most dietary restrictions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomCake;