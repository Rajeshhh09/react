// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CustomCake from './pages/CustomCake';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleLogin = (userData) => {
    setUser(userData);
    // In a real app, you'd store the token in localStorage
  };

  const handleLogout = () => {
    setUser(null);
    // In a real app, you'd remove the token from localStorage
  };

  const addToCart = (cake) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === cake.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === cake.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...cake, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <div className="App">
        <Header user={user} onLogout={handleLogout} cartItemsCount={cartItems.length} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} />} />
            <Route path="/custom-cake" element={<CustomCake />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account user={user} onLogin={handleLogin} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;