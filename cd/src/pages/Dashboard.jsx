import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, FiX, FiMapPin, FiBell, FiClock, FiSmartphone, 
  FiUser, FiHelpCircle, FiFileText, FiLogOut, FiLink, FiZap, FiTarget, FiAlertTriangle 
} from 'react-icons/fi';

import './Dashboard.css';

// IMAGE PLACEHOLDERS
import braceImg from '../assets/images/braceletsingle.png'; 
import profileImg from '../assets/images/natureBg.jpg'; 

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Scroll Lock Logic (Keeps the page from moving when menu is open)
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isSidebarOpen]);

  // NAVIGATION HANDLER - Put your file names here
  const handleNav = (path) => {
    setSidebarOpen(false); // Close menu on click
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      
      {/* --- SIDEBAR DRAWER (CLOSED BY DEFAULT) --- */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              className="sidebar-overlay" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSidebarOpen(false)} 
            />
            <motion.aside 
              className="dashboard-sidebar"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="sidebar-header">
                <div className="logo-group">
                  <FiMapPin color="#a8e0a4" size={24} />
                  <span className="logo-white">FLE TRACKER</span>
                </div>
                <FiX className="close-sidebar-btn" onClick={() => setSidebarOpen(false)} />
              </div>

              <div className="sidebar-profile" onClick={() => handleNav('/Profile')}>
                <div className="profile-avatar">
                  <img src={profileImg} alt="User" />
                </div>
                <div className="profile-info">
                  <p>Welcome back,</p>
                  <h3>Jojo 👋</h3>
                  <p className="status-txt">Stay connected, stay secure.</p>
                </div>
              </div>

              <nav className="sidebar-nav">
                <SidebarItem Icon={FiMapPin} label="Home" active onClick={() => handleNav('/Dashboard')} />
                <SidebarItem Icon={FiTarget} label="Live Tracking" onClick={() => handleNav('/Tracking')} />
                <SidebarItem Icon={FiClock} label="View History" onClick={() => handleNav('/History')} />
                <SidebarItem Icon={FiBell} label="Notifications" badge="3" onClick={() => handleNav('/Notifications')} />
                <SidebarItem Icon={FiSmartphone} label="Devices" onClick={() => handleNav('/Devices')} />
                <SidebarItem Icon={FiUser} label="Profile" onClick={() => handleNav('/Profile')} />
                <SidebarItem Icon={FiHelpCircle} label="EditProfile" onClick={() => handleNav('/EditProfile')} />
                  <SidebarItem Icon={FiHelpCircle} label="Help & Support" onClick={() => handleNav('/HelpSupport')} />
                <SidebarItem Icon={FiFileText} label="Terms & Conditions" onClick={() => handleNav('/Terms')} />
              </nav>

              <div className="sidebar-logout" onClick={() => navigate('/Login')}>
                <FiLogOut /> <span>Logout</span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* --- MAIN PAGE AREA --- */}
      <main className="dashboard-main">
        
        {/* TOP NAVBAR */}
        <header className="dashboard-nav">
          <div className="nav-left">
            <div className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
              <FiMenu size={26} />
            </div>
            <div className="desktop-links">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#how">How It Works</a>
                <a href="#faq">FAQ</a>
            </div>
          </div>

          <div className="nav-right">
            <div className="nav-icon-box" onClick={() => navigate('/Notifications')}>
                <FiBell /><span className="red-dot"></span>
            </div>
            {/* Navigates to Profile on Click */}
            <div className="nav-user-mini" onClick={() => navigate('/Profile')}>
                <img src={profileImg} alt="user profile" />
            </div>
          </div>
        </header>

        {/* DASHBOARD BODY */}
        <div className="dashboard-content">
          <div className="page-header">
            <div className="titles">
                <h1 className="green-title">Good evening, Jojo! 👋</h1>
                <p className="black-subtitle">Here's what's happening with your tracker today.</p>
            </div>
            <div className="time-card">
                <FiClock /> <span>July 24, 2025 7:45 PM</span>
            </div>
          </div>

          {/* WIDGET GRID */}
          <div className="dashboard-grid">
            
            <div className="hero-card card-shadow">
                <div className="hero-card-text">
                    <h2 className="green-text">Connect Your Bracelet</h2>
                    <p className="black-text">Start tracking by connecting your FLE Tracker bracelet.</p>
                    <div className="hero-card-btns">
                        <button className="btn-green-fill" onClick={() => navigate('/Connect')}><FiLink /> Connect Bracelet</button>
                        <button className="btn-green-outline"><FiZap /> How to Connect</button>
                    </div>
                </div>
                <div className="hero-card-img">
                    <img src={braceImg} alt="Bracelet" />
                </div>
            </div>

            <div className="status-column">
                <div className="mini-card card-shadow">
                    <div className="mini-card-header">
                        <div className="icon-box-mint"><FiLink /></div>
                        <div>
                            <h4 className="green-text">Connection Status</h4>
                            <p className="status-alert">Not Connected</p>
                        </div>
                    </div>
                    <p className="black-desc">Please connect your bracelet to start tracking.</p>
                </div>

                <div className="mini-card card-shadow">
                    <div className="mini-card-header">
                        <div className="icon-box-mint"><FiZap /></div>
                        <div>
                            <h4 className="green-text">Battery Status</h4>
                            <h3 className="big-val-green">--%</h3>
                        </div>
                    </div>
                    <p className="black-desc">Unknown. Connect device to see battery level.</p>
                </div>
            </div>

            <div className="map-card card-shadow">
                <div className="card-top-row">
                    <h3 className="green-text">Live Location</h3>
                    <span className="map-link" onClick={() => navigate('/Tracking')}>View Full Map</span>
                </div>
                <div className="map-visual" onClick={() => navigate('/Tracking')}>
                    <div className="map-pin-anim">
                        <FiMapPin size={32} color="#3a6633" />
                    </div>
                </div>
                <div className="map-footer">
                    <p className="black-text"><strong>No Location Data</strong><br/>Connect your bracelet to see live location</p>
                    <button className="btn-secondary-green" onClick={() => navigate('/Tracking')}><FiTarget /> Start Live Tracking</button>
                </div>
            </div>

            <div className="update-card card-shadow">
                <h3 className="green-text">Last Update</h3>
                <div className="update-center">
                    <div className="icon-box-mint-large"><FiBell /></div>
                    <h2 className="green-text">--</h2>
                    <p className="black-desc">No alerts yet. Connect your bracelet to receive updates.</p>
                </div>
            </div>

          </div>

          {/* QUICK ACTIONS */}
          <div className="actions-section">
            <h3 className="green-text">Quick Actions</h3>
            <div className="actions-row">
                <ActionItem Icon={FiLink} title="Connect Bracelet" sub="Pair your device" onClick={() => navigate('/Connect')} />
                <ActionItem Icon={FiTarget} title="Live Tracking" sub="Track in real-time" onClick={() => navigate('/Devices')} />
                <ActionItem Icon={FiZap} title="Set Safe Zone" sub="Add geofence" onClick={() => navigate('/Geofence')} />
                <ActionItem Icon={FiAlertTriangle} title="SOS Alert" sub="Emergency alert" danger onClick={() => navigate('/SOS')} />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

// Sub-components
const SidebarItem = ({ Icon, label, active, badge, onClick }) => (
  <div className={`side-nav-item ${active ? 'active' : ''}`} onClick={onClick}>
    <Icon size={20} />
    <span>{label}</span>
    {badge && <span className="side-badge">{badge}</span>}
  </div>
);

const ActionItem = ({ Icon, title, sub, danger, onClick }) => (
  <div className="action-item-card card-shadow" onClick={onClick}>
    <div className={`action-icon-circle ${danger ? 'red-bg' : 'green-bg'}`}>
        <Icon color={danger ? '#ff4d4d' : '#3a6633'} size={22} />
    </div>
    <div className="action-info">
        <h5 className="green-text">{title}</h5>
        <p className="black-text">{sub}</p>
    </div>
  </div>
);

export default Dashboard;