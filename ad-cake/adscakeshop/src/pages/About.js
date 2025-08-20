// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div>
      <section className="hero" style={{ height: '40vh' }}>
        <div className="hero-content">
          <h1>Our Story</h1>
          <p>Since 2010, AD's Cake Shop has been creating delicious memories</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <h2>Founded with Passion</h2>
              <p>AD's Cake Shop was founded by Anna and David, two passionate bakers who shared a dream of creating exceptional cakes that bring joy to every celebration. What started as a small home bakery has grown into a beloved local business known for our creativity and quality.</p>

              <p>Our commitment to using only the finest ingredients and traditional baking techniques ensures that every cake we create is not only beautiful but also delicious. We believe that a cake is more than just dessert—it's the centerpiece of celebrations and a symbol of love and care.</p>

              <h3 style={{ marginTop: '30px', color: '#8d6e63' }}>Our Mission</h3>
              <p>To create extraordinary cakes that make every occasion special, using the highest quality ingredients and exceptional craftsmanship.</p>

              <h3 style={{ marginTop: '30px', color: '#8d6e63' }}>Our Values</h3>
              <ul>
                <li><strong>Quality:</strong> We never compromise on the quality of our ingredients or our craftsmanship.</li>
                <li><strong>Creativity:</strong> Every cake is a unique creation designed to exceed expectations.</li>
                <li><strong>Customer Focus:</strong> Your satisfaction is our top priority.</li>
                <li><strong>Integrity:</strong> We conduct business with honesty and transparency.</li>
                <li><strong>Community:</strong> We are proud to be part of and give back to our local community.</li>
              </ul>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '6rem', marginBottom: '15px' }}>👩‍🍳👨‍🍳</div>
              <p style={{ fontStyle: 'italic', color: '#777' }}>Anna and David, founders of AD's Cake Shop</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f5e9e0' }}>
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            <p>The talented bakers behind our delicious creations</p>
          </div>

          <div className="grid grid-3">
            <div className="card" style={{ textAlign: 'center', padding: '30px' }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>👩‍🍳</div>
              <h3>Anna Davis</h3>
              <p style={{ color: '#8d6e63', fontWeight: '500', marginBottom: '15px' }}>Head Pastry Chef</p>
              <p>With over 15 years of experience, Anna specializes in intricate cake designs and innovative flavor combinations.</p>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: '30px' }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>👨‍🍳</div>
              <h3>David Smith</h3>
              <p style={{ color: '#8d6e63', fontWeight: '500', marginBottom: '15px' }}>Master Baker</p>
              <p>David's expertise in traditional baking techniques ensures our cakes have the perfect texture and taste.</p>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: '30px' }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>👩‍🍳</div>
              <h3>Sarah Johnson</h3>
              <p style={{ color: '#8d6e63', fontWeight: '500', marginBottom: '15px' }}>Decorator Specialist</p>
              <p>Sarah's artistic skills bring our cakes to life with beautiful fondant work and intricate details.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;