import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const { isAuthenticated, user, logout } = useAuth();

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    logout();
  };

  const formatLoginTime = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleString();
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="header-content">
          <h1>Welcome, {user?.username}!</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
      
      <div className="home-content">
        <div className="welcome-card">
          <div className="card-icon">
            🎉
          </div>
          <h2>Successfully Authenticated!</h2>
          <p>You have successfully logged into your account.</p>
          
          <div className="user-info">
            <div className="info-item">
              <span className="info-label">Username:</span>
              <span className="info-value">{user?.username}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Login Time:</span>
              <span className="info-value">{formatLoginTime(user?.loginTime)}</span>
            </div>
          </div>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3>Profile</h3>
            <p>Manage your account settings and personal information</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Dashboard</h3>
            <p>View your activity and important metrics</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>Settings</h3>
            <p>Customize your experience and preferences</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📞</div>
            <h3>Support</h3>
            <p>Get help and contact our support team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
