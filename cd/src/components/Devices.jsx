import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiPlus, FiLink, FiZap, FiClock, FiSettings } from 'react-icons/fi';
import BottomNav from '../components/BottomNav';
import braceImg from '../assets/images/braceletsingle.png';
import './Devices.css';

const Devices = () => {
  const navigate = useNavigate();

  return (
    <div className="devices-container">
      <header className="page-nav">
        <div className="back-group" onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} color="#128555" />
          <span className="nav-title">Devices</span>
        </div>
        <FiPlus size={26} color="#3a6633" style={{ cursor: 'pointer' }} />
      </header>

      <main className="devices-content">
        <div className="device-card card-shadow">
          <div className="device-main">
            <img src={braceImg} alt="Bracelet" className="device-img-small" />
            <div className="device-details">
              <h3 className="black-title">FLE Bracelet</h3>
              <p className="id-text">ID: FLE12345678</p>
              <span className="status-red">Not Connected</span>
            </div>
            <button className="connect-btn-small">Connect</button>
          </div>

          <div className="device-stats-grid">
            <div className="stat-unit"><FiZap color="#3a6633" /> <span>Battery: --%</span></div>
            <div className="stat-unit"><FiClock color="#3a6633" /> <span>Last Seen: --</span></div>
            <div className="stat-unit"><FiSettings color="#3a6633" /> <span>Firmware: --</span></div>
          </div>

          <button className="device-settings-btn"><FiSettings /> Device Settings</button>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Devices;