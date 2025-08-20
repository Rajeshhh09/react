// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Mock data for featured cakes
  const featuredCakes = [
    { id: 1, name: "Chocolate Fudge Cake", price: 1300 },
    { id: 2, name: "Strawberry Cream Cake", price: 1350 },
    { id: 3, name: "Red Velvet Cake", price: 2400 },
    { id: 4, name: "Lemon Drizzle Cake", price: 1550 }
  ];

  // Mock testimonials
  const testimonials = [
    { id: 1, name: "Drashti hirani", text: "cake bhot accha tha quality and all was top notch maza aavi gayu!!!" },
    { id: 2, name: "Aditi", text: "i recommend to all cb patel ki agar cake lena hai toh ad cake se hi lo" },
    { id: 3, name: "Rajesh", text: "Their custom cakes are works of art. Will definitely order again!" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Delicious Cakes for Every Occasion</h1>
          <p>Handcrafted with love using the finest ingredients</p>
          <Link to="/shop" className="btn">Order Now</Link>
        </div>
      </section>

      {/* Featured Cakes */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Featured Cakes</h2>
            <p>Our most popular selections</p>
          </div>
          <div className="grid grid-4">
            {featuredCakes.map(cake => (
              <div className="card" key={cake.id} style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🍰</div>
                <h3>{cake.name}</h3>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#5d4037' }}>₹{cake.price.toFixed(2)}</p>
                <Link to={`/shop`} className="btn">View Details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ backgroundColor: '#f5e9e0' }}>
        <div className="container">
          <div className="section-title">
            <h2>What Our Customers Say</h2>
          </div>
          <div className="grid grid-3">
            {testimonials.map(testimonial => (
              <div className="card" key={testimonial.id} style={{ padding: '25px' }}>
                <p>"{testimonial.text}"</p>
                <p style={{ marginTop: '15px', fontWeight: 'bold' }}>- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Shop by Category</h2>
          </div>
          <div className="grid grid-4">
            <div className="card" style={{ textAlign: 'center', padding: '30px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🎂</div>
              <h3>Birthday Cakes</h3>
              <Link to="/shop?category=birthday" className="btn btn-secondary">Explore</Link>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '30px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>💍</div>
              <h3>Wedding Cakes</h3>
              <Link to="/shop?category=wedding" className="btn btn-secondary">Explore</Link>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '30px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🧁</div>
              <h3>Cupcakes</h3>
              <Link to="/shop?category=cupcakes" className="btn btn-secondary">Explore</Link>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '30px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🎄</div>
              <h3>Seasonal Specials</h3>
              <Link to="/shop?category=seasonal" className="btn btn-secondary">Explore</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section" style={{ backgroundColor: '#e6ccb2' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-title">
            <h2>Join Our Newsletter</h2>
            <p>Subscribe to get special offers, free cake recipes, and updates</p>
          </div>
          <form style={{ display: 'flex', maxWidth: '500px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="Your email address"
              className="form-control"
              style={{ flex: 1, marginRight: '10px' }}
              required
            />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;