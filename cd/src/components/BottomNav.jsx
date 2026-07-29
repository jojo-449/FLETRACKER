import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiUser } from 'react-icons/fi';
import './BottomNav.css';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bottom-navbar">
      <div className="bottom-nav-item" onClick={() => navigate('/Dashboard')}>
        <FiHome size={24} color={location.pathname === '/Dashboard' ? '#3a6633' : '#999'} />
        <span className={location.pathname === '/Dashboard' ? 'active-text' : ''}>Home</span>
      </div>
      <div className="bottom-nav-item" onClick={() => navigate('/Profile')}>
        <FiUser size={24} color={location.pathname === '/Profile' ? '#3a6633' : '#999'} />
        <span className={location.pathname === '/Profile' ? 'active-text' : ''}>Profile</span>
      </div>
    </nav>
  );
};

export default BottomNav;