import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiChevronLeft, FiChevronRight, FiInfo } from 'react-icons/fi';
import BottomNav from '../components/BottomNav';
import './History.css';


const History = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(24); // Default to current day
  
  // Simple logic for a high-end calendar grid
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="history-container">
      {/* HEADER */}
      <header className="page-nav">
        <div className="back-group" onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} color="#1a1a1a" />
          <span className="nav-title">View History</span>
        </div>
        <FiCalendar size={22} color="#3a6633" />
      </header>

      <main className="history-content">
        {/* CALENDAR CARD */}
        <div className="calendar-card card-shadow">
          <div className="calendar-header">
            <FiChevronLeft className="cal-arrow" />
            <h3 className="month-label">July 2025</h3>
            <FiChevronRight className="cal-arrow" />
          </div>
          
          <div className="calendar-grid">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
              <span key={d} className="day-name">{d}</span>
            ))}
            {days.map(day => (
              <div 
                key={day} 
                className={`day-cell ${selectedDate === day ? 'active-day' : ''}`}
                onClick={() => setSelectedDate(day)}
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* LOGS SECTION */}
        <div className="history-logs">
          <h3 className="section-title-green">Activity for July {selectedDate}, 2025</h3>
          
          {/* EMPTY STATE LOGIC */}
          <div className="no-activity-card">
            <div className="icon-circle-mint">
              <FiInfo size={24} color="#3a6633" />
            </div>
            <h4 className="black-title">No activity here</h4>
            <p className="gray-subtext">
              Your bracelet is not connected yet. Once paired, your location history will appear here.
            </p>
            <button className="btn-green-outline" onClick={() => navigate('/Dashboard')}>
              Connect Bracelet
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default History;