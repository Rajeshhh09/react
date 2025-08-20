// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = ({ user, onLogout, cartItemsCount }) => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <h1><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>AD's Cake Shop</Link></h1>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/custom-cake">Custom Cakes</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />
            {cartItemsCount > 0 && (
              <span className="cart-count">{cartItemsCount}</span>
            )}
          </Link>
          {user ? (
            <>
              <span>Welcome, {user.name}</span>
              <button className="btn btn-secondary" onClick={onLogout}>Logout</button>
            </>
          ) : (
            <Link to="/account" className="btn">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;