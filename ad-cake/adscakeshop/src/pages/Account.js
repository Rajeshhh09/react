// src/pages/Account.js
import React, { useState } from 'react';

const Account = ({ user, onLogin }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, this would authenticate with the backend
    onLogin({
      name: 'John Doe',
      email: loginData.email
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // In a real app, this would register with the backend
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    onLogin({
      name: registerData.name,
      email: registerData.email
    });
  };

  if (user) {
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="section-title">
              <h2>My Account</h2>
              <p>Welcome back, {user.name}!</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '30px' }}>
              <div className="card" style={{ padding: '25px' }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 15px' }}>
                    👤
                  </div>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </div>

                <nav>
                  <button
                    className={`btn ${activeTab === 'profile' ? 'btn-secondary' : ''}`}
                    style={{ width: '100%', marginBottom: '10px', textAlign: 'left' }}
                    onClick={() => setActiveTab('profile')}
                  >
                    Profile
                  </button>
                  <button
                    className={`btn ${activeTab === 'orders' ? 'btn-secondary' : ''}`}
                    style={{ width: '100%', marginBottom: '10px', textAlign: 'left' }}
                    onClick={() => setActiveTab('orders')}
                  >
                    Order History
                  </button>
                  <button
                    className={`btn ${activeTab === 'wishlist' ? 'btn-secondary' : ''}`}
                    style={{ width: '100%', marginBottom: '10px', textAlign: 'left' }}
                    onClick={() => setActiveTab('wishlist')}
                  >
                    Wishlist
                  </button>
                  <button
                    className={`btn ${activeTab === 'addresses' ? 'btn-secondary' : ''}`}
                    style={{ width: '100%', marginBottom: '10px', textAlign: 'left' }}
                    onClick={() => setActiveTab('addresses')}
                  >
                    Saved Addresses
                  </button>
                </nav>
              </div>

              <div>
                {activeTab === 'profile' && (
                  <div className="card" style={{ padding: '30px' }}>
                    <h3>Profile Information</h3>
                    <div style={{ marginBottom: '20px' }}>
                      <p><strong>Name:</strong> {user.name}</p>
                      <p><strong>Email:</strong> {user.email}</p>
                      <p><strong>Member Since:</strong> January 15, 2023</p>
                    </div>
                    <button className="btn">Edit Profile</button>
                  </div>
                )}

                {activeTab === 'orders' && (
                  <div className="card" style={{ padding: '30px' }}>
                    <h3>Order History</h3>
                    <p>You haven't placed any orders yet.</p>
                  </div>
                )}

                {activeTab === 'wishlist' && (
                  <div className="card" style={{ padding: '30px' }}>
                    <h3>My Wishlist</h3>
                    <p>You haven't added any items to your wishlist yet.</p>
                  </div>
                )}

                {activeTab === 'addresses' && (
                  <div className="card" style={{ padding: '30px' }}>
                    <h3>Saved Addresses</h3>
                    <p>You haven't saved any addresses yet.</p>
                    <button className="btn">Add New Address</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>My Account</h2>
            <p>Sign in to access your account</p>
          </div>

          <div style={{ display: 'flex', borderBottom: '1px solid #ddd', marginBottom: '30px' }}>
            <button
              className={`btn ${activeTab === 'login' ? 'btn-secondary' : ''}`}
              style={{ marginRight: '10px' }}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`btn ${activeTab === 'register' ? 'btn-secondary' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </button>
          </div>

          <div>
            {activeTab === 'login' ? (
              <div className="card" style={{ padding: '30px', maxWidth: '500px', margin: '0 auto' }}>
                <h3>Login to Your Account</h3>
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      className="form-control"
                      required
                    />
                  </div>

                  <button type="submit" className="btn" style={{ width: '100%' }}>Login</button>
                </form>
              </div>
            ) : (
              <div className="card" style={{ padding: '30px', maxWidth: '500px', margin: '0 auto' }}>
                <h3>Create an Account</h3>
                <form onSubmit={handleRegister}>
                  <div className="form-group">
                    <label htmlFor="reg-name">Full Name</label>
                    <input
                      type="text"
                      id="reg-name"
                      value={registerData.name}
                      onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="reg-email">Email Address</label>
                    <input
                      type="email"
                      id="reg-email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="reg-password">Password</label>
                    <input
                      type="password"
                      id="reg-password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="reg-confirm">Confirm Password</label>
                    <input
                      type="password"
                      id="reg-confirm"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                      className="form-control"
                      required
                    />
                  </div>

                  <button type="submit" className="btn" style={{ width: '100%' }}>Register</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;