// src/pages/Shop.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFlavor, setSelectedFlavor] = useState('all');
  // State for notification
  const [notification, setNotification] = useState(null);

  // Mock cake data
  const allCakes = [
    { id: 1, name: "Chocolate Fudge Cake", category: "birthday", flavor: "chocolate", price: 1300 },
    { id: 2, name: "Strawberry Cream Cake", category: "birthday", flavor: "strawberry", price: 1500 },
    { id: 3, name: "Red Velvet Cake", category: "wedding", flavor: "red-velvet", price: 1600 },
    { id: 4, name: "Lemon Drizzle Cake", category: "seasonal", flavor: "lemon", price: 1800 },
    { id: 5, name: "Vanilla Dream Cake", category: "birthday", flavor: "vanilla", price: 2000 },
    { id: 6, name: "Carrot Cake", category: "seasonal", flavor: "carrot", price: 2100 },
    { id: 7, name: "Tiramisu Cake", category: "wedding", flavor: "tiramisu", price: 1100 },
    { id: 8, name: "Chocolate Cupcakes", category: "cupcakes", flavor: "chocolate", price: 900}
  ];

  const categories = [
    { id: 'all', name: 'All Cakes' },
    { id: 'birthday', name: 'Birthday Cakes' },
    { id: 'wedding', name: 'Wedding Cakes' },
    { id: 'cupcakes', name: 'Cupcakes' },
    { id: 'seasonal', name: 'Seasonal Specials' }
  ];

  const flavors = [
    { id: 'all', name: 'All Flavors' },
    { id: 'chocolate', name: 'Chocolate' },
    { id: 'vanilla', name: 'Vanilla' },
    { id: 'strawberry', name: 'Strawberry' },
    { id: 'red-velvet', name: 'Red Velvet' },
    { id: 'lemon', name: 'Lemon' },
    { id: 'carrot', name: 'Carrot' },
    { id: 'tiramisu', name: 'Tiramisu' }
  ];

  // Filter cakes based on selections
  const filteredCakes = allCakes.filter(cake => {
    const categoryMatch = selectedCategory === 'all' || cake.category === selectedCategory;
    const flavorMatch = selectedFlavor === 'all' || cake.flavor === selectedFlavor;
    return categoryMatch && flavorMatch;
  });

  // Function to handle adding to cart with notification
  const handleAddToCart = (cake) => {
    addToCart(cake);
    // Set notification message
    setNotification(`Added ${cake.name} to cart!`);
    // Clear notification after 2 seconds
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  return (
    <div>
      {/* Notification Banner */}
      {notification && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#4CAF50', // Green
          color: 'white',
          padding: '15px 20px',
          borderRadius: '5px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          zIndex: 1000,
          textAlign: 'center'
        }}>
          {notification}
        </div>
      )}

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Cakes</h2>
            <p>Find the perfect cake for your special occasion</p>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '30px', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <div>
              <label>Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-control"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Flavor:</label>
              <select
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.target.value)}
                className="form-control"
              >
                {flavors.map(flavor => (
                  <option key={flavor.id} value={flavor.id}>
                    {flavor.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Cake Grid */}
          <div className="grid grid-3">
            {filteredCakes.length > 0 ? (
              filteredCakes.map(cake => (
                <div className="card" key={cake.id}>
                  <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', fontSize: '4rem' }}>
                    🍰
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3>{cake.name}</h3>
                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#5d4037' }}>₹{cake.price.toFixed(2)}</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                      <Link to={`/shop/${cake.id}`} className="btn btn-secondary">View Details</Link>
                      <button
                        className="btn"
                        onClick={() => handleAddToCart(cake)} // Use the new handler
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No cakes match your filters. Try adjusting your selections.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;