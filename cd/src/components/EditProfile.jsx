import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCamera } from 'react-icons/fi';
import BottomNav from '../components/BottomNav';
import profileImg from '../assets/images/natureBg.jpg';
import { api } from '../services/api';
import './EditProfile.css';

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    profile_picture: null
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api.getProfile()
      .then(profile => {
        if (profile) {
          setFormData({
            name: profile.name || "",
            email: profile.email || "",
            phone_number: profile.phone_number || "",
            profile_picture: profile.profile_picture || null
          });
        }
        setLoading(false);
      })
      .catch(err => {
        console.warn("Backend API is offline or parent is logged out. Displaying demo profile details.", err);
        // Fallback to mock data so preview still works
        setFormData({
          name: "Jojo",
          email: "jojo@example.com",
          phone_number: "+234 801 234 5678",
          profile_picture: null
        });
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      await api.updateProfile({
        name: formData.name,
        phone_number: formData.phone_number
      });
      alert("Profile updated successfully!");
      navigate('/Profile');
    } catch (error) {
      alert(`Failed to save changes: ${error.message}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="edit-profile-container" style={{ padding: "40px", textAlign: "center" }}>
        <p>Loading profile details...</p>
      </div>
    );
  }

  return (
    <div className="edit-profile-container">
      <header className="page-nav">
        <div className="back-group" onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} color="#1a1a1a" />
          <span className="nav-title">Edit Profile</span>
        </div>
        <button 
          className="save-text-btn" 
          onClick={handleSave} 
          disabled={saving}
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </header>

      <main className="edit-content">
        <div className="edit-avatar-section">
          <div className="avatar-wrapper-large">
            <img src={formData.profile_picture || profileImg} alt="User Avatar" />
            <div className="cam-badge-small"><FiCamera color="white" size={14} /></div>
          </div>
        </div>

        <form className="edit-form" onSubmit={handleSave}>
          <div className="edit-input-group">
            <label className="label-black-bold">Full Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name} 
              onChange={handleChange}
              className="standard-input" 
              required
            />
          </div>

          <div className="edit-input-group">
            <label className="label-black-bold">Email (Read Only)</label>
            <input 
              type="email" 
              name="email"
              value={formData.email} 
              className="standard-input" 
              disabled // Google account email is immutable
              style={{ backgroundColor: "#f5f5f5", cursor: "not-allowed" }}
            />
          </div>

          <div className="edit-input-group">
            <label className="label-black-bold">Phone Number</label>
            <input 
              type="tel" 
              name="phone_number"
              value={formData.phone_number} 
              onChange={handleChange}
              className="standard-input" 
            />
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