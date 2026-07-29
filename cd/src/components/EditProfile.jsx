import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCamera } from 'react-icons/fi';
import BottomNav from '../components/BottomNav';
import profileImg from '../assets/images/natureBg.jpg';
import './EditProfile.css';

const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="edit-profile-container">
      <header className="page-nav">
        <div className="back-group" onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} color="#1a1a1a" />
          <span className="nav-title">Edit Profile</span>
        </div>
        <button className="save-text-btn">Save</button>
      </header>

      <main className="edit-content">
        <div className="edit-avatar-section">
          <div className="avatar-wrapper-large">
            <img src={profileImg} alt="User" />
            <div className="cam-badge-small"><FiCamera color="white" size={14} /></div>
          </div>
        </div>

        <form className="edit-form">
          <div className="edit-input-group">
            <label className="label-black-bold">Full Name</label>
            <input type="text" defaultValue="Jojo" className="standard-input" />
          </div>

          <div className="edit-input-group">
            <label className="label-black-bold">Email</label>
            <input type="email" defaultValue="jojo@example.com" className="standard-input" />
          </div>

          <div className="edit-input-group">
            <label className="label-black-bold">Phone Number</label>
            <input type="tel" defaultValue="+234 801 234 5678" className="standard-input" />
          </div>

          <div className="change-pass-row">
            <span>Change Password</span>
            <FiArrowLeft style={{ transform: 'rotate(180deg)' }} color="#ccc" />
          </div>
        </form>
      </main>
      <BottomNav />
    </div>
  );
};

export default EditProfile;