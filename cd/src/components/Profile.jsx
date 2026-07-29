import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiArrowLeft, 
  FiCamera, 
  FiUser, 
  FiShield, 
  FiLock, 
  FiSettings, 
  FiBell, 
  FiChevronRight, 
  FiMapPin, 
  FiMail, 
  FiPhone 
} from 'react-icons/fi';
import BottomNav from '../components/BottomNav';
import './Profile.css';


// PLACEHOLDER IMAGE - Ensure this path matches your assets folder
import profileImg from '../assets/images/natureBg.jpg'; 
import EditProfile from './EditProfile';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      {/* --- HEADER NAVBAR --- */}
      <header className="profile-nav">
        <div className="back-btn-group" onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} color="#1a1a1a" />
          <span className="nav-title">Profile</span>
        </div>
        <div className="edit-text-btn" onClick={() => navigate('/EditProfile')}>Edit</div>
      </header>

      <main className="profile-content">
        
        {/* --- USER HERO SECTION --- */}
        <section className="profile-hero">
          <div className="avatar-container">
            <img src={profileImg} alt="User Profile" className="profile-avatar-large" />
            <div className="camera-badge">
              <FiCamera color="white" size={16} />
            </div>
          </div>
          <h2 className="user-display-name">Jojo</h2>
          <div className="user-contact-info">
             <p className="contact-text">jojo@example.com</p>
             <p className="contact-text">+234 801 234 5678</p>
          </div>
        </section>

        {/* --- SETTINGS CATEGORIES --- */}
        <div className="settings-list">
          
          {/* GROUP 1: PERSONAL */}
          <div className="settings-group">
            <ProfileLink Icon={FiUser} label="Personal Information" />
            <ProfileLink Icon={FiShield} label="Emergency Contacts" />
            <ProfileLink onClick={() => navigate(EditProfile)} Icon={FiLock} label="Change Password" />
          </div>

          {/* GROUP 2: APP PREFERENCES */}
          <div className="settings-group">
            <ProfileLink onClick={() => navigate(EditProfile)} Icon={FiSettings} label="App Settings" />
            <ProfileLink Icon={FiBell} label="Notification Settings" />
          </div>

          {/* GROUP 3: MAP DATA */}
          <div className="settings-group">
             <ProfileLink Icon={FiMapPin} label="Manage Safe Zones" />
          </div>

        </div>

        {/* --- DANGER ZONE --- */}
        <div className="danger-zone">
            <button className="delete-account-btn">Delete Account</button>
        </div>
      </main>
    </div>
  );
};

/**
 * Reusable Sub-component for individual list items
 * Keeps the code clean and maintains high-end styling
 */
const ProfileLink = ({ Icon, label }) => (
  <div className="profile-list-item">
    <div className="item-left">
      <div className="icon-wrapper-green">
        <Icon size={20} />
      </div>
      <span className="item-label-black">{label}</span>
    </div>
    <FiChevronRight className="chevron-gray" size={20} />
  </div>
);

export default Profile;