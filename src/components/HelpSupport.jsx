import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiMessageCircle, FiChevronRight } from 'react-icons/fi';
import BottomNav from '../components/BottomNav';
import './HelpSupport.css';

const HelpSupport = () => {
  const navigate = useNavigate();

  return (
    <div className="help-container">
      <header className="page-nav">
        <div className="back-group" onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} color="#1a1a1a" />
          <span className="nav-title">Help & Support</span>
        </div>
      </header>

      <main className="help-content">
        <div className="help-hero card-shadow">
          <div className="chat-icon-box"><FiMessageCircle size={35} color="#3a6633" /></div>
          <h2 className="green-text">We're here to help!</h2>
          <p className="black-desc">Chat with our customer support for assistance.</p>
          <button className="start-chat-btn">Start Chat</button>
        </div>

        <div className="faq-section">
          <h3 className="section-title-black">FAQs</h3>
          <div className="faq-list">
            <FAQItem label="Common questions & answers" />
            <FAQItem label="Troubleshooting connection" />
            <FAQItem label="Safe zone setup" />
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

const FAQItem = ({ label }) => (
  <div className="faq-item">
    <span className="black-text-bold">{label}</span>
    <FiChevronRight color="#ccc" />
  </div>
);

export default HelpSupport;