


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiFilter, FiAlertCircle, FiBellOff } from 'react-icons/fi';
import BottomNav from '../components/BottomNav';
import './Notifications.css';

const Notifications = () => {
  const navigate = useNavigate();
  const [hasNotifications, setHasNotifications] = useState(false); // SET TO TRUE TO SEE MOCKUP LIST

  return (
    <div className="notif-container">
      <header className="page-nav">
        <div className="back-group" onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} color="#1a1a1a" />
          <span className="nav-title">Notifications</span>
        </div>
        <FiFilter size={22} color="#3a6633" />
      </header>

      <main className="notif-content">
        {!hasNotifications ? (
          /* EMPTY STATE */
          <div className="empty-notif-state">
            <div className="icon-circle-large-mint">
              <FiBellOff size={40} color="#3a6633" />
            </div>
            <h3 className="green-text">No alerts yet</h3>
            <p className="black-desc">Connect your bracelet to start receiving real-time updates.</p>
          </div>
        ) : (
          /* MOCKUP LIST STATE */
          <div className="notif-list">
             <h4 className="section-tag">Today</h4>
             {/* List items go here (see previous code) */}
          </div>
        )}
      </main>
      <BottomNav />
    </div>
  );
};

export default Notifications;